<?php

namespace Tests\Feature\Topic;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class TopicIndexTest extends TestCase
{
    /**
     * 贴子列表
     * @test
     * @return void
     */
    public function TopicList()
    {
        $response = $this->get('api/topic');

        $response->assertStatus(200);
    }
}
