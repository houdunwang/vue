<?php

namespace Tests\Feature\Tag;

use App\Models\Tag;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Testing\Fluent\AssertableJson;
use Str;
use Tests\TestCase;

class UpdateTagTest extends TestCase
{
    /**
     * 标签名不能为空
     * @test
     * @return void
     */
    public function tagNameCannotBeEmpty()
    {
        $tag = $this->create(Tag::class);
        $response = $this->putJson('api/tag/' . $tag->id, []);

        $response->assertStatus(422)->assertJsonValidationErrors(['title']);
    }

    /**
     * 标签名不能重复
     * @test
     * @return void
     */
    public function tagNameCannotBeRepeated()
    {
        $tag = $this->create(Tag::class);
        $tag1 = $this->create(Tag::class);
        $response = $this->putJson('api/tag/' . $tag->id, [
            'title' => $tag1->title,
        ]);

        $response->assertStatus(422)->assertJsonValidationErrors(['title']);
    }

    /**
     * 旧标签名相同不认为是重复
     * @test
     * @return void
     */
    public function oldTagNameDontThinkTheSameIsRepeated()
    {
        $tag = $this->create(Tag::class, null, [
            'title' => Str::random(8)
        ]);

        $response = $this->putJson('api/tag/' . $tag->id, [
            'title' => $tag->title,
        ]);

        $response->assertStatus(200);
    }

    /**
     * 成功更新标签
     * @test
     * @return void
     */
    public function successfullyUpdateTags()
    {
        $tag = $this->create(Tag::class);
        $response = $this->putJson('api/tag/' . $tag->id, [
            'title' => $tag->title,
        ]);

        $response->assertStatus(200)->assertJson(fn (AssertableJson $json) => $json->has('data.id')->etc());
    }
}
