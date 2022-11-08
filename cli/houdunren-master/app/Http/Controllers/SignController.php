<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreSignRequest;
use App\Http\Requests\UpdateSignRequest;
use App\Http\Resources\SignResource;
use App\Http\Resources\UserResource;
use App\Models\Sign;
use App\Models\User;
use Auth;
use Carbon\Carbon;

class SignController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth:sanctum'])->except(['todaySignList', 'userSignList']);
    }

    /**
     * 今日签到列表
     *
     * @return \Illuminate\Http\Response
     */
    public function todaySignList()
    {
        $collection = Sign::whereDate('created_at', now())->oldest()->get();
        return SignResource::collection($collection);
    }

    //当前登录用户签到分页数据
    public function userSignList(User $user)
    {
        $collection = $user->signs()->latest()->paginate(10);
        return SignResource::collection($collection);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoresignRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreSignRequest $request, Sign $sign)
    {
        $this->authorize('create', Sign::class);
        $sign->fill($request->input())->user()->associate(Auth::user())->save();
        return $this->success('签到成功', new SignResource($sign->fresh()));
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Sign  $sign
     * @return \Illuminate\Http\Response
     */
    public function destroy(sign $sign)
    {
        $this->authorize('delete', $sign);
        $sign->delete();
        return $this->success('签到删除成功');
    }
}
