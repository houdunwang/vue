<?php

namespace Tests\Feature\Tag;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class TagListTest extends TestCase
{
    /**
     * 获取标签列表
     * @test
     * @return void
     */
    public function getTagLists()
    {
        $response = $this->get('api/tag');

        $response->assertStatus(200)->assertJson(['data' => true]);
    }
}
