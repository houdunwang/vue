<?php

namespace Tests\Feature\Code;

use Cache;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class SendTest extends TestCase
{
    /**
     * 发送验证码
     * @test
     */
    public function sendVerificationCode()
    {
        Cache::flush();
        $response = $this->postJson('api/code/exists', [
            "account" => env('MOBILE')
        ]);

        $response->assertStatus(200);
    }

    /**
     * 帐号错误
     * @test
     * @return void
     */
    public function accountError()
    {
        Cache::flush();
        $response = $this->postJson('api/code/exists');
        $response->assertJsonValidationErrorFor('account');
    }

    /**
     * 发送频率验证
     * @test
     * @return void
     */
    public function sendFrequencyTestAndVerify()
    {
        Cache::flush();
        $response1 = $this->postJson('api/code/exists', [
            'account' => env("MOBILE")
        ]);
        $response2 = $this->postJson('api/code/exists', [
            'account' => env("MOBILE")
        ]);
        $response2->assertStatus(403);
    }
}
