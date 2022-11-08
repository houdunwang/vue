<?php

namespace Tests;

use App\Models\User;
use Auth;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\TestCase as BaseTestCase;
use Illuminate\Foundation\Testing\WithFaker;

abstract class TestCase extends BaseTestCase
{
    use CreatesApplication, RefreshDatabase, WithFaker;

    protected $seed = true;
    protected $user;

    protected function setUp(): void
    {
        parent::setUp();
        $this->signIn(User::first());
    }

    protected function create($class, $count = null, $attributes = [])
    {
        return $class::factory($count)->create($attributes);
    }

    protected function signIn(User $user = null)
    {
        $this->user = $user ?? $this->create(User::class);
        $this->actingAs($this->user);
    }

    protected function logout()
    {
        Auth::logout();
    }
}
