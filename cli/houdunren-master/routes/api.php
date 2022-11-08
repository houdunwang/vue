<?php

use App\Http\Controllers\ActivityController;
use App\Http\Controllers\AlipayController;
use App\Http\Controllers\AttachmentController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CodeController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\CommentShotController;
use App\Http\Controllers\ConfigController;
use App\Http\Controllers\DurationController;
use App\Http\Controllers\FavoriteController;
use App\Http\Controllers\FavourController;
use App\Http\Controllers\FollowerController;
use App\Http\Controllers\LearnHistoryController;
use App\Http\Controllers\LessonController;
use App\Http\Controllers\MorningController;
use App\Http\Controllers\NotificationController;
use App\Http\Controllers\QuestionAnswerController;
use App\Http\Controllers\QuestionController;
use App\Http\Controllers\SearchController;
use App\Http\Controllers\SignController;
use App\Http\Controllers\SignCountController;
use App\Http\Controllers\SoftController;
use App\Http\Controllers\SystemController;
use App\Http\Controllers\TagController;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\TopicController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\VideoController;
use App\Http\Controllers\WechatAuthController;
use App\Http\Controllers\WechatBindController;
use App\Http\Controllers\WechatController;
use App\Http\Controllers\WechatLoginController;
use App\Http\Controllers\WechatMenuController;
use App\Http\Controllers\WepayController;
use Illuminate\Support\Facades\Route;

//验证码
Route::controller(CodeController::class)->prefix('code')->group(function () {
    Route::post('exists', 'exists');
    Route::post('no-exists', 'noExists');
});

//登录注册
Route::controller(AuthController::class)->prefix('auth')->group(function () {
    Route::post('login', 'login');
    Route::post('logout', 'logout');
    Route::post('find-password', 'findPassword');
});

//用户管理
Route::controller(UserController::class)->prefix('user')->group(function () {
    Route::get('current', 'current');
    Route::get('info/{user}', 'info');
    Route::post('account_is_exists', 'accountsIsExists');
    Route::put('update', 'update');
    Route::put('password', 'password');
    Route::put('email', 'email');
    Route::put('mobile', 'mobile');
    Route::delete('delete', 'delete');
    Route::apiResource('', UserController::class)->parameters(['' => 'user']);
});

//贴子TOPIC
Route::put('topic/recommend/{topic}', [TopicController::class, 'recommend']);
Route::get('topic/recommend', [TopicController::class, 'recommendList']);
Route::get('topic/user/{user}', [TopicController::class, 'user']);
Route::apiResource('topic', TopicController::class);

//用户关注
Route::controller(FollowerController::class)->prefix('follower')->group(function () {
    Route::get('fans/{user}', 'fans');
    Route::get('follower/{user}', 'follower');
    Route::get('{user}', 'make');
});

//课程
Route::apiResource('lesson', LessonController::class);

//视频
Route::get('video/lesson/{lesson}', [VideoController::class, 'getLessonVideo']);
Route::get('video/history/{user}', [VideoController::class, 'learnLessonVideo']);
Route::apiResource('video', VideoController::class);

//搜索视频
Route::get('search/video', [SearchController::class, 'video']);

//学习历史
Route::controller(LearnHistoryController::class)->prefix('learn/history')->group(function () {
    Route::get('videos', 'videos');
    Route::get('lessonVideos/{lesson}', 'lessonVideos');
    Route::get('user/{user}', 'userVideos');
});

//系统课程
Route::put('system/order', [SystemController::class, 'order']);
Route::apiResource('system', SystemController::class);

//标签管理
Route::apiResource('tag', TagController::class);

//收藏资源
Route::controller(FavoriteController::class)->prefix('favorite')->group(function () {
    Route::get('userFavoriteList/{type}/{user}', 'getUserFavoriteList');
    Route::post('{type}/{mid}', 'toggleFavorite');
    Route::get('{type}/{mid}', 'modelFavoriteInfo');
});

