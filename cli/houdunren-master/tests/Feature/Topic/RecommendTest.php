<?php

namespace Tests\Feature\Topic;

use App\Models\Topic;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Testing\Fluent\AssertableJson;
use Tests\TestCase;

//推荐
class RecommendTest extends TestCase
{
    /**
     * 推荐贴子
     * @test
     * @return void
     */
    public function topicRecomend()
    {
        $topic = $this->create(Topic::class);
        $response = $this->put('api/topic/recommend/' . $topic->id);

        $response->assertStatus(200)->assertJson(['data' => true]);
    }
}
