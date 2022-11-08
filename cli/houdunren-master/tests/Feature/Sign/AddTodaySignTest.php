<?php

namespace Tests\Feature\Sign;

use App\Models\Sign;
use App\Models\SignCount;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Testing\Fluent\AssertableJson;
use Tests\TestCase;
use Auth;

class AddTodaySignTest extends TestCase
{
    /**
     * 签到表单验证
     * @test
     * @return void
     */
    public function signInFormValidation()
    {
        $response = $this->postJson('api/sign', []);

        $response->assertStatus(422)->assertJsonValidationErrors(['content', 'mood']);
    }
    /**
     * 当前不允许重复签到
     * @test
     * @return void
     */
    public function theCurrentIsNotAllowedToRepeatSignIn()
    {
        $this->create(Sign::class, null, [
            'user_id' => $this->user->id
        ]);

        $response = $this->postJson('api/sign', [
            'content' => fake()->sentence(),
            'mood' => fake()->imageUrl('300x300')
        ]);

        $response->assertStatus(403);
    }

    /**
     * 用户签到成功
     * @test
     * @return void
     */
    public function userSignInSuccessfully()
    {
        $response = $this->postJson('api/sign', [
            'content' => fake()->sentence(),
            'mood' => fake()->imageUrl('300x300')
        ]);

        $response->assertStatus(200)->assertJson(fn (AssertableJson $json) => $json->has('data.id')->etc());
    }
}
