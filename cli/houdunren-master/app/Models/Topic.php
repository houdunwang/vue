<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\Traits\LogsActivity;
use Spatie\Activitylog\LogOptions;
use GrahamCampbell\Markdown\Facades\Markdown;

class Topic extends Model
{
    use HasFactory, LogsActivity;

    protected $fillable = ['title', 'content'];

    protected $with = ['user'];

    protected static $recordEvents = ['created'];

    public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults()
            ->setDescriptionForEvent(fn (string $eventName) => $this->title);
    }

    public function getHtmlAttribute()
    {
        return Markdown::convert($this->content)->getContent();
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function favours()
    {
        return $this->morphToMany(User::class, 'favour')->withTimestamps();
    }

    public function favorites()
    {
        return $this->morphToMany(User::class, 'favorite')->withTimestamps();
    }

    public function tags()
    {
        return $this->morphToMany(Tag::class, 'relation', 'tag_relation');
    }

    public function comments()
    {
        return $this->morphMany(Comment::class, 'commentable');
    }
}
