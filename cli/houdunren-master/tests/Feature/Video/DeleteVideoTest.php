<?php

namespace Tests\Feature\Video;

use App\Models\User;
use App\Models\Video;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Testing\Fluent\AssertableJson;
use Tests\TestCase;

class DeleteVideoTest extends TestCase
{
    /**
     * 删除视频
     * @test
     * @return void
     */
    public function deleteTheVideo()
    {
        $video = $this->create(Video::class);
        $response = $this->deleteJson('api/video/' . $video->id);

        $response->assertStatus(200)->assertJson(fn (AssertableJson $fn) => $fn->where('code', 0)->etc());
    }


    /**
     * 普通用户不能删除视频
     * @test
     * @return void
     */
    public function OrdinaryUsersCantDeleteTheVideo()
    {
        $user = $this->create(User::class);
        $this->signIn($user);

        $video = $this->create(Video::class);
        $response = $this->deleteJson('api/video/' . $video->id);

        $response->assertStatus(403);
    }
}
