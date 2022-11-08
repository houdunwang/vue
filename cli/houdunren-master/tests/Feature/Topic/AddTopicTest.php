<?php

namespace Tests\Feature\Topic;

use App\Models\Tag;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Str;
use Tests\TestCase;

class AddTopicTest extends TestCase
{
    /**
     * 标题与内容不能为空
     * @test
     * @return void
     */
    public function TheTitleAndContentCannotBeEmpty()
    {
        $response = $this->postJson('api/topic', []);

        $response->assertJsonValidationErrors(['title', 'content']);
    }

    /**
     * 添加不存在标签时报错
     * @test
     * @return void
     */
    public function addThereIsNoTagsTimesWrong()
    {
        $response = $this->postJson('api/topic', [
            'title' => fake()->sentence(),
            'content' => fake()->paragraph(),
            'tags' => [1000]
        ]);

        $response->assertJsonValidationErrors(['tags']);
    }

    /**
     * 成功发表贴子
     * @test
     * @return void
     */
    public function SuccessfulPublishedPosts()
    {
        $this->signIn();
        $response = $this->postJson('api/topic', [
            'title' => Str::random(),
            'content' => $this->faker()->paragraph(10),
            'tags' => $this->create(Tag::class, 2)->pluck('id')
        ]);
        $response->assertStatus(200);
    }
}
