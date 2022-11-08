<?php

namespace Database\Factories;

use App\Models\Lesson;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Video>
 */
class VideoFactory extends Factory
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
            'path' => "https://houdunren-test.oss-cn-hangzhou.aliyuncs.com/videos/test.mp4",
            'lesson_id' => Lesson::inRandomOrder()->value('id')
        ];
    }
}
