<?php

namespace Tests\Feature\Video;

use App\Models\Lesson;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Testing\Fluent\AssertableJson;
use Tests\TestCase;

class AddVideoTest extends TestCase
{
    /**
     * 新增视频
     * @test
     * @return void
     */
    public function theNewVideo()
    {
        $lesson = $this->create(Lesson::class);
        $response = $this->postJson('api/video', [
            'title' => fake()->sentence(),
            'path' => fake()->url(),
            'lesson_id' => $lesson->id
        ]);

        $response->assertStatus(201)->assertJson(fn (AssertableJson $json) => $json->has('data.id')->etc());
    }
}
