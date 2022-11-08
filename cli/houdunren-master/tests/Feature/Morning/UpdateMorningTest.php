<?php

namespace Tests\Feature\Delete;

use App\Models\Morning;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class DeleteMorningTest extends TestCase
{
    /**
     * 删除早起活动
     * @test
     * @return void
     */
    public function deleteTheEarlyActivities()
    {
        $morning = $this->create(Morning::class);
        $response = $this->deleteJson('api/morning/' . $morning->id);
        $response->assertStatus(200)->assertJsonPath('message', '删除成功');
    }
}
