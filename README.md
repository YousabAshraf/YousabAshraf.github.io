<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>يوساب أشرف | Yousab Ashraf</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #0d1117;
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            margin: 0;
            padding: 20px;
        }

        .card {
            text-align: center;
            padding: 40px 30px;
            background: #161b22;
            border-radius: 20px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.6);
            border: 1px solid #30363d;
            max-width: 400px;
            width: 100%;
            transition: transform 0.3s;
        }

        .card:hover {
            transform: translateY(-5px);
        }

        h1 {
            margin-bottom: 10px;
            color: #58a6ff;
            font-size: 2em;
        }

        p {
            color: #8b949e;
            font-size: 1.1em;
            line-height: 1.6;
        }

        .links {
            margin-top: 25px;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
        }

        .btn {
            display: inline-block;
            padding: 12px 25px;
            margin: 5px;
            color: white;
            text-decoration: none;
            border-radius: 8px;
            background-color: #238636;
            font-weight: bold;
            transition: 0.3s;
        }

        .btn:hover {
            background-color: #2ea043;
            transform: translateY(-3px);
        }

        /* تحسين العرض على الموبايل */
        @media (max-width: 500px) {
            .card {
                padding: 30px 20px;
            }
            h1 {
                font-size: 1.8em;
            }
            p {
                font-size: 1em;
            }
            .btn {
                padding: 10px 20px;
            }
        }
    </style>
</head>
<body>

    <div class="card">
        <h1>يوساب أشرف</h1>
        <p>مرحباً بك في موقعي الشخصي! أنا مطور برمجيات شغوف ببناء حلول ذكية.</p>
        
        <div class="links">
            <a href="https://github.com/YousabAshraf" class="btn" target="_blank">GitHub</a>
            <a href="mailto:your-email@example.com" class="btn">تواصل معي</a>
        </div>
    </div>

</body>
</html>
