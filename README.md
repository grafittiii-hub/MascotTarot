<!DOCTYPE html>
<html lang="zh-TW">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>邂逅孫孫塔羅 - 大阿爾克那牌</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700;900&family=Philosopher:wght@400;700&family=Noto+Serif+TC:wght@400;700&display=swap" rel="stylesheet">

    <!-- Libraries for image generation -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js"></script>

    <meta property="og:title" content="我的專屬塔羅啟示！">
    <meta property="og:description" content="4 題, 查看孫孫帶來的心靈指引。">
    <meta property="og:image" content="https://yourwebsite.com/images/default_tarot_preview.jpg">

    <style>
        /* --- 神秘塔羅視覺系統 --- */
        :root {
            --color-primary: #1a0d2e; /* 深紫藍色 - 夜空 */
            --color-secondary: #d4af37; /* 古金色 - 神秘金 */
            --color-accent: #6a0572; /* 深紫色 - 魔法紫 */
            --color-mystical: #c154c1; /* 亮紫色 - 靈性光芒 */
            --color-text-light: #e8d5c4;
            --color-text-gold: #f4e4c1;
            --color-bg-dark: #0d0221; /* 深邃黑紫 */
            --font-title: 'Philosopher', 'Noto Serif TC', serif;
            --font-body: 'Philosopher', 'Noto Serif TC', serif;
        }

        * {
            box-sizing: border-box;
        }

        body {
            font-family: var(--font-body);
            margin: 0;
            padding: 0;
            background-color: var(--color-bg-dark);
            color: var(--color-text-light);
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            position: relative;
            overflow: hidden;

            /* --- 神秘深邃星空背景 --- */
            background:
                /* 神秘光暈 */
                radial-gradient(ellipse 600px 400px at 20% 30%, rgba(106, 5, 114, 0.15), transparent 70%),
                radial-gradient(ellipse 500px 500px at 80% 70%, rgba(193, 84, 193, 0.1), transparent 70%),
                radial-gradient(ellipse 400px 300px at 50% 50%, rgba(212, 175, 55, 0.08), transparent 60%),

                /* 大型明亮星星 */
                radial-gradient(circle 2.5px at 15% 25%, white, transparent),
                radial-gradient(circle 2px at 85% 15%, rgba(255, 255, 255, 0.95), transparent),
                radial-gradient(circle 2px at 45% 60%, white, transparent),
                radial-gradient(circle 2.5px at 70% 85%, rgba(255, 255, 255, 0.9), transparent),
                radial-gradient(circle 2px at 30% 45%, white, transparent),

                /* 中型金色星星 */
                radial-gradient(circle 1.5px at 60% 70%, rgba(212, 175, 55, 0.9), transparent),
                radial-gradient(circle 1.5px at 25% 80%, rgba(212, 175, 55, 0.85), transparent),
                radial-gradient(circle 1.3px at 90% 40%, rgba(212, 175, 55, 0.8), transparent),
                radial-gradient(circle 1.5px at 50% 20%, rgba(212, 175, 55, 0.9), transparent),
                radial-gradient(circle 1.3px at 10% 55%, rgba(212, 175, 55, 0.75), transparent),

                /* 中型紫色星星 */
                radial-gradient(circle 1.2px at 80% 20%, rgba(193, 84, 193, 0.85), transparent),
                radial-gradient(circle 1px at 40% 80%, rgba(193, 84, 193, 0.8), transparent),
                radial-gradient(circle 1.3px at 65% 35%, rgba(193, 84, 193, 0.9), transparent),
                radial-gradient(circle 1px at 20% 65%, rgba(193, 84, 193, 0.75), transparent),

                /* 小型白色星星群 */
                radial-gradient(circle 0.8px at 35% 15%, white, transparent),
                radial-gradient(circle 0.6px at 55% 50%, rgba(255, 255, 255, 0.8), transparent),
                radial-gradient(circle 0.7px at 75% 75%, white, transparent),
                radial-gradient(circle 0.6px at 18% 90%, rgba(255, 255, 255, 0.85), transparent),
                radial-gradient(circle 0.8px at 92% 60%, white, transparent),
                radial-gradient(circle 0.7px at 48% 92%, rgba(255, 255, 255, 0.9), transparent),

                /* 微小星塵 */
                radial-gradient(circle 0.4px at 12% 35%, rgba(255, 255, 255, 0.6), transparent),
                radial-gradient(circle 0.5px at 68% 12%, rgba(212, 175, 55, 0.7), transparent),
                radial-gradient(circle 0.4px at 88% 88%, rgba(255, 255, 255, 0.65), transparent),
                radial-gradient(circle 0.3px at 42% 38%, rgba(193, 84, 193, 0.6), transparent),
                radial-gradient(circle 0.5px at 95% 25%, rgba(255, 255, 255, 0.7), transparent),
                radial-gradient(circle 0.4px at 58% 85%, rgba(212, 175, 55, 0.65), transparent),

                /* 深邃宇宙底色 */
                linear-gradient(180deg, #0d0221 0%, #1a0d2e 50%, #16001e 100%);

            background-size:
                2000px 2000px, 2000px 2000px, 2000px 2000px,
                /* 大星星 */
                220px 220px, 280px 280px, 240px 240px, 260px 260px, 200px 200px,
                /* 中型金色 */
                180px 180px, 190px 190px, 210px 210px, 195px 195px, 185px 185px,
                /* 中型紫色 */
                170px 170px, 165px 165px, 175px 175px, 180px 180px,
                /* 小星星 */
                140px 140px, 150px 150px, 145px 145px, 135px 135px, 155px 155px, 138px 138px,
                /* 微小星塵 */
                100px 100px, 110px 110px, 95px 95px, 105px 105px, 98px 98px, 102px 102px,
                100% 100%;

            background-repeat: repeat, repeat, repeat,
                repeat, repeat, repeat, repeat, repeat,
                repeat, repeat, repeat, repeat, repeat,
                repeat, repeat, repeat, repeat,
                repeat, repeat, repeat, repeat, repeat, repeat,
                repeat, repeat, repeat, repeat, repeat, repeat,
                no-repeat;
            animation: cosmicFlow 60s linear infinite, subtleGlow 8s ease-in-out infinite alternate;
            will-change: background-position; /* GPU加速 */
        }

        /* 宇宙流動動畫 - 加速且多層次移動 */
        @keyframes cosmicFlow {
            0% {
                background-position:
                    0 0, 0 0, 0 0,
                    /* 大星星 - 慢速移動 */
                    0 0, 0 0, 0 0, 0 0, 0 0,
                    /* 中型金色 - 中速移動 */
                    0 0, 0 0, 0 0, 0 0, 0 0,
                    /* 中型紫色 - 中速移動 */
                    0 0, 0 0, 0 0, 0 0,
                    /* 小星星 - 快速移動 */
                    0 0, 0 0, 0 0, 0 0, 0 0, 0 0,
                    /* 微小星塵 - 極快移動 */
                    0 0, 0 0, 0 0, 0 0, 0 0, 0 0,
                    0 0;
            }
            100% {
                background-position:
                    2000px 1000px, -1500px 800px, 1000px -500px,
                    /* 大星星 */
                    220px 180px, -280px 220px, 240px -200px, -260px 240px, 200px -160px,
                    /* 中型金色 */
                    360px 300px, -340px 280px, 380px -320px, -370px 310px, 350px -290px,
                    /* 中型紫色 */
                    -340px 360px, 330px -340px, -350px 370px, 360px -350px,
                    /* 小星星 */
                    560px 480px, -540px 500px, 580px -520px, -570px 510px, 550px -490px, 560px 505px,
                    /* 微小星塵 */
                    800px 700px, -780px 720px, 820px -760px, -810px 740px, 790px -730px, 805px 715px,
                    0 0;
            }
        }

        /* 微     光暈呼吸 */
        @keyframes subtleGlow {
            from { filter: brightness(1); }
            to { filter: brightness(1.05); }
        }

        .container {
            width: 92%;
            max-width: 600px;
            max-height: 100vh;
            background:
                linear-gradient(135deg, rgba(26, 13, 46, 0.95) 0%, rgba(106, 5, 114, 0.85) 100%);
            padding: 40px 25px;
            margin: 0 auto;
            border-radius: 20px;
            box-shadow:
                0 0 60px rgba(212, 175, 55, 0.4),
                0 0 100px rgba(193, 84, 193, 0.3),
                inset 0 0 80px rgba(0, 0, 0, 0.3);
            text-align: center;
            border: 3px solid var(--color-secondary);
            opacity: 0;
            display: none;
            z-index: 10;
            position: relative;
            backdrop-filter: blur(10px);
            transition: opacity 0.8s ease-out, transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
            transform: scale(0.9) rotateX(10deg);
            overflow-y: auto;
            overflow-x: hidden;
            will-change: opacity, transform; /* GPU加速 */
        }

        /* 神秘裝飾邊框 */
        .container::before {
            content: '✦ ☽ ✧ ☆ ✦ ☾ ✧';
            position: absolute;
            top: 7px;
            left: 50%;
            transform: translateX(-50%);
            color: var(--color-secondary);
            font-size: 14px;
            letter-spacing: 8px;
            opacity: 0.6;
            animation: symbolGlow 3s ease-in-out infinite alternate;
        }

        .container::after {
            content: '✧ ☾ ✦ ☆ ✧ ☽ ✦';
            position: absolute;
            bottom: 10px;
            left: 50%;
            transform: translateX(-50%);
            color: var(--color-secondary);
            font-size: 14px;
            letter-spacing: 8px;
            opacity: 0.6;
            animation: symbolGlow 3s ease-in-out infinite alternate-reverse;
        }

        @keyframes symbolGlow {
            from { opacity: 0.4; text-shadow: 0 0 5px var(--color-secondary); }
            to { opacity: 0.8; text-shadow: 0 0 15px var(--color-secondary), 0 0 25px var(--color-mystical); }
        }

        .container.active {
            opacity: 1;
            display: block;
            transform: scale(1) rotateX(0deg);
        }

        h1, h2 {
            color: var(--color-text-gold);
            font-family: var(--font-title);
            text-shadow:
                0 0 20px rgba(212, 175, 55, 0.8),
                0 0 40px rgba(193, 84, 193, 0.4),
                2px 2px 4px rgba(0, 0, 0, 0.8);
            margin-bottom: 20px;
            letter-spacing: 2px;
            animation: titlePulse 4s ease-in-out infinite;
        }

        @keyframes titlePulse {
            0%, 100% { text-shadow: 0 0 20px rgba(212, 175, 55, 0.8), 0 0 40px rgba(193, 84, 193, 0.4); }
            50% { text-shadow: 0 0 30px rgba(212, 175, 55, 1), 0 0 60px rgba(193, 84, 193, 0.6), 0 0 80px rgba(212, 175, 55, 0.3); }
        }

        h1 {
            font-size: 1.8em;
            margin-top: 10px;
            margin-bottom: 18px;
            font-weight: 900;
            line-height: 1.3;
        }

        h2 {
            font-size: 1.4em;
            font-weight: 700;
            line-height: 1.4;
            margin-bottom: 15px;
        }

        p {
            line-height: 1.6;
            color: var(--color-text-light);
            margin: 8px auto;
            font-size: 1em;
            max-width: 90%;
        }

        /* 通用按鈕樣式 - 神秘塔羅風格 */
        .btn {
            background: linear-gradient(135deg, rgba(26, 13, 46, 0.8) 0%, rgba(106, 5, 114, 0.6) 100%);
            color: var(--color-text-gold);
            border: 2px solid var(--color-secondary);
            padding: 10px 20px;
            margin: 6px 4px;
            border-radius: 12px;
            cursor: pointer;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            font-size: 0.95em;
            font-weight: bold;
            font-family: var(--font-body);
            box-shadow:
                0 0 20px rgba(212, 175, 55, 0.3),
                0 4px 15px rgba(0, 0, 0, 0.4),
                inset 0 0 20px rgba(212, 175, 55, 0.1);
            position: relative;
            overflow: hidden;
            text-shadow: 0 0 10px rgba(212, 175, 55, 0.5);
            will-change: transform, box-shadow; /* GPU加速懸停效果 */
        }

        /* 按鈕光芒效果 */
        .btn::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: linear-gradient(
                45deg,
                transparent 30%,
                rgba(212, 175, 55, 0.3) 50%,
                transparent 70%
            );
            transform: rotate(45deg);
            transition: all 0.6s;
        }

        .btn:hover::before {
            left: 100%;
        }

        /* 按鈕懸停效果 */
        .btn:hover {
            background: linear-gradient(135deg, rgba(212, 175, 55, 0.3) 0%, rgba(193, 84, 193, 0.3) 100%);
            color: var(--color-secondary);
            box-shadow:
                0 0 40px rgba(212, 175, 55, 0.6),
                0 0 60px rgba(193, 84, 193, 0.4),
                0 8px 25px rgba(0, 0, 0, 0.5),
                inset 0 0 30px rgba(212, 175, 55, 0.2);
            transform: translateY(-2px) scale(1.03);
            border-color: var(--color-mystical);
            text-shadow: 0 0 15px rgba(212, 175, 55, 0.8);
        }

        .btn:active {
            transform: translateY(0) scale(0.98);
        }

        /* 開始按鈕特有魔法脈衝動畫 */
        #start-quiz-btn {
            animation: magicPulse 2s ease-in-out infinite;
            font-size: 1.05em;
            padding: 12px 28px;
        }

        @keyframes magicPulse {
            0%, 100% {
                box-shadow:
                    0 0 20px rgba(212, 175, 55, 0.4),
                    0 0 40px rgba(193, 84, 193, 0.2),
                    0 4px 15px rgba(0, 0, 0, 0.4);
            }
            50% {
                box-shadow:
                    0 0 40px rgba(212, 175, 55, 0.8),
                    0 0 80px rgba(193, 84, 193, 0.5),
                    0 0 100px rgba(212, 175, 55, 0.3),
                    0 4px 15px rgba(0, 0, 0, 0.4);
            }
        }

        /* --- 選項按鈕樣式 --- */
        .option-btn {
            width: 100%;
            text-align: left;
            padding: 12px 18px;
            padding-right: 45px;
            font-size: 0.95em;
            margin: 6px 0;
            background: linear-gradient(135deg, rgba(13, 2, 33, 0.6) 0%, rgba(26, 13, 46, 0.8) 100%);
            border: 2px solid rgba(212, 175, 55, 0.4);
            position: relative;
            overflow: hidden;
            line-height: 1.5;
            display: block;
        }

        .option-btn::after {
            content: '→';
            position: absolute;
            right: 20px;
            top: 50%;
            transform: translateY(-50%);
            opacity: 0;
            transition: all 0.3s;
            color: var(--color-secondary);
        }

        .option-btn:hover::after {
            opacity: 1;
            right: 15px;
        }

        .option-btn:hover {
            border-color: var(--color-mystical);
            background: linear-gradient(135deg, rgba(106, 5, 114, 0.4) 0%, rgba(193, 84, 193, 0.3) 100%);
        }

        .option-btn.selected {
            background: linear-gradient(135deg, rgba(212, 175, 55, 0.3) 0%, rgba(193, 84, 193, 0.4) 100%);
            border-color: var(--color-secondary);
            animation: selectedPulse 0.6s ease-out;
        }

        @keyframes selectedPulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); box-shadow: 0 0 30px rgba(212, 175, 55, 0.6); }
            100% { transform: scale(1); }
        }

        /* --- 進度條容器 --- */
        #progress-bar-container {
            width: 100%;
            height: 8px;
            background: rgba(13, 2, 33, 0.8);
            border-radius: 10px;
            overflow: hidden;
            margin-bottom: 20px;
            border: 1px solid rgba(212, 175, 55, 0.3);
            box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5);
        }

        #progress-bar {
            height: 100%;
            background: linear-gradient(90deg,
                var(--color-secondary) 0%,
                var(--color-mystical) 50%,
                var(--color-secondary) 100%);
            width: 0%;
            transition: width 0.6s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            overflow: hidden;
            box-shadow: 0 0 20px var(--color-secondary);
            animation: progressGlow 2s ease-in-out infinite;
            will-change: width; /* GPU加速寬度變化 */
        }

        @keyframes progressGlow {
            0%, 100% { box-shadow: 0 0 10px var(--color-secondary); }
            50% { box-shadow: 0 0 25px var(--color-secondary), 0 0 40px var(--color-mystical); }
        }

        /* 進度條閃光動畫 */
        #progress-bar::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 50%;
            height: 100%;
            background: linear-gradient(90deg,
                transparent,
                rgba(255, 255, 255, 0.5),
                transparent);
            transform: skewX(-45deg) translateX(-100%);
            animation: shimmer 2s ease-out infinite;
        }

        @keyframes shimmer {
            0% { transform: skewX(-45deg) translateX(-100%); }
            100% { transform: skewX(-45deg) translateX(300%); }
        }

        #progress-text {
            color: var(--color-text-gold);
            font-size: 0.9em;
            margin-bottom: 20px;
            text-shadow: 0 0 10px rgba(212, 175, 55, 0.5);
        }

        /* --- 結果圖片樣式 --- */
        #result-img {
            max-width: 120px;
            width: 60%;
            height: auto;
            border-radius: 15px;
            margin: 12px auto;
            display: block;
            border: 3px solid var(--color-secondary);
            box-shadow:
                0 0 40px rgba(212, 175, 55, 0.5),
                0 0 60px rgba(193, 84, 193, 0.3);
            animation: cardReveal 1s ease-out, cardFloat 3s ease-in-out infinite;
            will-change: transform; /* GPU加速浮動動畫 */
        }

        @keyframes cardReveal {
            0% {
                opacity: 0;
                transform: rotateY(90deg) scale(0.8);
            }
            100% {
                opacity: 1;
                transform: rotateY(0deg) scale(1);
            }
        }

        @keyframes cardFloat {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
        }

        #result-placeholder {
            background: rgba(13, 2, 33, 0.6);
            padding: 30px;
            border-radius: 15px;
            margin: 20px auto;
            border: 2px dashed rgba(212, 175, 55, 0.4);
            color: var(--color-text-light);
            max-width: 300px;
        }

        #result-desc {
            margin: 12px auto;
            padding: 15px 12px;
            background: linear-gradient(135deg, rgba(13, 2, 33, 0.7) 0%, rgba(26, 13, 46, 0.5) 100%);
            border-radius: 15px;
            border: 2px solid rgba(212, 175, 55, 0.3);
            line-height: 1.6;
            font-size: 0.88em;
            box-shadow:
                inset 0 0 30px rgba(0, 0, 0, 0.3),
                0 0 20px rgba(212, 175, 55, 0.2);
            max-width: 100%;
            word-wrap: break-word;
        }

        /* 促銷區塊樣式 */
        #promo-section {
            margin-top: 15px;
            padding: 15px 12px;
            border-bottom: 2px solid rgba(212, 175, 55, 0.4);
            background: linear-gradient(135deg, rgba(106, 5, 114, 0.3) 0%, rgba(13, 2, 33, 0.5) 100%);
            border-radius: 15px;
            box-shadow: inset 0 0 30px rgba(0, 0, 0, 0.3);
        }

        #promo-section h3 {
            color: var(--color-text-gold);
            font-family: var(--font-title);
            margin-bottom: 12px;
            font-size: 1.1em;
            text-shadow: 0 0 15px rgba(212, 175, 55, 0.6);
        }

        .promo-btn {
            margin: 8px;
        }

        /* --- Gallery Modal Styles --- */
        .gallery-modal {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            background: rgba(0, 0, 0, 0.92);
            z-index: 9999;
            overflow: hidden;
            animation: fadeIn 0.3s ease-out;
            padding: 0;
        }

        .gallery-modal.active {
            display: block;
        }

        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        .gallery-container {
            max-width: 780px;
            height: 100vh;
            margin: 0 auto;
            background: linear-gradient(135deg, rgba(26, 13, 46, 0.98) 0%, rgba(106, 5, 114, 0.95) 100%);
            border-radius: 15px;
            padding: 40px 25px 25px;
            border: none;
            border-left: 3px solid var(--color-secondary);
            border-right: 3px solid var(--color-secondary);
            box-shadow: 0 0 80px rgba(212, 175, 55, 0.5);
            position: relative;
            overflow-y: auto;
            overflow-x: hidden;
            -webkit-overflow-scrolling: touch;
        }

        .gallery-close {
            position: fixed;
            top: 15px;
            right: 15px;
            font-size: 2.2em;
            color: var(--color-secondary);
            cursor: pointer;
            background: rgba(13, 2, 33, 0.95);
            width: 50px;
            height: 50px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
            border: 3px solid var(--color-secondary);
            z-index: 10001;
            box-shadow: 0 0 40px rgba(212, 175, 55, 0.9);
            line-height: 1;
            font-weight: 300;
        }

        .gallery-close:hover {
            background: var(--color-secondary);
            color: var(--color-primary);
            transform: rotate(90deg) scale(1.1);
            box-shadow: 0 0 40px rgba(212, 175, 55, 1);
        }

        .gallery-title {
            text-align: center;
            font-size: 1.6em;
            color: var(--color-text-gold);
            margin-bottom: 8px;
            margin-top: 0;
            font-family: var(--font-title);
            text-shadow: 0 0 20px rgba(212, 175, 55, 0.8);
        }

        .gallery-subtitle {
            text-align: center;
            font-size: 0.95em;
            color: var(--color-text-light);
            margin-bottom: 20px;
            opacity: 0.85;
        }

        .gallery-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(85px, 1fr));
            gap: 10px;
            margin-top: 15px;
            padding-bottom: 20px;
        }

        .gallery-card {
            background: linear-gradient(135deg, rgba(13, 2, 33, 0.8) 0%, rgba(26, 13, 46, 0.6) 100%);
            border-radius: 10px;
            padding: 8px;
            text-align: center;
            border: 2px solid rgba(212, 175, 55, 0.35);
            transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
            cursor: pointer;
            backdrop-filter: blur(5px);
            will-change: transform; /* GPU加速懸停效果 */
        }

        .gallery-card:hover {
            transform: translateY(-4px) scale(1.03);
            border-color: var(--color-mystical);
            box-shadow:
                0 10px 30px rgba(193, 84, 193, 0.5),
                0 0 20px rgba(212, 175, 55, 0.4);
            background: linear-gradient(135deg, rgba(106, 5, 114, 0.5) 0%, rgba(193, 84, 193, 0.3) 100%);
        }

        .gallery-card-name {
            font-size: 0.65em;
            font-weight: 700;
            color: var(--color-secondary);
            margin-bottom: 6px;
            line-height: 1.3;
            min-height: 2.6em;
            display: flex;
            align-items: center;
            justify-content: center;
            text-shadow: 0 0 8px rgba(212, 175, 55, 0.4);
        }

        .gallery-card-image {
            width: 100%;
            aspect-ratio: 1;
            object-fit: cover;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
            transition: all 0.35s ease;
            will-change: transform; /* GPU加速縮放 */
        }

        .gallery-card:hover .gallery-card-image {
            transform: scale(1.08);
            box-shadow: 0 6px 20px rgba(212, 175, 55, 0.4);
        }

        /* Locked card styles */
        .gallery-card.locked {
            opacity: 0.5;
            cursor: default;
            position: relative;
        }

        .gallery-card.locked .gallery-card-image {
            filter: grayscale(100%) brightness(0.6);
        }

        .gallery-card.locked .gallery-card-name {
            color: rgba(212, 175, 55, 0.5);
            text-shadow: none;
        }

        .gallery-card.locked::after {
            content: '🔒';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 2em;
            opacity: 0.7;
            pointer-events: none;
            text-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
        }

        .gallery-card.locked:hover {
            transform: none;
            border-color: rgba(212, 175, 55, 0.35);
            box-shadow: none;
            background: linear-gradient(135deg, rgba(13, 2, 33, 0.8) 0%, rgba(26, 13, 46, 0.6) 100%);
        }

        .gallery-card.locked:hover .gallery-card-image {
            transform: none;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
        }

        /* Unlocked card special styling */
        .gallery-card.unlocked {
            position: relative;
            animation: unlockPulse 2s ease-in-out infinite;
        }

        .gallery-card.unlocked::before {
            content: '✦';
            position: absolute;
            top: 5px;
            right: 5px;
            color: var(--color-secondary);
            font-size: 1.2em;
            z-index: 10;
            text-shadow: 0 0 10px var(--color-secondary);
            animation: starTwinkle 1.5s ease-in-out infinite;
        }

        @keyframes unlockPulse {
            0%, 100% {
                box-shadow: 0 0 15px rgba(212, 175, 55, 0.3);
            }
            50% {
                box-shadow: 0 0 25px rgba(212, 175, 55, 0.6);
            }
        }

        @keyframes starTwinkle {
            0%, 100% {
                opacity: 1;
                transform: scale(1);
            }
            50% {
                opacity: 0.6;
                transform: scale(1.2);
            }
        }

        /* --- 響應式設計 --- */
        @media (max-width: 768px) {
            h1 {
                font-size: 1.6em;
                line-height: 1.3;
            }

            h2 {
                font-size: 1.3em;
                line-height: 1.4;
            }

            .container {
                padding: 25px 20px;
                width: 94%;
            }

            .btn {
                padding: 10px 18px;
                font-size: 0.9em;
                margin: 5px 3px;
            }

            #start-quiz-btn {
                font-size: 1em;
                padding: 11px 24px;
            }

            .option-btn {
                padding: 10px 16px;
                padding-right: 40px;
                font-size: 0.9em;
                margin: 5px 0;
            }

            p {
                font-size: 0.95em;
                max-width: 95%;
            }

            #result-desc {
                padding: 15px 12px;
                font-size: 0.9em;
            }

            .gallery-grid {
                grid-template-columns: repeat(auto-fill, minmax(75px, 1fr));
                gap: 8px;
            }

            .gallery-title {
                font-size: 1.5em;
            }

            .gallery-subtitle {
                font-size: 0.85em;
            }

            .gallery-container {
                padding: 70px 20px 20px;
            }

            .gallery-close {
                width: 45px;
                height: 45px;
                font-size: 2em;
                top: 12px;
                right: 12px;
            }

            .gallery-card {
                padding: 6px;
            }

            .gallery-card-name {
                font-size: 0.6em;
                margin-bottom: 5px;
            }

            .gallery-card.locked::after {
                font-size: 1.5em;
            }

            .gallery-card.unlocked::before {
                font-size: 1em;
                top: 3px;
                right: 3px;
            }
        }

        @media (max-width: 480px) {
            h1 {
                font-size: 1.4em;
                margin-bottom: 15px;
            }

            h2 {
                font-size: 1.2em;
            }

            .container {
                padding: 20px 16px;
                width: 92%;
            }

            .btn {
                padding: 9px 16px;
                font-size: 0.85em;
            }

            #start-quiz-btn {
                font-size: 0.95em;
                padding: 10px 22px;
            }

            .option-btn {
                padding: 9px 14px;
                padding-right: 38px;
                font-size: 0.85em;
                margin: 4px 0;
            }

            .container::before,
            .container::after {
                font-size: 10px;
                letter-spacing: 4px;
            }

            p {
                font-size: 0.9em;
                line-height: 1.6;
            }

            #result-desc {
                padding: 14px 12px;
                font-size: 0.85em;
                line-height: 1.6;
            }

            #result-img {
                max-width: 40%;
            }

            #promo-section {
                padding: 12px 12px;
                margin-top: 10px;
            }

            #promo-section h3 {
                font-size: 1.1em;
            }

            .promo-btn {
                margin: 5px;
                padding: 9px 16px;
                font-size: 0.85em;
            }

            .gallery-grid {
                grid-template-columns: repeat(4, 1fr);
                gap: 8px;
            }

            .gallery-title {
                font-size: 1.35em;
            }

            .gallery-subtitle {
                font-size: 0.8em;
                margin-bottom: 15px;
            }

            .gallery-card-name {
                font-size: 0.55em;
                min-height: 2.8em;
                margin-bottom: 5px;
            }

            .gallery-container {
                padding: 50px 15px 15px;
            }

            .gallery-close {
                width: 42px;
                height: 42px;
                font-size: 1.8em;
                top: 10px;
                right: 10px;
            }

            .gallery-card {
                padding: 5px;
            }

            .gallery-card.locked::after {
                font-size: 1.3em;
            }

            .gallery-card.unlocked::before {
                font-size: 0.9em;
                top: 2px;
                right: 2px;
            }
        }

        /* Hidden canvas for image generation */
        #result-canvas-container {
            position: fixed;
            left: -9999px;
            top: 0;
            background: linear-gradient(135deg, #1a0d2e 0%, #6a0572 100%);
            width: 800px;
            height: 1200px;
            padding: 50px 40px;
            box-sizing: border-box;
            z-index: -1;
        }

        #result-canvas {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            text-align: center;
            color: #e8d5c4;
            font-family: var(--font-body);
            position: relative;
            padding-top: 40px;
        }

        #result-canvas h1 {
            font-size: 2.8em;
            margin-bottom: 15px;
            margin-top: 0;
            color: #d4af37;
            text-shadow: 0 0 20px rgba(212, 175, 55, 0.8);
        }

        #result-canvas #canvas-card-name {
            font-size: 1.6em;
            color: #d4af37;
            margin: 10px 0 20px;
            font-weight: 700;
        }

        #result-canvas img {
            max-width: 450px;
            width: 90%;
            height: auto;
            border-radius: 15px;
            margin: 15px 0;
            border: 4px solid #d4af37;
            box-shadow: 0 0 30px rgba(212, 175, 55, 0.5);
        }

        #result-canvas .desc {
            font-size: 1.1em;
            line-height: 1.9;
            margin: 25px 50px;
            max-width: 650px;
            color: #e8d5c4;
        }

        #result-canvas .qr-container {
            position: absolute;
            bottom: 30px;
            right: 30px;
            background: white;
            padding: 10px;
            border-radius: 10px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
        }

        @media (min-width: 769px) {
            .container {
                max-width: 650px;
            }
        }

        /* --- Dark mode support (已經是 dark 主題) --- */
        @media (prefers-color-scheme: light) {
            /* 保持 dark 主題不變 - 塔羅牌本來就應該是神秘暗色調 */
        }

    </style>
