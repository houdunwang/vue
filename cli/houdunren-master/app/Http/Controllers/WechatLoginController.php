<?php

namespace App\Http\Controllers;

use App\Services\WechatService;
use App\Models\User;
use Illuminate\Support\Facades\Cache;
use Request;
use Auth as FacadesAuth;
use Houdunwang\Wechat\User as WechatUser;
use Illuminate\Support\Facades\Log;
use Houdunwang\Wechat\Qrcode;

class WechatLoginController extends Controller
{
    protected $qr;

    public function __construct()
    {
        $this->qr = app(Qrcode::class)->config(config('hd.wechat'));
    }

    //生成PC登录微信二维码
    public function scanloginQr()
    {
        $info = $this->qr->getQrTicket([
            "expire_seconds" => 600,
            "action_name" => "QR_STR_SCENE",
            "action_info" => ["scene" => ["scene_str" => "bind"]]
        ]);

        return $this->success(data: $info);
    }

    //PC登录二维码图片
    public function scanLoginQrImage(string $ticket)
    {
        return $this->qr->getQrImageByTicket($ticket);
    }

    //PC扫码登录
    public function sancLogin(string $ticket)
    {
        if ($info = Cache::get($ticket)) {
            $user = app(WechatService::class)->registerByOpenid($info['FromUserName']);
            FacadesAuth::login($user);
            return $this->success('登录成功', ['token' => $user->createToken('auth')->plainTextToken]);
        }
    }

    //微信客户端登录
    public function wechatAppAutoLogin()
    {
        $info = app(WechatUser::class)->config(config('hd.wechat'))->snsapiUserInfo();
        app(WechatService::class)->registerByOpenid($info['openid']);
        return redirect('/');
    }
}
