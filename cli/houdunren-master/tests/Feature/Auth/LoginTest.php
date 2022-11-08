<?php

namespace Tests\Feature\Auth;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Str;
use Tests\TestCase;

class LoginTest extends TestCase
{
    /**
     * 登录
     * @test
     */
    public function loginSuccess()
    {
        $response = $this->postJson('api/auth/login', [
            "account" => env("MOBILE"),
            'password' => 'admin888'
        ]);

        $response->assertStatus(200);
    }

    /**
     * 帐号不存在
     * @test
     * @return void
     */
    public function accountDoesNotExist()
    {
        $response = $this->postJson('api/auth/login', [
            "account" => Str::random(2),
            'password' => "admin888"
        ]);
        $response->assertJsonValidationErrorFor("account");
    }

    /**
     * 密码输入错误
     * @test
     * @return void
     */
    public function thePasswordInputError()
    {
        $response = $this->postJson('api/auth/login', [
            "account" => config('hd.sms.mobile'),
            'password' => "admin8889"
        ]);

        $response->assertJsonValidationErrorFor("password");
    }
}
