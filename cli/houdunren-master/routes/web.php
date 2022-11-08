<?php

use App\Http\Controllers\CaptchaController;
use App\Http\Controllers\WechatLoginController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

// Route::get('/', function () {
//     if (isWechat() && !Auth::check()) {
//         return redirect()->route('wechat.applogin');
//     }
//     return file_get_contents(base_path('./vue/dist/index.html'));
// });
Route::fallback(function () {
    return file_get_contents(base_path('./vue/dist/index.html'));
});

//微信客户端登录
Route::get('wechat/app/autologin', [WechatLoginController::class, 'wechatAppAutoLogin'])->name('wechat.applogin');

Route::get('captcha_img', CaptchaController::class);