</head>
<body>

    <div id="intro-page" class="container active">
        <h1>✦ 邂逅心靈 ✦<br>你的塔羅啟示</h1>
        <p style="margin-top: 18px; font-size: 1.05em;">你準備好接收孫孫給你的啟示了嗎?</p>
        <p style="margin: 10px auto;">每個選擇都將引導你走向</p>
        <p style="color: var(--color-secondary); font-weight: bold; font-size: 1.1em; margin: 8px auto;">22 張大阿爾克那牌</p>
        <p style="margin: 10px auto;">揭示你此刻最需要的指引</p>
        <div style="margin: 15px auto 20px; font-size: 1.7em; color: var(--color-mystical); text-shadow: 0 0 20px var(--color-mystical); animation: symbolGlow 3s ease-in-out infinite alternate;">
            ☽ ✦ ☾
        </div>
        <button id="start-quiz-btn" class="btn" onclick="startQuiz()">
            ✧ 開始神秘探索 ✧
        </button>
        <div style="text-align: center; margin-top: 10px; font-size: 0.6em; color: #c154c1; line-height: 1.0;">
            配對結果純粹娛樂 僅供參考
        </div>
    </div>

    <div id="quiz-page" class="container">
        <div id="progress-bar-container">
            <div id="progress-bar"></div>
        </div>
        <div id="progress-text" style="margin-bottom: 18px; margin-top: 8px;">
            <span style="color: var(--color-mystical);">✦</span>
            第 <span id="current-q" style="color: var(--color-secondary); font-weight: bold; font-size: 1.15em;">1</span> 題
            <span style="color: var(--color-mystical);">✧</span>
            共 <span id="total-q" style="color: var(--color-secondary); font-weight: bold;">4</span> 題
            <span style="color: var(--color-mystical);">✦</span>
        </div>

        <h2 id="question-text" style="margin: 18px auto; line-height: 1.5; max-width: 95%;"></h2>
        <div id="options-container" style="margin-top: 20px;">
        </div>
    </div>

    <div id="result-page" class="container">
        <div style="margin-bottom: 10px;">
            <h2 style="margin: 0; font-size: 1.3em; font-title: 'Philosopher', 'Noto Serif TC', serif">你的專屬塔羅啟示</h2>
        </div>

        <img id="result-img" src="" alt="結果塔羅牌" loading="eager">

        <div id="result-desc" style="text-align: left; margin-bottom: 10px">
        </div>

        <div style="margin-top: 15px; padding: 12px 6px; border-top: 2px solid rgba(212, 175, 55, 0.3); border-bottom: 2px solid rgba(212, 175, 55, 0.3); margin-bottom: 15px">
            <button class="btn" onclick="openGallery()" style="padding: 9px 16px; font-size: 0.85em;">
                🃏 我的塔羅牌
            </button>
            <button class="btn" onclick="saveResult()" style="padding: 9px 16px; font-size: 0.85em;">
                ✧ 儲存圖片
            </button>
            <button class="btn" onclick="shareResult()" style="padding: 9px 16px; font-size: 0.85em;">
                ☆ 分享
            </button>
            <button class="btn" onclick="showPage('intro-page')" style="padding: 9px 16px; font-size: 0.85em;">
                ↻ 重新開始
            </button>
        </div>

        <div id="promo-section">
            <h3 style="font-size: 1.05em; margin-bottom: 10px; line-height: 1.0;">
                <span style="color: var(--color-mystical);">✦</span>
                深度探索 孫孫塔羅設計牌組
                <span style="color: var(--color-mystical);">✦</span>
            </h3>
            <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 6px;">
                <a href="https://forms.gle/ZErmb74tu3KrbiEY9" target="_blank" style="text-decoration: none;">
                    <button class="btn promo-btn" style="padding: 8px 14px; font-size: 0.82em; margin: 4px;">🛒 預購塔羅牌</button>
                </a>
                <a href="https://www.threads.com/@grafittiii_uru/post/DQ8z1FUEYiO?xmt=AQF0wa0gLzPbzSBznH5Fy7DUVuNe8gkcNzY483pGsByybXXVdsyVac7RXRWG8796i_gzfnFTxe&slof=1" target="_blank" style="text-decoration: none;">
                    <button class="btn promo-btn" style="padding: 8px 14px; font-size: 0.82em; margin: 4px;">▶️ 觀看展示影片</button>
                </a>
            </div>
        </div>
        <div style="text-align: center; margin-top: 20px; font-size: 0.75em; color: #c154c1; line-height: 1.4;">
            配對結果純粹娛樂 僅供參考
        </div>
    </div>

    <!-- Gallery Modal -->
    <div id="gallery-modal" class="gallery-modal">
        <div class="gallery-close" onclick="closeGallery()">×</div>
        <div class="gallery-container">
            <h1 class="gallery-title">✦ 22 張大阿爾克那 ✦</h1>
            <p class="gallery-subtitle" id="gallery-subtitle">孫孫塔羅角色圖鑑</p>
            <div class="gallery-grid" id="gallery-grid">
                <!-- Cards will be inserted here -->
            </div>
        </div>
    </div>

    <!-- Hidden container for image generation -->
    <div id="result-canvas-container">
        <div id="result-canvas">
            <h1 id="canvas-title">✦ 你的   羅啟示 ✦</h1>
            <div id="canvas-card-name" style="font-size: 1.8em; color: #d4af37; margin: 10px 0;"></div>
            <img id="canvas-img" src="" alt="塔羅牌">
            <div id="canvas-desc" class="desc"></div>
            <div class="qr-container" id="qr-code"></div>
        </div>
    </div>

    <script>
        // --- DEBUG FUNCTION (保留在程式碼中) ---
        function fullPageReload() {
            window.location.reload(true);
        }

        // --- 數據設定 ---
        const questions = [
            { question: "當你進入房間時, 你第一眼看到的物品是?", options: [{ text: "古典花瓶與綻放的鮮花", value: 0 }, { text: "色彩繽紛的枕頭與被套", value: 1 }, { text: "玻璃窗上的雨點", value: 2 }, { text: "地上堆放的禮物盒", value: 3 }] },
            { question: "在神秘的桌子上, 你想拿起哪一樣物品來引導你?", options: [{ text: "透明的水晶球, 觀看未來的影像", value: 0 }, { text: "古老的鑰匙, 開啟被塵封的門", value: 4 }, { text: "燃燒的蠟燭, 照亮眼前的道路", value: 8 }, { text: "純白的羽毛, 象徵輕盈與自由", value: 12 }] },
            { question: "你聽到遠處傳來一種聲音, 最能撫慰你心靈的是?", options: [{ text: "寧靜的雪落聲, 一片沉寂與空白", value: 0 }, { text: "爐火中木材的爆裂聲, 溫暖而規律", value: 2 }, { text: "遠方大海拍打岸邊的潮汐聲, 充滿能量", value: 4 }, { text: "古老且遙遠的鐘擺聲, 代表時間的流動", value: 6 }] },
            { question: "你走在一片迷霧中, 腳下延伸著哪一種路徑?", options: [{ text: "未曾有人走過的泥土小徑, 充滿未知", value: 0 }, { text: "被藤蔓覆蓋的古老石板路, 充滿歷史感", value: 3 }, { text: "鋪滿金幣的明亮大道, 直通繁榮", value: 6 }, { text: "懸浮於空中的彩虹橋, 只存在於夢境", value: 9 }] }
        ];

        // 22張塔羅牌結果映射與正面解析
        const tarotResults = [
            { name: "0 愚者 (The Fool)", image: "https://pfst.cf2.poecdn.net/base/image/9827674879461d64b0aea493d8cb19ce40cb72f6dcddae933235132a66bf48e1?w=4096&h=4096", desc: "🎉 **啟示:開始的勇氣** 🎉 你正站在一個令人興奮的起點。像一個初生嬰兒般保持對世界的好奇心與開放性，相信直覺會引導你走向美好的未知旅程。放手去闖吧，宇宙會支持你!" },
            { name: "1 魔術師 (The Magician)", image: "https://pfst.cf2.poecdn.net/base/image/b08a6693f2bdb4a2bce89802ec52d73b39296ac1957ce9eec7de726cbea1123f?w=4096&h=4096", desc: "✨ **啟示:無限的創造力** ✨ 所有的工具和資源都已在你手中。你擁有強大的意志力去實現夢想，現在正是行動的最佳時機。運用你的天賦創造奇蹟!" },
            { name: "2 女祭司 (The High Priestess)", image: "https://pfst.cf2.poecdn.net/base/image/f80fa7d6204fc61fbe44dfbee2d89bdc67a129f15df0fdc41a26ae1a87c67834?w=4096&h=4096", desc: "🧘‍♀️ **啟示:內在的智慧** 🧘‍♀️ 現在是傾聽內心聲音的時候。你的直覺和潛意識正為你提供最準確的指引。保持沉靜，答案就在你心中深處，靜待揭曉。" },
            { name: "3 皇后 (The Empress)", image: "https://pfst.cf2.poecdn.net/base/image/522f861eeb6af760ce61f2ce40380a5a3bd70c22c9ce01591e0236ca5df34ffd?w=4096&h=4096", desc: "🌿 **啟示:豐盛與滋養** 🌿 你被愛與美包圍。擁抱生活中的豐盛與舒適，照顧好自己和身邊的人。讓創造力開花結果，享受生命的滋養力量。" },
            { name: "4 皇帝 (The Emperor)", image: "https://pfst.cf2.poecdn.net/base/image/f7ee0a1abad1f0a1e55c2ccbaf24c7da55b4ca54e1afd26e3b6aade9b7116ea7?w=4096&h=4096", desc: "🛡️ **啟示:結構與領導力** 🛡️ 你擁有建立穩固基礎和達成目標的能力。展現你的決斷力與領導力，用清晰的規則和計劃來掌握生活。你是自己的主人!" },
            { name: "5 教皇 (The Hierophant)", image: "https://pfst.cf2.poecdn.net/base/image/b48ff47486c4ec33cb407dfa31a9254f7902f709ccf3512abc103f66d74049c7?w=4096&h=4096", desc: "📜 **啟示:學習與傳承** 📜 尋求智慧與啟發的時刻。你將從傳統、導師或社群中獲得寶貴的指導。保持謙遜，並準備好將所學知識傳遞給他人。" },
            { name: "6 戀人 (The Lovers)", image: "https://pfst.cf2.poecdn.net/base/image/8bef3fba764a2ef02b89bda3a50d5ff7db3d92c7958f21ca8eb1b25c8e600a3d?w=4096&h=4096", desc: "💖 **啟示:和諧的選擇** 💖 這是一張關於和諧、愛與重要抉擇的牌。你的心靈和價值觀已達成一致，勇敢地做出那個最貼近你靈魂的決定   愛將是你的力量   " },
            { name: "7 戰車 (The Chariot)", image: "https://pfst.cf2.poecdn.net/base/image/7012708ef7f9bc030a2cb3503a03d2bf1db276d8a2fc7f44356bf83c75d1fe7d?w=4096&h=4096", desc: "🚀 **啟示:堅定的勝利** 🚀 你正以驚人的速度向目標前進。只要保持專注、自信和內在的平衡，任何挑戰都無法阻擋你。勝利就在不遠的前方!" },
            { name: "8 力量 (Strength)", image: "https://pfst.cf2.poecdn.net/base/image/37fda1ff9085b01fa4d7eb81f143eb0c69e5daaa76db299cec4abdf8e35d18e2?w=4096&h=4096", desc: "🦁 **啟示:溫柔的韌性** 🦁 真正的力量來自於內心的平靜與溫柔。面對困難時，請用愛心和耐心來馴服內在的焦慮。你比自己想像的更強大!" },
            { name: "9 隱者 (The Hermit)", image: "https://pfst.cf2.poecdn.net/base/image/7fa8b296a7b7f1ef13130918a0e0991204f1bf1e5d45a32c9cc5f61cd031216e?w=4096&h=4096", desc: "💡 **啟示:尋找真理** 💡 這是暫時遠離喧囂、自我反思的黃金時期。透過內省，你將獲得清晰的洞察和深刻的個人真理。光芒源於內在。" },
            { name: "10 命運之輪 (Wheel of Fortune)", image: "https://pfst.cf2.poecdn.net/base/image/d01071782df20884bcd10f8e36441e72bc3e181ac3780d37558ccf113efe03f4?w=4096&h=4096", desc: "🍀 **啟示:轉機與好運** 🍀 命運之輪正為你轉向積極的一面！抓住這個機會，迎接即將到來的改變和意想不到的好運。相信宇宙的安排是完美的。" },
            { name: "11 正義 (Justice)", image: "https://pfst.cf2.poecdn.net/base/image/d0feda744bf2db0cd91d362a0f8064483f536525887d2b13b2011a784100e993?w=4096&h=4096", desc: "⚖️ **啟示:平衡與公平** ⚖️ 宇宙會帶來公正的結果。現在是時候以清晰、誠實的態度做出決定。保持道德標準，你將獲得平衡與和諧。" },
            { name: "12 倒吊人 (The Hanged Man)", image: "https://pfst.cf2.poecdn.net/base/image/6f60e6bb2e391bc5e9b745677d41d2134434aafe16bd2acc3fe37ce408a88aa9?w=4096&h=4096", desc: "🔄 **啟示:嶄新的視角** 🔄 這需要你暫停腳步，從一個全新的角度看待問題。放下控制慾，接受現狀。當你願意換個方向思考時，突破隨之而來。" },
            { name: "13 死神 (Death)", image: "https://pfst.cf2.poecdn.net/base/image/579e3bf2c73af72a0e0a23990048df8e8c9c3abb00625d194f96a6b356676432?w=4096&h=4096", desc: "🦋 **啟示:積極的轉變** 🦋 這不是結束，而是蛻變的開始!舊的模式、習慣或狀態正在結束，為更美好、更真實的你騰出空間。迎接重生，輕裝前行。" },
            { name: "14 節制 (Temperance)", image: "https://pfst.cf2.poecdn.net/base/image/19b42ab117b9bb33516a6bf4f73a1959b54b9740e8bf8ae5ac406b647acc8d11?w=4096&h=4096", desc: "💧 **啟示:完美的融合** 💧 保持耐心和中庸之道。透過優雅地混合內在與外在的力量，你將在生活中找到完美的平衡點。和諧與療癒正在發生。" },
            { name: "15 惡魔 (The Devil)", image: "https://pfst.cf2.poecdn.net/base/image/35c6902e9b4a6c426823bae36c0f9b3afd352cd4cc3a1873a443fdde34ff6ad4?w=4096&h=4096", desc: "⛓️ **啟示:掙脫束縛** ⛓️ ️ 覺察那些阻礙你的物質或精神依賴。你擁有掙脫任何限制的力量，只要你願意承認並改變。你是自由的，選擇權在你手上!" },
            { name: "16 塔 (The Tower)", image: "https://pfst.cf2.poecdn.net/base/image/25f78ba4a1feb5455a58764222a82cdea8073fc9da103101b53a031a846c2d38?w=4096&h=4096", desc: "⚡ **啟示:突破與釋放** ⚡ 突然的變動正為你清除不穩定的結構，這是一個強大的覺醒時刻。相信舊的崩塌是為了迎接更堅固、更真實的未來，你將重生!" },
            { name: "17 星星 (The Star)", image: "https://pfst.cf2.poecdn.net/base/image/a14eb4206eee139e821aeb51346995d81664346974d835998a22f8e4d9e68349?w=4096&h=4096", desc: "🌟 **啟示:希望與靈感** 🌟 偉大的希望和心靈的平靜正在注入你的生命。相信你的夢想，你正受到宇宙的指引。保持樂觀，你閃耀著獨特的光芒。" },
            { name: "18 月亮 (The Moon)", image: "https://pfst.cf2.poecdn.net/base/image/117301bf0dd5c2de7348f87eab6f16e6414e29b12c7f222de9eb3414d8c8b938?w=4096&h=4096", desc: "🌙 **啟示:信任直覺** 🌙 雖然路途看起來有些迷霧，但請相信你的內在指引。讓想像力流動，你的直覺會像月光一樣，照亮那些隱藏的真相。別怕未知!" },
            { name: "19 太陽 (The Sun)", image: "https://pfst.cf2.poecdn.net/base/image/e5de1e208c0709a1648859efe4b0ddede8b8204e45084a09416448476b5f3f09?w=4096&h=4096", desc: "☀️ **啟示:喜悅與成功** ☀️ 這是光芒萬丈的一刻！你將獲得巨大的成功、活力與純粹的快樂。自信地表達自己，享受此刻的幸福和清晰的視野。" },
            { name: "20 審判 (Judgement)", image: "https://pfst.cf2.poecdn.net/base/image/3c173d0638c9f9cf47ef2e6c89f7a7289b15f920af83c2a530fb1984f42ca1d3?w=4096&h=4096", desc: "🎺 **啟示:覺醒與重生** 🎺 你正迎來一個重要的心靈覺醒。放下過去的評判，原諒自己。這是你徹底重生，並獲得更高自我理解的時刻。" },
            { name: "21 世界 (The World)", image: "https://pfst.cf2.poecdn.net/base/image/6ad5b90b0d2c496d083b4f0b746147e7c7293bbca13d82580ca753fc6a7c3a0e?w=4096&h=4096", desc: "🌎 **啟示:圓滿與完成** 🌎 你已經完成了生命中的一個重要循環。慶祝你的成就！你現在擁有所需的知識和經驗，準備好迎接下一個宏大且圓滿的旅程。" }
        ];

        let currentQuestionIndex = 0;
        let totalScore = 0;
        const totalQuestions = questions.length;
        let unlockedCardIndex = -1; // Track which card has been unlocked
        let unlockedCards = new Set(); // Track all unlocked cards across games

        // Save unlocked cards to session (in-memory persistence within session)
        function saveUnlockedCards() {
            console.log(`已儲存 ${unlockedCards.size} 張解鎖的卡片 (當前對話期間有效)`);
        }

        // 圖像預載 (Preloading) 函數 - 增強版
        const imageCache = new Map();
        let preloadProgress = 0;

        function preloadTarotImages() {
            console.log("正在預載塔羅牌圖片...");
            const totalImages = tarotResults.length;

            return Promise.all(tarotResults.map((card, index) => {
                return new Promise((resolve) => {
                    const img = new Image();
                    img.onload = () => {
                        imageCache.set(card.image, img);
                        preloadProgress++;
                        console.log(`已預載 ${preloadProgress}/${totalImages} 張圖片`);
                        resolve();
                    };
                    img.onerror = () => {
                        console.warn(`圖片預載失敗: ${card.name}`);
                        resolve(); // Continue even if one fails
                    };
                    img.src = card.image;
                });
            })).then(() => {
                console.log("所有圖片預載完成!");
            });
        }

        // --- 頁面跳轉邏輯 (加入過渡動畫) - 優化版 ---
        function showPage(pageId) {
            // 使用 requestAnimationFrame 優化性能
            requestAnimationFrame(() => {
                document.querySelectorAll('.container').forEach(el => {
                    el.classList.remove('active');
                    if(el.id === 'result-page') {
                        el.classList.remove('reveal');
                    }
                });

                // 延遲執行,確保舊頁面先開始淡出/縮小動畫
                setTimeout(() => {
                    requestAnimationFrame(() => {
                        document.getElementById(pageId).classList.add('active');
                        // Scroll to top when showing any page
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    });
                }, 50);
            });
        }

        // --- 開始測驗 ---
        function startQuiz() {
            currentQuestionIndex = 0;
            totalScore = 0;
            unlockedCardIndex = -1; // Reset current unlocked card for this game
            // Do NOT reset unlockedCards - keep accumulated cards across games
            showPage('quiz-page');
            loadQuestion();
        }

        // --- 載入題目 (包含 Progress Bar 閃光動畫重設) ---
        function loadQuestion() {
            const qData = questions[currentQuestionIndex];
            const progressPercentage = (currentQuestionIndex / totalQuestions) * 100;

            // 使用 requestAnimationFrame 優化性能
            requestAnimationFrame(() => {
                // 重新應用 Progress Bar 閃光動畫
                const progressBar = document.getElementById('progress-bar');
                progressBar.style.width = `${progressPercentage}%`;

                document.getElementById('current-q').textContent = currentQuestionIndex + 1;
                document.getElementById('total-q').textContent = totalQuestions;

                document.getElementById('question-text').textContent = qData.question;
                const optsContainer = document.getElementById('options-container');

                // 使用 DocumentFragment 減少 reflow
                const fragment = document.createDocumentFragment();

                qData.options.forEach(opt => {
                    const btn = document.createElement('button');
                    btn.className = 'btn option-btn';
                    btn.textContent = opt.text;
                    // 傳遞按鈕元素本身,以便觸發震動
                    btn.onclick = (event) => handleAnswer(opt.value, event.target);
                    fragment.appendChild(btn);
                });

                optsContainer.innerHTML = '';
                optsContainer.appendChild(fragment);
            });
        }

        // --- 處理回答 (加入 Haptic Feedback) ---
        function handleAnswer(val, selectedButton) {
            // Haptic Feedback (震動)
            if (navigator.vibrate) {
                navigator.vibrate(50); // 輕微震動 50 毫秒
            }

            // 視覺鎖定效果
            document.querySelectorAll('.option-btn').forEach(btn => btn.disabled = true);
            selectedButton.classList.add('selected');

            totalScore += val;

            // 簡單的延遲,讓用戶看到按鈕閃爍動畫
            setTimeout(() => {
                currentQuestionIndex++;
                if (currentQuestionIndex < questions.length) {
                    document.querySelectorAll('.option-btn').forEach(btn => btn.disabled = false);
                    loadQuestion();
                } else {
                    // 更新最後一題的進度條到 100%
                    document.getElementById('progress-bar').style.width = '100%';
                    document.getElementById('current-q').textContent = totalQuestions;
                    setTimeout(calculateResult, 500);
                }
            }, 700);
        }

        // --- 計算結果 ---
        function calculateResult() {
            const resultIndex = totalScore % 22;
            const result = tarotResults[resultIndex];

            // Unlock this card for current game
            unlockedCardIndex = resultIndex;

            // Add to accumulated unlocked cards
            unlockedCards.add(resultIndex);
            saveUnlockedCards();

            showPage('result-page');

            const resultPage = document.getElementById('result-page');
            const imgElement = document.getElementById('result-img');
            const descElement = document.getElementById('result-desc');

            // 設置圖片路徑與描述 (使用預載的圖片)
            if (imageCache.has(result.image)) {
                imgElement.src = imageCache.get(result.image).src;
            } else {
                imgElement.src = result.image;
            }
            imgElement.alt = "結果塔羅牌: " + result.name;
            descElement.innerHTML = `**【${result.name}】**<br><br>${result.desc}`;

            // 觸發揭示動畫 (使用 requestAnimationFrame 優化)
            requestAnimationFrame(() => {
                setTimeout(() => {
                    requestAnimationFrame(() => {
                        resultPage.classList.add('reveal');
                    });
                }, 100);
            });
        }

        // --- Gallery Functions ---
        function openGallery() {
            const modal = document.getElementById('gallery-modal');
            const container = document.querySelector('.gallery-container');
            const grid = document.getElementById('gallery-grid');
            const subtitle = document.getElementById('gallery-subtitle');

            // Update subtitle based on unlock status
            const unlockedCount = unlockedCards.size;
            if (unlockedCount === 0) {
                subtitle.textContent = '完成題目以解鎖你的專屬塔羅牌';
                subtitle.style.color = 'rgba(212, 175, 55, 0.8)';
            } else if (unlockedCount === 1) {
                const singleCard = tarotResults[[...unlockedCards][0]];
                subtitle.textContent = `已解鎖 1/22 張 ✦ ${singleCard.name}`;
                subtitle.style.color = 'var(--color-text-light)';
            } else {
                subtitle.textContent = `已解鎖 ${unlockedCount}/22 張 ✦ 繼續探索更多塔羅牌`;
                subtitle.style.color = 'var(--color-text-light)';
            }

            // Clear and populate gallery
            grid.innerHTML = '';
            tarotResults.forEach((card, index) => {
                const cardDiv = document.createElement('div');

                // Apply locked or unlocked class
                if (unlockedCards.has(index)) {
                    cardDiv.className = 'gallery-card unlocked';
                } else {
                    cardDiv.className = 'gallery-card locked';
                }

                // 使用預載的圖片或原始 URL
                const imgSrc = imageCache.has(card.image) ? imageCache.get(card.image).src : card.image;

                cardDiv.innerHTML = `
                    <div class="gallery-card-name">${card.name}</div>
                    <img src="${imgSrc}" alt="${card.name}" class="gallery-card-image" loading="lazy">
                `;
                grid.appendChild(cardDiv);
            });

            // Scroll container to top
            if (container) {
                container.scrollTop = 0;
            }

            modal.classList.add('active');
            document.body.style.overflow = 'hidden';

            // Double-ensure container is at top
            requestAnimationFrame(() => {
                if (container) container.scrollTop = 0;
            });
        }

        function closeGallery() {
            const modal = document.getElementById('gallery-modal');
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }

        // Close gallery on outside click
        document.getElementById('gallery-modal').addEventListener('click', function(e) {
            if (e.target === this) {
                closeGallery();
            }
        });

        // --- 自定義 Alert 模態框 ---
        function showAlert(message) {
            const modal = document.createElement('div');
            modal.className = 'fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50';
            modal.style.cssText = 'position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.7); display: flex; align-items: center; justify-content: center; z-index: 10000;';
            modal.innerHTML = `
                <div style="background: var(--color-primary); padding: 30px; border-radius: 10px; box-shadow: 0 0 40px rgba(255, 196, 0, 0.5); max-width: 400px; width: 90%; margin: 20px; border: 2px solid var(--color-secondary); text-align: center;">
                    <p style="color: var(--color-text-light); margin-bottom: 20px; white-space: pre-line; line-height: 1.6;">${message}</p>
                    <button class="btn" onclick="this.closest('div').parentElement.remove()">確定</button>
                </div>
            `;
            document.body.appendChild(modal);
        }

        // --- Generate QR Code ---
        function generateQRCode() {
            const qrContainer = document.getElementById('qr-code');
            qrContainer.innerHTML = ''; // Clear previous QR code

            new QRCode(qrContainer, {
                text: 'https://www.threads.com/@grafittiii_uru/post/DQ8z1FUEYiO?xmt=AQF0wa0gLzPbzSBznH5Fy7DUVuNe8gkcNzY483pGsByybXXVdsyVac7RXRWG8796i_gzfnFTxe&slof=1',
                width: 100,
                height: 100,
                colorDark: '#000000',
                colorLight: '#ffffff',
                correctLevel: QRCode.CorrectLevel.H
            });
        }

        // --- Generate Result Image (Using Canvas API to avoid CORS) ---
        async function generateResultImage() {
            const finalCard = tarotResults[totalScore % 22];

            // Create canvas - 3:4 ratio
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            canvas.width = 1200;
            canvas.height = 1600;

            // Create gradient background
            const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
            gradient.addColorStop(0, '#1a0d2e');
            gradient.addColorStop(0.5, '#6a0572');
            gradient.addColorStop(1, '#1a0d2e');
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Add corner decorative frame ornaments
            
            const cornerLength = 80;
            const cornerMargin = 25;

            // Top-left corner
            ctx.beginPath();
            ctx.moveTo(cornerMargin + cornerLength, cornerMargin);
            ctx.lineTo(cornerMargin, cornerMargin);
            ctx.lineTo(cornerMargin, cornerMargin + cornerLength);
            ctx.stroke();

            // Top-right corner
            ctx.beginPath();
            ctx.moveTo(canvas.width - cornerMargin - cornerLength, cornerMargin);
            ctx.lineTo(canvas.width - cornerMargin, cornerMargin);
            ctx.lineTo(canvas.width - cornerMargin, cornerMargin + cornerLength);
            ctx.stroke();

            // Bottom-left corner
            ctx.beginPath();
            ctx.moveTo(cornerMargin, canvas.height - cornerMargin - cornerLength);
            ctx.lineTo(cornerMargin, canvas.height - cornerMargin);
            ctx.lineTo(cornerMargin + cornerLength, canvas.height - cornerMargin);
            ctx.stroke();

            // Bottom-right corner
            ctx.beginPath();
            ctx.moveTo(canvas.width - cornerMargin, canvas.height - cornerMargin - cornerLength);
            ctx.lineTo(canvas.width - cornerMargin, canvas.height - cornerMargin);
            ctx.lineTo(canvas.width - cornerMargin - cornerLength, canvas.height - cornerMargin);
            ctx.stroke();

            // Add mystical symbols at corner intersections
            ctx.fillStyle = '#c154c1';
            ctx.font = '24px "Philosopher", serif';
            ctx.textAlign = 'center';
            ctx.shadowColor = 'rgba(193, 84, 193, 0.8)';
            ctx.shadowBlur = 12;
            ctx.fillText('✦', cornerMargin, cornerMargin + 8);
            ctx.fillText('✧', canvas.width - cornerMargin, cornerMargin + 8);
            ctx.fillText('☆', cornerMargin, canvas.height - cornerMargin + 8);
            ctx.fillText('✦', canvas.width - cornerMargin, canvas.height - cornerMargin + 8);

            ctx.shadowBlur = 0;

            // Add decorative stars (more stars, varied sizes and colors)
            // Large white stars
            ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
            for (let i = 0; i < 15; i++) {
                const x = Math.random() * canvas.width;
                const y = Math.random() * canvas.height;
                const size = Math.random() * 4 + 2.5;
                ctx.beginPath();
                ctx.arc(x, y, size, 0, Math.PI * 2);
                ctx.fill();
            }

            // Medium gold stars
            ctx.fillStyle = 'rgba(212, 175, 55, 0.8)';
            for (let i = 0; i < 30; i++) {
                const x = Math.random() * canvas.width;
                const y = Math.random() * canvas.height;
                const size = Math.random() * 2.5 + 1.5;
                ctx.beginPath();
                ctx.arc(x, y, size, 0, Math.PI * 2);
                ctx.fill();
            }

            // Small purple/mystical stars
            ctx.fillStyle = 'rgba(193, 84, 193, 0.7)';
            for (let i = 0; i < 25; i++) {
                const x = Math.random() * canvas.width;
                const y = Math.random() * canvas.height;
                const size = Math.random() * 1.5 + 1;
                ctx.beginPath();
                ctx.arc(x, y, size, 0, Math.PI * 2);
                ctx.fill();
            }

            // Tiny stars (star dust)
            ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
            for (let i = 0; i < 40; i++) {
                const x = Math.random() * canvas.width;
                const y = Math.random() * canvas.height;
                const size = Math.random() * 1 + 0.5;
                ctx.beginPath();
                ctx.arc(x, y, size, 0, Math.PI * 2);
                ctx.fill();
            }

            // Load and draw the tarot card image
            const cardImage = new Image();
            cardImage.crossOrigin = "anonymous";

            await new Promise((resolve, reject) => {
                cardImage.onload = () => resolve();
                cardImage.onerror = () => {
                    console.warn('Failed to load card image, continuing without it');
                    resolve();
                };
                cardImage.src = finalCard.image;
                // Timeout after 10 seconds
                setTimeout(() => resolve(), 10000);
            });

            // Draw decorative top symbols (add more space at top)
            ctx.textAlign = 'center';
            ctx.fillStyle = '#c154c1';
            ctx.font = '40px "Philosopher", serif';
            ctx.shadowColor = 'rgba(193, 84, 193, 0.8)';
            ctx.shadowBlur = 20;
            ctx.fillText('☽ ✦ ☾', canvas.width / 2, 110);

            // Draw title with enhanced glow (moved down)
            ctx.fillStyle = '#d4af37';
            ctx.font = 'bold 72px "Philosopher", "Noto Serif TC", serif';
            ctx.shadowColor = 'rgba(212, 175, 55, 0.8)';
            ctx.shadowBlur = 30;
            ctx.fillText('✦ 你的塔羅啟示 ✦', canvas.width / 2, 190);


            // Draw center ornament (moved down)
            ctx.fillStyle = '#d4af37';
            ctx.font = '28px "Philosopher", serif';
            ctx.fillText('✧', canvas.width / 2, 220);
            ctx.shadowBlur = 0;

            // Draw card name with glow (moved down)
            ctx.font = 'bold 50px "Philosopher", "Noto Serif TC", serif';
            ctx.fillStyle = '#d4af37';
            ctx.shadowColor = 'rgba(212, 175, 55, 0.8)';
            ctx.shadowBlur = 25;
            ctx.fillText(finalCard.name, canvas.width / 2, 290);
            ctx.shadowBlur = 0;

            // Draw card image if loaded (moved down with more space after card name)
            let imageEndY = 370;
            if (cardImage.complete && cardImage.naturalHeight !== 0) {
                const imgWidth = 600;
                const imgHeight = (cardImage.naturalHeight / cardImage.naturalWidth) * imgWidth;
                const imgX = (canvas.width - imgWidth) / 2;
                const imgY = 370;
                const borderRadius = 15;
                const borderPadding = 10;

                // Helper function to draw rounded rectangle path
                function roundRect(ctx, x, y, width, height, radius) {
                    ctx.beginPath();
                    ctx.moveTo(x + radius, y);
                    ctx.lineTo(x + width - radius, y);
                    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
                    ctx.lineTo(x + width, y + height - radius);
                    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
                    ctx.lineTo(x + radius, y + height);
                    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
                    ctx.lineTo(x, y + radius);
                    ctx.quadraticCurveTo(x, y, x + radius, y);
                    ctx.closePath();
                }

                // Draw glowing border with multiple layers - matching result page
                // Outer glow - purple/mystical (matching box-shadow: 0 0 60px rgba(193, 84, 193, 0.3))
                ctx.strokeStyle = 'rgba(193, 84, 193, 0.3)';
                ctx.lineWidth = 12;
                ctx.shadowColor = 'rgba(193, 84, 193, 0.3)';
                ctx.shadowBlur = 60;
                roundRect(ctx, imgX - borderPadding, imgY - borderPadding, imgWidth + borderPadding * 2, imgHeight + borderPadding * 2, borderRadius);
                ctx.stroke();

                // Middle glow - gold (matching box-shadow: 0 0 40px rgba(212, 175, 55, 0.5))
                ctx.strokeStyle = 'rgba(212, 175, 55, 0.5)';
                ctx.lineWidth = 10;
                ctx.shadowColor = 'rgba(212, 175, 55, 0.5)';
                ctx.shadowBlur = 40;
                roundRect(ctx, imgX - borderPadding, imgY - borderPadding, imgWidth + borderPadding * 2, imgHeight + borderPadding * 2, borderRadius);
                ctx.stroke();

                // Inner border - solid gold (matching border: 3px solid var(--color-secondary))
                ctx.strokeStyle = '#d4af37';
                ctx.lineWidth = 6;
                ctx.shadowColor = 'rgba(212, 175, 55, 0.5)';
                ctx.shadowBlur = 20;
                roundRect(ctx, imgX - borderPadding, imgY - borderPadding, imgWidth + borderPadding * 2, imgHeight + borderPadding * 2, borderRadius);
                ctx.stroke();

                // Reset shadow for image
                ctx.shadowBlur = 0;
                ctx.shadowOffsetX = 0;
                ctx.shadowOffsetY = 0;

                // Clip and draw image with rounded corners
                ctx.save();
                roundRect(ctx, imgX, imgY, imgWidth, imgHeight, borderRadius);
                ctx.clip();
                ctx.drawImage(cardImage, imgX, imgY, imgWidth, imgHeight);
                ctx.restore();

                // Add decorative mystical symbols around the image
                ctx.fillStyle = '#d4af37';
                ctx.font = '32px "Philosopher", serif';
                ctx.textAlign = 'center';
                ctx.shadowColor = 'rgba(212, 175, 55, 0.8)';
                ctx.shadowBlur = 15;

                // Top symbols
                ctx.fillText('✦', imgX - 40, imgY + 30);
                ctx.fillText('✦', imgX + imgWidth + 40, imgY + 30);

                // Bottom symbols
                ctx.fillText('✧', imgX - 40, imgY + imgHeight - 20);
                ctx.fillText('✧', imgX + imgWidth + 40, imgY + imgHeight - 20);

                // Side symbols
                ctx.fillStyle = '#c154c1';
                ctx.fillText('☆', imgX - 40, imgY + imgHeight / 2);
                ctx.fillText('☆', imgX + imgWidth + 40, imgY + imgHeight / 2);

                ctx.shadowBlur = 0;

                imageEndY = imgY + imgHeight + 50;
            }

            // Draw description in a bordered box
            const cleanDesc = finalCard.desc
                .replace(/\*\*/g, '')
                .replace(/🎉|✨|🧘‍♀️|🌿|🛡️|📜|💖|🚀|🦁|💡|🍀|⚖️|🔄|🦋|💧|⛓️|⚡|🌟|🌙|☀️|🎺|🌎/g, '')
                .trim();

            // Create description box with proper measurements
            const boxMargin = 100;
            const boxX = boxMargin;
            const boxWidth = canvas.width - (boxMargin * 2);
            const boxPadding = 35;
            const innerWidth = boxWidth - (boxPadding * 2);

            // Calculate available space
            const bottomSpace = 180; // Space needed for footer elements
            const availableHeight = canvas.height - imageEndY - bottomSpace;

            // Text wrapping with Chinese character support
            ctx.font = '26px "Philosopher", "Noto Serif TC", serif';
            ctx.textAlign = 'left';

            const lineHeight = 45;
            const lines = [];

            // Better text wrapping - character by character for mixed Chinese/English
            let currentLine = '';
            for (let i = 0; i < cleanDesc.length; i++) {
                const char = cleanDesc[i];
                const testLine = currentLine + char;
                const metrics = ctx.measureText(testLine);

                if (metrics.width > innerWidth) {
                    if (currentLine) {
                        lines.push(currentLine);
                        currentLine = char;
                    } else {
                        lines.push(char);
                        currentLine = '';
                    }
                } else {
                    currentLine = testLine;
                }
            }
            if (currentLine) {
                lines.push(currentLine);
            }

            // Calculate how many lines fit
            const maxLines = Math.floor((availableHeight - 50) / lineHeight);
            const displayLines = lines.slice(0, maxLines);

            // Add ellipsis if truncated
            if (lines.length > maxLines && displayLines.length > 0) {
                displayLines[displayLines.length - 1] = displayLines[displayLines.length - 1].slice(0, -3) + '...';
            }

            const boxHeight = (displayLines.length * lineHeight) + (boxPadding * 2) + 10;
            const boxY = imageEndY + 30;
            const boxRadius = 15; // Match result page border-radius

            // Helper function for rounded rectangles (reuse if not in scope)
            function roundRectBox(ctx, x, y, width, height, radius) {
                ctx.beginPath();
                ctx.moveTo(x + radius, y);
                ctx.lineTo(x + width - radius, y);
                ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
                ctx.lineTo(x + width, y + height - radius);
                ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
                ctx.lineTo(x + radius, y + height);
                ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
                ctx.lineTo(x, y + radius);
                ctx.quadraticCurveTo(x, y, x + radius, y);
                ctx.closePath();
            }

            // Draw box background with gradient and rounded corners
            const boxGradient = ctx.createLinearGradient(boxX, boxY, boxX, boxY + boxHeight);
            boxGradient.addColorStop(0, 'rgba(13, 2, 33, 0.7)');
            boxGradient.addColorStop(1, 'rgba(26, 13, 46, 0.5)');
            ctx.fillStyle = boxGradient;

            // Draw background with inset shadow effect
            ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';
            ctx.shadowBlur = 30;
            ctx.shadowOffsetX = 0;
            ctx.shadowOffsetY = 0;
            roundRectBox(ctx, boxX, boxY, boxWidth, boxHeight, boxRadius);
            ctx.fill();

            // Outer glow matching result page (0 0 20px rgba(212, 175, 55, 0.2))
            ctx.strokeStyle = 'rgba(212, 175, 55, 0.2)';
            ctx.lineWidth = 4;
            ctx.shadowColor = 'rgba(212, 175, 55, 0.2)';
            ctx.shadowBlur = 20;
            roundRectBox(ctx, boxX, boxY, boxWidth, boxHeight, boxRadius);
            ctx.stroke();

            // Inner border - matching result page (2px solid rgba(212, 175, 55, 0.3))
            ctx.strokeStyle = 'rgba(212, 175, 55, 0.3)';
            ctx.lineWidth = 4;
            ctx.shadowColor = 'rgba(212, 175, 55, 0.3)';
            ctx.shadowBlur = 10;
            roundRectBox(ctx, boxX, boxY, boxWidth, boxHeight, boxRadius);
            ctx.stroke();

            // Reset shadow
            ctx.shadowBlur = 0;

            // Add decorative mystical symbols at corners
            ctx.fillStyle = '#c154c1';
            ctx.font = '28px "Philosopher", serif';
            ctx.shadowColor = 'rgba(193, 84, 193, 0.8)';
            ctx.shadowBlur = 12;

            // Corner symbols
            ctx.textAlign = 'left';
            ctx.fillText('✦', boxX - 25, boxY + 20);
            ctx.fillText('✧', boxX - 25, boxY + boxHeight - 10);

            ctx.textAlign = 'right';
            ctx.fillText('✦', boxX + boxWidth + 25, boxY + 20);
            ctx.fillText('✧', boxX + boxWidth + 25, boxY + boxHeight - 10);

            ctx.shadowBlur = 0;

            // Draw text inside box
            ctx.fillStyle = '#e8d5c4';
            ctx.font = '26px "Philosopher", "Noto Serif TC", serif';
            ctx.textAlign = 'left';
            let textY = boxY + boxPadding + 30;
            for (let line of displayLines) {
                ctx.fillText(line, boxX + boxPadding, textY);
                textY += lineHeight;
            }

           

            // Draw decorative symbols
            const bottomY = canvas.height - 140;
            ctx.fillStyle = '#d4af37';
            ctx.textAlign = 'center';
            ctx.font = '36px "Philosopher", serif';
            ctx.shadowColor = 'rgba(212, 175, 55, 0.8)';
            ctx.shadowBlur = 15;
            ctx.fillText('✦ ☆ ✧', canvas.width / 2, bottomY + 10);

            // Draw attribution with glow
            ctx.fillStyle = '#c154c1';
            ctx.font = 'bold 28px "Philosopher", "Noto Serif TC", serif';
            ctx.shadowColor = 'rgba(193, 84, 193, 0.8)';
            ctx.shadowBlur = 15;
            ctx.fillText('暉日塔羅 大阿爾克那  MascotTarot Major Arcana', canvas.width / 2, bottomY + 80);

            // Draw small decorative stars around attribution
            ctx.fillStyle = '#d4af37';
            ctx.font = '25px "Philosopher", serif';
            ctx.fillText('✧', canvas.width / 2 - 200, canvas.height - 110);
            ctx.fillText('✧', canvas.width / 2 + 200, canvas.height - 110);
            ctx.shadowBlur = 0;

            // Draw QR code with enhanced mystical styling
            try {
                const qrCanvas = document.createElement('canvas');
                const qr = new QRCode(qrCanvas, {
                    text: 'https://www.threads.com/@grafittiii_uru/post/DQ8z1FUEYiO',
                    width: 120,
                    height: 120,
                    colorDark: '#000000',
                    colorLight: '#ffffff',
                    correctLevel: QRCode.CorrectLevel.H
                });

                await new Promise(resolve => setTimeout(resolve, 200));

                const qrSize = 150;
                const qrPadding = 15;
                const qrX = canvas.width - qrSize - 30;
                const qrY = canvas.height - qrSize - 30;
                const qrRadius = 10;

                // Helper for QR rounded rect
                function roundRectQR(ctx, x, y, width, height, radius) {
                    ctx.beginPath();
                    ctx.moveTo(x + radius, y);
                    ctx.lineTo(x + width - radius, y);
                    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
                    ctx.lineTo(x + width, y + height - radius);
                    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
                    ctx.lineTo(x + radius, y + height);
                    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
                    ctx.lineTo(x, y + radius);
                    ctx.quadraticCurveTo(x, y, x + radius, y);
                    ctx.closePath();
                }

                // Draw glowing border for QR box
                // Outer purple glow
                ctx.strokeStyle = 'rgba(193, 84, 193, 0.5)';
                ctx.lineWidth = 4;
                ctx.shadowColor = 'rgba(193, 84, 193, 0.6)';
                ctx.shadowBlur = 40;
                roundRectQR(ctx, qrX, qrY, qrSize, qrSize, qrRadius);
                ctx.stroke();

                // Inner gold glow
                ctx.strokeStyle = 'rgba(212, 175, 55, 0.6)';
                ctx.lineWidth = 3;
                ctx.shadowColor = 'rgba(212, 175, 55, 0.8)';
                ctx.shadowBlur = 15;
                roundRectQR(ctx, qrX, qrY, qrSize, qrSize, qrRadius);
                ctx.stroke();

                // Draw white background with rounded corners
                ctx.fillStyle = 'white';
                ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';
                ctx.shadowBlur = 10;
                roundRectQR(ctx, qrX, qrY, qrSize, qrSize, qrRadius);
                ctx.fill();
                ctx.shadowBlur = 0;

                // Draw QR code
                const qrImg = qrCanvas.querySelector('canvas');
                if (qrImg) {
                    ctx.save();
                    roundRectQR(ctx, qrX + qrPadding, qrY + qrPadding, 120, 120, 5);
                    ctx.clip();
                    ctx.drawImage(qrImg, qrX + qrPadding, qrY + qrPadding, 120, 120);
                    ctx.restore();
                }

                // Add decorative symbols around QR code
                ctx.fillStyle = '#d4af37';
                ctx.font = '20px "Philosopher", serif';
                ctx.textAlign = 'center';
                ctx.shadowColor = 'rgba(212, 175, 55, 0.8)';
                ctx.shadowBlur = 10;
                ctx.fillText('✦', qrX - 15, qrY + 20);
                ctx.fillText('✧', qrX - 15, qrY + qrSize - 10);
                ctx.shadowBlur = 0;
            } catch (e) {
                console.warn('QR code generation failed:', e);
            }

            return canvas;
        }

        // --- 儲存結果圖片 ---
        async function saveResult() {
            const loadingAlert = document.createElement('div');
            loadingAlert.id = 'loading-alert';
            loadingAlert.style.cssText = 'position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.85); display: flex; align-items: center; justify-content: center; z-index: 10000;';
            loadingAlert.innerHTML = `
                <div style="background: var(--color-primary); padding: 30px; border-radius: 15px; box-shadow: 0 0 40px rgba(212, 175, 55, 0.5); max-width: 400px; width: 90%; margin: 20px; border: 2px solid var(--color-secondary); text-align: center;">
                    <p style="color: var(--color-text-light); margin: 0; font-size: 1.1em; line-height: 1.6;">📸 正在生成圖片, 請稍候...</p>
                </div>
            `;
            document.body.appendChild(loadingAlert);

            try {
                // Small delay to ensure loading alert is visible
                await new Promise(resolve => setTimeout(resolve, 100));

                const canvas = await generateResultImage();

                if (!canvas) {
                    throw new Error('Canvas generation failed');
                }

                // Convert to blob
                canvas.toBlob(function(blob) {
                    if (!blob) {
                        loadingAlert.remove();
                        showAlert('❌ 生成圖片失敗, 請重試。');
                        return;
                    }

                    const url = URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    const finalCard = tarotResults[totalScore % 22];
                    const fileName = `塔羅啟示_${finalCard.name.replace(/[^\w\s]/gi, '_')}.png`;
                    a.href = url;
                    a.download = fileName;
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                    URL.revokeObjectURL(url);

                    // Remove loading alert and show success
                    loadingAlert.remove();
                    showAlert('✅ 圖片已儲存! 請查看下載資料夾。');
                }, 'image/png', 0.95);

            } catch (error) {
                console.error('生成圖片失敗:', error);
                loadingAlert.remove();
                showAlert(`❌ 生成圖片時發生錯誤:\n${error.message}\n\n請重試或嘗試截圖。`);
            }
        }

        // --- 分享結果 ---
        async function shareResult() {
            const loadingAlert = document.createElement('div');
            loadingAlert.id = 'loading-alert-share';
            loadingAlert.style.cssText = 'position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.85); display: flex; align-items: center; justify-content: center; z-index: 10000;';
            loadingAlert.innerHTML = `
                <div style="background: var(--color-primary); padding: 30px; border-radius: 15px; box-shadow: 0 0 40px rgba(212, 175, 55, 0.5); max-width: 400px; width: 90%; margin: 20px; border: 2px solid var(--color-secondary); text-align: center;">
                    <p style="color: var(--color-text-light); margin: 0; font-size: 1.1em; line-height: 1.6;">📸 正在生成分享圖片, 請稍候...</p>
                </div>
            `;
            document.body.appendChild(loadingAlert);

            try {
                await new Promise(resolve => setTimeout(resolve, 100));
                const canvas = await generateResultImage();
                const finalCard = tarotResults[totalScore % 22];

                if (!canvas) {
                    throw new Error('Canvas generation failed');
                }

                canvas.toBlob(async function(blob) {
                    loadingAlert.remove();

                    if (!blob) {
                        showAlert('❌ 生成圖片失敗,請重試。');
                        return;
                    }

                    const fileName = `塔羅啟示_${finalCard.name.replace(/[^\w\s]/gi)}.png`;
                    const file = new File([blob], fileName, { type: 'image/png' });

                    // Try Web Share API with image
                    if (navigator.share && navigator.canShare && navigator.canShare({ files: [file] })) {
                        try {
                            await navigator.share({
                                title: '我的塔羅心靈啟示',
                                text: `🔮 我的專屬啟示是【${finalCard.name}】!`,
                                files: [file]
                            });
                            console.log('分享成功!');
                        } catch (error) {
                            if (error.name !== 'AbortError') {
                                console.error('分享失敗:', error);
                                fallbackShare(blob, finalCard);
                            }
                        }
                    } else {
                        // Fallback: download image
                        fallbackShare(blob, finalCard);
                    }
                }, 'image/png', 0.95);

            } catch (error) {
                console.error('生成分享圖片失敗:', error);
                loadingAlert.remove();
                showAlert(`❌ 生成圖片時發生錯誤:\n${error.message}\n\n請重試或嘗試截圖。`);
            }
        }

        function fallbackShare(blob, finalCard) {
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            const fileName = `塔羅啟示_${finalCard.name.replace(/[^\w\s]/gi, '_')}.png`;
            a.href = url;
            a.download = fileName;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);

            showAlert('✅ 圖片已下載! \n您可以手動分享到社群媒體。');
        }

        // 頁面載入後自動顯示介紹頁並預載圖像
        document.addEventListener('DOMContentLoaded', () => {
            showPage('intro-page');

            // 立即開始預載圖片 (不阻塞 UI)
            preloadTarotImages().catch(err => {
                console.error("圖片預載過程中發生錯誤:", err);
            });
        });
    </script>
</body>
</html>
