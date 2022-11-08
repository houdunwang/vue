<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;
use Log;
use Yansongda\Pay\Pay;
use App\Services\OrderService;
use Endroid\QrCode\Builder\Builder;

class WepayController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth:sanctum'])->only('createOrder');

        $config = config('pay');
        $config['wechat']['default']['notify_url'] = url('/api/wepay/notify');
        Pay::config($config);
    }

    //创建定单
    public function createOrder()
    {
        $order = app(OrderService::class)->createOrder('wechat');
        return $this->success('', $order);
    }

    //发起支付
    public function pay(Order $order)
    {
        $order = [
            'out_trade_no' => $order->sn,
            'description' => '后盾人',
            'amount' => [
                'total' =>  config('hd.subscribe.price') * 100,
            ],
        ];

        $result = Pay::wechat()->scan($order);
        //生成支付二维码
        return Builder::create()->data($result['code_url'])->build()->getDataUri();
    }

    //公众号支付
    public function mp()
    {
        $order = app(OrderService::class)->createOrder('wechat');
        $order = [
            'out_trade_no' => $order->sn,
            'description' => '后盾人',
            'amount' => [
                'total' =>  config('hd.subscribe.price') * 100,
            ],
            'payer' => [
                'openid' => \Auth::user()->openid
            ]
        ];
        return Pay::wechat()->mp($order);
    }

    //异步通知
    public function notifyUrl()
    {
        $pay = Pay::wechat();
        $result = $pay->callback();
        //修改订单状态，更改会员周期
        $ciphertext = $result['resource']['ciphertext'];

        if ($ciphertext['trade_state'] == 'SUCCESS') {
            app(OrderService::class)->updateDuration(
                $ciphertext['out_trade_no'],
                $ciphertext['transaction_id'],
                $ciphertext['amount']['total']
            );
            return $pay->success();
        }
    }
}
