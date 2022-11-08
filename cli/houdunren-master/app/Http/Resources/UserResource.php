<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'avatar' => $this->avatar ?: url('assets/avatar/' . ($this->sex == 1 ? 'boy.png' : 'girl.png')),
            'name' => $this->name ?: '盾友',
        ] + parent::toArray($request);
    }
}
