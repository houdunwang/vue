<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Video extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'path', 'order', 'lesson_id', 'id'];

    protected $hidden = ['path'];

    protected $with = ['lesson'];

    public function scopeByKeyword($query, $type)
    {
        $query->where('title', 'like', "%{$type}%");
    }

    public function lesson()
    {
        return $this->belongsTo(Lesson::class);
    }

    public function comments()
    {
        return $this->morphMany(Comment::class, 'commentable');
    }

    public function favorites()
    {
        return $this->morphToMany(User::class, 'favorite', 'favorites')->withTimestamps();
    }

    //视频学习记录
    public function playHistory()
    {
        return $this->hasMany(VideoPlayHistory::class);
    }
}
