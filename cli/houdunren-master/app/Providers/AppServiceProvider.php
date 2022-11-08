<?php

namespace App\Providers;

use App\Services\AliyunService;
use App\Services\CodeService;
use App\Services\OssService;
use App\Services\WechatService;
use Carbon\Carbon;
use Houdunwang\Wechat\Wechat;
use Illuminate\Support\ServiceProvider;
use Opcodes\LogViewer\Facades\LogViewer;
use URL;

class AppServiceProvider extends ServiceProvider
{

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->instance(CodeService::class, new CodeService());
        $this->app->instance(AliyunService::class, new AliyunService);
        $this->app->instance(OssService::class, new OssService);
        $this->app->instance(Wechat::class, new Wechat);
        $this->app->instance(WechatService::class, new WechatService);

        if ($this->app->environment('local')) {
            $this->app->register(\Barryvdh\LaravelIdeHelper\IdeHelperServiceProvider::class);
            $this->app->register(\Laravel\Telescope\TelescopeServiceProvider::class);
            $this->app->register(TelescopeServiceProvider::class);
        }

        // Here's an example:
        LogViewer::auth(function ($request) {
            return $request->user()
                && $request->user()['id'] == 1;
        });
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Carbon::setLocale('PRC');
        // URL::forceScheme('https');
        // Carbon::setLocale()
        // date_default_timezone_set('PRC');
    }
}
