<?php

namespace Tests\Feature\Topic;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Auth;
use Tests\TestCase;

class ShowTopicTest extends TestCase
{
    /**
     * 查看贴子信息
     * @test
     * @return void
     */
    public function ToCheckThePostInformation()
    {
        $topic = $this->user->topics[0];
        $response = $this->get("api/topic/{$topic->id}");

        $response->assertStatus(200);
    }

    /**
     * 贴子点赞检测
     * @test
     * @return void
     */
    public function PostsThumbUp()
    {
        $topic = $this->user->topics[0];
        $topic->favours()->toggle([Auth::id()]);
        $response = $this->get("api/topic/{$topic->id}");
        $response->assertStatus(200)->assertJsonPath('data.is_favour', true);
    }
}
