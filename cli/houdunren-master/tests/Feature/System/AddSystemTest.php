<?php

namespace Tests\Feature\System;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\User;
use Illuminate\Testing\Fluent\AssertableJson;

class AddSystemTest extends TestCase
{
    /**
     * 系统课程表单验证
     * @test
     * @return void
     */
    public function formsAuthenticationSystemCourseample()
    {
        $response = $this->postJson('api/system');

        $response->assertStatus(422)->assertJsonValidationErrors(['title', 'description', 'preview']);
    }

    /**
     * 只有系统管理员才可以添加课程
     * @test
     * @return void
     */
    public function onlyTheSystemAdministratorCanAddCourses()
    {
        $this->signIn($this->create(User::class));
        $response = $this->postJson('api/system');

        $response->assertStatus(403);
    }


    /**
     * 成功添加系统课程
     * @test
     * @return void
     */
    public function successfullyAddingCoursesSystem()
    {
        $response = $this->postJson('api/system', [
            'title' => $title = fake()->sentence(),
            'description' => fake()->paragraph(),
            'preview' => fake()->imageUrl('500x500')
        ]);

        $response->assertStatus(200)->assertJsonPath('data.title', $title);
    }
}
