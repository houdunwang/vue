<?php

namespace App\Console\Commands;

use App\Models\Activity;
use App\Models\Attachment;
use App\Models\Comment;
use App\Models\Duration;
use App\Models\Favorite;
use App\Models\Favour;
use App\Models\Lesson;
use App\Models\Order;
use App\Models\Sign;
use App\Models\System;
use App\Models\Topic;
use App\Models\User;
use App\Models\Video;
use App\Models\VideoPlayHistory;
use Artisan;
use Auth;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
use PDO;

class UpdateSite extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'update:system {method?}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = '更新系统';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        Artisan::call('migrate:reset');
        Artisan::call('migrate');
        config(['activitylog.enabled' => false]);
        config(['database.connections.hd' => [
            'driver' => 'mysql',
            'url' => env('DATABASE_URL'),
            'host' => env('DB_HOST', '127.0.0.1'),
            'port' => env('DB_PORT', '3306'),
            'database' => 'hd',
            'username' => 'root',
            'password' => 'admin888',
            'unix_socket' => env('DB_SOCKET', ''),
            'charset' => 'utf8mb4',
            'collation' => 'utf8mb4_unicode_ci',
            'prefix' => '',
            'prefix_indexes' => true,
            'strict' => true,
            'engine' => null,
            'options' => extension_loaded('pdo_mysql') ? array_filter([
                PDO::MYSQL_ATTR_SSL_CA => env('MYSQL_ATTR_SSL_CA'),
            ]) : [],
        ]]);

        if ($method = $this->argument('method')) {
            $this->$method();
        } else {
            $this->user();
            $this->system();
            $this->lesson();
            $this->video();
            $this->topic();
            $this->sign();
            $this->video_play_historie();
            $this->favorite();
            $this->favour();
            $this->comments();
            $this->attachment();
            $this->order();
            $this->duration();
            $this->activity();
        }
        $this->info('更新完成');
    }

    protected function user()
    {
        DB::connection('hd')->table('users')->orderBy('id')->chunk(100, function ($data) {
            foreach ($data as $d) {
                $model = new User();
                $model->fill((array)$d);
                $model->id = $d->id;
                $model->real_name = $d->real_name;
                $model->mobile = $d->mobile;
                $model->unionid = $d->unionid;
                $model->openid = $d->openid;
                $model->created_at = $d->created_at;
                $model->updated_at = $d->updated_at;
                $model->save();
            }
        });
    }

    protected function system()
    {
        DB::connection('hd')->table('systems')->orderBy('id')->chunk(100, function ($data) {
            foreach ($data as $d) {
                $model = new System();
                $model->fill((array)$d);
                $model->id = $d->id;
                $model->created_at = $d->created_at;
                $model->updated_at = $d->updated_at;
                //
                $model->save();
            }
        });
    }

    protected function lesson()
    {
        DB::connection('hd')->table('lessons')->orderBy('id')->chunk(100, function ($data) {
            foreach ($data as $d) {
                Auth::login(User::find(1));
                $model = new Lesson();
                $model->fill((array)$d);
                $model->id = $d->id;
                $model->created_at = $d->created_at;
                $model->updated_at = $d->updated_at;
                //
                $model->favorite_count = $d->favorite_count;
                $model->view_num = $d->read_num;
                $model->preview = $d->thumb;
                $model->system_id = DB::connection('hd')->table('system_lesson')->where('lesson_id', $d->id)->value('system_id');

                $model->save();
            }
        });
    }

    protected function video()
    {
        DB::connection('hd')->table('videos')->orderBy('id')->chunk(100, function ($data) {
            foreach ($data as $d) {
                Auth::login(User::find(1));
                $model = new Video();
                $model->fill((array)$d);
                $model->id = $d->id;
                $model->created_at = $d->created_at;
                $model->updated_at = $d->updated_at;
                //
                $model->order = $d->rank;
                $model->view_num = $d->read_count;
                $model->save();
            }
        });
    }

    protected function topic()
    {
        DB::connection('hd')->table('topics')->orderBy('id')->chunk(100, function ($data) {
            foreach ($data as $d) {
                Auth::login(User::find($d->user_id));
                $model = new Topic();
                $model->fill((array)$d);
                $model->id = $d->id;
                $model->created_at = $d->created_at;
                $model->updated_at = $d->updated_at;
                //
                $model->user_id = $d->user_id;
                $model->recommend = $d->recommend;
                $model->favour_count = $d->favour_count;
                $model->favorite_count = $d->favorite_count;

                $model->save();
            }
        });
    }

    protected function sign()
    {
        DB::connection('hd')->table('signs')->orderBy('id')->chunk(100, function ($data) {
            foreach ($data as $d) {
                Auth::login(User::find($d->user_id));
                $model = new Sign();
                $model->fill((array)$d);
                $model->id = $d->id;
                $model->created_at = $d->created_at;
                $model->updated_at = $d->updated_at;
                //
                $model->user_id = $d->user_id;
                $model->save();
            }
        });
    }

    protected function video_play_historie()
    {
        DB::connection('hd')->table('plays')->orderBy('id')->chunk(100, function ($data) {
            foreach ($data as $d) {
                $model = new VideoPlayHistory();
                $model->fill((array)$d);
                $model->id = $d->id;
                $model->created_at = $d->created_at;
                $model->updated_at = $d->updated_at;
                //
                $model->lesson_id = DB::connection('hd')->table('videos')->where('id', $d->video_id)->value('lesson_id');

                $model->save();
            }
        });
    }

    protected function favorite()
    {
        DB::connection('hd')->table('favorites')->orderBy('id')->chunk(100, function ($data) {
            foreach ($data as $d) {
                $model = new Favorite();
                $model->fill((array)$d);
                $model->id = $d->id;
                $model->created_at = $d->created_at;
                $model->updated_at = $d->updated_at;
                //
                $model->user_id = $d->user_id;
                $model->favorite_type = $d->favorite_type;
                $model->favorite_id = $d->favorite_id;

                $model->save();
            }
        });
    }

    protected function favour()
    {
        DB::connection('hd')->table('favours')->orderBy('id')->chunk(100, function ($data) {
            foreach ($data as $d) {
                $model = new Favour();
                $model->fill((array)$d);
                $model->id = $d->id;
                $model->created_at = $d->created_at;
                $model->updated_at = $d->updated_at;
                //
                $model->user_id = $d->user_id;
                $model->favour_type = $d->favourable_type;
                $model->favour_id = $d->favourable_id;

                $model->save();
            }
        });
    }

    protected function comments()
    {
        DB::connection('hd')->table('comments')->orderBy('id')->chunk(100, function ($data) {
            foreach ($data as $d) {
                if (in_array($d->commentable_type, ['App\Models\Topic', 'App\Models\Video'])) {

                    $model = new Comment();
                    $model->fill((array)$d);
                    $model->id = $d->id;
                    $model->created_at = $d->created_at;
                    $model->updated_at = $d->updated_at;
                    //
                    $model->user_id = $d->user_id;
                    $model->commentable_type = $d->commentable_type;
                    $model->commentable_id = $d->commentable_id;
                    $model->reply_user_id = DB::connection('hd')->table('comments')->where('id', $d->reply_id)->value('user_id') ??
                        DB::connection('hd')->table('comments')->where('id', $d->comment_id)->value('user_id');

                    $model->save();
                }
            }
        });
    }

    protected function attachment()
    {
        DB::connection('hd')->table('attachments')->orderBy('id')->chunk(100, function ($data) {
            foreach ($data as $d) {
                $model = new Attachment();
                $model->fill((array)$d);
                $model->id = $d->id;
                $model->created_at = $d->created_at;
                $model->updated_at = $d->updated_at;
                //
                $model->user_id = $d->user_id;
                $model->url = $d->path;

                $model->save();
            }
        });
    }

    protected function activity()
    {
        DB::table('activity_log')->truncate();
        DB::connection('hd')->table('activity_log')->orderBy('id')->chunk(100, function ($data) {
            foreach ($data as $d) {
                $model = new Activity();
                $model->fill((array)$d);
                $model->id = $d->id;
                $model->created_at = $d->created_at;
                $model->updated_at = $d->updated_at;
                //
                $model->log_name = $d->log_name;
                $model->description = $d->description;
                $model->subject_type = $d->subject_type;
                $model->event = 'created';
                $model->subject_id = $d->subject_id;
                $model->causer_type = $d->causer_type;
                $model->causer_id = $d->causer_id;
                $model->properties = $d->properties;

                $model->save();
            }
        });
    }

    protected function order()
    {
        DB::connection('hd')->table('orders')->orderBy('id')->chunk(100, function ($data) {
            foreach ($data as $d) {
                $model = new Order();
                $model->fill((array)$d);
                $model->id = $d->id;
                $model->created_at = $d->created_at;
                $model->updated_at = $d->updated_at;
                //
                $model->user_id = $d->user_id;
                $model->save();
            }
        });
    }

    protected function duration()
    {
        DB::connection('hd')->table('durations')->orderBy('id')->chunk(100, function ($data) {
            foreach ($data as $d) {
                $model = new Duration();
                $model->fill((array)$d);
                $model->id = $d->id;
                $model->created_at = $d->created_at;
                $model->updated_at = $d->updated_at;
                //
                $model->user_id = $d->user_id;
                $model->end_time = $d->end_time;
                $model->save();
            }
        });
    }
}
