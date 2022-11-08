<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreSoftRequest;
use App\Http\Requests\UpdateSoftRequest;
use App\Http\Resources\SoftResource;
use App\Models\Soft;
use Auth;

class SoftController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth:sanctum'])->only(['store', 'update', 'destroy', 'show']);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return SoftResource::collection(Soft::paginate(10));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreSoftRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreSoftRequest $request, Soft $soft)
    {
        $soft->fill($request->input())->save();
        return $this->success('添加成功');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Soft  $soft
     * @return \Illuminate\Http\Response
     */
    public function show(Soft $soft)
    {
        if (Auth::user()->duration()->where('end_time', '>', now())->exists()) {
            $soft->makeVisible(['file']);
        }

        return new SoftResource($soft);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateSoftRequest  $request
     * @param  \App\Models\Soft  $soft
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateSoftRequest $request, Soft $soft)
    {
        $soft->fill($request->input())->save();
        return $this->success('更新成功');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Soft  $soft
     * @return \Illuminate\Http\Response
     */
    public function destroy(Soft $soft)
    {
        $this->authorize('delete', $soft);
        $soft->delete();
        return $this->success('删除成功');
    }
}
