<?php

namespace Tests\Feature\Tag;

use App\Models\Tag;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Testing\Fluent\AssertableJson;
use Tests\TestCase;

class AddTagTest extends TestCase
{
    /**
     * 标签名不能为空
     * @test
     * @return void
     */
    public function tagNameCannotBeEmpty()
    {
        $response = $this->postJson('api/tag');
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
        $response = $this->postJson('api/tag', ['title' => $tag->title]);
        $response->assertStatus(422)->assertJsonValidationErrors(['title']);
    }

    /**
     * 标签添加成功
     * @test
     * @return void
     */
    public function addTagSuccess()
    {
        $response = $this->postJson('api/tag', ['title' => fake()->title()]);

        // $response->dd();
        $response->assertStatus(201)->assertJson(fn (AssertableJson $json) => $json->has('data.id')->etc());
    }
}
