<?php

namespace Tests\Feature\Video;

use App\Models\Video;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Testing\Fluent\AssertableJson;
use Tests\TestCase;


class UpdateVideoTest extends TestCase
{
    /**
     * 更新视频表单验证
     * @test
     * @return void
     */
    public function updateTheVideoFormValidation()
    {
        $video = $this->create(Video::class);
        $response = $this->putJson('api/video/' . $video->id);

        $response->assertStatus(422);
    }

    /**
     * 成功更新视频
     * @test
     * @return void
     */
    public function successfulUpdateVideo()
    {
        $video = $this->create(Video::class);

        $response = $this->putJson('api/video/' . $video->id, $video->makeVisible('path')->toArray() + [
            'title' => $this->faker()->sentence()
        ]);

        $response->assertStatus(200)->assertJson(fn (AssertableJson $json) => $json->has('data.id')->etc());
    }
}
