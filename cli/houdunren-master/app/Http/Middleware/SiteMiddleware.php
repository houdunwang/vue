<?php

namespace App\Http\Middleware;

use App\Models\Config;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\URL;

class SiteMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        $this->mergeConfig();
        return $next($request);
    }

    protected function mergeConfig()
    {
        $config = Config::find(1)?->value('data');
        if ($config) {
            config(['app.name' => $config['base']['name'] ?? config('app.name')]);
            config(['mail.mailers.smtp' => config('mail.mailers.smtp') + $config['email']]);
            foreach (config('hd') as $name => $value) {
                config(['hd.' . $name => ($config[$name] ?? []) + config('hd.' . $name)]);
            }
        }
    }
}
