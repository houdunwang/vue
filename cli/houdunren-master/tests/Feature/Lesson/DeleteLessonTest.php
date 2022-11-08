<?php

namespace Tests\Feature\Lesson;

use App\Models\Lesson;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class DeleteLessonTest extends TestCase
{
    /**
     * 删除课程
     * @test
     * @return void
     */
    public function removeLesson()
    {
        $lesson = $this->create(Lesson::class);
        $response = $this->deleteJson('api/lesson/' . $lesson->id);
        $response->assertStatus(200)->assertJson(['message' => '删除成功']);
    }
}
