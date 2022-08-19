@props([
    'title',
    'message' => '初期値',
    'content' => '本文初期値'
])

<div {{ $asstibutes->merge([
    'class' => 'border-2 shadow-md w-14 p-2'
    ]) }} >
    <div>{{ $title }}</div>
    <div>画像</div>
    <div>{{ $content }}</div>
    <div>{{ $message }}</div>
</div>
