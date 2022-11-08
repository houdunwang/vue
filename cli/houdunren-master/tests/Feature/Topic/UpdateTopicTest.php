<?php

namespace Tests\Feature\Topic;

use App\Models\Topic;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Str;
use Tests\TestCase;

class UpdateTopicTest extends TestCase
{
    protected function setUp(): void
    {
        parent::setUp();
        $this->signIn(User::first());
    }
    /**
     * 成功更新贴子
     * @test
     * @return void
     */
    public function updatedPosts()
    {
        $topic = $this->user->topics[0];

        $response = $this->putJson("api/topic/{$topic->id}", [
            'title' => Str::random(),
            'content' => $this->faker()->paragraph(10)
        ]);

        $response->assertStatus(200);
    }

    /**
     * 不允许修改别人的贴子
     * @test
     */
    public function IsNotAllowedToModifyThePostsOfOthers()
    {
        $topic = $this->create(Topic::class, null, [
            "user_id" => User::latest()->value('id')
        ]);

        $this->signIn();

        $response = $this->putJson("api/topic/{$topic->id}", [
            'title' =>  Str::random(),
            'content' => $this->faker()->paragraph(10)
        ]);

        $response->assertStatus(403);
    }

    /**
     * 表单验证
     * @test
     * @return void
     */
    public function FormValidation()
    {
        $topic = $this->user->topics[0];

        $response = $this->putJson("api/topic/{$topic->id}", []);

        $response->assertJsonValidationErrors(['title', 'content']);
    }
}
