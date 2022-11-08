<?php

namespace Tests\Feature\Morning;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class AddMorningTest extends TestCase
{
    /**
     * 添加开奖时间
     * @test
     * @return void
     */
    public function addTheLotteryTime()
    {
        $data = [
            'image' => $this->faker()->imageUrl('300x300'),
            'url' => 'https://www.jd.com',
            'open_time' => now()->addDays(10)
        ];
        $response = $this->postJson('api/morning', $data);

        $response->assertStatus(200)->assertJsonPath('data.url', $data['url']);
    }
}
