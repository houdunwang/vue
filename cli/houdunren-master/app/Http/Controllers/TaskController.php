<?php

namespace App\Http\Controllers;

use App\Enums\TaskEnum;
use App\Models\User;
use Auth;
use Carbon\Carbon;
use DB;
use Log;

//老会员延期
class TaskController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth:sanctum']);
    }

    public function delay()
    {
        DB::beginTransaction();
        $user = Auth::user();
        $duration = $user->duration;
        $order = $user->orders()->orderBy('updated_at', 'desc')->where('price', '>=', 499)->where('pay_state', 1)->first();
        if (!$order) return $this->error('没有查到你的支付记录，或支付价格低于499元');
        if (!$duration) return $this->error('你没有订阅过会员');

        //是否已经参加过活动
        $taskIsExists = User::whereRelation('tasks', 'type', 'delay')->where('id', $user->id)->exists();

        if ($taskIsExists) return $this->error('你已经参加过活动');
        //会员过期检测
        if (now()->diffInSeconds($duration->end_time, false) < 0) return $this->error('你的会员已经过期，不能参加活动');
        //订单价格检测
        if ($order->price < 499) return $this->error('你的订阅价格低于499，不能参加活动');

        //活动开始时间
        $startDate = Carbon::create(2022, 10, 18, 00, 00, 00, 'PRC');
        if ($order->created_at->diffInSeconds($startDate, false) < 0) return $this->error('活动只供2018年10月18日前的订单');

        $month = 0;
        //半年
        if ($order->price == 499) {
            $user->duration->end_time = $user->duration->end_time->addMonths($month = 10);
            $user->duration->save();
        }
        //一年
        if ($order->price == 745) {
            $user->duration->end_time = $user->duration->end_time->addMonths($month = 15);
            $user->duration->save();
        }
        //两年
        if ($order->price == 1210) {
            $user->duration->end_time = $user->duration->end_time->addMonths($month = 21);
            $user->duration->save();
        }

        $user->tasks()->create(['type' => 'delay', 'month' => $month]);

        DB::commit();

        return $this->success('你的会员周期已经延长');
    }
}
