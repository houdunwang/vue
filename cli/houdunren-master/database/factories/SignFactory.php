<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\sign>
 */
class SignFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'content' => fake()->sentence(),
            'user_id' => User::inRandomOrder()->value('id'),
            'mood' => fake()->imageUrl('300x300'),
            'created_at' => now()->subDays(50)
        ];
    }
}
