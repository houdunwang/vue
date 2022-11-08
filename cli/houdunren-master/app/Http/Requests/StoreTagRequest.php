<?php

namespace App\Http\Requests;

use App\Models\Tag;
use Auth;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreTagRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return Auth::user()->is_administrator;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'title' => ['required', 'between:2,10', Rule::unique(Tag::class, 'title')]
        ];
    }

    public function attributes()
    {
        return ['title' => '标签名'];
    }
}
