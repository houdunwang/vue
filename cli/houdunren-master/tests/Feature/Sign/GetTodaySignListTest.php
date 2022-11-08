<?php

namespace Tests\Feature\Sign;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Testing\Fluent\AssertableJson;
use Tests\TestCase;

class GetTodaySignListTest extends TestCase
{
    /**
     * 获取今日签到列表
     * @test
     * @return void
     */
    public function checkListForToday()
    {
        $response = $this->get('api/sign/todaySignList');

        $response->assertStatus(200)->assertJson(fn (AssertableJson $json) => $json->has('data')->etc());
    }
}
