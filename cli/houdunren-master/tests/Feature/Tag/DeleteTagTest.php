<?php

namespace Tests\Feature\Tag;

use App\Models\Tag;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\User;

class DeleteTagTest extends TestCase
{
    /**
     * 删除标签
     * @test
     * @return void
     */
    public function deleteTag()
    {
        $tag = $this->create(Tag::class);
        $response = $this->deleteJson('api/tag/' . $tag->id);

        $response->assertStatus(200)->assertJson(['message' => true]);
    }

    /**
     * 只有超管才可以删除
     * @test
     * @return void
     */
    public function onlySuperTubeCanBeDeleted()
    {
        $this->signIn($this->create(User::class));
        $tag = $this->create(Tag::class);
        $response = $this->deleteJson('api/tag/' . $tag->id);

        $response->assertStatus(403);
    }
}
