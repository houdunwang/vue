<?php

namespace Tests\Feature\Favorite;

use App\Models\Topic;
use Auth;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Testing\Fluent\AssertableJson;
use Tests\TestCase;

class GetFavoriteListTest extends TestCase
{
    /**
     * 获取用户收藏的贴子
     * @test
     * @return void
     */
    public function getTheUserCollectionOfPosts()
    {
        $topic = $this->create(Topic::class);
        $topic->favorites()->toggle(Auth::id());
        $response = $this->get('api/favorite/userFavoriteList/topic/' . $this->user->id);
        $response->assertStatus(200)->assertJson(fn (AssertableJson $json) => $json->has('meta.total')->etc());
    }
}
