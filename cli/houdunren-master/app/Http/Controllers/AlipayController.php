<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Services\OrderService;
use Illuminate\Http\Request;
use Log;
use Yansongda\Pay\Pay;

class AlipayController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth:sanctum'])->only('createOrder');

        $config = config('pay');
        $config['alipay']['default']['return_url'] = url('/api/alipay/return');
        $config['alipay']['default']['notify_url'] = url('/api/alipay/notify');
        Pay::config($config);
    }

    //创建定单
    public function createOrder()
    {
        $order = app(OrderService::class)->createOrder('alipay');
        return $this->success('', $order);
    }

    //发起支付
    public function pay(Order $order)
    {
        return Pay::alipay()->web([
            //商户订单
            'out_trade_no' => $order->sn,
            'total_amount' => config('hd.subscribe.price'),
            'subject' => '后盾人',
        ]);
    }

    //同步通知
    public function returnUrl(Request $request)
    {
        $result = Pay::alipay()->callback();
        //修改订单状态，更改会员周期
        app(OrderService::class)->updateDuration($result->out_trade_no);
        return redirect('/');
    }

    //异步通知
    public function notifyUrl()
    {
        $pay = Pay::alipay();
        $result = $pay->callback();

        //修改订单状态，更改会员周期
        if ($result->out_trade_no) {
            app(OrderService::class)->updateDuration($result->out_trade_no, $result->trade_no, $result->invoice_amount);
            return $pay->success();
        }
    }
}
