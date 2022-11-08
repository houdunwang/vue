<?php

namespace Tests\Feature\Lesson;

use App\Models\Lesson;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Testing\Fluent\AssertableJson;
use Tests\TestCase;

class UpdateLessonTest extends TestCase
{
    /**
     * 更新课程表单验证
     * @test
     * @return void
     */
    public function updateTheCourseFormValidation()
    {
        $lesson = $this->create(Lesson::class);
        $response = $this->putJson('api/lesson/' . $lesson->id);

        $response->assertStatus(422);
    }

    /**
     * 成功更新课程
     * @test
     * @return void
     */
    public function updatedSuccessfully()
    {
        $lesson = $this->create(Lesson::class);
        $response = $this->putJson('api/lesson/' . $lesson->id, $lesson->toArray() + [
            'title' => fake()->sentence()
        ]);

        $response->assertStatus(200)->assertJson(fn (AssertableJson $fn) => $fn->has('data')->etc());
    }
}
