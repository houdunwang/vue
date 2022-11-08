<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Morning>
 */
class MorningFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'url' => fake()->url(),
            'image' => fake()->imageUrl('300x300'),
            'end_time' => now()->subDays(15),
            'state' => true
        ];
    }
}
