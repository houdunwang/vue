<?php

namespace Tests\Feature\Lesson;

use App\Models\Lesson;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class LessonInfoTest extends TestCase
{
    /**
     * 获取课程信息
     * @test
     * @return void
     */
    public function courseInformation()
    {
        $lesson = $this->create(Lesson::class);
        $response = $this->get('api/lesson/' . $lesson->id);

        $response->assertStatus(200)->assertJson(['data' => true]);
    }
}
