<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>يوساب أشرف | Portfolio</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&display=swap');
        
        :root {
            --accent: #58a6ff;
            --success: #2ea043;
            --dark-card: rgba(22, 27, 34, 0.95);
        }

        body {
            font-family: 'Cairo', sans-serif;
            background: #0d1117;
            background-image: radial-gradient(circle at 50% 50%, #161b22 0%, #0d1117 100%);
            color: white;
            margin: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            padding: 20px;
        }

        .container {
            max-width: 500px;
            width: 100%;
            perspective: 1000px;
        }

        .card {
            background: var(--dark-card);
            border-radius: 24px;
            padding: 40px 30px;
            border: 1px solid #30363d;
            box-shadow: 0 20px 40px rgba(0,0,0,0.6);
            text-align: center;
            backdrop-filter: blur(10px);
            animation: fadeIn 0.8s ease-out;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }

        /* صورة البروفايل */
        .profile-wrapper {
            position: relative;
            width: 110px;
            height: 110px;
            margin: 0 auto 20px;
        }

        .profile-initial {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            background: #1c2128;
            border: 3px solid var(--accent);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 3rem;
            font-weight: 700;
            color: var(--accent);
            position: relative;
            z-index: 2;
        }

        .dot {
            position: absolute;
            bottom: 5px;
            right: 5px;
            width: 18px;
            height: 18px;
            background: var(--success);
            border: 3px solid #161b22;
            border-radius: 50%;
            z-index: 3;
            animation: pulse 2s infinite;
        }

        @keyframes pulse {
            0% { box-shadow: 0 0 0 0 rgba(46, 160, 67, 0.7); }
            70% { box-shadow: 0 0 0 10px rgba(46, 160, 67, 0); }
            100% { box-shadow: 0 0 0 0 rgba(46, 160, 67, 0); }
        }

        h1 { margin: 10px 0; font-size: 2rem; }
        
        .tag {
            font-size: 0.85rem;
            background: rgba(88, 166, 255, 0.1);
            color: var(--accent);
            padding: 5px 15px;
            border-radius: 50px;
            border: 1px solid rgba(88, 166, 255, 0.2);
        }

        .bio {
            color: #8b949e;
            margin: 20px 0;
            line-height: 1.6;
            font-size: 0.95rem;
        }

        /* الأزرار */
        .links {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
            margin-top: 25px;
        }

        .btn {
            padding: 12px;
            border-radius: 12px;
            text-decoration: none;
            font-weight: 600;
            font-size: 0.9rem;
            transition: 0.3s;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
        }

        .btn-gh { background: #238636; color: white; border: 1px solid #2ea043; }
        .btn-gh:hover { background: #2ea043; transform: scale(1.03); }

        .btn-in { background: #0077b5; color: white; }
        .btn-in:hover { transform: scale(1.03); }

        .btn-mail { 
            grid-column: span 2; 
            background: transparent; 
            border: 1px solid #30363d; 
            color: white; 
        }
        .btn-mail:hover { background: #30363d; }

        footer {
            margin-top: 25px;
            font-size: 0.75rem;
            color: #484f58;
            border-top: 1px solid #30363d;
            padding-top: 15px;
        }
    </style>
</head>
<body>

    <div class="container">
        <div class="card">
            <div class="profile-wrapper">
                <div class="profile-initial">ي</div>
                <div class="dot" title="Available for work"></div>
            </div>

            <h1>يوساب أشرف</h1>
            <span class="tag">Software Engineer | مطور برمجيات</span>

            <p class="bio">
                أهلاً بك! أنا يوساب، مبرمج شغوف بتحويل الأفكار المعقدة إلى كود بسيط وجميل. متخصص في بناء المواقع والحلول الرقمية.
            </p>

            <div class="links">
                <a href="https://github.com/YousabAshraf" class="btn btn-gh" target="_blank">
                    <i class="fab fa-github"></i> GitHub
                </a>
                <a href="#" class="btn btn-in" target="_blank">
                    <i class="fab fa-linkedin"></i> LinkedIn
                </a>
                <a href="mailto:yousab.ashraf@gmail.com" class="btn btn-mail">
                    <i class="fas fa-envelope"></i> تواصل معي عبر البريد
                </a>
            </div>

            <footer>
                <i class="fas fa-location-dot"></i> مصر | صنع بكل حب بواسطة يوساب
            </footer>
        </div>
    </div>

</body>
</html>
