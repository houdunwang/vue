<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CommentShotController extends Controller
{
    public function comment()
    {
        $files = collect(glob(public_path('assets/shot/comment/*')));
        return $files->map(
            fn ($file) =>
            url('assets/shot/comment/' . \basename($file))
        );
    }

    public function live()
    {
        $files = collect(glob(public_path('assets/shot/live/*')));
        return $files->map(
            fn ($file) =>
            url('assets/shot/live/' . \basename($file))
        );
    }
}