//点赞操作
Route::controller(FavourController::class)->prefix('favour')->group(function () {
    Route::post('{type}/{mid}', 'make');
    Route::get('{type}/{mid}', 'show');
});

//用户签到
Route::controller(SignController::class)->prefix('sign')->group(function () {
    Route::get('userSignList/{user}', [SignController::class, 'userSignList']);
    Route::get('todaySignList', [SignController::class, 'todaySignList']);
});
Route::apiResource('sign', SignController::class);

//签到统计
Route::controller(SignCountController::class)->prefix('signCount')->group(function () {
    Route::get('mySignCount', [SignCountController::class, 'mySignCount']);
});

//评论
Route::apiResource('comment', CommentController::class);

//全站动态
Route::apiResource('activity', ActivityController::class);

//上传处理
Route::controller(AttachmentController::class)->prefix("upload")->group(function () {
    Route::post('image', 'image');
});

//直播评论截图
Route::controller(CommentShotController::class)->prefix("shot")->group(function () {
    Route::get('comment', 'comment');
    Route::get('live', 'live');
});

//配置
Route::get('config/base', [ConfigController::class, 'base']);
Route::get('config/all', [ConfigController::class, 'all']);
Route::put('config', [ConfigController::class, 'update']);

//微信公众号通知
Route::any('wechat', [WechatController::class, 'handle']);

//微信登录
Route::post('wechat/sancLogin/{ticket}', [WechatLoginController::class, 'sancLogin']);
Route::post('wechat/scanloginQr', [WechatLoginController::class, 'scanloginQr']);
Route::get('wechat/scanLoginQrImage/{ticket}', [WechatLoginController::class, 'scanLoginQrImage']);

//微信绑定
Route::post('wechat/bind/{ticket?}', [WechatBindController::class, 'bind']);
Route::post('wechat/unbind/{ticket?}', [WechatBindController::class, 'unbind']);

//站内通知
Route::apiResource('notification', NotificationController::class);

//支付宝
Route::controller(AlipayController::class)->prefix("alipay")->group(function () {
    Route::post('create_order', 'createOrder');
    Route::get('pay/{order:sn}', 'pay');
    Route::get('return', 'returnUrl');
    Route::any('notify', 'notifyUrl');
});

//微信支付
Route::controller(WepayController::class)->prefix("wepay")->group(function () {
    Route::post('create_order', 'createOrder');
    Route::get('pay/{order:sn}', 'pay');
    Route::get('mp', 'mp');
    Route::any('notify', 'notifyUrl');
});

//活动
Route::controller(TaskController::class)->prefix("task")->group(function () {
    Route::post('make', 'delay');
});

//会员订阅时长
Route::get('duration', [DurationController::class, 'index']);

//早起活动
Route::controller(MorningController::class)->prefix("morning")->group(function () {
    Route::get('latest', 'latest');
    Route::post('luck', 'luck');
    Route::get('signs', 'signs');
});
Route::apiResource('morning', MorningController::class);

//官方软件
Route::apiResource('soft', SoftController::class);

//微信菜单
Route::apiResource('wechat/menu', WechatMenuController::class);

//金榜提名-问题
Route::get('question/user_question_list/{user}', [QuestionController::class, 'userQuestionList']);
Route::get('question/examine', [QuestionController::class, 'examine']);
Route::get('question/relation_question/{question}', [QuestionController::class, 'relationQuestion']);
Route::apiResource('question', QuestionController::class);

//答题
Route::get('question_answer/ranking_list', [QuestionAnswerController::class, 'rankingList']);
Route::get('question_answer/questionRankTotal', [QuestionAnswerController::class, 'questionRankTotal']);
Route::get('question_answer/my_answer_list', [QuestionAnswerController::class, 'myAnswerList']);
Route::apiResource('question_answer', QuestionAnswerController::class);
