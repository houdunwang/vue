<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class UpdateUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return Auth::check();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'name' => ['required', 'between:1,8'],
            'home' => ['nullable', 'url'],
            'weibo' => ['nullable', 'url'],
            'github' => ['nullable', 'url'],
            'qq' => ['nullable', 'numeric']
        ];
    }

    public function attributes()
    {
        return ['name' => '昵称', 'weibo' => '微博', 'home' => '个人网站', 'qq' => "QQ号"];
    }
}
