<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Session;
use Mews\Captcha\Captcha as CaptchaCaptcha;
use Mews\Captcha\Facades\Captcha;

class CaptchaController extends Controller
{
    public function __invoke()
    {
        return Captcha::create();
    }
}
