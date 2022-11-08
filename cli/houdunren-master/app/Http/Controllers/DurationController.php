<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreDurationRequest;
use App\Http\Requests\UpdateDurationRequest;
use App\Http\Resources\DurationResource;
use App\Models\Duration;
use Auth;

class DurationController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth:sanctum']);
    }

    public function index()
    {
        return new DurationResource(Auth::user()->duration()->whereDate('end_time', '>', now())->first());
    }
}
