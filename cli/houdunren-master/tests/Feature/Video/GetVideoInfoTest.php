<?php

namespace Tests\Feature\Video;

use App\Models\Duration;
use App\Models\Video;
use Auth;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class GetVideoInfoTest extends TestCase
{
    /**
     * 未订阅用户不允许访问
     * @test
     */
    public function subscribersAreNotAllowedToAccess()
    {
        $video = $this->create(Video::class);
        $response = $this->get('api/video/' . $video->id);
        $response->assertStatus(403);
    }

    /**
     * 订阅用户可以看视频
     * @test
     */
    public function subscribersCanWatchVideo()
    {
        $this->create(Duration::class, null, ['user_id' => $this->user->id, 'end_time' => now()->addMonths(3)]);
        $video = $this->create(Video::class);
        $response = $this->getJson('api/video/' . $video->id);
        $response->assertStatus(200)->assertJsonPath('data.id', $video->id);
    }

    /**
     * 未登录用户不允许查看
     * @test
     * @return void
     */
    public function notLoggedInUserIsNotAllowedToLookAtIt()
    {
        $this->logout();
        $video = $this->create(Video::class);
        $response = $this->getJson('api/video/' . $video->id);
        $response->assertStatus(401);
    }
}
