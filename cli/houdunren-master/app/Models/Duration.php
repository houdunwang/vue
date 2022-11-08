<?php

namespace App\Models;

use DateTimeInterface;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Duration extends Model
{
    use HasFactory;

    protected $fillable = ['end_time', 'user_id'];

    protected $casts = ['end_time' => 'datetime', 'pay_state' => 'boolean'];

    // protected function serializeDate(DateTimeInterface $date)
    // {
    //     return $date->format('Y-m-d h:i:s');
    // }
}
