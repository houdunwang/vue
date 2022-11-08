<?php

namespace App\Http\Controllers;

use App\Http\Resources\LessonResource;
use App\Http\Resources\VideoResource;
use App\Models\Lesson;
use App\Models\User;
use App\Models\VideoPlayHistory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LearnHistoryController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth:sanctum'])->only(['lessonVideos', 'lessons']);
    }

    //用户学习历史
    public function userVideos(User $user)
    {
        return VideoResource::collection($user->videos()->with('lesson')->latest('video_play_histories.updated_at')->paginate(10));
    }

    //指定课程学习历史
    public function lessonVideos(Lesson $lesson)
    {
        return VideoResource::collection(Auth::user()->videos()->wherePivot('lesson_id', $lesson->id)->get());
    }

    //全站最近学习的记录/学习动态
    public function videos()
    {
        return VideoResource::collection(VideoPlayHistory::latest('updated_at')->with(['user', 'video'])->limit(10)->get());
    }
}
