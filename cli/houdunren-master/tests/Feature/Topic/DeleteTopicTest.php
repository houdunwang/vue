<?php

namespace Tests\Feature\Topic;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class DeleteTopicTest extends TestCase
{
    protected function setUp(): void
    {
        parent::setUp();
        $this->signIn(User::first());
    }

    /**
     * 删除贴子
     * @test
     * @return void
     */
    public function DeletePosts()
    {
        $topic = $this->user->topics[0];

        $response = $this->deleteJson("api/topic/{$topic->id}");

        $response->assertStatus(200);
    }


    /**
     * 不允许删除别人的贴子
     * @test
     * @return void
     */
    public function IsNotAllowedToDeleteThePostsOfOthers()
    {
        $topic = $this->user->topics[0];
        $this->signIn();
        $response = $this->deleteJson("api/topic/{$topic->id}");

        $response->assertStatus(403);
    }
}
