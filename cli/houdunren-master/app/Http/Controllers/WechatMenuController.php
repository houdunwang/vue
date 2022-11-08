<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreWechatMenuRequest;
use App\Http\Requests\UpdateWechatMenuRequest;
use App\Models\WechatMenu;
use Houdunwang\Wechat\Button;
use Log;

class WechatMenuController extends Controller
{
    protected $button;
    public function __construct()
    {
        $this->button = app(Button::class)->config(config('hd.wechat'));
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreWechatMenuRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreWechatMenuRequest $request)
    {
        $this->button->create([
            "button" => [
                "type" => "view",
                "name" => "在线学习",
                "url" => url('/')
            ]
        ]);

        return $this->success('菜单创建成功');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\WechatMenu  $wechatMenu
     * @return \Illuminate\Http\Response
     */
    public function show(WechatMenu $wechatMenu)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\WechatMenu  $wechatMenu
     * @return \Illuminate\Http\Response
     */
    public function edit(WechatMenu $wechatMenu)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateWechatMenuRequest  $request
     * @param  \App\Models\WechatMenu  $wechatMenu
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateWechatMenuRequest $request, WechatMenu $wechatMenu)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\WechatMenu  $wechatMenu
     * @return \Illuminate\Http\Response
     */
    public function destroy(WechatMenu $wechatMenu)
    {
        //
    }
}
