<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->foreignId("user_id")->constrained('users')->onDelete('cascade');
            $table->string('sn')->comment('定单号');
            $table->string('subject')->comment('订单描述');
            $table->foreignId('lesson_id')->nullable()->constrained()->onDelete('cascade')->comment('购买的课程');
            $table->decimal('price')->comment('价格');
            $table->string('trade_no')->nullable()->comment('支付平台单号');
            $table->string('pay_type')->nullable()->comment('支付类型');
            $table->boolean('pay_state')->default(false)->comment('支付状态');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('orders');
    }
};
