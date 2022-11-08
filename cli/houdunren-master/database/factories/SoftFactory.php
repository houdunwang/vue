<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Soft>
 */
class SoftFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'title' => fake()->sentence(),
            'preview' => fake()->imageUrl('300x300'),
            'file' => 'aa.zip',
            'content' => fake()->paragraph(),
            'doc_url' => fake()->url()
        ];
    }
}
