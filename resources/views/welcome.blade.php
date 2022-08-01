<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
    @vite('resources/css/app.css')
</head>
<body>
    @viteReactRefresh
    {{-- memanggil mix folder lravel --}}
    @vite('resources/js/app.jsx')
    <div id="app"></div>
</body>
</html>
