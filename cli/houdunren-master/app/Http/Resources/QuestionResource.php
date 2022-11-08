<?php

namespace App\Http\Resources;

use App\Models\Question;
use Illuminate\Http\Resources\Json\JsonResource;
use GrahamCampbell\Markdown\Facades\Markdown;
use Illuminate\Support\Facades\Route;

class QuestionResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        // $isShowAction = Route::current()->action['as'] == 'question.show';
        return  [
            'user' => new UserResource($this->whenLoaded('user'))
        ] + parent::toArray($request);
    }
}
