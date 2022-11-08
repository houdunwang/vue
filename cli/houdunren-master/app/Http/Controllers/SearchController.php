<?php

namespace App\Http\Controllers;

use App\Http\Resources\VideoResource;
use App\Models\Video;
use Illuminate\Http\Request;

class SearchController extends Controller
{
    public function video(Request $request)
    {
        return VideoResource::collection(Video::byKeyword($request->content)->with('lesson')->latest('videos.id')->paginate($request->query('row', 9)));
    }
}
