<?php

namespace Tests\Feature\System;

use App\Models\System;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class UpdateSystemTest extends TestCase
{
    /**
     * 更新系统课程表单验证
     * @test
     * @return void
     */
    public function updateTheSystemCourseFormValidation()
    {
        $system = $this->create(System::class);
        $response = $this->putJson('api/system/' . $system->id, []);

        $response->assertStatus(422)->assertJsonValidationErrors(['title', 'description', 'preview']);
    }

    /**
     * 只允许系统管理员更新系统课程
     * @test
     * @return void
     */
    public function onlyAllowsSystemAdministratorsToUpdateCourses()
    {
        $this->signIn($this->create(User::class));
        $system = $this->create(System::class);
        $response = $this->putJson('api/system/' . $system->id, $system->toArray() + [
            'title' => $title = fake()->sentence()
        ]);

        $response->assertStatus(403);
    }


    /**
     * 成功更新系统课程
     * @test
     * @return void
     */
    public function successfulUpdateSystemCourse()
    {
        $system = $this->create(System::class);
        $response = $this->putJson('api/system/' . $system->id, [
            'title' => $title = fake()->sentence()
        ] + $system->toArray());

        $response->assertStatus(200)->assertJsonPath('data.title', $title);
    }
}
