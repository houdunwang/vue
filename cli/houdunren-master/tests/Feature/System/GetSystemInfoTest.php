<?php

namespace Tests\Feature\System;

use App\Models\System;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class GetSystemInfoTest extends TestCase
{
    /**
     * 获取系统课程信息
     * @test
     * @return void
     */
    public function accessToInformationSystemsCourse()
    {
        $system = $this->create(System::class);
        $response = $this->getJson('api/system/' . $system->id);

        $response->assertStatus(200)->assertJson(['data' => true]);
    }

    /**
     * 游客不能访问系统课程
     * @test
     * @return void
     */
    public function visitorsCantAccessTheSystemCourse()
    {
        $this->logout();
        $system = $this->create(System::class);
        $response = $this->getJson('api/system/' . $system->id);

        $response->assertStatus(401);
    }
}
