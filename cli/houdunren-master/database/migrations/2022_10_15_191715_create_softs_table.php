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
        Schema::create('softs', function (Blueprint $table) {
            $table->id();
            $table->string('title')->comment('软件名称');
            $table->string('preview')->comment('预览图');
            $table->string('file')->comment('压缩包');
            $table->string('doc_url')->comment('文档链接');
            $table->text('content')->comment('软件介绍');
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
        Schema::dropIfExists('softs');
    }
};
