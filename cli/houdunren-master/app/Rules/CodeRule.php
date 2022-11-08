<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;
use Illuminate\Support\Facades\Cache;

class CodeRule implements Rule
{
    protected $field;

    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct($field = 'account')
    {
        $this->field = $field;
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        $code = Cache::get(request($this->field));
        // dd(request($this->field), request()->all(), $this->field, $code, $value);
        return $code == $value;
    }

    /**
     * Get the validation error message.
     * @return string
     */
    public function message()
    {
        return '验证码输入错误';
    }
}
