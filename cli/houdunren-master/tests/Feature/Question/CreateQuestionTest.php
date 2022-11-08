<?php

namespace Tests\Feature\Question;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class CreateQuestionTest extends TestCase
{
    /**
     * 发表问题
     * @test
     */
    public function publishedQuestion()
    {
        $response = $this->postJson('/api/question', [
            'title' => $this->faker()->sentence(),
            'lists' => [
                $this->faker()->sentence(),
                $this->faker()->sentence(),
                $this->faker()->sentence(),
                $this->faker()->sentence(),
            ],
            'type' => "radio",
            'answer' => [1]
        ]);
        $response->assertStatus(200)->assertJsonPath('code', 0);
    }
}
