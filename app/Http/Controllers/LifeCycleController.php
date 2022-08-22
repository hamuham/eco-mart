<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LifeCycleController extends Controller
{
    //
    public function showServiceContainerTest()
    {
        app()->bind('lifeCycleTest', function(){
            return 'ライフサイクルテスト';
        });

        $test = app()->make('sample');

        // サービスコンテナなし
        $message = new Message();
        $asample = new Sample($message);
        // $sample->run();

        // サービスコンテナapp()ありのパターン
        app()->bind('sample', Sample::class);
        $sample = app()->make('sample');
        $sample->run();
        dd($test, app());
    }
}

class sample
{
    public $message;
    public function __construct(Message $message) {
        $this->message = $message;
    }
        public function run() {
            $this->message->send();
        }
    }
}

class Message
{
    public function send() {
        echo('message');
    }
}
