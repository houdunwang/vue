<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreMorningRequest;
use App\Http\Requests\UpdateMorningRequest;
use App\Http\Resources\MorningResource;
use App\Http\Resources\UserResource;
use App\Models\Morning;
use App\Models\User;
use Auth;
use DB;

class MorningController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth:sanctum'])->except(['index', 'latest', 'signs']);
    }

    //本周签到的用户列表
    public function signs()
    {
        $morning = Morning::latest('id')->whereState(false)->first();
        return UserResource::collection($morning ? $this->query()->paginate(36) : []);
    }

    //最新的活动
    public function latest()
    {
        return new MorningResource(Morning::whereState(false)->latest()->first());
    }

    //随机抽取用户
    public function luck()
    {
        $morning = Morning::latest('id')->whereState(false)->first();
        if (!$morning) return $this->error('下次活动马上要开始了');
        if ($morning->end_time->diffInMinutes(now(), false) < 0) return $this->error('还没到抽取时间');
        if (!Auth::user()->is_administrator) return $this->error('你没有操作权限');

        DB::beginTransaction();
        $user = $this->query()->inRandomOrder()->first();
        //修改活动状态
        if ($user) {
            $morning->user_id = $user->id;
            $morning->save();
            Morning::latest('id')->update(['state' => true]);
        }
        DB::commit();
        if ($user) return $this->success(data: new UserResource($user));
        return $this->error('没有用户满足条件');
    }

    protected function query()
    {
        $morning = Morning::latest()->first();

        $q = User::whereNotNull('address')->whereNotNull('mobile');
        $q->whereHas('signs', function ($query) use ($morning) {
            $firstWeekDay  = now()->startOfWeek()->format("Y-m-d");
            $query->select('user_id')
                ->whereDate('created_at', '>=', $firstWeekDay)
                ->where('created_at', '<=', $morning->end_time)
                ->whereTime('created_at', '>=', '05:00:00')
                ->whereTime('created_at', '<=', '07:30:00')
                ->groupBy('user_id')->havingRaw("count('user_id')>=?", [2]);
        });
        // if (now()->day <= 15) {
        //     $q->whereHas('signs', function ($query) {
        //         $query->select('user_id')
        //             ->whereDate('created_at', '>=', now()->format('Y-m') . '-01')
        //             ->whereDate('created_at', '<=', now()->format('Y-m') . '-15')
        //             ->whereTime('created_at', '>=', '05:00:00')
        //             ->whereTime('created_at', '<=', '07:30:00')
        //             ->groupBy('user_id')->havingRaw("count('user_id')>=?", [3]);
        //     });
        // } else {
        //     $q->whereHas('signs', function ($query) {
        //         $query->select('user_id')
        //             ->whereDate('created_at', '>', now()->format('Y-m') . '-15')
        //             ->whereDate('created_at', '<=', now()->format('Y-m') . '-31')
        //             ->whereTime('created_at', '>=', '05:00:00')
        //             ->whereTime('created_at', '<=', '07:30:00')
        //             ->groupBy('user_id')->havingRaw("count('user_id')>=?", [3]);
        //     });
        // }
        return $q;
    }

    //往期活动
    public function index()
    {
        return MorningResource::collection(Morning::when(request('state'), function ($query) {
            $query->whereState(request('state'));
        })->latest('end_time')->paginate(10));
    }

    public function show(Morning $morning)
    {
        return new MorningResource($morning);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreMorningRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreMorningRequest $request, Morning $morning)
    {
        $this->authorize('create', Morning::class);
        $morning->fill($request->input())->save();
        return $this->success('添加成功', $morning);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateMorningRequest  $request
     * @param  \App\Models\Morning  $morning
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateMorningRequest $request, Morning $morning)
    {
        $this->authorize('update', $morning);
        $morning->fill($request->input())->save();
        return $this->success('更新成功', $morning);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Morning  $morning
     * @return \Illuminate\Http\Response
     */
    public function destroy(Morning $morning)
    {
        $this->authorize('update', $morning);
        $morning->delete();
        return $this->success('删除成功');
    }
}
