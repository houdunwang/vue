<?php

namespace Tests\Feature\System;

use App\Models\System;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\User;
use Illuminate\Testing\Fluent\AssertableJson;

class DeleteSystemTest extends TestCase
{
    /**
     * 只有系统管理员才可以删除系统课程
     * @test
     * @return void
     */
    public function onlyTheSystemAdministratorCanDeleteSystemCourse()
    {
        $this->signIn($this->create(User::class));
        $system = $this->create(System::class);
        $response = $this->deleteJson('api/system/' . $system->id);

        $response->assertStatus(403);
    }


    /**
     * 成功删除系统课程
     * @test
     * @return void
     */
    public function deletedSuccessfullySystemCourse()
    {
        $system = $this->create(System::class);
        $response = $this->deleteJson('api/system/' . $system->id);

        $response->assertStatus(200)->assertJson(fn (AssertableJson $json) =>
        $json->has('data')->etc());
    }
}
