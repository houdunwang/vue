<?php

namespace Tests\Feature\SignCount;

use App\Models\Sign;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Testing\Fluent\AssertableJson;
use Tests\TestCase;

class MySignCountTest extends TestCase
{
    /**
     * 当前登录用户签到统计
     * @test
     * @return void
     */
    public function theCurrentLoggedInUserSignInStatistics()
    {
        $this->create(Sign::class, null, [
            'user_id' => $this->user->id
        ]);

        $response = $this->get('api/signCount/mySignCount');

        $response->assertStatus(200)->assertJson(fn (AssertableJson $json) => $json->has('data.month')->etc());
    }
}
