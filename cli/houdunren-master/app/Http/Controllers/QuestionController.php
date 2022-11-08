<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreQuestionRequest;
use App\Http\Requests\UpdateQuestionRequest;
use App\Http\Resources\QuestionResource;
use App\Models\Question;
use App\Models\User;
use Auth;

class QuestionController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth:sanctum']);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $collection = Question::latest()->with(['user'])->paginate(5);
        return QuestionResource::collection($collection);
    }

    //用户出的考题列表
    public function userQuestionList(User $user)
    {
        $collection = $user->questions()->with(['user'])->latest()->paginate(5);
        return QuestionResource::collection($collection);
    }

    //需要审核的考题
    public function examine()
    {
        $collection = Question::has('favours', '<', 3)->with('user')->paginate(5);
        return QuestionResource::collection($collection);
    }

    public function store(StoreQuestionRequest $request)
    {
        $this->authorize('create', Question::class);
        $question = Auth::user()->questions()->create($request->input());
        return $this->success('添加成功', $question);
    }

    public function show(Question $question)
    {
        return new QuestionResource($question->load('user')->makeVisible('answer'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateQuestionRequest  $request
     * @param  \App\Models\Question  $question
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateQuestionRequest $request, Question $question)
    {
        $this->authorize('update', $question);
        $question->fill($request->input())->save();
        return $this->success('更新成功', $question->fresh());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Question  $question
     * @return \Illuminate\Http\Response
     */
    public function destroy(Question $question)
    {
        $this->authorize('delete', $question);
        $question->delete();
        return $this->success("删除成功");
    }

    //上一个、下一下问题
    public function relationQuestion(Question $question)
    {
        return $this->success(data: [
            "prev_question" => Question::has('favours', '<', 3)->where("id", "<", $question->id)->first(),
            "next_question" => Question::has('favours', '<', 3)->where("id", ">", $question->id)->first(),
        ]);
    }
}
