<?php

namespace Tests\Feature\Tag;

use App\Models\Tag;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Testing\Fluent\AssertableJson;
use Tests\TestCase;

class GetTagInfoTest extends TestCase
{
    /**
     * 获取标签信息
     * @test
     * @return void
     */
    public function theLabelInformation()
    {
        $tag = $this->create(Tag::class);
        $response = $this->get('api/tag/' . $tag->id);

        $response->assertStatus(200)->assertJson(fn (AssertableJson $json) => $json->has('data.id')->etc());
    }
}
