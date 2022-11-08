<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use GrahamCampbell\Markdown\Facades\Markdown;
use Spatie\Activitylog\Traits\LogsActivity;
use Spatie\Activitylog\LogOptions;

class Question extends Model
{
    use HasFactory, LogsActivity;

    protected $fillable = ['description', 'lists', 'type', 'answer'];

    protected $casts = ['rate' => 'int', 'answer' => 'array', 'lists' => 'array'];

    protected $touches = ['user'];

    protected $hidden = ['answer'];

    protected $appends = ['html'];

    protected static $recordEvents = ['created'];

    public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults()
            ->setDescriptionForEvent(fn () => '发表了新的考试题');
    }

    public function getHtmlAttribute()
    {
        return Markdown::convert($this->description)->getContent();
    }

    public function getTitleAttribute()
    {
        return mb_substr($this->description, 0, 50);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function comments()
    {
        return $this->morphMany(Comment::class, 'commentable');
    }

    public function favours()
    {
        return $this->morphToMany(User::class, 'favour')->withTimestamps();
    }
}
