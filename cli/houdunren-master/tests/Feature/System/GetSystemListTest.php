<?php

namespace Tests\Feature\System;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class GetSystemListTest extends TestCase
{
    /**
     * 获取系统课程列表
     * @test
     * @return void
     */
    public function acquisitionSystemCourseList()
    {
        $response = $this->get('api/system');

        $response->assertStatus(200)->assertJson(['data' => true]);
    }
}
