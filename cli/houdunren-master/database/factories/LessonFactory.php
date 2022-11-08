<?php

namespace Database\Factories;

use App\Models\System;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Lesson>
 */
class LessonFactory extends Factory
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
            'preview' => url('fake/lesson/文件' . mt_rand(1, 37) . '.jpg'),
            'system_id' => System::inRandomOrder()->value('id'),
            'video_num' => mt_rand(50, 1000),
            'view_num' => mt_rand(50, 1000),
        ];
    }
}
