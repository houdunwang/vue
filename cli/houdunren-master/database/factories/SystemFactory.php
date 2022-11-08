<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\System>
 */
class SystemFactory extends Factory
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
            'description' => fake()->paragraph(),
            'preview' => url('fake/system/文件' . mt_rand(1, 10) . '.png'),
            'lesson_num' => mt_rand(50, 1000),
            'view_num' => mt_rand(50, 1000),
            'video_num' => mt_rand(50, 1000),
        ];
    }
}
