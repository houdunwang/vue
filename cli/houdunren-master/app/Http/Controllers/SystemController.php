<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreSystemRequest;
use App\Http\Requests\UpdateSystemRequest;
use App\Http\Resources\SystemResource;
use App\Models\Lesson;
use App\Models\System;
use App\Models\Video;
use Illuminate\Http\Request;

class SystemController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth:sanctum'])->except(['index']);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return SystemResource::collection(System::orderBy('order')->when(request('type', 'system'), function ($query, $type) {
            $query->where('type', $type);
        })->latest()->get());
    }

    public function order(Request $request)
    {
        $this->authorize('update', System::class);
        collect($request->input())->each(fn ($system, $index) => System::updateOrCreate(['id' => $system['id']], ['order' => $index]));
        return $this->success('排序成功');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreSystemRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreSystemRequest $request, System $system)
    {
        $this->authorize('create', System::class);
        $system->fill($request->input())->save();
        return $this->success(data: $system);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\System  $system
     * @return \Illuminate\Http\Response
     */
    public function show(System $system)
    {
        return new SystemResource($system->load('lessons'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateSystemRequest  $request
     * @param  \App\Models\System  $system
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateSystemRequest $request, System $system)
    {
        $this->authorize('update', $system);
        $system->fill($request->input());
        $system->lesson_num = Lesson::where('system_id', $system->id)->count();
        $system->video_num = Video::whereIn('lesson_id', Lesson::where('system_id', $system->id)->pluck('id'))->count();
        $system->save();
        return $this->success('课程更新成功', new SystemResource($system->refresh()));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\System  $system
     * @return \Illuminate\Http\Response
     */
    public function destroy(System $system)
    {
        $this->authorize('delete', $system);
        $system->delete();
        return $this->success();
    }
}
