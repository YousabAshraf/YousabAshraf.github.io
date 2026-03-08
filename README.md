
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>يوساب أشرف | مهندس برمجيات</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700;800&display=swap');
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Cairo', sans-serif;
            background: #0a0c0f;
            color: #e6edf3;
            line-height: 1.6;
        }

        /* شريط التنقل */
        .navbar {
            background: rgba(10, 12, 15, 0.95);
            backdrop-filter: blur(10px);
            padding: 1rem 5%;
            position: fixed;
            width: 100%;
            top: 0;
            z-index: 1000;
            border-bottom: 1px solid #2d333b;
        }

        .nav-container {
            max-width: 1300px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .logo {
            font-size: 1.8rem;
            font-weight: 800;
            background: linear-gradient(135deg, #58a6ff, #bb9af7);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .nav-links {
            display: flex;
            gap: 2rem;
        }

        .nav-links a {
            color: #e6edf3;
            text-decoration: none;
            font-weight: 500;
            transition: 0.3s;
            position: relative;
        }

        .nav-links a::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 0;
            height: 2px;
            background: #58a6ff;
            transition: 0.3s;
        }

        .nav-links a:hover::after {
            width: 100%;
        }

        /* القسم الرئيسي */
        .hero {
            min-height: 100vh;
            display: flex;
            align-items: center;
            padding: 0 5%;
            margin-top: 60px;
            background: radial-gradient(circle at 70% 30%, rgba(88, 166, 255, 0.05) 0%, transparent 50%);
        }

        .hero-container {
            max-width: 1300px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            align-items: center;
        }

        .hero-content {
            animation: slideUp 1s ease;
        }

        .greeting {
            color: #58a6ff;
            font-size: 1.2rem;
            margin-bottom: 1rem;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .greeting-line {
            width: 50px;
            height: 2px;
            background: #58a6ff;
        }

        .hero-content h1 {
            font-size: 3.5rem;
            font-weight: 800;
            line-height: 1.2;
            margin-bottom: 1.5rem;
        }

        .hero-content h1 span {
            background: linear-gradient(135deg, #58a6ff, #bb9af7);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            display: block;
        }

        .hero-text {
            font-size: 1.2rem;
            color: #8b949e;
            margin-bottom: 2rem;
            max-width: 500px;
        }

        .hero-buttons {
            display: flex;
            gap: 1rem;
            margin-bottom: 3rem;
        }

        .btn {
            padding: 12px 32px;
            border-radius: 8px;
            text-decoration: none;
            font-weight: 600;
            transition: 0.3s;
            display: inline-flex;
            align-items: center;
            gap: 8px;
        }

        .btn-primary {
            background: #238636;
            color: white;
            border: 1px solid #2ea043;
        }

        .btn-primary:hover {
            background: #2ea043;
            transform: translateY(-3px);
            box-shadow: 0 10px 20px -10px #238636;
        }

        .btn-outline {
            border: 1px solid #58a6ff;
            color: #58a6ff;
        }

        .btn-outline:hover {
            background: rgba(88, 166, 255, 0.1);
            transform: translateY(-3px);
        }

        .hero-stats {
            display: flex;
            gap: 3rem;
        }

        .stat-item {
            text-align: center;
        }

        .stat-number {
            font-size: 2rem;
            font-weight: 800;
            color: #58a6ff;
        }

        .stat-label {
            color: #8b949e;
            font-size: 0.9rem;
        }

        .hero-image {
            position: relative;
            animation: slideUp 1s ease 0.2s both;
        }

        .profile-frame {
            width: 400px;
            height: 400px;
            background: linear-gradient(135deg, #58a6ff, #bb9af7);
            border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
            animation: morph 8s ease-in-out infinite;
            position: relative;
            overflow: hidden;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        .profile-frame::before {
            content: 'ي';
            position: absolute;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 8rem;
            font-weight: 800;
            color: rgba(255, 255, 255, 0.9);
            background: rgba(22, 27, 34, 0.3);
            backdrop-filter: blur(2px);
        }

        /* قسم الخدمات */
        .services {
            padding: 100px 5%;
            background: #0d1117;
        }

        .section-header {
            text-align: center;
            margin-bottom: 4rem;
        }

        .section-subtitle {
            color: #58a6ff;
            font-size: 1.1rem;
            margin-bottom: 1rem;
        }

        .section-title {
            font-size: 2.5rem;
            font-weight: 800;
            margin-bottom: 1rem;
        }

        .section-title span {
            background: linear-gradient(135deg, #58a6ff, #bb9af7);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .services-grid {
            max-width: 1300px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
        }

        .service-card {
            background: #161b22;
            padding: 2rem;
            border-radius: 20px;
            border: 1px solid #2d333b;
            transition: 0.3s;
            position: relative;
            overflow: hidden;
        }

        .service-card:hover {
            transform: translateY(-10px);
            border-color: #58a6ff;
            box-shadow: 0 20px 30px -15px #58a6ff20;
        }

        .service-icon {
            font-size: 3rem;
            margin-bottom: 1.5rem;
        }

        .service-card h3 {
            font-size: 1.5rem;
            margin-bottom: 1rem;
            color: #58a6ff;
        }

        .service-card p {
            color: #8b949e;
            margin-bottom: 1.5rem;
        }

        .service-link {
            color: #58a6ff;
            text-decoration: none;
            display: flex;
            align-items: center;
            gap: 5px;
            font-weight: 600;
        }

        /* قسم المشاريع */
        .projects {
            padding: 100px 5%;
        }

        .projects-grid {
            max-width: 1300px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 2rem;
        }

        .project-card {
            background: #161b22;
            border-radius: 20px;
            overflow: hidden;
            border: 1px solid #2d333b;
            transition: 0.3s;
        }

        .project-card:hover {
            transform: translateY(-10px);
            border-color: #58a6ff;
        }

        .project-image {
            height: 200px;
            background: linear-gradient(45deg, #1f2937, #111827);
            position: relative;
            overflow: hidden;
        }

        .project-image::before {
            content: '💻';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 3rem;
            opacity: 0.5;
        }

        .project-content {
            padding: 1.5rem;
        }

        .project-tags {
            display: flex;
            gap: 0.5rem;
            margin-bottom: 1rem;
            flex-wrap: wrap;
        }

        .tag {
            background: #1f2937;
            color: #58a6ff;
            padding: 4px 12px;
            border-radius: 50px;
            font-size: 0.8rem;
            border: 1px solid #2d333b;
        }

        .project-content h3 {
            font-size: 1.3rem;
            margin-bottom: 0.5rem;
        }

        .project-content p {
            color: #8b949e;
            margin-bottom: 1rem;
        }

        .project-links {
            display: flex;
            gap: 1rem;
        }

        .project-links a {
            color: #58a6ff;
            text-decoration: none;
            font-size: 0.9rem;
        }

        /* قسم المهارات */
        .skills {
            padding: 100px 5%;
            background: #0d1117;
        }

        .skills-container {
            max-width: 1300px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 3rem;
        }

        .skill-category h3 {
            color: #58a6ff;
            margin-bottom: 1.5rem;
            font-size: 1.3rem;
        }

        .skill-items {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }

        .skill-item {
            width: 100%;
        }

        .skill-info {
            display: flex;
            justify-content: space-between;
            margin-bottom: 0.5rem;
        }

        .skill-bar {
            height: 8px;
            background: #1f2937;
            border-radius: 4px;
            overflow: hidden;
        }

        .skill-progress {
            height: 100%;
            background: linear-gradient(90deg, #58a6ff, #bb9af7);
            border-radius: 4px;
            width: 0;
            transition: width 1s ease;
        }

        /* قسم التواصل */
        .contact {
            padding: 100px 5%;
        }

        .contact-container {
            max-width: 800px;
            margin: 0 auto;
            text-align: center;
        }

        .contact-text {
            color: #8b949e;
            font-size: 1.2rem;
            margin-bottom: 3rem;
        }

        .contact-info {
            display: flex;
            justify-content: center;
            gap: 3rem;
            flex-wrap: wrap;
        }

        .contact-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.5rem;
        }

        .contact-icon {
            width: 60px;
            height: 60px;
            background: #161b22;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            border: 1px solid #2d333b;
            transition: 0.3s;
        }

        .contact-item:hover .contact-icon {
            border-color: #58a6ff;
            transform: translateY(-5px);
        }

        .contact-item a {
            color: #58a6ff;
            text-decoration: none;
        }

        /* الفوتر */
        .footer {
            padding: 2rem 5%;
            background: #0d1117;
            border-top: 1px solid #2d333b;
            text-align: center;
            color: #8b949e;
        }

        /* Animations */
        @keyframes slideUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes morph {
            0%, 100% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
            25% { border-radius: 58% 42% 75% 25% / 76% 46% 54% 24%; }
            50% { border-radius: 50% 50% 33% 67% / 55% 27% 73% 45%; }
            75% { border-radius: 33% 67% 58% 42% / 63% 68% 32% 37%; }
        }

        @media (max-width: 968px) {
            .hero-container {
                grid-template-columns: 1fr;
                text-align: center;
            }

            .hero-content h1 span {
                display: inline;
            }

            .hero-buttons {
                justify-content: center;
            }

            .hero-stats {
                justify-content: center;
            }

            .profile-frame {
                width: 300px;
                height: 300px;
                margin: 0 auto;
            }
        }

        @media (max-width: 768px) {
            .nav-links {
                display: none;
            }

            .hero-content h1 {
                font-size: 2.5rem;
            }
        }
    </style>
</head>
<body>
    <!-- شريط التنقل -->
    <nav class="navbar">
        <div class="nav-container">
            <div class="logo">يوساب أشرف</div>
            <div class="nav-links">
                <a href="#home">الرئيسية</a>
                <a href="#services">خدماتي</a>
                <a href="#projects">مشاريعي</a>
                <a href="#skills">مهاراتي</a>
                <a href="#contact">تواصل معي</a>
            </div>
        </div>
    </nav>

    <!-- القسم الرئيسي -->
    <section class="hero" id="home">
        <div class="hero-container">
            <div class="hero-content">
                <div class="greeting">
                    <span class="greeting-line"></span>
                    <span>مرحباً، أنا</span>
                </div>
                <h1>
                    يوساب أشرف
                    <span>مهندس برمجيات</span>
                </h1>
                <p class="hero-text">
                    مطور برمجيات شغوف ببناء حلول ذكية وتجارب رقمية متميزة. 
                    أحول الأفكار إلى تطبيقات واقعية باستخدام أحدث التقنيات.
                </p>
                <div class="hero-buttons">
                    <a href="#contact" class="btn btn-primary">تواصل معي</a>
                    <a href="#projects" class="btn btn-outline">مشاريعي</a>
                </div>
                <div class="hero-stats">
                    <div class="stat-item">
                        <div class="stat-number">3+</div>
                        <div class="stat-label">سنوات خبرة</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-number">15+</div>
                        <div class="stat-label">مشروع مكتمل</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-number">10+</div>
                        <div class="stat-label">عميل سعيد</div>
                    </div>
                </div>
            </div>
            <div class="hero-image">
                <div class="profile-frame"></div>
            </div>
        </div>
    </section>

    <!-- قسم الخدمات -->
    <section class="services" id="services">
        <div class="section-header">
            <div class="section-subtitle">ماذا أقدم</div>
            <h2 class="section-title">خدماتي <span>الاحترافية</span></h2>
        </div>
        <div class="services-grid">
            <div class="service-card">
                <div class="service-icon">💻</div>
                <h3>تطوير مواقع</h3>
                <p>بناء مواقع ويب متجاوبة وعالية الأداء باستخدام أحدث التقنيات مثل React و Next.js</p>
                <a href="#" class="service-link">اعرف المزيد ←</a>
            </div>
            <div class="service-card">
                <div class="service-icon">📱</div>
                <h3>تطبيقات موبايل</h3>
                <p>تطوير تطبيقات موبايل احترافية لنظامي iOS و Android باستخدام Flutter و React Native</p>
                <a href="#" class="service-link">اعرف المزيد ←</a>
            </div>
            <div class="service-card">
                <div class="service-icon">⚙️</div>
                <h3>حلول ذكية</h3>
                <p>تصميم وتطوير حلول برمجية مخصصة تلبي احتياجات عملك بدقة وكفاءة عالية</p>
                <a href="#" class="service-link">اعرف المزيد ←</a>
            </div>
        </div>
    </section>

    <!-- قسم المشاريع -->
    <section class="projects" id="projects">
        <div class="section-header">
            <div class="section-subtitle">أعمالي السابقة</div>
            <h2 class="section-title">أحدث <span>المشاريع</span></h2>
        </div>
        <div class="projects-grid">
            <div class="project-card">
                <div class="project-image"></div>
                <div class="project-content">
                    <div class="project-tags">
                        <span class="tag">React</span>
                        <span class="tag">Node.js</span>
                        <span class="tag">MongoDB</span>
                    </div>
                    <h3>منصة تعليمية</h3>
                    <p>منصة تفاعلية للتعلم عن بعد مع نظام إدارة محتوى متكامل</p>
                    <div class="project-links">
                        <a href="#">عرض المشروع →</a>
                        <a href="#">الكود المصدري →</a>
                    </div>
                </div>
            </div>
            <div class="project-card">
                <div class="project-image"></div>
                <div class="project-content">
                    <div class="project-tags">
                        <span class="tag">Flutter</span>
                        <span class="tag">Firebase</span>
                    </div>
                    <h3>تطبيق توصيل</h3>
                    <p>تطبيق متكامل لخدمات التوصيل مع تتبع مباشر للمندوبين</p>
                    <div class="project-links">
                        <a href="#">عرض المشروع →</a>
                        <a href="#">الكود المصدري →</a>
                    </div>
                </div>
            </div>
            <div class="project-card">
                <div class="project-image"></div>
                <div class="project-content">
                    <div class="project-tags">
                        <span class="tag">Next.js</span>
                        <span class="tag">TypeScript</span>
                        <span class="tag">Prisma</span>
                    </div>
                    <h3>نظام إدارة متجر</h3>
                    <p>لوحة تحكم متكاملة لإدارة المخزون والمبيعات والتقارير</p>
                    <div class="project-links">
                        <a href="#">عرض المشروع →</a>
                        <a href="#">الكود المصدري →</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- قسم المهارات -->
    <section class="skills" id="skills">
        <div class="section-header">
            <div class="section-subtitle">خبراتي التقنية</div>
            <h2 class="section-title">مهاراتي <span>البرمجية</span></h2>
        </div>
        <div class="skills-container">
            <div class="skill-category">
                <h3>Frontend</h3>
                <div class="skill-items">
                    <div class="skill-item">
                        <div class="skill-info">
                            <span>React / Next.js</span>
                            <span>90%</span>
                        </div>
                        <div class="skill-bar">
                            <div class="skill-progress" style="width: 90%"></div>
                        </div>
                    </div>
                    <div class="skill-item">
                        <div class="skill-info">
                            <span>JavaScript / TypeScript</span>
                            <span>85%</span>
                        </div>
                        <div class="skill-bar">
                            <div class="skill-progress" style="width: 85%"></div>
                        </div>
                    </div>
                    <div class="skill-item">
                        <div class="skill-info">
                            <span>HTML5 / CSS3</span>
                            <span>95%</span>
                        </div>
                        <div class="skill-bar">
                            <div class="skill-progress" style="width: 95%"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="skill-category">
                <h3>Backend</h3>
                <div class="skill-items">
                    <div class="skill-item">
                        <div class="skill-info">
                            <span>Node.js</span>
                            <span>85%</span>
                        </div>
                        <div class="skill-bar">
                            <div class="skill-progress" style="width: 85%"></div>
                        </div>
                    </div>
                    <div class="skill-item">
                        <div class="skill-info">
                            <span>Python / Django</span>
                            <span>75%</span>
                        </div>
                        <div class="skill-bar">
                            <div class="skill-progress" style="width: 75%"></div>
                        </div>
                    </div>
                    <div class="skill-item">
                        <div class="skill-info">
                            <span>Databases</span>
                            <span>80%</span>
                        </div>
                        <div class="skill-bar">
                            <div class="skill-progress" style="width: 80%"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="skill-category">
                <h3>أدوات وتقنيات</h3>
                <div class="skill-items">
                    <div class="skill-item">
                        <div class="skill-info">
                            <span>Git / GitHub</span>
                            <span>90%</span>
                        </div>
                        <div class="skill-bar">
                            <div class="skill-progress" style="width: 90%"></div>
                        </div>
                    </div>
                    <div class="skill-item">
                        <div class="skill-info">
                            <span>Docker</span>
                            <span>70%</span>
                        </div>
                        <div class="skill-bar">
                            <div class="skill-progress" style="width: 70%"></div>
                        </div>
                    </div>
                    <div class="skill-item">
                        <div class="skill-info">
                            <span>Figma</span>
                            <span>75%</span>
                        </div>
                        <div class="skill-bar">
                            <div class="skill-progress" style="width: 75%"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- قسم التواصل -->
    <section class="contact" id="contact">
        <div class="contact-container">
            <div class="section-header">
                <div class="section-subtitle">تواصل معي</div>
                <h2 class="section-title">دعنا نعمل <span>معاً</span></h2>
            </div>
            <p class="contact-text">
                هل لديك فكرة مشروع أو استفسار؟ أنا هنا للمساعدة!
            </p>
            <div class="contact-info">
                <div class="contact-item">
                    <div class="contact-icon">📧</div>
                    <a href="mailto:yousab.ashraf@example.com">yousab.ashraf@example.com</a>
                </div>
                <div class="contact-item">
                    <div class="contact-icon">📱</div>
                    <a href="https://github.com/YousabAshraf" target="_blank">GitHub</a>
                </div>
                <div class="contact-item">
                    <div class="contact-icon">💼</div>
                    <a href="#">LinkedIn</a>
                </div>
            </div>
        </div>
    </section>

    <!-- الفوتر -->
    <footer class="footer">
        <p>© 2026 يوساب أشرف - جميع الحقوق محفوظة</p>
    </footer>
</body>
</html>
