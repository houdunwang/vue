<?php

namespace Tests\Feature\Lesson;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class GetLessonListTest extends TestCase
{
    /**
     * 获取课程列表
     * @test
     * @return void
     */
    public function toObtainAListCourses()
    {
        $response = $this->get('api/lesson');

        $response->assertStatus(200)->assertJson(['data' => true]);
    }
}
