<?php

namespace Tests\Feature\Sign;

use App\Models\Sign;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Testing\Fluent\AssertableJson;
use Tests\TestCase;

class MySignListTest extends TestCase
{
    /**
     * 登录用户签到列表
     * @test
     * @return void
     */
    public function userSignInList()
    {
        $response = $this->get('api/sign/userSignList/' . $this->user->id);

        $response->assertStatus(200)->assertJson(fn (AssertableJson $json) => $json->has('meta.total')->etc());
    }
}
