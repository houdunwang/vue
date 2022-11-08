<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        "mobile",
        'name',
        'email',
        'password',
        'avatar',
        'home',
        'github',
        'weibo',
        'wechat',
        'qq',
        'openid',
        'address',
        'real_name'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token', 'email_verified_at',
        'real_name', 'mobile',
        'unionid',  'openid',
        'comment_num', 'fans_num', 'follower_num',
        'address',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function topics()
    {
        return $this->hasMany(Topic::class);
    }

    public function getIsAdministratorAttribute()
    {
        return $this->id == 1;
    }

    public function fans()
    {
        return $this->belongsToMany(User::class, 'followers', 'follower_id', 'fans_id')->withTimestamps();
    }

    public function followers()
    {
        return $this->belongsToMany(User::class, 'followers', 'fans_id', 'follower_id')->withTimestamps();
    }

    public function signs()
    {
        return $this->hasMany(Sign::class);
    }

    public function getTodaySignAttribute()
    {
        return $this->signs()->whereDate('created_at', now())->first();
    }

    //已经观看列表
    public function videos()
    {
        return $this->belongsToMany(Video::class, 'video_play_histories', 'user_id', 'video_id')->withTimestamps();
    }

    public function attachments()
    {
        return $this->hasMany(Attachment::class);
    }

    public function orders()
    {
        return $this->hasMany(Order::class);
    }

    public function duration()
    {
        return $this->hasOne(Duration::class);
    }

    public function tasks()
    {
        return $this->hasMany(Task::class);
    }

    //学习课程历史
    public function playLessons()
    {
        return $this->belongsToMany(Lesson::class, 'video_play_histories');
    }

    public function questions()
    {
        return $this->hasMany(Question::class);
    }

    public function questionAnswer()
    {
        return $this->hasMany(QuestionAnswer::class);
    }
}
