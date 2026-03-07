<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>يوساب أشرف | مطور برمجيات</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&display=swap');
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Cairo', 'Segoe UI', sans-serif;
            background: linear-gradient(145deg, #0a0c10 0%, #1a1f2c 100%);
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            margin: 0;
            position: relative;
            overflow-x: hidden;
        }

        /* خلفية متحركة بنقاط مضيئة (تأثير تقني) */
        body::before {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            background-image: radial-gradient(circle at 30% 40%, rgba(88, 166, 255, 0.08) 0%, transparent 30%),
                              radial-gradient(circle at 70% 60%, rgba(46, 160, 67, 0.08) 0%, transparent 35%),
                              repeating-linear-gradient(45deg, rgba(255,255,255,0.01) 0px, rgba(255,255,255,0.01) 2px, transparent 2px, transparent 8px);
            pointer-events: none;
            z-index: 0;
        }

        .card {
            position: relative;
            z-index: 10;
            text-align: center;
            padding: 50px 45px;
            background: rgba(22, 27, 34, 0.85);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border-radius: 32px;
            box-shadow: 0 25px 50px -8px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.05) inset;
            border: 1px solid rgba(48, 54, 61, 0.5);
            max-width: 500px;
            width: 90%;
            transition: transform 0.3s ease;
        }

        .card:hover {
            transform: translateY(-5px);
        }

        /* صورة البروفايل بشكل احترافي */
        .profile-img {
            width: 130px;
            height: 130px;
            border-radius: 50%;
            background: linear-gradient(135deg, #58a6ff, #2ea043);
            padding: 4px;
            margin: 0 auto 20px;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
            transition: 0.3s;
        }

        .profile-img img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            background-color: #0d1117;
            object-fit: cover;
            border: 3px solid #161b22;
            display: block;
        }

        /* لو مش عايز تستخدم صورة، هنستخدم الحرف الأول بشكل أنيق */
        .profile-initial {
            width: 130px;
            height: 130px;
            border-radius: 50%;
            background: linear-gradient(145deg, #1f2937, #111827);
            margin: 0 auto 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 4.2rem;
            font-weight: 700;
            color: #58a6ff;
            border: 3px solid #30363d;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
            transition: 0.3s;
        }

        .profile-initial:hover {
            border-color: #58a6ff;
            transform: scale(1.02);
        }

        h1 {
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 10px;
            background: linear-gradient(to right, #ffffff, #b1c9f0);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            letter-spacing: -0.5px;
        }

        .title-tag {
            display: inline-block;
            background: rgba(88, 166, 255, 0.15);
            color: #58a6ff;
            font-weight: 600;
            padding: 6px 20px;
            border-radius: 50px;
            font-size: 1rem;
            margin-bottom: 20px;
            border: 1px solid rgba(88, 166, 255, 0.3);
            backdrop-filter: blur(4px);
        }

        .bio {
            color: #c9d1d9;
            font-size: 1.15rem;
            line-height: 1.6;
            margin-bottom: 30px;
            border-bottom: 1px dashed #30363d;
            padding-bottom: 25px;
        }

        .stats {
            display: flex;
            justify-content: center;
            gap: 25px;
            margin-bottom: 30px;
        }

        .stat-item {
            text-align: center;
        }

        .stat-number {
            display: block;
            font-size: 1.7rem;
            font-weight: 700;
            color: #58a6ff;
            line-height: 1.2;
        }

        .stat-label {
            font-size: 0.9rem;
            color: #8b949e;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .links {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 12px;
            margin: 25px 0 10px;
        }

        .btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            padding: 12px 28px;
            color: white;
            text-decoration: none;
            border-radius: 60px;
            font-weight: 600;
            font-size: 1rem;
            transition: all 0.25s ease;
            border: 1px solid rgba(255,255,255,0.1);
            background: rgba(255,255,255,0.05);
            backdrop-filter: blur(10px);
            min-width: 140px;
        }

        .btn-primary {
            background: #238636;
            border: 1px solid #2ea043;
            box-shadow: 0 4px 12px rgba(35, 134, 54, 0.3);
        }

        .btn-primary:hover {
            background: #2ea043;
            transform: translateY(-4px);
            box-shadow: 0 10px 20px -5px #2ea043;
            border-color: #3fb950;
        }

        .btn-outline {
            border: 1px solid #58a6ff;
            color: #58a6ff;
        }

        .btn-outline:hover {
            background: rgba(88, 166, 255, 0.15);
            transform: translateY(-4px);
            border-color: #79c0ff;
            color: #79c0ff;
        }

        /* Social proof / أيقونات صغيرة */
        .social-hint {
            margin-top: 25px;
            display: flex;
            justify-content: center;
            gap: 20px;
            color: #6e7681;
            font-size: 0.9rem;
        }

        .social-hint span {
            display: flex;
            align-items: center;
            gap: 5px;
        }

        .social-hint i {
            font-style: normal;
            font-size: 1.2rem;
        }

        hr {
            border: none;
            height: 1px;
            background: linear-gradient(to left, transparent, #30363d, transparent);
            margin: 20px 0 10px;
        }

        @media (max-width: 480px) {
            .card { padding: 35px 20px; }
            h1 { font-size: 2rem; }
            .stats { gap: 15px; }
            .btn { padding: 10px 20px; min-width: 120px; }
        }
    </style>
</head>
<body>

    <div class="card">
        <!-- الصورة الشخصية بشكل احترافي (يمكنك تغييرها) -->
        <div class="profile-initial">
            ي
        </div>
        <!-- لو حابب تستخدم صورة حقيقية، استبدل الـ div أعلاه بهذا: -->
        <!-- 
        <div class="profile-img">
            <img src="your-image.jpg" alt="يوساب أشرف">
        </div> 
        -->

        <h1>يوساب أشرف</h1>
        <div class="title-tag">ⵣ مطور برمجيات • Software Engineer</div>
        
        <p class="bio">
            شغوف ببناء حلول ذكية وتجارب رقمية متميزة. 
            أؤمن بأن البرمجة فن الإبداع لحل المشكلات.
        </p>

        <!-- إحصائيات سريعة (تقديرية) -->
        <div class="stats">
            <div class="stat-item">
                <span class="stat-number">3+</span>
                <span class="stat-label">سنوات خبرة</span>
            </div>
            <div class="stat-item">
                <span class="stat-number">12</span>
                <span class="stat-label">مشروع</span>
            </div>
            <div class="stat-item">
                <span class="stat-number">5</span>
                <span class="stat-label">شهادات</span>
            </div>
        </div>

        <div class="links">
            <a href="https://github.com/YousabAshraf" class="btn btn-primary" target="_blank">
                <span>⎇</span> GitHub
            </a>
            <a href="mailto:yousab.ashraf@example.com" class="btn btn-outline">
                <span>✉️</span> راسلني
            </a>
        </div>

        <!-- لمحة عن المشاريع أو وسائل التواصل -->
        <hr>
        <div class="social-hint">
            <span><i>⚡</i> متاح للتعاون</span>
            <span><i>💻</i> Open source</span>
            <span><i>🌐</i> مصر</span>
        </div>
    </div>

</body>
</html>
