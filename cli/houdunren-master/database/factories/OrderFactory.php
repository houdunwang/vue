<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\order>
 */
class OrderFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'sn' => mt_rand(1000, 100000),
            'price' => mt_rand(10, 100),
            'subject' => Str::random(),
            'trade_no' => mt_rand(1000, 100000),
            'pay_state' => false
        ];
    }
}
