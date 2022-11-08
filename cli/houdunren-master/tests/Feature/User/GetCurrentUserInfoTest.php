<?php

namespace Tests\Feature\User;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class GetCurrentUserInfoTest extends TestCase
{
    /**
     * 当前登录用户信息
     * @test
     * @return void
     */
    public function test_example()
    {
        $response = $this->get('api/user/current');

        $response->assertStatus(200);
    }
}
