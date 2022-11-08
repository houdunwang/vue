<?php

namespace Tests\Feature\Lesson;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class CreateLessonTest extends TestCase
{
    /**
     * 表单字段验证
     * @test
     * @return void
     */
    public function formFieldValidation()
    {
        $response = $this->postJson('api/lesson', []);

        $response->assertStatus(422);
    }

    /**
     * 创建文章
     * @test
     * @return void
     */
    public function successCreateLesson()
    {
        $response = $this->postJson('api/lesson', [
            'title' => fake()->sentence(),
            'description' => fake()->paragraph(),
            'preview' => fake()->imageUrl('500x500')
        ]);

        $response->assertOk()->assertJson(['data' => true]);
    }
}
