<?php

namespace Tests\Feature\Auth;

use App\Services\CodeService;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Str;
use Tests\TestCase;

class FindPasswordTest extends TestCase
{
    /**
     * 成功找回密码
     * @test
     * @return void
     */
    public function successfulRetrievePassword()
    {
        $response = $this->postJson('api/auth/find-password', [
            "account" => config('hd.sms.mobile'),
            "password" => 'admin888',
            "password_confirmation" => 'admin888',
            "code" => app(CodeService::class)->code(env("MOBILE"))
        ]);
        $response->assertStatus(200);
    }

    /**
     * 两次密码输入不一致
     * @test
     * @return void
     */
    public function passwordTwice()
    {
        $response = $this->postJson('api/auth/find-password', [
            "account" => config('hd.sms.mobile'),
            "password" => 'admin888',
            "password_confirmation" => 'admin8881',
            "code" => app(CodeService::class)->send(env("MOBILE"))
        ]);

        $response->assertJsonValidationErrorFor('password');
    }

    /**
     * 帐号不存在
     * @test
     * @return void
     */
    public function AccountDoesNotExist()
    {
        $response = $this->postJson('api/auth/find-password', [
            "account" => Str::random(1),
            "password" => 'admin888',
            "password_confirmation" => 'admin8881',
            "code" => app(CodeService::class)->send(env("MOBILE"))
        ]);

        $response->assertJsonValidationErrorFor('account');
    }
}
