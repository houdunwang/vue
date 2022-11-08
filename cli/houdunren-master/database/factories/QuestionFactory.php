<?php

namespace Database\Factories;

use Arr;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Question>
 */
class QuestionFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'user_id' => 1,
            'title' => fake()->sentence(),
            'lists' => [
                fake()->sentence(),
                fake()->sentence(),
                fake()->sentence(),
                fake()->sentence(),
            ],
            'type' => Arr::random(['radio', 'checkbox']),
            'answer' => [mt_rand(1, 4)]
        ];
    }
}
