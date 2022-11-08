<?php

namespace App\Http\Controllers;

use App\Services\OssService;
use Illuminate\Http\Request;
use Validator;

//上传
class AttachmentController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth:sanctum']);
    }

    public function image(Request $request)
    {
        Validator::make($request->all(), [
            'file' => ['required', 'file', 'image']
        ])->validate();

        $file = app(OssService::class)->image(request('file'));
        return $this->success('图片上传成功', $file);
    }
}
