<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use LitEmoji\LitEmoji;
use Overtrue\LaravelEmoji\Emoji;

// use overtrue\
class SignResource extends JsonResource
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
            "user" => $this->whenLoaded("user", new UserResource($this->user)),
        ] + parent::toArray($request);
    }
}
