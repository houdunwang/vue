<?php

namespace Tests\Feature\VideoPlayHistory;

use App\Models\Duration;
use App\Models\Video;
use App\Models\VideoPlayHistory;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Testing\Fluent\AssertableJson;
use Tests\TestCase;

class RecordVideoPlayTest extends TestCase
{
    /**
     * 记录视频播放
     * @test
     * @return void
     */
    public function recordVideoPlayback()
    {
        $this->create(Duration::class, null, ['user_id' => $this->user->id, 'end_time' => now()->addMonths(3)]);
        $video = $this->create(Video::class);
        $response = $this->get('api/video/' . $video->id);
        $response->assertJson(fn (AssertableJson $json) => $json->has('data.id')->etc());
        $isPlay = $this->user->hasMany(VideoPlayHistory::class)->whereIn('video_id', [$video->id])->exists();

        $this->assertEquals($isPlay, true);
    }
}
