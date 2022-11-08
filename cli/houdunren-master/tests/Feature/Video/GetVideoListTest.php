<?php

namespace Tests\Feature\Video;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class GetVideoListTest extends TestCase
{
    /**
     * 获取视频列表
     * @test
     * @return void
     */
    public function toObtainAListVideo()
    {
        $response = $this->get('api/video');

        $response->assertStatus(200)->assertJson(['data' => true]);
    }
}
