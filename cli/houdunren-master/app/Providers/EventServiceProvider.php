<?php

namespace App\Providers;

use App\Models\Comment;
use App\Models\Lesson;
use App\Models\Question;
use App\Models\Sign;
use App\Models\Topic;
use App\Observers\SignObserver;
use App\Observers\VideoObserver;
use Illuminate\Auth\Events\Registered;
use Illuminate\Auth\Listeners\SendEmailVerificationNotification;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Event;
use App\Models\Video;
use App\Observers\CommentObserver;
use App\Observers\LessonObserver;
use App\Observers\QuestionObserver;
use App\Observers\TopicObserver;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event to listener mappings for the application.
     *
     * @var array<class-string, array<int, class-string>>
     */
    protected $listen = [
        Registered::class => [
            SendEmailVerificationNotification::class,
        ],
        \SocialiteProviders\Manager\SocialiteWasCalled::class => [
            // ... other providers
            \SocialiteProviders\WeixinWeb\WeixinWebExtendSocialite::class . '@handle',
        ],
    ];

    protected $observers = [];

    /**
     * Register any events for your application.
     *
     * @return void
     */
    public function boot()
    {
        Sign::observe(SignObserver::class);
        Video::observe(VideoObserver::class);
        Comment::observe(CommentObserver::class);
        Topic::observe(TopicObserver::class);
        Lesson::observe(LessonObserver::class);
        Question::observe(QuestionObserver::class);
    }

    /**
     * Determine if events and listeners should be automatically discovered.
     *
     * @return bool
     */
    public function shouldDiscoverEvents()
    {
        return false;
    }
}
