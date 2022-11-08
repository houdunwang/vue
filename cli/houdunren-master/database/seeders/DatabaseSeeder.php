<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Comment;
use App\Models\Config;
use App\Models\Lesson;
use App\Models\Morning;
use App\Models\Question;
use App\Models\Sign;
use App\Models\Soft;
use App\Models\System;
use App\Models\Tag;
use App\Models\Topic;
use App\Models\User;
use App\Models\Video;
use Auth;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        User::factory(10)->create();
        $user = User::find(1);
        $user->name = "向军大叔";
        $user->mobile = 18600276067;
        $user->email = '2300071698@qq.com';
        $user->save();
        Auth::login($user);
        Tag::factory(10)->create();
        System::factory(10)->create();
        Topic::factory(300)->create();
        Lesson::factory(30)->create();
        Video::factory(300)->create();
        Comment::factory(100)->create();
        Config::factory(1)->create();
        Sign::factory(55)->create();
        Morning::factory(30)->make()->each(function ($morning) {
            $morning->user_id = User::inRandomOrder()->value('id');
            $morning->save();
        });
        Soft::factory(30)->create();

        Question::factory(5)->create();
    }
}
