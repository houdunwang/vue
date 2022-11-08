<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreConfigRequest;
use App\Http\Requests\UpdateConfigRequest;
use App\Http\Resources\ConfigResource;
use App\Models\Config;

class ConfigController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth:sanctum'])->except(['base']);
    }

    /**
     * 前台获取配置项
     *
     * @return \Illuminate\Http\Response
     */
    public function base()
    {
        return $this->success(data: new ConfigResource(['base' => config('hd.base')]));
    }

    /**
     * 管理员修改配置项
     */
    public function all()
    {
        $this->authorize('viewAny', Config::class);
        return $this->success(data: new ConfigResource(config('hd')));
    }


    /**
     * 更新配置
     *
     * @param  \App\Http\Requests\UpdateConfigRequest  $request
     * @param  \App\Models\Config  $config
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateConfigRequest $request, Config $config)
    {
        Config::updateOrCreate(['id' => 1], ['data' => $request->input()]);
        return $this->success('配置项保存成功');
    }
}
