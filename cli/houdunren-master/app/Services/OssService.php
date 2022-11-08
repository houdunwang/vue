<?php

namespace App\Services;

use App\Models\Attachment;
use Auth;
use Exception;
use Illuminate\Http\UploadedFile;
use OSS\OssClient;


class OssService
{
    protected $ossClient;

    public function __construct()
    {
        $accessKeyId = config('hd.aliyun.aliyun_key');
        $accessKeySecret = config('hd.aliyun.aliyun_secret');
        $endpoint = config('hd.aliyun.aliyun_oss_endpoint');
        $this->ossClient = new OssClient($accessKeyId, $accessKeySecret, $endpoint);
    }

    //图片上传
    public function image(UploadedFile $file)
    {
        $file = $file->store('images/' . date('Ym'));
        $path = storage_path('app/' . $file);
        $info = $this->ossClient->uploadFile(config('hd.aliyun.aliyun_oss_block'), $file, $path);

        return $this->toTable(str_replace('http://', 'https://', $info['info']['url']));
    }

    //文本内容保存
    public function string($file, string $content)
    {
        $fileInfo = pathinfo($file);
        $info = $this->ossClient->putObject(config('hd.aliyun.aliyun_oss_block'), $file, $content);
        $attachment = new Attachment();
        $attachment->url = $info['info']['url'];
        $attachment->name = $fileInfo['filename'];
        $attachment->extension = $fileInfo['extension'];
        $attachment->size = strlen($content);
        Auth::user()->attachments()->save($attachment);
        return $attachment;
    }

    //写入表
    protected function toTable($url)
    {
        $file = request('file');
        $attachment = new Attachment();
        $attachment->url = $url;
        $attachment->extension = $file->extension();
        $attachment->size = $file->getSize();
        $attachment->name = $file->getClientOriginalName();
        $attachment->mime = $file->getClientMimeType();

        Auth::user()->attachments()->save($attachment);
        return $attachment;
    }
}
