<?php

namespace App\Observers;

use App\Models\Activity;
use App\Models\Comment;
use App\Models\User;
use App\Notifications\CommentNotification;
use Auth;
use Illuminate\Support\Facades\Notification;

class CommentObserver
{
    /**
     * Handle the Comment "created" event.
     *
     * @param  \App\Models\Comment  $comment
     * @return void
     */
    public function created(Comment $comment)
    {
        $model = strtolower(explode('\\', $comment->commentable_type)[2]);
        activity()
            ->causedBy(Auth::user())
            ->performedOn($comment)
            ->withProperties(
                ['model' => $model, 'id' => $comment->commentable_id]
            )
            ->event('created')
            ->log($comment->model->title);


        //评论或视频作者通知
        $modelUser = $comment->model->user_id ? $comment->model->user : User::find(1);
        if ($modelUser->id != $comment->user_id) {
            Notification::send($modelUser, new CommentNotification($comment));
        }

        //回复
        if ($comment->reply_user_id && ($comment->reply_user_id != $modelUser->id)) {
            Notification::send($comment->replyUser, new CommentNotification($comment));
        }
    }

    /**
     * Handle the Comment "updated" event.
     *
     * @param  \App\Models\Comment  $comment
     * @return void
     */
    public function updated(Comment $comment)
    {
        //
    }

    /**
     * Handle the Comment "deleted" event.
     *
     * @param  \App\Models\Comment  $comment
     * @return void
     */
    public function deleted(Comment $comment)
    {
        Activity::where('subject_type', 'App\Models\Comment')->where('subject_id', $comment->id)->delete();
    }

    /**
     * Handle the Comment "restored" event.
     *
     * @param  \App\Models\Comment  $comment
     * @return void
     */
    public function restored(Comment $comment)
    {
        //
    }

    /**
     * Handle the Comment "force deleted" event.
     *
     * @param  \App\Models\Comment  $comment
     * @return void
     */
    public function forceDeleted(Comment $comment)
    {
        //
    }
}
