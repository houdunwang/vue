<?php

namespace App\Services;

use App\Models\Duration;
use App\Models\Order;
use Auth;

class OrderService
{
    //创建定单
    public function createOrder($pay_type)
    {
        $duration = Auth::user()->duration()->whereDate('end_time', '>', now())->first();
        if ($duration) abort(403, '订阅有效期内，不需要重复订阅');
        $sn = "U" . Auth::id() . '-' . time();

        $order = Auth::user()->orders()->create([
            'sn' => $sn,
            'subject' => '后盾人',
            'price' => config('hd.subscribe.price'),
            "pay_type" => $pay_type
        ]);

        Order::where('created_at', '<', now()->subDays(1))->where('pay_state', 0)->delete();
        return $order;
    }

    public function updateDuration(string $sn, string $trade_no, $price)
    {
        $order = Order::where('sn', $sn)->firstOrFail();
        if ($order->pay_state) return;
        $order->pay_state = true;
        $order->trade_no = $trade_no;
        $order->price = $price;
        $order->save();

        Duration::updateOrCreate(['user_id' => $order->user_id], [
            'end_time' => now()->addYear()
        ]);
    }
}
