<?php

namespace Tests\Feature\Task;

use App\Models\Duration;
use App\Models\Order;
use App\Models\Task;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class TaskTest extends TestCase
{
    /**
     * 没有订阅会员不能参加活动
     * @test
     */
    public function notSubscribeToTheMemberCantParticipateInTheActivity()
    {
        $response = $this->postJson('api/task/make');
        $response->assertStatus(403)->assertJson([
            'message' => '你没有订阅过会员，无法参与活动',
        ]);
    }

    /**
     * 过期用户无法参与活动
     * @test
     * @return void
     */
    public function expiredUsersCantParticipateInActivities()
    {
        $this->create(Order::class, null, ["user_id" => $this->user->id, 'pay_state' => true, "price" => 499]);
        $this->create(Duration::class, null, ['end_time' => now()->subDays(10), 'user_id' => $this->user->id]);
        $response = $this->postJson('api/task/make');
        $response->assertStatus(403)->assertJson([
            'message' => '你的会员已经过期，无法参与活动',
        ]);
    }

    /**
     * 已经参与活动的不能再参加
     * @test
     * @return void
     */
    public function haveToParticipateInActivitiesCantAttend()
    {
        $this->create(Order::class, null, ["user_id" => $this->user->id, 'pay_state' => true, "price" => 499]);
        $this->create(Duration::class, null, ["user_id" => $this->user->id, 'end_time' => now()->addDays(10)]);
        $this->create(Task::class, null, ['user_id' => $this->user->id, 'type' => 'delay', 'month' => 10]);
        $response = $this->postJson('api/task/make');

        $response->assertStatus(403)->assertJson([
            'message' => '你已经参加过活动',
        ]);
    }

    /**
     * 活动参与成功
     * @test
     * @return void
     */
    public function activityInvolvedInSuccess()
    {
        $order = $this->create(Order::class, null, ["user_id" => $this->user->id, 'price' => 499, 'pay_state' => true]);

        $duration = $this->create(Duration::class, null, ["user_id" => $this->user->id, 'end_time' => now()->addDays(10)]);

        $response = $this->postJson('api/task/make');

        $response->assertOk()->assertJson([
            'message' => '你的会员周期已经延长',
        ]);
    }
}
