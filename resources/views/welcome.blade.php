<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
        <title>Laravel</title>
        <!--Styles-->
        <style>
            * {
                padding: 0;
                margin: 0;
                box-sizing: border-box;
                font-family: 'Nunito';
            }
            .header {
                height: 50px;
                width: 100%;
                padding-left: 200px;
                padding-right: 200px;
                border-bottom: 1px solid black;
                display: flex;
                align-items: center;
            }
            .header a {
                margin-right: 30px;
                color: black;
                text-decoration: none;
            }
            .header a:visited {
                color: black;
                text-decoration: none;
            }
            .header a:hover {
                text-decoration: underline;
            }
            .container {
                width: 100%;
                padding: 50px 200px;
            }
            .input {
                display: none;
            }
            .textarea {
                width: 100%;
                padding: 10px;
                height: 100px;
                margin-bottom: 5px;
            }
            .submit {
                padding: 10px;
                cursor: pointer;
            }
            .messages {
                margin-top: 30px;
            }
            .messages div:nth-child(even) {
                background-color: grey;
                padding: 30px;
                border-radius: 10px;
                margin-top: 10px;
                margin-bottom: 10px;
                border: 1px solid black;
            }
            .messages div:nth-child(even) * {
                color: white;
            }
            .messages div:nth-child(odd) {
                background-color: white;
                padding: 30px;
                border-radius: 10px;
                margin-top: 10px;
                margin-bottom: 10px;
                border: 1px solid black;
            }
        </style>
    </head>
    <body>
        <div id="app">
            <!--Use react components-->
        </div>
        <!--Scripts-->
        <script src="{{ mix('/js/app.js') }}"></script>
    </body>
</html>
