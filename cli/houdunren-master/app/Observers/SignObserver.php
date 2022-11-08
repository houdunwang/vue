<?php

namespace App\Observers;

use App\Models\Sign;
use App\Models\SignCount;
use Illuminate\Support\Facades\Auth;

class SignObserver
{
    /**
     * Handle the Sign "created" event.
     *
     * @param  \App\Models\Sign  $sign
     * @return void
     */
    public function created(Sign $sign)
    {
        $this->updateSignCount();
    }

    protected function updateSignCount()
    {
        $user = Auth::user();
        SignCount::updateOrCreate(['user_id' => Auth::id()], [
            'month' => $user->signs()->whereYear('created_at', now())->whereMonth('created_at', now())->count(),
            'year' => $user->signs()->whereYear('created_at', now())->count(),
            'total' => $user->signs()->count(),
        ]);
    }

    /**
     * Handle the Sign "updated" event.
     *
     * @param  \App\Models\Sign  $sign
     * @return void
     */
    public function updated(Sign $sign)
    {
        //
    }

    /**
     * Handle the Sign "deleted" event.
     *
     * @param  \App\Models\Sign  $sign
     * @return void
     */
    public function deleted(Sign $sign)
    {
        $this->updateSignCount();
        $sign->activities()->where('subject_id', $sign->id)->delete();
    }

    /**
     * Handle the Sign "restored" event.
     *
     * @param  \App\Models\Sign  $sign
     * @return void
     */
    public function restored(Sign $sign)
    {
        //
    }

    /**
     * Handle the Sign "force deleted" event.
     *
     * @param  \App\Models\Sign  $sign
     * @return void
     */
    public function forceDeleted(Sign $sign)
    {
        //
    }
}
