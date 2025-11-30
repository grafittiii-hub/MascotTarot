<html lang="zh-TW">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>✦ 邂逅心靈 ✦ 你的塔羅啟示 | Mystical Tarot Revelation</title>

    <!-- SEO Meta Tags -->
    <meta name="description" content="探索22張大阿爾克那牌，揭示你此刻最需要的指引。透過神秘的塔羅測驗，找到專屬於你的心靈啟示。Discover your personal tarot revelation through a mystical quiz journey.">
    <meta name="keywords" content="塔羅牌, tarot, 大阿爾克那, Major Arcana, 心靈測驗, tarot quiz, 占卜, divination, 孫孫暉日塔羅">
    <meta name="author" content="grafittiii_uru">

    <!-- Open Graph Meta Tags (for social sharing) -->
    <meta property="og:title" content="✦ 邂逅心靈 ✦ 你的塔羅啟示">
    <meta property="og:description" content="你準備好接收孫孫給你的啟示了嗎? 每個選擇都將引導你走向22張大阿爾克那牌之一">
    <meta property="og:type" content="website">
    <meta property="og:image" content="https://grafittiii-hub.github.io/MascotTarotQuiz/">

    <!-- Twitter Card Meta Tags -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="✦ 邂逅心靈 ✦ 你的塔羅啟示">
    <meta name="twitter:description" content="探索22張大阿爾克那牌，揭示你此刻最需要的指引">
    <meta name="twitter:image" content="https://pfst.cf2.poecdn.net/base/image/1baebbfe40cc9da5b4e45eb79ed19ffe08c766f37c81e1caacb265d1a7c2b13d?w=4096&h=4096">

    <!-- Favicon (using mystical symbol) -->
    <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>✦</text></svg>">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <!-- Preload critical fonts for faster rendering -->
    <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Philosopher:wght@400;700&family=Noto+Serif+TC:wght@400;700&family=Noto+Sans+Symbols+2&display=swap">
    <link href="https://fonts.googleapis.com/css2?family=Philosopher:wght@400;700&family=Noto+Serif+TC:wght@400;700&family=Noto+Sans+Symbols+2&display=swap" rel="stylesheet">

    <!-- Libraries for image generation -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js"></script>

    <style>
        /* Language toggle button */
        .lang-toggle {
            position: fixed;
            top: 15px;
            right: 15px;
            z-index: 100;
            padding: 6px 10px;
            font-size: 0.7em;
            background: rgba(26, 13, 46, 0.8);
            border: 1px solid var(--color-secondary);
            color: var(--color-text-gold);
            cursor: pointer;
            border-radius: 6px;
            font-family: 'Philosopher', serif;
            transition: all 0.3s ease;
        }

        .lang-toggle:hover {
            background: rgba(212, 175, 55, 0.2);
            transform: scale(1.05);
        }

        /* Back button - same styling as language toggle */
        .back-btn {
            position: fixed;
            top: 15px;
            left: 15px;
            z-index: 100;
            padding: 6px 10px;
            font-size: 0.7em;
            background: rgba(26, 13, 46, 0.8);
            border: 1px solid var(--color-secondary);
            color: var(--color-text-gold);
            cursor: pointer;
            border-radius: 6px;
            font-family: 'Philosopher', serif;
            transition: all 0.3s ease;
            display: none; /* Hidden by default */
        }

        .back-btn:hover {
            background: rgba(212, 175, 55, 0.2);
            transform: scale(1.05);
        }

        .back-btn.show {
            display: block;
        }

        :root {
            --color-primary: #1a0d2e;
            --color-secondary: #d4af37;
            --color-accent: #6a0572;
            --color-mystical: #c154c1;
            --color-text-light: #e8d5c4;
            --color-text-gold: #f4e4c1;
            --color-bg-dark: #0d0221;
            --font-title: 'Noto Serif TC', 'Microsoft JhengHei', 'PingFang TC', serif;
            --font-body: 'Noto Serif TC', 'Microsoft JhengHei', 'PingFang TC', serif;
        }

        /* English font override when lang is 'en' */
        html[lang="en"] {
            --font-title: 'Philosopher', Georgia, 'Times New Roman', serif;
            --font-body: 'Philosopher', Georgia, 'Times New Roman', serif;
        }

        /* Style for English text within Chinese content */
        .en-text {
            font-family: 'Philosopher', Georgia, 'Times New Roman', serif;
        }

        /* Style for moon symbols to ensure consistent rendering */
        .moon-symbols {
            font-family: 'Noto Sans Symbols 2', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji', sans-serif;
            display: inline;
            color: inherit;
            text-shadow: inherit;
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
            background:
                radial-gradient(ellipse 600px 400px at 20% 30%, rgba(106, 5, 114, 0.15), transparent 70%),
                radial-gradient(ellipse 500px 500px at 80% 70%, rgba(193, 84, 193, 0.1), transparent 70%),
                radial-gradient(ellipse 400px 300px at 50% 50%, rgba(212, 175, 55, 0.08), transparent 60%),
                radial-gradient(circle 2.5px at 15% 25%, white, transparent),
                radial-gradient(circle 2px at 85% 15%, rgba(255, 255, 255, 0.95), transparent),
                radial-gradient(circle 2px at 45% 60%, white, transparent),
                radial-gradient(circle 2.5px at 70% 85%, rgba(255, 255, 255, 0.9), transparent),
                radial-gradient(circle 2px at 30% 45%, white, transparent),
                radial-gradient(circle 1.5px at 60% 70%, rgba(212, 175, 55, 0.9), transparent),
                radial-gradient(circle 1.5px at 25% 80%, rgba(212, 175, 55, 0.85), transparent),
                radial-gradient(circle 1.3px at 90% 40%, rgba(212, 175, 55, 0.8), transparent),
                radial-gradient(circle 1.5px at 50% 20%, rgba(212, 175, 55, 0.9), transparent),
                radial-gradient(circle 1.3px at 10% 55%, rgba(212, 175, 55, 0.75), transparent),
                radial-gradient(circle 1.2px at 80% 20%, rgba(193, 84, 193, 0.85), transparent),
                radial-gradient(circle 1px at 40% 80%, rgba(193, 84, 193, 0.8), transparent),
                radial-gradient(circle 1.3px at 65% 35%, rgba(193, 84, 193, 0.9), transparent),
                radial-gradient(circle 1px at 20% 65%, rgba(193, 84, 193, 0.75), transparent),
                radial-gradient(circle 0.8px at 35% 15%, white, transparent),
                radial-gradient(circle 0.6px at 55% 50%, rgba(255, 255, 255, 0.8), transparent),
                radial-gradient(circle 0.7px at 75% 75%, white, transparent),
                radial-gradient(circle 0.6px at 18% 90%, rgba(255, 255, 255, 0.85), transparent),
                radial-gradient(circle 0.8px at 92% 60%, white, transparent),
                radial-gradient(circle 0.7px at 48% 92%, rgba(255, 255, 255, 0.9), transparent),
                radial-gradient(circle 0.4px at 12% 35%, rgba(255, 255, 255, 0.6), transparent),
                radial-gradient(circle 0.5px at 68% 12%, rgba(212, 175, 55, 0.7), transparent),
                radial-gradient(circle 0.4px at 88% 88%, rgba(255, 255, 255, 0.65), transparent),
                radial-gradient(circle 0.3px at 42% 38%, rgba(193, 84, 193, 0.6), transparent),
                radial-gradient(circle 0.5px at 95% 25%, rgba(255, 255, 255, 0.7), transparent),
                radial-gradient(circle 0.4px at 58% 85%, rgba(212, 175, 55, 0.65), transparent),
                linear-gradient(180deg, #0d0221 0%, #1a0d2e 50%, #16001e 100%);
            background-size:
                2000px 2000px, 2000px 2000px, 2000px 2000px,
                220px 220px, 280px 280px, 240px 240px, 260px 260px, 200px 200px,
                180px 180px, 190px 190px, 210px 210px, 195px 195px, 185px 185px,
                170px 170px, 165px 165px, 175px 175px, 180px 180px,
                140px 140px, 150px 150px, 145px 145px, 135px 135px, 155px 155px, 138px 138px,
                100px 100px, 110px 110px, 95px 95px, 105px 105px, 98px 98px, 102px 102px,
                100% 100%;
            background-repeat: repeat, repeat, repeat,
                repeat, repeat, repeat, repeat, repeat,
                repeat, repeat, repeat, repeat, repeat,
                repeat, repeat, repeat, repeat,
                repeat, repeat, repeat, repeat, repeat, repeat,
                repeat, repeat, repeat, repeat, repeat, repeat,
                no-repeat;
            animation: cosmicFlow 60s linear infinite;
        }

        @keyframes cosmicFlow {
            0% {
                background-position:
                    0 0, 0 0, 0 0,
                    0 0, 0 0, 0 0, 0 0, 0 0,
                    0 0, 0 0, 0 0, 0 0, 0 0,
                    0 0, 0 0, 0 0, 0 0,
                    0 0, 0 0, 0 0, 0 0, 0 0, 0 0,
                    0 0, 0 0, 0 0, 0 0, 0 0, 0 0,
                    0 0;
            }
            100% {
                background-position:
                    2000px 1000px, -1500px 800px, 1000px -500px,
                    220px 180px, -280px 220px, 240px -200px, -260px 240px, 200px -160px,
                    360px 300px, -340px 280px, 380px -320px, -370px 310px, 350px -290px,
                    -340px 360px, 330px -340px, -350px 370px, 360px -350px,
                    560px 480px, -540px 500px, 580px -520px, -570px 510px, 550px -490px, 560px 505px,
                    800px 700px, -780px 720px, 820px -760px, -810px 740px, 790px -730px, 805px 715px,
                    0 0;
            }
        }

        /* Transition overlay for page transitions */
        .transition-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            background: radial-gradient(circle at center, rgba(106, 5, 114, 0.85) 0%, rgba(13, 2, 33, 0.95) 100%);
            z-index: 9998;
            pointer-events: none;
            opacity: 0;
            display: none;
            transition: opacity 0.6s ease-in-out;
        }

        .transition-overlay.active {
            display: block;
            opacity: 1;
        }

        .transition-overlay.fade-out {
            opacity: 0;
        }

        /* Starry particles for transition */
        .transition-star {
            position: absolute;
            pointer-events: none;
            opacity: 0;
            will-change: transform, opacity;
        }

        .transition-star.large {
            font-size: 24px;
            animation: starGlowTransition 1.5s ease-in-out;
        }

        .transition-star.large.yellow {
            color: #FFD700;
            text-shadow: 0 0 15px #FFD700, 0 0 10px rgba(255, 215, 0, 0.8);
        }

        .transition-star.large.white {
            color: #FFFFFF;
            text-shadow: 0 0 15px #FFFFFF, 0 0 10px rgba(255, 255, 255, 0.6);
        }

        .transition-star.large.purple {
            color: #C154C1;
            text-shadow: 0 0 15px #C154C1, 0 0 10px rgba(193, 84, 193, 0.8);
        }

        .transition-star.small {
            width: 3px;
            height: 3px;
            border-radius: 50%;
            animation: dotStarFloat 2s ease-in-out;
        }

        .transition-star.small.yellow {
            background: radial-gradient(circle, #FFD700 0%, rgba(255, 215, 0, 0.6) 100%);
            box-shadow: 0 0 8px #FFD700, 0 0 5px rgba(255, 215, 0, 0.8);
        }

        .transition-star.small.white {
            background: radial-gradient(circle, #FFFFFF 0%, rgba(255, 255, 255, 0.6) 100%);
            box-shadow: 0 0 8px #FFFFFF, 0 0 5px rgba(255, 255, 255, 0.6);
        }

        .transition-star.small.purple {
            background: radial-gradient(circle, #C154C1 0%, rgba(193, 84, 193, 0.6) 100%);
            box-shadow: 0 0 8px #C154C1, 0 0 5px rgba(193, 84, 193, 0.8);
        }

        @keyframes starGlowTransition {
            0% {
                opacity: 0;
                transform: scale(0) rotate(0deg);
            }
            50% {
                opacity: 1;
                transform: scale(1.2) rotate(180deg);
            }
            100% {
                opacity: 0;
                transform: scale(0.5) rotate(360deg);
            }
        }

        @keyframes dotStarFloat {
            0% {
                opacity: 0;
                transform: translateY(20px) scale(0);
            }
            20% {
                opacity: 1;
                transform: translateY(-10px) scale(1);
            }
            80% {
                opacity: 1;
                transform: translateY(-30px) scale(1);
            }
            100% {
                opacity: 0;
                transform: translateY(-50px) scale(0.5);
            }
        }

        .container {
            width: 92%;
            max-width: 600px;
            max-height: 100vh;
            background: linear-gradient(135deg, rgba(26, 13, 46, 0.95) 0%, rgba(106, 5, 114, 0.85) 100%);
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
            transition: opacity 0.6s ease-out, transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1);
            transform: translate3d(-50px, 0, 0) scale3d(0.95, 0.95, 1);
            overflow-y: auto;
            overflow-x: hidden;
            content-visibility: auto;
            contain-intrinsic-size: 600px;
        }

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
            font-family: 'Noto Sans Symbols 2', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji', sans-serif;
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
            font-family: 'Noto Sans Symbols 2', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji', sans-serif;
        }

        @keyframes symbolGlow {
            from { opacity: 0.4; text-shadow: 0 0 5px var(--color-secondary); }
            to { opacity: 0.8; text-shadow: 0 0 15px var(--color-secondary), 0 0 25px var(--color-mystical); }
        }

        .container.active {
            opacity: 1;
            display: block;
            transform: translate3d(0, 0, 0) scale3d(1, 1, 1);
        }

        .container.exiting {
            opacity: 0;
            transform: translate3d(50px, 0, 0) scale3d(0.95, 0.95, 1);
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
            font-size: clamp(1.4em, 5.5vw, 2.2em);
            margin-top: 10px;
            margin-bottom: 18px;
            font-weight: 900;
            line-height: 1.3;
        }

        /* Special styling for intro title to ensure single-line fit */
        #intro-title {
            font-size: clamp(1.2em, 6vw, 2.2em);
            white-space: nowrap;
            overflow: visible;
        }

        /* Allow line breaks within intro title */
        #intro-title br {
            display: block;
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

        .btn {
            background: linear-gradient(135deg, rgba(26, 13, 46, 0.8) 0%, rgba(106, 5, 114, 0.6) 100%);
            color: var(--color-text-gold);
            border: 2px solid var(--color-secondary);
            padding: 10px 20px;
            margin: 6px 4px;
            border-radius: 12px;
            cursor: pointer;
            transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), background 0.4s ease, color 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease, text-shadow 0.4s ease;
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
            backface-visibility: hidden;
            will-change: transform;
        }

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

        .btn:hover {
            background: linear-gradient(135deg, rgba(212, 175, 55, 0.3) 0%, rgba(193, 84, 193, 0.3) 100%);
            color: var(--color-secondary);
            box-shadow:
                0 0 40px rgba(212, 175, 55, 0.6),
                0 0 60px rgba(193, 84, 193, 0.4),
                0 8px 25px rgba(0, 0, 0, 0.5),
                inset 0 0 30px rgba(212, 175, 55, 0.2);
            transform: translate3d(0, -2px, 0) scale3d(1.03, 1.03, 1);
            border-color: var(--color-mystical);
            text-shadow: 0 0 15px rgba(212, 175, 55, 0.8);
        }

        .btn:active {
            transform: translate3d(0, 0, 0) scale3d(0.98, 0.98, 1);
        }

        #start-quiz-btn {
            animation: magicPulse 2s ease-in-out infinite, breathingGlow 3s ease-in-out infinite;
            font-size: 1.05em;
            padding: 12px 28px;
            will-change: transform, opacity, box-shadow;
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

        @keyframes breathingGlow {
            0%, 100% {
                opacity: 1;
                transform: scale3d(1, 1, 1);
                box-shadow:
                    0 0 35px rgba(212, 175, 55, 0.7),
                    0 0 70px rgba(193, 84, 193, 0.5),
                    0 0 90px rgba(212, 175, 55, 0.3),
                    0 4px 15px rgba(0, 0, 0, 0.4),
                    inset 0 0 25px rgba(212, 175, 55, 0.15);
            }
            50% {
                opacity: 1;
                transform: scale3d(1.02, 1.02, 1);
                box-shadow:
                    0 0 50px rgba(212, 175, 55, 0.9),
                    0 0 90px rgba(193, 84, 193, 0.6),
                    0 0 110px rgba(212, 175, 55, 0.4),
                    0 4px 15px rgba(0, 0, 0, 0.4),
                    inset 0 0 30px rgba(212, 175, 55, 0.2);
            }
        }

        @keyframes breathingGlowSubtle {
            0%, 100% {
                opacity: 0.96;
                transform: scale3d(1, 1, 1);
            }
            50% {
                opacity: 1;
                transform: scale3d(1.01, 1.01, 1);
            }
        }

        /* Restart button with subtle breathing animation and purple border */
        #restart-btn {
            border-color: rgba(193, 84, 193, 0.8);
            box-shadow:
                0 0 20px rgba(193, 84, 193, 0.4),
                0 4px 15px rgba(0, 0, 0, 0.4),
                inset 0 0 20px rgba(193, 84, 193, 0.15);
        }

        #restart-btn:hover {
            border-color: #c154c1;
            box-shadow:
                0 0 40px rgba(193, 84, 193, 0.7),
                0 0 60px rgba(193, 84, 193, 0.4),
                0 8px 25px rgba(0, 0, 0, 0.5),
                inset 0 0 30px rgba(193, 84, 193, 0.25);
        }

        .btn-restart-animate {
            animation: breathingGlowSubtle 3.5s ease-in-out infinite;
            will-change: transform, opacity;
        }

        /* Ripple effect styles */
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(212, 175, 55, 0.5);
            transform: scale(0);
            animation: rippleAnimation 0.6s ease-out;
            pointer-events: none;
        }

        @keyframes rippleAnimation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }

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
            will-change: width;
        }

        /* Liquid wave effect on quiz progress bar */
        #progress-bar::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(ellipse at center,
                rgba(255, 255, 255, 0.25) 0%,
                rgba(255, 255, 255, 0.1) 40%,
                transparent 70%);
            animation: liquidWave 3s ease-in-out infinite;
            z-index: 1;
        }

        @keyframes liquidWave {
            0%, 100% {
                transform: translate(-25%, -75%) rotate(0deg);
            }
            50% {
                transform: translate(-30%, -70%) rotate(180deg);
            }
        }

        @keyframes progressGlow {
            0%, 100% { box-shadow: 0 0 10px var(--color-secondary); }
            50% { box-shadow: 0 0 25px var(--color-secondary), 0 0 40px var(--color-mystical); }
        }

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
            z-index: 2;
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
            will-change: transform, opacity;
            transition: opacity 0.6s ease-in-out;
            /* Prevent long press save/context menu */
            -webkit-user-select: none;
            user-select: none;
            -webkit-touch-callout: none;
            pointer-events: none;
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
            padding: 50px 18px 15px;
            border: none;
            border-left: 3px solid var(--color-secondary);
            border-right: 3px solid var(--color-secondary);
            box-shadow: 0 0 80px rgba(212, 175, 55, 0.5);
            position: relative;
            overflow-y: auto;
            overflow-x: hidden;
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
            font-size: 1.4em;
            color: var(--color-text-gold);
            margin-bottom: 5px;
            margin-top: 0;
            font-family: var(--font-title);
            text-shadow: 0 0 20px rgba(212, 175, 55, 0.8);
        }

        .gallery-subtitle {
            text-align: center;
            font-size: 0.88em;
            color: var(--color-text-light);
            margin-bottom: 12px;
            opacity: 0.85;
        }

        .gallery-grid {
            display: grid;
            grid-template-columns: repeat(6, 1fr);
            gap: 10px;
            margin-top: 10px;
            padding-bottom: 15px;
            justify-items: center;
        }

        .gallery-grid .gallery-card {
            width: 100%;
            max-width: 120px;
        }

        .gallery-card {
            background: linear-gradient(135deg, rgba(13, 2, 33, 0.8) 0%, rgba(26, 13, 46, 0.6) 100%);
            border-radius: 8px;
            padding: 5px;
            text-align: center;
            border: 2px solid rgba(212, 175, 55, 0.35);
            transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.35s ease, box-shadow 0.35s ease, background 0.35s ease;
            cursor: pointer;
            backdrop-filter: blur(5px);
            backface-visibility: hidden;
        }

        .gallery-card:hover {
            transform: translate3d(0, -4px, 0) scale3d(1.03, 1.03, 1);
            border-color: var(--color-mystical);
            box-shadow:
                0 10px 30px rgba(193, 84, 193, 0.5),
                0 0 20px rgba(212, 175, 55, 0.4);
            background: linear-gradient(135deg, rgba(106, 5, 114, 0.5) 0%, rgba(193, 84, 193, 0.3) 100%);
        }

        .gallery-card-name {
            font-weight: 700;
            color: var(--color-secondary);
            margin-bottom: 2px;
            text-shadow: 0 0 8px rgba(212, 175, 55, 0.4);
            display: flex;
            flex-direction: column;
            gap: 0px;
            height: auto;
            min-height: 2em;
        }

        .gallery-card-name-zh {
            font-size: 0.62em;
            line-height: 1.1;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .gallery-card-name-en {
            font-size: 0.50em;
            line-height: 1.15;
            color: rgba(212, 175, 55, 0.85);
            word-wrap: break-word;
            overflow-wrap: break-word;
            hyphens: auto;
        }

        /* Dynamic font sizing for long English names - responsive to device width */
        @media (max-width: 768px) {
            .gallery-card-name-en.long {
                font-size: 0.35em;
            }

            .gallery-card-name-en.very-long {
                font-size: 0.29em;
            }

            .gallery-card-name-en.extremely-long {
                font-size: 0.25em;
            }
        }

        @media (min-width: 769px) {
            .gallery-card-name-en.long {
                font-size: 0.38em;
            }

            .gallery-card-name-en.very-long {
                font-size: 0.32em;
            }

            .gallery-card-name-en.extremely-long {
                font-size: 0.28em;
            }
        }

        .gallery-card-image {
            width: 100%;
            aspect-ratio: 1;
            object-fit: cover;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
            transition: transform 0.35s ease, box-shadow 0.35s ease;
            backface-visibility: hidden;
            will-change: transform;
            /* Prevent long press save/context menu */
            -webkit-user-select: none;
            user-select: none;
            -webkit-touch-callout: none;
            pointer-events: none;
        }

        .gallery-card:hover .gallery-card-image {
            transform: scale3d(1.08, 1.08, 1);
            box-shadow: 0 6px 20px rgba(212, 175, 55, 0.4);
        }

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

        /* Shining animation for unlocked card clicks */
        @keyframes cardShine {
            0% {
                box-shadow: 0 0 15px rgba(212, 175, 55, 0.3);
                transform: scale(1);
            }
            50% {
                box-shadow: 0 0 50px rgba(212, 175, 55, 1), 0 0 80px rgba(193, 84, 193, 0.8);
                transform: scale(1.05);
            }
            100% {
                box-shadow: 0 0 15px rgba(212, 175, 55, 0.3);
                transform: scale(1);
            }
        }

        .gallery-card.shining {
            animation: cardShine 0.6s ease-out;
        }

        /* Hint display for locked cards */
        .card-hint {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(135deg, rgba(26, 13, 46, 0.98) 0%, rgba(106, 5, 114, 0.95) 100%);
            padding: 25px 30px;
            border-radius: 15px;
            border: 3px solid var(--color-secondary);
            box-shadow: 0 0 80px rgba(212, 175, 55, 0.8);
            z-index: 10002;
            text-align: center;
            animation: fadeIn 0.3s ease-out;
            max-width: 85%;
        }

        .card-hint h3 {
            color: var(--color-text-gold);
            font-family: var(--font-title);
            font-size: 1.2em;
            margin: 0 0 15px 0;
            text-shadow: 0 0 15px rgba(212, 175, 55, 0.6);
        }

        .card-hint p {
            color: var(--color-text-light);
            font-size: 0.95em;
            margin: 10px 0;
            line-height: 1.6;
        }

        .card-hint .hint-sequence {
            font-size: 2em;
            font-weight: bold;
            color: var(--color-secondary);
            letter-spacing: 8px;
            margin: 15px 0;
            text-shadow: 0 0 20px rgba(212, 175, 55, 0.8);
            font-family: 'Courier New', monospace;
        }

        .card-hint button {
            margin-top: 15px;
        }

        /* Celebration stars background for all cards unlocked */
        .gallery-celebration {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            pointer-events: none;
            z-index: 1;
            overflow: hidden;
        }

        .celebration-star {
            position: absolute;
            color: var(--color-secondary);
            font-size: 20px;
            opacity: 0;
            animation: starFall 3s ease-in-out infinite;
            text-shadow: 0 0 10px var(--color-secondary), 0 0 20px var(--color-mystical);
        }

        @keyframes starFall {
            0% {
                opacity: 0;
                transform: translateY(-50px) scale(0) rotate(0deg);
            }
            10% {
                opacity: 1;
            }
            90% {
                opacity: 1;
            }
            100% {
                opacity: 0;
                transform: translateY(100vh) scale(1.5) rotate(360deg);
            }
        }

        /* Card celebration animation when all unlocked */
        .gallery-card.celebrate {
            animation: cardCelebrate 1.5s ease-in-out infinite;
        }

        @keyframes cardCelebrate {
            0%, 100% {
                transform: translateY(0) scale(1);
                box-shadow: 0 0 15px rgba(212, 175, 55, 0.3);
            }
            25% {
                transform: translateY(-8px) scale(1.05);
                box-shadow: 0 0 30px rgba(212, 175, 55, 0.8), 0 0 50px rgba(193, 84, 193, 0.6);
            }
            50% {
                transform: translateY(0) scale(1);
                box-shadow: 0 0 15px rgba(212, 175, 55, 0.3);
            }
            75% {
                transform: translateY(-5px) scale(1.03);
                box-shadow: 0 0 25px rgba(212, 175, 55, 0.6), 0 0 40px rgba(193, 84, 193, 0.4);
            }
        }

        /* Gallery action buttons */
        .gallery-actions {
            margin-top: 20px;
            padding-top: 20px;
            border-top: 2px solid rgba(212, 175, 55, 0.3);
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 10px;
        }

        .gallery-actions button {
            padding: 10px 18px;
            font-size: 0.9em;
        }

        /* Celebration message */
        .celebration-message {
            text-align: center;
            margin: 15px 0;
            padding: 15px;
            background: linear-gradient(135deg, rgba(212, 175, 55, 0.2) 0%, rgba(193, 84, 193, 0.2) 100%);
            border-radius: 10px;
            border: 2px solid var(--color-secondary);
            animation: messageGlow 2s ease-in-out infinite;
        }

        .celebration-message h3 {
            color: var(--color-text-gold);
            font-size: 1.3em;
            margin: 0 0 8px 0;
            text-shadow: 0 0 20px rgba(212, 175, 55, 0.8);
        }

        .celebration-message p {
            color: var(--color-text-light);
            font-size: 0.95em;
            margin: 5px 0;
        }

        @keyframes messageGlow {
            0%, 100% {
                box-shadow: 0 0 15px rgba(212, 175, 55, 0.3);
            }
            50% {
                box-shadow: 0 0 30px rgba(212, 175, 55, 0.6), 0 0 50px rgba(193, 84, 193, 0.4);
            }
        }

        /* Loading indicator with mystical dotted stars */
        .loading-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(13, 2, 33, 0.95);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            backdrop-filter: blur(5px);
        }

        .loading-stars {
            display: flex;
            gap: 15px;
            margin-bottom: 20px;
        }

        .loading-star {
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: var(--color-secondary);
            box-shadow: 0 0 20px var(--color-secondary), 0 0 40px rgba(193, 84, 193, 0.6);
            animation: starPulse 1.4s ease-in-out infinite;
        }

        .loading-star:nth-child(1) {
            animation-delay: 0s;
            background: #d4af37;
        }

        .loading-star:nth-child(2) {
            animation-delay: 0.2s;
            background: #c154c1;
        }

        .loading-star:nth-child(3) {
            animation-delay: 0.4s;
            background: #d4af37;
        }

        .loading-star:nth-child(4) {
            animation-delay: 0.6s;
            background: #c154c1;
        }

        .loading-star:nth-child(5) {
            animation-delay: 0.8s;
            background: #d4af37;
        }

        @keyframes starPulse {
            0%, 100% {
                transform: scale(0.5) translateY(0);
                opacity: 0.3;
            }
            50% {
                transform: scale(1.2) translateY(-10px);
                opacity: 1;
            }
        }

        .loading-text {
            color: var(--color-text-gold);
            font-family: var(--font-title);
            font-size: 1.1em;
            text-shadow: 0 0 15px rgba(212, 175, 55, 0.6);
            animation: textGlow 2s ease-in-out infinite;
        }

        @keyframes textGlow {
            0%, 100% {
                opacity: 0.8;
            }
            50% {
                opacity: 1;
                text-shadow: 0 0 25px rgba(212, 175, 55, 0.8), 0 0 40px rgba(193, 84, 193, 0.6);
            }
        }

        @media (max-width: 768px) {
            #intro-title {
                font-size: clamp(1.1em, 7vw, 1.8em);
            }

            h1 {
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
                grid-template-columns: repeat(5, 1fr);
                gap: 8px;
            }

            .gallery-grid .gallery-card {
                max-width: 100px;
            }

            .gallery-title {
                font-size: 1.3em;
            }

            .gallery-subtitle {
                font-size: 0.82em;
                margin-bottom: 10px;
            }

            .gallery-container {
                padding: 55px 15px 12px;
            }

            .gallery-close {
                width: 45px;
                height: 45px;
                font-size: 2em;
                top: 12px;
                right: 12px;
            }

            .gallery-card {
                padding: 4px;
            }

            .gallery-card-name {
                margin-bottom: 2px;
                height: auto;
                min-height: 1.8em;
            }

            .gallery-card-name-zh {
                font-size: 0.58em;
            }

            .gallery-card-name-en {
                font-size: 0.44em;
            }

            .gallery-card-name-en.long {
                font-size: 0.35em;
            }

            .gallery-card-name-en.very-long {
                font-size: 0.30em;
            }

            .gallery-card-name-en.extremely-long {
                font-size: 0.26em;
            }

            .gallery-card.locked::after {
                font-size: 1.4em;
            }

            .gallery-card.unlocked::before {
                font-size: 0.95em;
                top: 3px;
                right: 3px;
            }
        }

        @media (max-width: 480px) {
            #intro-title {
                font-size: clamp(1em, 8vw, 1.6em);
            }

            h1 {
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
                gap: 7px;
            }

            .gallery-grid .gallery-card {
                max-width: 85px;
            }

            .gallery-title {
                font-size: 1.25em;
            }

            .gallery-subtitle {
                font-size: 0.78em;
                margin-bottom: 8px;
            }

            .gallery-card {
                padding: 4px;
            }

            .gallery-card-name {
                margin-bottom: 2px;
                height: auto;
                min-height: 1.7em;
            }

            .gallery-card-name-zh {
                font-size: 0.54em;
            }

            .gallery-card-name-en {
                font-size: 0.42em;
            }

            .gallery-card-name-en.long {
                font-size: 0.34em;
            }

            .gallery-card-name-en.very-long {
                font-size: 0.28em;
            }

            .gallery-card-name-en.extremely-long {
                font-size: 0.25em;
            }

            .gallery-container {
                padding: 48px 12px 10px;
            }

            .gallery-close {
                width: 42px;
                height: 42px;
                font-size: 1.8em;
                top: 10px;
                right: 10px;
            }

            .gallery-card.locked::after {
                font-size: 1.2em;
            }

            .gallery-card.unlocked::before {
                font-size: 0.85em;
                top: 2px;
                right: 2px;
            }
        }

        @media (min-width: 769px) {
            .container {
                max-width: 650px;
            }
        }

        /* Loading screen styles - matches game background with animation */
        #loading-screen {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            background:
                radial-gradient(ellipse 600px 400px at 20% 30%, rgba(106, 5, 114, 0.15), transparent 70%),
                radial-gradient(ellipse 500px 500px at 80% 70%, rgba(193, 84, 193, 0.1), transparent 70%),
                radial-gradient(ellipse 400px 300px at 50% 50%, rgba(212, 175, 55, 0.08), transparent 60%),
                radial-gradient(circle 2.5px at 15% 25%, white, transparent),
                radial-gradient(circle 2px at 85% 15%, rgba(255, 255, 255, 0.95), transparent),
                radial-gradient(circle 2px at 45% 60%, white, transparent),
                radial-gradient(circle 2.5px at 70% 85%, rgba(255, 255, 255, 0.9), transparent),
                radial-gradient(circle 2px at 30% 45%, white, transparent),
                radial-gradient(circle 1.5px at 60% 70%, rgba(212, 175, 55, 0.9), transparent),
                radial-gradient(circle 1.5px at 25% 80%, rgba(212, 175, 55, 0.85), transparent),
                radial-gradient(circle 1.3px at 90% 40%, rgba(212, 175, 55, 0.8), transparent),
                radial-gradient(circle 1.5px at 50% 20%, rgba(212, 175, 55, 0.9), transparent),
                radial-gradient(circle 1.3px at 10% 55%, rgba(212, 175, 55, 0.75), transparent),
                radial-gradient(circle 1.2px at 80% 20%, rgba(193, 84, 193, 0.85), transparent),
                radial-gradient(circle 1px at 40% 80%, rgba(193, 84, 193, 0.8), transparent),
                radial-gradient(circle 1.3px at 65% 35%, rgba(193, 84, 193, 0.9), transparent),
                radial-gradient(circle 1px at 20% 65%, rgba(193, 84, 193, 0.75), transparent),
                radial-gradient(circle 0.8px at 35% 15%, white, transparent),
                radial-gradient(circle 0.6px at 55% 50%, rgba(255, 255, 255, 0.8), transparent),
                radial-gradient(circle 0.7px at 75% 75%, white, transparent),
                radial-gradient(circle 0.6px at 18% 90%, rgba(255, 255, 255, 0.85), transparent),
                radial-gradient(circle 0.8px at 92% 60%, white, transparent),
                radial-gradient(circle 0.7px at 48% 92%, rgba(255, 255, 255, 0.9), transparent),
                radial-gradient(circle 0.4px at 12% 35%, rgba(255, 255, 255, 0.6), transparent),
                radial-gradient(circle 0.5px at 68% 12%, rgba(212, 175, 55, 0.7), transparent),
                radial-gradient(circle 0.4px at 88% 88%, rgba(255, 255, 255, 0.65), transparent),
                radial-gradient(circle 0.3px at 42% 38%, rgba(193, 84, 193, 0.6), transparent),
                radial-gradient(circle 0.5px at 95% 25%, rgba(255, 255, 255, 0.7), transparent),
                radial-gradient(circle 0.4px at 58% 85%, rgba(212, 175, 55, 0.65), transparent),
                linear-gradient(180deg, #0d0221 0%, #1a0d2e 50%, #16001e 100%);
            background-size:
                2000px 2000px, 2000px 2000px, 2000px 2000px,
                220px 220px, 280px 280px, 240px 240px, 260px 260px, 200px 200px,
                180px 180px, 190px 190px, 210px 210px, 195px 195px, 185px 185px,
                170px 170px, 165px 165px, 175px 175px, 180px 180px,
                140px 140px, 150px 150px, 145px 145px, 135px 135px, 155px 155px, 138px 138px,
                100px 100px, 110px 110px, 95px 95px, 105px 105px, 98px 98px, 102px 102px,
                100% 100%;
            background-repeat: repeat, repeat, repeat,
                repeat, repeat, repeat, repeat, repeat,
                repeat, repeat, repeat, repeat, repeat,
                repeat, repeat, repeat, repeat,
                repeat, repeat, repeat, repeat, repeat, repeat,
                repeat, repeat, repeat, repeat, repeat, repeat,
                no-repeat;
            animation: cosmicFlow 60s linear infinite;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            z-index: 99999;
            opacity: 1;
            transition: opacity 0.8s ease-out;
        }

        #loading-screen.fade-out {
            opacity: 0;
            pointer-events: none;
        }

        .loading-symbol {
            font-size: 4em;
            color: #d4af37;
            text-shadow:
                0 0 20px rgba(212, 175, 55, 0.8),
                0 0 40px rgba(193, 84, 193, 0.6);
            animation: loadingPulse 1.5s ease-in-out infinite;
            margin-bottom: 25px;
            transition: all 0.5s ease-out;
        }

        .loading-symbol.ready {
            animation:
                loadingGlowIntense 1.2s ease-in-out infinite,
                secretDoorSpin 2.4s linear infinite;
            text-shadow:
                0 0 60px rgba(212, 175, 55, 1),
                0 0 120px rgba(193, 84, 193, 1),
                0 0 180px rgba(212, 175, 55, 1),
                0 0 240px rgba(193, 84, 193, 0.9),
                0 0 300px rgba(212, 175, 55, 0.8),
                0 0 360px rgba(193, 84, 193, 0.6);
            transform: scale(1.3);
            filter: brightness(1.3);
        }

        @keyframes loadingPulse {
            0%, 100% {
                transform: scale(1);
                opacity: 0.8;
            }
            50% {
                transform: scale(1.15);
                opacity: 1;
            }
        }

        @keyframes loadingGlowIntense {
            0%, 100% {
                text-shadow:
                    0 0 60px rgba(212, 175, 55, 1),
                    0 0 120px rgba(193, 84, 193, 1),
                    0 0 180px rgba(212, 175, 55, 1),
                    0 0 240px rgba(193, 84, 193, 0.9),
                    0 0 300px rgba(212, 175, 55, 0.8),
                    0 0 360px rgba(193, 84, 193, 0.6);
                filter: brightness(1.3) drop-shadow(0 0 30px rgba(212, 175, 55, 0.8));
            }
            50% {
                text-shadow:
                    0 0 80px rgba(212, 175, 55, 1),
                    0 0 160px rgba(193, 84, 193, 1),
                    0 0 240px rgba(212, 175, 55, 1),
                    0 0 320px rgba(193, 84, 193, 1),
                    0 0 400px rgba(212, 175, 55, 0.9),
                    0 0 480px rgba(193, 84, 193, 0.7);
                filter: brightness(1.5) drop-shadow(0 0 50px rgba(193, 84, 193, 1));
            }
        }

        @keyframes secretDoorSpin {
            0% {
                transform: scale(1.3) rotate(0deg);
            }
            100% {
                transform: scale(1.3) rotate(360deg);
            }
        }

        @keyframes loadingGlow {
            0%, 100% {
                text-shadow:
                    0 0 30px rgba(212, 175, 55, 1),
                    0 0 60px rgba(193, 84, 193, 0.9),
                    0 0 90px rgba(212, 175, 55, 0.7);
            }
            50% {
                text-shadow:
                    0 0 40px rgba(212, 175, 55, 1),
                    0 0 80px rgba(193, 84, 193, 1),
                    0 0 120px rgba(212, 175, 55, 0.9);
            }
        }

        /* Loading progress bar */
        #loading-progress-container {
            width: 200px;
            height: 3px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 2px;
            overflow: hidden;
            margin-bottom: 15px;
            box-shadow: 0 0 10px rgba(212, 175, 55, 0.2);
            transition: opacity 0.4s ease-out;
        }

        #loading-progress-container.hidden {
            opacity: 0;
        }

        #loading-progress-bar {
            height: 100%;
            width: 0%;
            background: linear-gradient(90deg,
                rgba(212, 175, 55, 0.8) 0%,
                rgba(212, 175, 55, 1) 50%,
                rgba(193, 84, 193, 0.9) 100%);
            transition: width 0.3s ease-out;
            box-shadow: 0 0 15px rgba(212, 175, 55, 0.8);
            position: relative;
            overflow: hidden;
        }

        /* Liquid wave effect on loading progress bar */
        #loading-progress-bar::before {
            content: '';
            position: absolute;
            top: -100%;
            left: -50%;
            width: 200%;
            height: 300%;
            background: radial-gradient(ellipse at center,
                rgba(255, 255, 255, 0.3) 0%,
                rgba(255, 255, 255, 0.15) 35%,
                transparent 65%);
            animation: loadingLiquidWave 2.5s ease-in-out infinite;
        }

        @keyframes loadingLiquidWave {
            0%, 100% {
                transform: translate(-20%, -60%) rotate(0deg);
            }
            50% {
                transform: translate(-25%, -55%) rotate(180deg);
            }
        }

        .loading-text {
            color: var(--color-text-gold);
            font-size: 1.2em;
            text-shadow: 0 0 15px rgba(212, 175, 55, 0.5);
            animation: loadingTextFade 1.5s ease-in-out infinite;
            font-family: 'Noto Serif TC', serif;
        }

        @keyframes loadingTextFade {
            0%, 100% {
                opacity: 0.7;
            }
            50% {
                opacity: 1;
            }
        }
    </style>
</head>
<body>

    <!-- Loading Screen (shows once on first load) -->
    <div id="loading-screen">
        <div class="loading-symbol" id="loading-symbol"><span class="moon-symbols">☽</span> ✦ <span class="moon-symbols">☾</span></div>
        <div id="loading-progress-container">
            <div id="loading-progress-bar"></div>
        </div>
        <div class="loading-text" id="loading-text">...</div>
    </div>

    <!-- Language Toggle Button -->
    <button class="lang-toggle" id="lang-toggle" onclick="toggleLanguage()">EN</button>

    <!-- Back Button (only visible on quiz page questions 2-4) -->
    <button class="back-btn" id="back-btn" onclick="goToPreviousQuestion()">←</button>

    <div id="intro-page" class="container active">
        <h1 id="intro-title">✦ 邂逅心靈 ✦<br>你的塔羅啟示</h1>
        <p id="intro-subtitle" style="margin-top: 18px; font-size: 1.05em;">你準備好接收孫孫給你的啟示了嗎?</p>
        <p id="intro-desc1" style="margin: 10px auto;">每個選擇都將引導你走向</p>
        <p id="intro-cards" style="color: var(--color-secondary); font-weight: bold; font-size: 1.1em; margin: 8px auto;">22 張大阿爾克那牌</p>
        <p id="intro-desc2" style="margin: 10px auto;">揭示你此刻最需要的指引</p>
        <div style="margin: 15px auto 20px; font-size: 1.7em; color: var(--color-mystical); text-shadow: 0 0 20px var(--color-mystical); animation: symbolGlow 3s ease-in-out infinite alternate;">
            <span class="moon-symbols">☽</span> ✦ <span class="moon-symbols">☾</span>
        </div>
        <button id="start-quiz-btn" class="btn" onclick="startQuiz()">
            ✧ 開始探索 ✧
        </button>
        <div id="intro-disclaimer" style="text-align: center; margin-top: 10px; margin-bottom: 10px; font-size: 0.6em; color: #c154c1; line-height: 1.0;">
            配對結果純粹娛樂 僅供參考
        </div>
    </div>

    <div id="quiz-page" class="container">
        <div id="progress-bar-container">
            <div id="progress-bar"></div>
        </div>
        <div id="progress-text" style="margin-bottom: 18px; margin-top: 8px;">
            <span style="color: var(--color-mystical);">✦</span>
            <span id="progress-label-current">第</span> <span id="current-q" style="color: var(--color-secondary); font-weight: bold; font-size: 1.15em;">1</span> <span id="progress-label-question">題</span>
            <span style="color: var(--color-mystical);">✧</span>
            <span id="progress-label-total">共</span> <span id="total-q" style="color: var(--color-secondary); font-weight: bold;">4</span> <span id="progress-label-total-questions">題</span>
            <span style="color: var(--color-mystical);">✦</span>
        </div>

        <h2 id="question-text" style="margin: 18px auto; line-height: 1.5; max-width: 95%;"></h2>
        <div id="options-container" style="margin-top: 20px;">
        </div>
    </div>

    <div id="result-page" class="container">
        <div style="margin-bottom: 10px;">
            <h2 id="result-title" style="margin: 0; font-size: 1.3em;">你的專屬塔羅啟示</h2>
        </div>

        <img id="result-img" src="" alt="Tarot Card Result" loading="eager">

        <div id="result-desc" style="text-align: left; margin-bottom: 10px">
        </div>

        <div style="margin-top: 15px; padding: 12px 6px; border-top: 2px solid rgba(212, 175, 55, 0.3); border-bottom: 2px solid rgba(212, 175, 55, 0.3); margin-bottom: 15px">
            <button class="btn" onclick="openGallery()" style="padding: 9px 16px; font-size: 0.85em;">
                <span id="btn-gallery">🃏 我的塔羅牌</span>
            </button>
            <button class="btn" onclick="saveResult()" style="padding: 9px 16px; font-size: 0.85em;">
                <span id="btn-save">✧ 儲存圖片</span>
            </button>
            <button id="share-btn" class="btn" onclick="shareResult()" style="padding: 9px 16px; font-size: 0.85em;">
                <span id="btn-share">☆ 分享</span>
            </button>
            <button id="restart-btn" class="btn" onclick="restartQuiz()" style="padding: 9px 16px; font-size: 0.85em;">
                <span id="btn-restart">↻ 重新開始</span>
            </button>
        </div>

        <div id="promo-section">
            <h3 id="promo-title" style="font-size: 1.05em; margin-bottom: 10px; line-height: 1.0;">
                <span style="color: var(--color-mystical);">✦</span>
                深度探索 孫孫暉日塔羅牌組
                <span style="color: var(--color-mystical);">✦</span>
            </h3>
            <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 6px;">
                <a href="https://forms.gle/ZErmb74tu3KrbiEY9" target="_blank" rel="noopener noreferrer" style="text-decoration: none;">
                    <button class="btn promo-btn" id="btn-purchase" style="padding: 8px 14px; font-size: 0.82em; margin: 4px;">🛒 預購塔羅牌</button>
                </a>
                <a href="https://www.threads.com/@grafittiii_uru/post/DQ8z1FUEYiO" target="_blank" rel="noopener noreferrer" style="text-decoration: none;">
                    <button class="btn promo-btn" id="btn-video" style="padding: 8px 14px; font-size: 0.82em; margin: 4px;">▶️ 觀看展示影片</button>
                </a>
            </div>
        </div>
        <div id="result-disclaimer" style="text-align: center; margin-top: 20px; font-size: 0.75em; color: #c154c1; line-height: 1.4;">
            配對結果純粹娛樂 僅供參考
        </div>
        <div id="copyright-notice" style="text-align: center; margin-top: 15px; padding: 10px; font-size: 0.65em; color: rgba(212, 175, 55, 0.6); line-height: 1.3; border-top: 1px solid rgba(212, 175, 55, 0.2);">
            @2025 孫孫暉日塔羅 by @grafittiii_uru<br>
            All tarot card artwork is original, giving credit to GMM Mascots and AI's assistance. 
        </div>
    </div>

    <!-- Gallery Modal -->
    <div id="gallery-modal" class="gallery-modal">
        <div class="gallery-close" onclick="closeGallery()">×</div>
        <div class="gallery-container">
            <h1 class="gallery-title" id="gallery-title">✦ 22 張大阿爾克那 ✦</h1>
            <p class="gallery-subtitle" id="gallery-subtitle">孫孫塔羅圖鑑</p>
            <div class="gallery-grid" id="gallery-grid">
            </div>
        </div>
    </div>

    <script>
        /**
         * ✦ Mystical Tarot - Major Arcana Quiz ✦
         *
         * A beautiful, mystical tarot card quiz application that guides users
         * through a personalized journey to discover their spiritual revelation
         * from the 22 Major Arcana cards.
         *
         * Features:
         * - Bilingual support (Chinese/English)
         * - Responsive design for mobile and desktop
         * - Dark mode support
         * - Card collection gallery
         * - Image generation and sharing
         * - Optimized loading with progress tracking
         *
         * Created with ✨ for the 孫孫暉日塔羅牌組
         * GitHub: https://github.com/grafittiii-hub/MascotTarotQuiz
         */

        // ==================== GLOBAL STATE ====================
        // In-memory language setting (persists during session only, no localStorage)
        let currentLanguage = 'zh'; // Default to Chinese

        // Track unlocked cards across games (persists in memory during session)
        let unlockedCards = new Set();

        // Image cache that persists across game restarts
        const imageCache = new Map();
        let imagesPreloaded = false;

        // Compress image to reduce memory usage
        function compressImage(img, maxWidth = 400, quality = 0.7) {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');

            // Calculate new dimensions while maintaining aspect ratio
            let width = img.width;
            let height = img.height;

            if (width > maxWidth) {
                height = (height * maxWidth) / width;
                width = maxWidth;
            }

            canvas.width = width;
            canvas.height = height;

            // Draw and compress
            ctx.drawImage(img, 0, 0, width, height);
            return canvas.toDataURL('image/jpeg', quality);
        }

        // Pre-calculate all valid sequences for each card (performance optimization)
        const cardSequencesCache = (function() {
            const cache = {};
            const questionValues = [
                [0, 1, 2, 3],
                [0, 4, 8, 12],
                [0, 2, 4, 6],
                [0, 3, 6, 9]
            ];

            // Pre-calculate for all 22 cards
            for (let targetIndex = 0; targetIndex < 22; targetIndex++) {
                const validSequences = [];
                for (let q1 = 0; q1 < 4; q1++) {
                    for (let q2 = 0; q2 < 4; q2++) {
                        for (let q3 = 0; q3 < 4; q3++) {
                            for (let q4 = 0; q4 < 4; q4++) {
                                const sum = questionValues[0][q1] + questionValues[1][q2] +
                                           questionValues[2][q3] + questionValues[3][q4];
                                if (sum % 22 === targetIndex) {
                                    validSequences.push(`${q1 + 1}${q2 + 1}${q3 + 1}${q4 + 1}`);
                                }
                            }
                        }
                    }
                }
                cache[targetIndex] = validSequences;
            }
            return cache;
        })();

        // Calculate answer sequence to unlock a specific card (fast lookup)
        function calculateAnswerSequence(targetIndex) {
            const validSequences = cardSequencesCache[targetIndex];
            if (validSequences && validSequences.length > 0) {
                const randomIndex = Math.floor(Math.random() * validSequences.length);
                return validSequences[randomIndex];
            }
            return "????"; // Fallback
        }

        // Translations object
        const t = {
            zh: {
                loadingText: '正在連接宇宙能量...',
                introTitle: '✦ 邂逅心靈 ✦<br>你的塔羅啟示',
                introSubtitle: '你準備好接收孫孫給你的訊息了嗎?',
                introDesc1: '每張選擇都將引導你走向',
                introCards: '22 張大阿爾克那牌',
                introDesc2: '揭示你此刻最需要的指引',
                startBtn: '✧ 開始探索 ✧',
                backBtn: '←',
                introDisclaimer: '配對結果純粹娛樂 僅供參考',
                progressCurrent: '第',
                progressQuestion: '題',
                progressTotal: '共',
                progressTotalQuestions: '題',
                resultTitle: '你的專屬塔羅啟示',
                btnGallery: '🃏 我的塔羅牌',
                btnSave: '✧ 儲存圖片',
                btnShare: '☆ 分享',
                btnShareLink: '☆ 分享連結',
                btnRestart: '↻ 重新開始',
                promoTitle: '深度探索 孫孫暉日塔羅牌組',
                btnPurchase: '🛒 預購塔羅牌',
                btnVideo: '▶️ 觀看展示影片',
                resultDisclaimer: '配對結果純粹娛樂 僅供參考',
                galleryTitle: '✦ 22 張大阿爾克那 ✦',
                gallerySubtitle: '孫孫暉日塔羅圖鑑',
                gallerySubtitleNone: '完成題目以解鎖你的專屬塔羅牌',
                gallerySubtitleOne: '已解鎖 1/22 張 ✦ {name}',
                gallerySubtitleMany: '已解鎖 {count}/22 張 ✦ 繼續探索更多塔羅牌',
                hintTitle: '🔮 解鎖提示',
                hintDesc: '選擇以下答案序列來解鎖此牌:',
                hintClose: '明白了',
                celebrationTitle: '🎉 恭喜！全部收集完成 🎉',
                celebrationDesc: '你已解鎖所有 22 張大阿爾克那塔羅牌！',
                btnReplayAnimation: '✨ 重播動畫',
                btnSaveCollection: '💾 儲存圖鑑'
            },
            en: {
                loadingText: 'Connecting to cosmic energy...',
                introTitle: '✦ Mystical Encounter ✦<br>Your Tarot Revelation',
                introSubtitle: 'Are you ready to receive your Mascot message?',
                introDesc1: 'Each choice will guide you to one of the',
                introCards: '22 Major Arcana Cards',
                introDesc2: 'revealing the guidance you need most at this moment',
                startBtn: '✧ Begin Your Journey ✧',
                backBtn: '←',
                introDisclaimer: 'For entertainment purposes only',
                progressCurrent: 'Question',
                progressQuestion: '',
                progressTotal: 'of',
                progressTotalQuestions: '',
                resultTitle: 'Your Personal Tarot Revelation',
                btnGallery: '🃏 My Tarot Cards',
                btnSave: '✧ Save Image',
                btnShare: '☆ Share',
                btnShareLink: '☆ Share Link',
                btnRestart: '↻ Restart',
                promoTitle: 'Explore the Full Tarot Deck',
                btnPurchase: '🛒 Pre-order Deck',
                btnVideo: '▶️ Watch Demo',
                resultDisclaimer: 'For entertainment purposes only',
                galleryTitle: '✦ The 22 Major Arcana ✦',
                gallerySubtitle: 'MascotTarot Collection',
                gallerySubtitleNone: 'Complete the quiz to unlock your personal tarot card',
                gallerySubtitleOne: 'Unlocked 1/22 ✦ {name}',
                gallerySubtitleMany: 'Unlocked {count}/22 ✦ Continue exploring more cards',
                hintTitle: '🔮 Unlock Hint',
                hintDesc: 'Choose the following answer sequence to unlock this card:',
                hintClose: 'Got it',
                celebrationTitle: '🎉 Congratulations! Collection Complete 🎉',
                celebrationDesc: 'You have unlocked all 22 Major Arcana tarot cards!',
                btnReplayAnimation: '✨ Replay Animation',
                btnSaveCollection: '💾 Save Collection'
            }
        };

        // Questions
        const questionsData = {
            zh: [
                { question: "當你進入房間時, 你第一眼看到的物品是?", options: [{ text: "古典花瓶與綻放的鮮花", value: 0 }, { text: "色彩繽紛的枕頭與被套", value: 1 }, { text: "玻璃窗上的雨點", value: 2 }, { text: "地上堆放的禮物盒", value: 3 }] },
                { question: "在神秘的桌子上, 你想拿起哪一樣物品來引導你?", options: [{ text: "透明���水晶球, 觀看未來的影像", value: 0 }, { text: "古老的鑰匙, 開啟被塵封的門", value: 4 }, { text: "發光的飾物, 朋友贈送的心意", value: 8 }, { text: "純白的羽毛, 象徵輕盈與自由", value: 12 }] },
                { question: "你聽到遠處傳來一種聲音, 最能撫慰你心靈的是?", options: [{ text: "寧靜的雪落聲, 一片沉寂與空白", value: 0 }, { text: "爐火中木材的爆裂聲, 溫暖而規律", value: 2 }, { text: "遠方大海拍打岸邊的潮汐聲, 充滿能量", value: 4 }, { text: "古老且遙遠的鐘擺聲, 代表時間的流動", value: 6 }] },
                { question: "你走在一片迷霧中, 腳下延伸著哪一種路徑?", options: [{ text: "未曾有人走過的泥土小徑, 充滿未知", value: 0 }, { text: "被藤蔓覆蓋的古老石板路, 充滿歷史感", value: 3 }, { text: "鋪滿金幣的明亮大道, 直通繁榮", value: 6 }, { text: "懸浮於空中的彩虹橋, 只存在於夢境", value: 9 }] }
            ],
            en: [
                { question: "As you enter the room, what catches your eye first?", options: [{ text: "A classical vase with blooming flowers", value: 0 }, { text: "Colorful pillows and bedding", value: 1 }, { text: "Raindrops on the glass window", value: 2 }, { text: "Gift boxes stacked on the floor", value: 3 }] },
                { question: "On a mystical table, which item would you pick up to guide you?", options: [{ text: "A transparent crystal ball, revealing future visions", value: 0 }, { text: "An ancient key, opening sealed doors", value: 4 }, { text: "A burning candle, illuminating the path ahead", value: 8 }, { text: "A pure white feather, symbolizing lightness and freedom", value: 12 }] },
                { question: "You hear a distant sound. Which one soothes your soul the most?", options: [{ text: "The quiet sound of falling snow, a blanket of silence", value: 0 }, { text: "The crackling of wood in a fireplace, warm and rhythmic", value: 2 }, { text: "The sound of ocean waves crashing on distant shores, full of energy", value: 4 }, { text: "The ancient and distant sound of a pendulum, representing the flow of time", value: 6 }] },
                { question: "Walking through a mist, which path extends beneath your feet?", options: [{ text: "An untrodden dirt path, full of unknowns", value: 0 }, { text: "An ancient stone path covered in vines, rich with history", value: 3 }, { text: "A bright avenue paved with gold coins, leading to prosperity", value: 6 }, { text: "A rainbow bridge floating in the air, existing only in dreams", value: 9 }] }
            ]
        };

        // Tarot cards data (names are bilingual, descriptions are separate)
        const tarotCards = [
            { name: "0 愚者 <span class='en-text'>(The Fool)</span>", image: "https://pfst.cf2.poecdn.net/base/image/9827674879461d64b0aea493d8cb19ce40cb72f6dcddae933235132a66bf48e1?w=4096&h=4096", descZh: "🎉 **啟示: 開始的勇氣** 🎉 你正站在一個令人興奮的起點。像一個初生嬰兒般保持對世界的好奇心與開���性，相信直覺會引導你走向美好的未知旅程。放手去闖吧，宇宙會支持你!", descEn: "🎉 **Revelation: The Courage to Begin** 🎉 You stand at an exciting starting point. Maintain the curiosity and openness of a newborn to the world, trusting your intuition to guide you toward a beautiful unknown journey. Take the leap—the universe supports you!" },
            { name: "1 魔術師 <span class='en-text'>(The Magician)</span>", image: "https://pfst.cf2.poecdn.net/base/image/b08a6693f2bdb4a2bce89802ec52d73b39296ac1957ce9eec7de726cbea1123f?w=4096&h=4096", descZh: "✨ **啟示: 無限的創造力** ✨ 所有的工具和資源都已在你手中。你擁有強大的意志力去實現夢想，現在正是行動的最佳時機。運用你的天賦創造奇蹟!", descEn: "✨ **Revelation: Infinite Creativity** ✨ All the tools and resources are already in your hands. You possess a powerful will to realize your dreams, and now is the perfect time to act. Use your gifts to create miracles!" },
            { name: "2 女祭司 <span class='en-text'>(The High Priestess)</span>", image: "https://pfst.cf2.poecdn.net/base/image/f80fa7d6204fc61fbe44dfbee2d89bdc67a129f15df0fdc41a26ae1a87c67834?w=4096&h=4096", descZh: "🧘‍♀️ **啟示: 內在的智慧** 🧘‍♀️ 現在是傾聽內心聲音的時候。你的直覺和潛意識正為你提供最準確的指引。保持沉靜，答案就在你心中深處，靜待揭曉。", descEn: "🧘‍♀️ **Revelation: Inner Wisdom** 🧘‍♀️ Now is the time to listen to your inner voice. Your intuition and subconscious are providing you with the most accurate guidance. Stay calm—the answer lies deep within your heart, waiting to be revealed." },
            { name: "3 皇后 <span class='en-text'>(The Empress)</span>", image: "https://pfst.cf2.poecdn.net/base/image/522f861eeb6af760ce61f2ce40380a5a3bd70c22c9ce01591e0236ca5df34ffd?w=4096&h=4096", descZh: "🌿 **啟示: 豐盛與滋養** 🌿 你被愛與美包圍。擁抱生活中的豐盛與舒適，照顧好自己和身邊的人。讓創造力開花結果，享受生命的滋養力量。", descEn: "🌿 **Revelation: Abundance and Nourishment** 🌿 You are surrounded by love and beauty. Embrace the abundance and comfort in life, take care of yourself and those around you. Let creativity blossom and enjoy life's nourishing power." },
            { name: "4 皇帝 <span class='en-text'>(The Emperor)</span>", image: "https://pfst.cf2.poecdn.net/base/image/f7ee0a1abad1f0a1e55c2ccbaf24c7da55b4ca54e1afd26e3b6aade9b7116ea7?w=4096&h=4096", descZh: "🛡️ **啟示: 結構與領導力** 🛡️ 你擁有建立穩固基礎和達成目標的能力。展現你的決斷力與領導力，用清晰的規則和計劃來掌握生活。你是自己的主人!", descEn: "🛡️ **Revelation: Structure and Leadership** 🛡️ You have the ability to build a solid foundation and achieve your goals. Demonstrate your decisiveness and leadership, master your life with clear rules and plans. You are your own master!" },
            { name: "5 教皇 <span class='en-text'>(The Hierophant)</span>", image: "https://pfst.cf2.poecdn.net/base/image/b48ff47486c4ec33cb407dfa31a9254f7902f709ccf3512abc103f66d74049c7?w=4096&h=4096", descZh: " 📜**啟示: 學習與傳承** 📜 尋求智慧與啟發的時刻。你將從傳統、導師或社群中獲得寶貴的指導。保持謙遜，並準備好將所學知識傳遞給他人。", descEn: "📜 **Revelation: Learning and Legacy** 📜 A moment to seek wisdom and inspiration. You will receive valuable guidance from tradition, mentors, or community. Stay humble and be ready to pass on your knowledge to others." },
            { name: "6 戀人 <span class='en-text'>(The Lovers)</span>", image: "https://pfst.cf2.poecdn.net/base/image/8bef3fba764a2ef02b89bda3a50d5ff7db3d92c7958f21ca8eb1b25c8e600a3d?w=4096&h=4096", descZh: "💖 **啟示: 和諧的選擇** 💖 這是一張關於和諧、愛與重要抉擇的牌。你的心靈和���值觀已達成一致，勇敢地做出那個最貼近你靈魂的決定。愛將是你的力量。", descEn: "💖 **Revelation: Harmonious Choice** 💖 This card speaks of harmony, love, and important decisions. Your heart and values are aligned—bravely make the choice that resonates most with your soul. Love will be your strength." },
            { name: "7 戰車 <span class='en-text'>(The Chariot)</span>", image: "https://pfst.cf2.poecdn.net/base/image/7012708ef7f9bc030a2cb3503a03d2bf1db276d8a2fc7f44356bf83c75d1fe7d?w=4096&h=4096", descZh: "🚀 **啟示: 堅定的勝利** 🚀 你正以驚人的速度向目標前進。只要保持專注、自信和內在的平衡，任何挑戰都無法阻擋你。勝利就在不遠的前方!", descEn: "🚀 **Revelation: Determined Victory** 🚀 You're advancing toward your goal at an amazing speed. As long as you stay focused, confident, and internally balanced, no challenge can stop you. Victory lies just ahead!" },
            { name: "8 力量 <span class='en-text'>(Strength)</span>", image: "https://pfst.cf2.poecdn.net/base/image/37fda1ff9085b01fa4d7eb81f143eb0c69e5daaa76db299cec4abdf8e35d18e2?w=4096&h=4096", descZh: "🦁 **啟示: 溫柔的韌性** 🦁 真正的力量來自於內心的平靜與溫柔。面對困難時，請用愛心和耐心來馴服內在的焦慮。你比自己想像的更強大!", descEn: "🦁 **Revelation: Gentle Resilience** 🦁 True strength comes from inner peace and gentleness. When facing difficulties, use love and patience to tame inner anxiety. You are stronger than you think!" },
            { name: "9 隱者 <span class='en-text'>(The Hermit)</span>", image: "https://pfst.cf2.poecdn.net/base/image/7fa8b296a7b7f1ef13130918a0e0991204f1bf1e5d45a32c9cc5f61cd031216e?w=4096&h=4096", descZh: "💡 **啟示: 尋找真理** 💡 這是暫時遠離喧囂、自我反思的黃金時期。透過內省，你將獲得清晰的洞察和深刻的個人真理。光芒源於內在。", descEn: "💡 **Revelation: Seeking Truth** 💡 This is a golden period to temporarily distance yourself from noise and engage in self-reflection. Through introspection, you will gain clear insight and profound personal truth. The light comes from within." },
            { name: "10 命運之輪 <span class='en-text'>(Wheel of Fortune)</span>", image: "https://pfst.cf2.poecdn.net/base/image/d01071782df20884bcd10f8e36441e72bc3e181ac3780d37558ccf113efe03f4?w=4096&h=4096", descZh: "🍀 **啟示: 轉機與好運** 🍀 命運之輪正為你轉向積極的一面！抓住這個機會，迎接即將到來的改變和意想不到的好運。相信宇宙的安排是完美的。", descEn: "🍀 **Revelation: Turning Point and Good Fortune** 🍀 The Wheel of Fortune is turning toward the positive for you! Seize this opportunity, embrace the coming changes and unexpected good luck. Trust that the universe's arrangement is perfect." },
            { name: "11 正義 <span class='en-text'>(Justice)</span>", image: "https://pfst.cf2.poecdn.net/base/image/d0feda744bf2db0cd91d362a0f8064483f536525887d2b13b2011a784100e993?w=4096&h=4096", descZh: "⚖️ **啟示: 平衡與公平** ⚖️ 宇宙會帶來公正的結果。現在是時候以清晰、誠實的態度做出決定，你將獲得平衡與和諧。", descEn: "⚖️ **Revelation: Balance and Fairness** ⚖️ The universe will bring justice. Now is the time to make decisions with clarity and honesty, and you will achieve balance and harmony." },
            { name: "12 倒吊人 <span class='en-text'>(The Hanged Man)</span>", image: "https://pfst.cf2.poecdn.net/base/image/6f60e6bb2e391bc5e9b745677d41d2134434aafe16bd2acc3fe37ce408a88aa9?w=4096&h=4096", descZh: "🔄 **啟示: 嶄新的視角** 🔄 這需要你暫停腳步，從一個全新的角度看待問題。放下控制慾，接受現狀。當你願意換個方向思考時，突破隨之而來。", descEn: "🔄 **Revelation: Fresh Perspective** 🔄 This requires you to pause and view problems from a completely new angle. Let go of the need for control, accept the current situation. When you're willing to think from a different direction, breakthroughs will follow." },
            { name: "13 死神 <span class='en-text'>(Death)</span>", image: "https://pfst.cf2.poecdn.net/base/image/579e3bf2c73af72a0e0a23990048df8e8c9c3abb00625d194f96a6b356676432?w=4096&h=4096", descZh: "🦋 **啟示: 積極的轉變** 🦋 這不是結束，而是蛻變的開始! 舊的模式、習慣或狀態正在結束，為更美好、更真實的你騰出空間。迎接重生，輕裝前行。", descEn: "🦋 **Revelation: Positive Transformation** 🦋 This is not an ending, but the beginning of transformation! Old patterns, habits, or states are concluding, making room for a better, more authentic you. Embrace rebirth and move forward lightly." },
            { name: "14 節制 <span class='en-text'>(Temperance)</span>", image: "https://pfst.cf2.poecdn.net/base/image/19b42ab117b9bb33516a6bf4f73a1959b54b9740e8bf8ae5ac406b647acc8d11?w=4096&h=4096", descZh: "💧 **啟示: 完美的融合** 💧 保持耐心和中庸之道。透過優雅地混合內在與外在的力量，你將在生活中找到完美的平衡點。和諧與療癒正在發生。", descEn: "💧 **Revelation: Perfect Integration** 💧 Maintain patience and the middle way. By gracefully blending inner and outer forces, you will find the perfect balance point in life. Harmony and healing are taking place." },
            { name: "15 惡魔 <span class='en-text'>(The Devil)</span>", image: "https://pfst.cf2.poecdn.net/base/image/35c6902e9b4a6c426823bae36c0f9b3afd352cd4cc3a1873a443fdde34ff6ad4?w=4096&h=4096", descZh: "⛓️ **啟示: 掙脫束縛** ⛓️ 覺察那些阻礙你的物質或精神依賴。你擁有掙脫任何限制的力量，只要你願意承認並改變。你是自由的，選擇權在你手上!", descEn: "⛓️ **Revelation: Breaking Free from Bonds** ⛓️ Become aware of the material or spiritual dependencies hindering you. You have the power to break free from any limitation, as long as you're willing to acknowledge and change. You are free—the choice is in your hands!" },
            { name: "16 塔 <span class='en-text'>(The Tower)</span>", image: "https://pfst.cf2.poecdn.net/base/image/25f78ba4a1feb5455a58764222a82cdea8073fc9da103101b53a031a846c2d38?w=4096&h=4096", descZh: "⚡ **啟   : 突破與釋放** ⚡ 突然的變動正為你清除不穩定的結構，這是一個強大的覺醒時刻。相信舊的崩塌是為了迎接更堅固、更真實的未來，你將重生!", descEn: "⚡ **Revelation: Breakthrough and Release** ⚡ Sudden changes are clearing unstable structures for you—this is a powerful moment of awakening. Trust that the collapse of the old is to welcome a more solid, more authentic future. You will be reborn!" },
            { name: "17 星星 <span class='en-text'>(The Star)</span>", image: "https://pfst.cf2.poecdn.net/base/image/a14eb4206eee139e821aeb51346995d81664346974d835998a22f8e4d9e68349?w=4096&h=4096", descZh: "🌟 **啟示: 希望與靈感** 🌟 偉大的希望和心靈的平靜正在注入你的生命。相信你的夢想，你正受到宇宙的指引。保持樂觀，你閃耀著獨特的光芒。", descEn: "🌟 **Revelation: Hope and Inspiration** 🌟 Great hope and spiritual peace are being infused into your life. Believe in your dreams—you are being guided by the universe. Stay optimistic; you shine with a unique light." },
            { name: "18 月亮 <span class='en-text'>(The Moon)</span>", image: "https://pfst.cf2.poecdn.net/base/image/117301bf0dd5c2de7348f87eab6f16e6414e29b12c7f222de9eb3414d8c8b938?w=4096&h=4096", descZh: "🌙 **啟示: 信任直覺** 🌙 雖然路途看起來有些迷霧，但請相信你的內在指引。讓想像力流動，你的直覺會像月光一樣，照亮那些隱藏的真相。別怕未知!", descEn: "🌙 **Revelation: Trust Intuition** 🌙 Though the path may seem foggy, trust your inner guidance. Let imagination flow; your intuition will illuminate hidden truths like moonlight. Don't fear the unknown!" },
            { name: "19 太陽 <span class='en-text'>(The Sun)</span>", image: "https://pfst.cf2.poecdn.net/base/image/e5de1e208c0709a1648859efe4b0ddede8b8204e45084a09416448476b5f3f09?w=4096&h=4096", descZh: "☀️ **啟示: 喜悅與成功** ☀️ 這是光芒萬丈的一刻！你將獲得巨大的成功、活力與純粹的快樂。自信地表達自己，享受此刻的幸福和清晰的視野。", descEn: "☀️ **Revelation: Joy and Success** ☀️ This is a radiant moment! You will achieve tremendous success, vitality, and pure happiness. Express yourself confidently and enjoy this moment's bliss and clear vision." },
            { name: "20 審判 <span class='en-text'>(Judgement)</span>", image: "https://pfst.cf2.poecdn.net/base/image/3c173d0638c9f9cf47ef2e6c89f7a7289b15f920af83c2a530fb1984f42ca1d3?w=4096&h=4096", descZh: "🎺 **啟示: 覺醒與重生** 🎺 你正迎來一個重要的心靈覺醒。放下過去的評判，原諒自己。這是你徹底重生，並獲得更高自我理解的時刻。", descEn: "🎺 **Revelation: Awakening and Rebirth** 🎺 You are entering an important spiritual awakening. Release past judgments, forgive yourself. This is your moment of complete rebirth and achieving higher self-understanding." },
            { name: "21 世界 <span class='en-text'>(The World)</span>", image: "https://pfst.cf2.poecdn.net/base/image/6ad5b90b0d2c496d083b4f0b746147e7c7293bbca13d82580ca753fc6a7c3a0e?w=4096&h=4096", descZh: "🌎 **啟示: 圓滿與完成** 🌎 你已經完成了生命中的一個重要循環。慶祝你的成就！你現在擁有所需的知識和經驗，準備好迎接下一個宏大且圓滿的旅程。", descEn: "🌎 **Revelation: Completion and Fulfillment** 🌎 You have completed an important cycle in life. Celebrate your achievements! You now possess the knowledge and experience needed, ready to embrace the next grand and fulfilling journey." }
        ];

        let currentQuestionIndex = 0;
        let totalScore = 0;
        let userAnswers = []; // Track user answers to allow going back
        const totalQuestions = 4;
        let canShareFiles = false;
        let currentResultIndex = null; // Track current result for language updates

        // Language toggle
        function toggleLanguage() {
            try {
                playButtonSound();
                currentLanguage = currentLanguage === 'zh' ? 'en' : 'zh';
                document.documentElement.setAttribute('lang', currentLanguage === 'zh' ? 'zh-TW' : 'en');
                const langToggle = document.getElementById('lang-toggle');
                if (langToggle) {
                    langToggle.textContent = currentLanguage === 'zh' ? 'EN' : '中文';
                }
                updateUILanguage();
            } catch (error) {
                console.error('Error toggling language:', error);
            }
        }

        // Update all UI text based on current language
        function updateUILanguage() {
            try {
                const lang = t[currentLanguage];
                if (!lang) {
                    console.error('Language data not found for:', currentLanguage);
                    return;
                }

                // Update loading screen text if it exists
                const loadingTextEl = document.getElementById('loading-text');
                if (loadingTextEl) {
                    loadingTextEl.textContent = lang.loadingText;
                }

                // Helper function to safely update element text
                const safeUpdate = (id, content, isHTML = false) => {
                    const el = document.getElementById(id);
                    if (el && content !== undefined) {
                        if (isHTML) {
                            el.innerHTML = content;
                        } else {
                            el.textContent = content;
                        }
                    }
                };

                safeUpdate('intro-title', lang.introTitle, true);
                safeUpdate('intro-subtitle', lang.introSubtitle);
                safeUpdate('intro-desc1', lang.introDesc1);
                safeUpdate('intro-cards', lang.introCards);
                safeUpdate('intro-desc2', lang.introDesc2);
                safeUpdate('start-quiz-btn', lang.startBtn);
                safeUpdate('back-btn', lang.backBtn);
                safeUpdate('intro-disclaimer', lang.introDisclaimer);

                safeUpdate('progress-label-current', lang.progressCurrent);
                safeUpdate('progress-label-question', lang.progressQuestion);
                safeUpdate('progress-label-total', lang.progressTotal);
                safeUpdate('progress-label-total-questions', lang.progressTotalQuestions);

                safeUpdate('result-title', lang.resultTitle);
                safeUpdate('btn-gallery', lang.btnGallery);
                safeUpdate('btn-save', lang.btnSave);
                safeUpdate('btn-share', canShareFiles ? lang.btnShare : lang.btnShareLink);
                safeUpdate('btn-restart', lang.btnRestart);

                // Safely set promo title with decorative spans
                const promoTitleEl = document.getElementById('promo-title');
                if (promoTitleEl && lang.promoTitle) {
                    promoTitleEl.textContent = ''; // Clear existing content
                    const leftSpan = document.createElement('span');
                    leftSpan.style.color = 'var(--color-mystical)';
                    leftSpan.textContent = '✦';
                    promoTitleEl.appendChild(leftSpan);
                    promoTitleEl.appendChild(document.createTextNode(' ' + lang.promoTitle + ' '));
                    const rightSpan = document.createElement('span');
                    rightSpan.style.color = 'var(--color-mystical)';
                    rightSpan.textContent = '✦';
                    promoTitleEl.appendChild(rightSpan);
                }

                safeUpdate('btn-purchase', lang.btnPurchase);
                safeUpdate('btn-video', lang.btnVideo);
                safeUpdate('result-disclaimer', lang.resultDisclaimer);
                safeUpdate('gallery-title', lang.galleryTitle);

                // Update result description if we're on the result page
                if (currentResultIndex !== null) {
                    updateResultDescription();
                }

                // Update question text if we're on the quiz page
                const quizPage = document.getElementById('quiz-page');
                if (quizPage && quizPage.classList.contains('active') && currentQuestionIndex < totalQuestions) {
                    const questions = questionsData[currentLanguage];
                    if (questions && questions[currentQuestionIndex]) {
                        const qData = questions[currentQuestionIndex];
                        safeUpdate('question-text', qData.question);

                        // Update option buttons
                        const optionButtons = document.querySelectorAll('.option-btn');
                        optionButtons.forEach((btn, index) => {
                            if (qData.options[index]) {
                                btn.textContent = qData.options[index].text;
                            }
                        });
                    }
                }
            } catch (error) {
                console.error('Error updating UI language:', error);
            }
        }

        // Update result description when language changes
        function updateResultDescription() {
            if (currentResultIndex === null) return;

            const result = tarotCards[currentResultIndex];
            const descElement = document.getElementById('result-desc');
            const desc = currentLanguage === 'zh' ? result.descZh : result.descEn;
            descElement.innerHTML = `**【${result.name}】**<br><br>${desc}`;
        }

        // Check if file sharing is available
        function checkFileSharing() {
            if (navigator.canShare && navigator.canShare({ files: [new File([], 'test.png', { type: 'image/png' })] })) {
                canShareFiles = true;
            } else {
                canShareFiles = false;
            }
            // Update share button text
            const lang = t[currentLanguage];
            document.getElementById('btn-share').textContent = canShareFiles ? lang.btnShare : lang.btnShareLink;
        }

        // Preload tarot images with compression (async, non-blocking)
        function preloadTarotImages() {
            if (imagesPreloaded) {
                return Promise.resolve();
            }

            // Start preloading immediately without blocking
            // Reduce stagger delay from 50ms to 20ms for faster loading
            tarotCards.forEach((card, index) => {
                setTimeout(() => {
                    if (imageCache.has(card.image)) return; // Skip if already cached

                    const img = new Image();
                    img.crossOrigin = 'anonymous';
                    img.onload = () => {
                        try {
                            const compressedDataUrl = compressImage(img, 400, 0.75);
                            const compressedImg = new Image();
                            compressedImg.src = compressedDataUrl;
                            imageCache.set(card.image, compressedImg);
                        } catch (error) {
                            imageCache.set(card.image, img);
                        }
                    };
                    img.src = card.image;
                }, index * 20); // Faster stagger (20ms instead of 50ms)
            });

            imagesPreloaded = true;
            return Promise.resolve();
        }

        // Preload specific result image immediately (called during quiz)
        function preloadResultImage(resultIndex) {
            const result = tarotCards[resultIndex];
            if (!result || imageCache.has(result.image)) return;

            const img = new Image();
            img.crossOrigin = 'anonymous';
            img.onload = () => {
                try {
                    const compressedDataUrl = compressImage(img, 400, 0.75);
                    const compressedImg = new Image();
                    compressedImg.src = compressedDataUrl;
                    imageCache.set(result.image, compressedImg);
                } catch (error) {
                    imageCache.set(result.image, img);
                }
            };
            img.src = result.image;
        }

        // Create transition overlay with starry effect
        function createTransitionOverlay() {
            const overlay = document.createElement('div');
            overlay.className = 'transition-overlay';
            overlay.id = 'page-transition-overlay';

            // Color distribution: mostly yellow/white, some purple
            const getRandomColor = () => {
                const rand = Math.random();
                if (rand < 0.45) return 'yellow';
                if (rand < 0.85) return 'white';
                return 'purple';
            };

            // Create large star symbols
            const starSymbols = ['✦', '✧', '⭐', '✨', '☆', '★', '✵', '✶'];
            const largeStarCount = 15;

            for (let i = 0; i < largeStarCount; i++) {
                const star = document.createElement('div');
                const color = getRandomColor();
                star.className = `transition-star large ${color}`;
                star.textContent = starSymbols[Math.floor(Math.random() * starSymbols.length)];
                star.style.left = `${Math.random() * 100}%`;
                star.style.top = `${Math.random() * 100}%`;
                star.style.animationDelay = `${Math.random() * 0.5}s`;
                overlay.appendChild(star);
            }

            // Create small dot stars
            const dotStarCount = 30;
            for (let i = 0; i < dotStarCount; i++) {
                const dot = document.createElement('div');
                const color = getRandomColor();
                dot.className = `transition-star small ${color}`;
                dot.style.left = `${Math.random() * 100}%`;
                dot.style.top = `${Math.random() * 100}%`;
                dot.style.animationDelay = `${Math.random() * 0.8}s`;
                overlay.appendChild(dot);
            }

            return overlay;
        }

        // Restart animations when pages are shown
        function restartPageAnimations(pageId) {
            if (pageId === 'intro-page') {
                // Restart start button animation
                const startBtn = document.getElementById('start-quiz-btn');
                if (startBtn) {
                    // Force animation restart by removing and re-adding
                    startBtn.style.animation = 'none';
                    setTimeout(() => {
                        startBtn.style.animation = '';
                    }, 10);
                }
            } else if (pageId === 'result-page') {
                // Add breathing animation to restart button
                const restartBtn = document.getElementById('restart-btn');
                if (restartBtn) {
                    restartBtn.classList.remove('btn-restart-animate');
                    setTimeout(() => {
                        restartBtn.classList.add('btn-restart-animate');
                    }, 10);
                }
            }
        }

        // Haptic feedback for mobile devices
        function triggerHaptic(intensity = 'medium') {
            if ('vibrate' in navigator) {
                const patterns = {
                    light: 10,
                    medium: 20,
                    heavy: 30
                };
                navigator.vibrate(patterns[intensity] || patterns.medium);
            }
        }

        // Create ripple effect on button click
        function createRipple(event) {
            const button = event.currentTarget || event.target.closest('.btn');
            if (!button) return;

            const ripple = document.createElement('span');
            const rect = button.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = event.clientX - rect.left - size / 2;
            const y = event.clientY - rect.top - size / 2;

            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');

            button.appendChild(ripple);

            ripple.addEventListener('animationend', () => {
                requestAnimationFrame(() => {
                    ripple.remove();
                });
            }, { once: true });

            // Trigger haptic feedback
            triggerHaptic('light');
        }

        // Show page with transition animation
        function showPage(pageId, useTransition = false) {
            // Hide back button when leaving quiz page
            const backBtn = document.getElementById('back-btn');
            if (backBtn && pageId !== 'quiz-page') {
                backBtn.classList.remove('show');
            }

            if (!useTransition) {
                // Original behavior for no transition
                requestAnimationFrame(() => {
                    document.querySelectorAll('.container').forEach(el => {
                        el.classList.remove('active');
                    });

                    setTimeout(() => {
                        requestAnimationFrame(() => {
                            document.getElementById(pageId).classList.add('active');
                            window.scrollTo({ top: 0, behavior: 'smooth' });

                            // Restart animations when pages are shown
                            restartPageAnimations(pageId);
                        });
                    }, 50);
                });
                return;
            }

            // Prevent multiple overlays - remove any existing transition overlay
            const existingOverlay = document.getElementById('page-transition-overlay');
            if (existingOverlay) {
                existingOverlay.remove();
            }

            // With transition animation - slide + fade
            const overlay = createTransitionOverlay();
            document.body.appendChild(overlay);

            // Add exiting class to current page for slide-out effect
            requestAnimationFrame(() => {
                document.querySelectorAll('.container.active').forEach(el => {
                    el.classList.add('exiting');
                });
                overlay.classList.add('active');
            });

            // Hide current page after 400ms (time for slide-out)
            setTimeout(() => {
                document.querySelectorAll('.container').forEach(el => {
                    el.classList.remove('active', 'exiting');
                });
            }, 400);

            // Show new page after 500ms with slide-in effect
            setTimeout(() => {
                requestAnimationFrame(() => {
                    document.getElementById(pageId).classList.add('active');
                    window.scrollTo({ top: 0, behavior: 'smooth' });

                    // Restart animations when pages are shown
                    restartPageAnimations(pageId);
                });
            }, 500);

            // Fade out overlay after 900ms
            setTimeout(() => {
                if (overlay.parentNode) { // Check if still in DOM
                    overlay.classList.add('fade-out');
                }
            }, 900);

            // Remove overlay from DOM after fade out completes
            setTimeout(() => {
                if (overlay.parentNode) { // Check if still in DOM
                    overlay.remove();
                }
            }, 1500);
        }

        // Go to previous question
        function goToPreviousQuestion() {
            try {
                playButtonSound(); // Play same sound as language toggle

                if (currentQuestionIndex > 0) {
                    // Remove the last answer and recalculate score
                    if (userAnswers.length > 0) {
                        const lastAnswer = userAnswers.pop();
                        totalScore -= lastAnswer;
                    }

                    currentQuestionIndex--;
                    loadQuestion();

                    // Update back button visibility
                    updateBackButtonVisibility();
                }
            } catch (error) {
                console.error('Error going to previous question:', error);
            }
        }

        // Update back button visibility based on current question
        function updateBackButtonVisibility() {
            try {
                const backBtn = document.getElementById('back-btn');
                if (backBtn) {
                    // Show button only on questions 2-4 (currentQuestionIndex 1-3)
                    if (currentQuestionIndex >= 1 && currentQuestionIndex < totalQuestions) {
                        backBtn.classList.add('show');
                    } else {
                        backBtn.classList.remove('show');
                    }
                }
            } catch (error) {
                console.error('Error updating back button visibility:', error);
            }
        }

        // Start quiz
        function startQuiz() {
            try {
                // Sound effect removed as per user request
                currentQuestionIndex = 0;
                totalScore = 0;
                userAnswers = []; // Reset answers array
                showPage('quiz-page', true); // Use transition animation
                setTimeout(() => {
                    loadQuestion();
                }, 700); // Load question after transition completes
            } catch (error) {
                console.error('Error starting quiz:', error);
                // Fallback: try to show quiz page anyway
                showPage('quiz-page');
                loadQuestion();
            }
        }

        // Restart quiz
        function restartQuiz() {
            playButtonSound();
            showPage('intro-page');
        }

        // Load question
        function loadQuestion() {
            try {
                const questions = questionsData[currentLanguage];
                if (!questions || currentQuestionIndex >= questions.length) {
                    console.error('Invalid question index or missing questions data');
                    return;
                }

                const qData = questions[currentQuestionIndex];
                if (!qData) {
                    console.error('Question data not found');
                    return;
                }

                const progressPercentage = (currentQuestionIndex / totalQuestions) * 100;

                requestAnimationFrame(() => {
                    const progressBar = document.getElementById('progress-bar');
                    if (progressBar) {
                        progressBar.style.width = `${progressPercentage}%`;
                    }

                    const currentQEl = document.getElementById('current-q');
                    const totalQEl = document.getElementById('total-q');
                    if (currentQEl) currentQEl.textContent = currentQuestionIndex + 1;
                    if (totalQEl) totalQEl.textContent = totalQuestions;

                    const questionTextEl = document.getElementById('question-text');
                    if (questionTextEl) questionTextEl.textContent = qData.question;

                    const optsContainer = document.getElementById('options-container');
                    if (!optsContainer) {
                        console.error('Options container not found');
                        return;
                    }

                    const fragment = document.createDocumentFragment();

                    qData.options.forEach(opt => {
                        const btn = document.createElement('button');
                        btn.className = 'btn option-btn';
                        btn.textContent = opt.text;
                        btn.onclick = (event) => handleAnswer(opt.value, event.target);
                        fragment.appendChild(btn);
                    });

                    optsContainer.innerHTML = '';
                    optsContainer.appendChild(fragment);
                });

                // Update back button visibility based on current question
                updateBackButtonVisibility();
            } catch (error) {
                console.error('Error loading question:', error);
            }
        }

        // Handle answer
        function handleAnswer(val, selectedButton) {
            try {
                if (navigator.vibrate) {
                    navigator.vibrate(50);
                }

                document.querySelectorAll('.option-btn').forEach(btn => btn.disabled = true);
                if (selectedButton) {
                    selectedButton.classList.add('selected');
                }

                // Store the answer value
                userAnswers[currentQuestionIndex] = val;
                totalScore += val;

                // Preload possible result images after question 3 (predictive loading)
                if (currentQuestionIndex === 3) {
                    // On last question, preload all possible results based on current score
                    for (let i = 0; i < 4; i++) {
                        const possibleScore = totalScore + (i * 2); // Approximate possible final scores
                        const possibleIndex = possibleScore % 22;
                        preloadResultImage(possibleIndex);
                    }
                }

                setTimeout(() => {
                    currentQuestionIndex++;
                    if (currentQuestionIndex < totalQuestions) {
                        document.querySelectorAll('.option-btn').forEach(btn => btn.disabled = false);
                        loadQuestion();
                    } else {
                        const progressBar = document.getElementById('progress-bar');
                        const currentQEl = document.getElementById('current-q');
                        if (progressBar) progressBar.style.width = '100%';
                        if (currentQEl) currentQEl.textContent = totalQuestions;
                        setTimeout(calculateResult, 800); // Slightly longer delay before transition
                    }
                }, 700);
            } catch (error) {
                console.error('Error handling answer:', error);
                // Try to continue to next question or result
                currentQuestionIndex++;
                if (currentQuestionIndex < totalQuestions) {
                    loadQuestion();
                } else {
                    calculateResult();
                }
            }
        }

        // Calculate result
        function calculateResult() {
            try {
                const resultIndex = totalScore % 22;
                const result = tarotCards[resultIndex];

                if (!result) {
                    console.error('Result not found for index:', resultIndex);
                    return;
                }

                // Store current result index for language updates
                currentResultIndex = resultIndex;

                unlockedCards.add(resultIndex);

                const imgElement = document.getElementById('result-img');
                const descElement = document.getElementById('result-desc');

                if (!imgElement || !descElement) {
                    console.error('Result elements not found');
                    showPage('result-page', true);
                    return;
                }

                // Set description immediately
                imgElement.alt = result.name.replace(/<[^>]*>/g, ''); // Strip HTML for alt
                const desc = currentLanguage === 'zh' ? result.descZh : result.descEn;
                descElement.innerHTML = `**【${result.name}】**<br><br>${desc}`;

                // Set a placeholder while loading (simple gradient placeholder)
                imgElement.style.opacity = '0.3';
                imgElement.style.background = 'linear-gradient(135deg, rgba(106, 5, 114, 0.3), rgba(212, 175, 55, 0.3))';

                // Sound effect removed as per user request

                // Start transition immediately, don't wait for image
                showPage('result-page', true);

                // Load image in parallel during transition
                if (!imageCache.has(result.image)) {
                    const preloadImg = new Image();
                    preloadImg.crossOrigin = 'anonymous';
                    preloadImg.onload = () => {
                        try {
                            const compressedDataUrl = compressImage(preloadImg, 400, 0.75);
                            const compressedImg = new Image();
                            compressedImg.onload = () => {
                                imageCache.set(result.image, compressedImg);
                                imgElement.src = compressedImg.src;
                                // Fade in the image
                                imgElement.style.opacity = '1';
                                imgElement.style.background = 'none';
                            };
                            compressedImg.src = compressedDataUrl;
                        } catch (error) {
                            imageCache.set(result.image, preloadImg);
                            imgElement.src = preloadImg.src;
                            imgElement.style.opacity = '1';
                            imgElement.style.background = 'none';
                        }
                    };
                    preloadImg.onerror = () => {
                        // If loading fails, use original URL
                        imgElement.src = result.image;
                        imgElement.style.opacity = '1';
                        imgElement.style.background = 'none';
                    };
                    preloadImg.src = result.image;
                } else {
                    // Image already cached, use it immediately
                    imgElement.src = imageCache.get(result.image).src;
                    imgElement.style.opacity = '1';
                    imgElement.style.background = 'none';
                }
            } catch (error) {
                console.error('Error calculating result:', error);
                // Try to show result page anyway
                showPage('result-page');
            }
        }

        // Create celebration stars
        function createCelebrationStars() {
            const existingCelebration = document.querySelector('.gallery-celebration');
            if (existingCelebration) {
                existingCelebration.remove();
            }

            const celebration = document.createElement('div');
            celebration.className = 'gallery-celebration';

            const stars = ['✦', '✧', '⭐', '✨', '☆', '★'];
            const starCount = 20;

            for (let i = 0; i < starCount; i++) {
                const star = document.createElement('div');
                star.className = 'celebration-star';
                star.textContent = stars[Math.floor(Math.random() * stars.length)];
                star.style.left = `${Math.random() * 100}%`;
                star.style.animationDelay = `${Math.random() * 3}s`;
                star.style.animationDuration = `${3 + Math.random() * 2}s`;
                celebration.appendChild(star);
            }

            return celebration;
        }

        // Replay celebration animation
        function replayCelebration() {
            playButtonSound();
            const galleryCards = document.querySelectorAll('.gallery-card');

            // Remove and re-add celebrate class to restart animation
            galleryCards.forEach(card => {
                card.classList.remove('celebrate');
            });

            // Force reflow
            void document.body.offsetWidth;

            // Re-add celebrate class
            setTimeout(() => {
                galleryCards.forEach(card => {
                    card.classList.add('celebrate');
                });
            }, 50);

            // Recreate stars
            const modal = document.getElementById('gallery-modal');
            const existingStars = modal.querySelector('.gallery-celebration');
            if (existingStars) {
                existingStars.remove();
            }
            modal.appendChild(createCelebrationStars());

            // Play celebration sound
            playCelebrationSound();

            // Vibrate if available
            if (navigator.vibrate) {
                navigator.vibrate([50, 100, 50]);
            }
        }

        // Save gallery collection as image
        async function saveGalleryCollection() {
            playButtonSound();
            const lang = t[currentLanguage];
            const container = document.querySelector('.gallery-container');

            if (!container) return;

            // Show loading indicator
            const loading = showLoading(currentLanguage === 'zh' ? '✨ 正在儲存圖鑑...' : '✨ Saving the collection...');

            // Use setTimeout to allow loading UI to render
            await new Promise(resolve => setTimeout(resolve, 50));

            try {
                // Temporarily hide action buttons and adjust for screenshot
                const actions = container.querySelector('.gallery-actions');
                const originalDisplay = actions ? actions.style.display : '';
                if (actions) actions.style.display = 'none';

                // Use html2canvas to capture the gallery
                const canvas = await html2canvas(container, {
                    backgroundColor: '#1a0d2e',
                    scale: 2,
                    logging: false,
                    useCORS: true
                });

                // Restore buttons
                if (actions) actions.style.display = originalDisplay;

                // Convert to blob and download
                canvas.toBlob((blob) => {
                    if (blob) {
                        const url = URL.createObjectURL(blob);
                        const link = document.createElement('a');
                        link.download = `tarot-collection-${Date.now()}.png`;
                        link.href = url;
                        link.click();
                        URL.revokeObjectURL(url);

                        hideLoading();
                        showCustomAlert(currentLanguage === 'zh' ? '✅ 已儲存圖鑑！' : '✅ Collection saved!');
                    } else {
                        hideLoading();
                        showCustomAlert(currentLanguage === 'zh' ? '❌ 儲存失敗，請重試' : '❌ Save failed, please try again');
                    }
                }, 'image/png');

            } catch (error) {
                console.error('Error saving collection:', error);
                hideLoading();
                showCustomAlert(currentLanguage === 'zh' ? '❌ 儲存失敗，請重試' : '❌ Save failed, please try again');
            }
        }

        // Open gallery
        function openGallery() {
            playButtonSound();
            const modal = document.getElementById('gallery-modal');
            const container = document.querySelector('.gallery-container');
            const grid = document.getElementById('gallery-grid');
            const subtitle = document.getElementById('gallery-subtitle');

            const lang = t[currentLanguage];
            const unlockedCount = unlockedCards.size;
            const allUnlocked = unlockedCount === 22;

            if (unlockedCount === 0) {
                subtitle.textContent = lang.gallerySubtitleNone;
                subtitle.style.color = 'rgba(212, 175, 55, 0.8)';
            } else if (unlockedCount === 1) {
                const singleCard = tarotCards[[...unlockedCards][0]];
                // Strip HTML tags from name for subtitle display
                const cleanName = singleCard.name.replace(/<[^>]*>/g, '');
                subtitle.textContent = lang.gallerySubtitleOne.replace('{name}', cleanName);
                subtitle.style.color = 'var(--color-text-light)';
            } else {
                subtitle.textContent = lang.gallerySubtitleMany.replace('{count}', unlockedCount);
                subtitle.style.color = 'var(--color-text-light)';
            }

            // Add celebration message if all unlocked
            let celebrationMessage = container.querySelector('.celebration-message');
            if (allUnlocked && !celebrationMessage) {
                celebrationMessage = document.createElement('div');
                celebrationMessage.className = 'celebration-message';
                celebrationMessage.innerHTML = `
                    <h3>${lang.celebrationTitle}</h3>
                    <p>${lang.celebrationDesc}</p>
                `;
                container.insertBefore(celebrationMessage, grid);
            } else if (!allUnlocked && celebrationMessage) {
                celebrationMessage.remove();
            }

            grid.innerHTML = '';
            tarotCards.forEach((card, index) => {
                const cardDiv = document.createElement('div');
                cardDiv.dataset.cardIndex = index; // Store index for event delegation

                if (unlockedCards.has(index)) {
                    cardDiv.className = 'gallery-card unlocked';
                    // Add celebration animation if all unlocked
                    if (allUnlocked) {
                        cardDiv.classList.add('celebrate');
                    }
                } else {
                    cardDiv.className = 'gallery-card locked';
                }

                const imgSrc = imageCache.has(card.image) ? imageCache.get(card.image).src : card.image;

                // Parse card name to extract Chinese and English parts
                const nameDiv = document.createElement('div');
                nameDiv.className = 'gallery-card-name';

                // Extract Chinese name (number + Chinese characters before <span>)
                const zhMatch = card.name.match(/^(.+?)\s*<span/);
                const zhName = zhMatch ? zhMatch[1].trim() : card.name;

                // Extract English name (text inside parentheses)
                const enMatch = card.name.match(/\(([^)]+)\)/);
                const enName = enMatch ? enMatch[1] : '';

                // Create Chinese name element (1st row)
                const zhDiv = document.createElement('div');
                zhDiv.className = 'gallery-card-name-zh';
                zhDiv.textContent = zhName;

                // Create English name element (2nd row) with dynamic sizing
                const enDiv = document.createElement('div');
                enDiv.className = 'gallery-card-name-en';
                enDiv.textContent = enName;

                // Apply dynamic font sizing based on English name length
                if (enName.length > 16) {
                    enDiv.classList.add('extremely-long');
                } else if (enName.length > 13) {
                    enDiv.classList.add('very-long');
                } else if (enName.length > 10) {
                    enDiv.classList.add('long');
                }

                nameDiv.appendChild(zhDiv);
                nameDiv.appendChild(enDiv);

                const imgEl = document.createElement('img');
                imgEl.src = imgSrc;
                imgEl.alt = card.name.replace(/<[^>]*>/g, ''); // Strip HTML for alt text
                imgEl.className = 'gallery-card-image';
                imgEl.loading = 'lazy';

                cardDiv.appendChild(nameDiv);
                cardDiv.appendChild(imgEl);
                grid.appendChild(cardDiv);
            });

            // Add action buttons if all unlocked
            let actionsDiv = container.querySelector('.gallery-actions');
            if (allUnlocked && !actionsDiv) {
                actionsDiv = document.createElement('div');
                actionsDiv.className = 'gallery-actions';
                actionsDiv.innerHTML = `
                    <button class="btn" onclick="replayCelebration()">${lang.btnReplayAnimation}</button>
                    <button class="btn" onclick="saveGalleryCollection()">${lang.btnSaveCollection}</button>
                `;
                container.appendChild(actionsDiv);
            } else if (!allUnlocked && actionsDiv) {
                actionsDiv.remove();
            }

            // Add celebration stars if all unlocked
            const existingStars = modal.querySelector('.gallery-celebration');
            if (allUnlocked && !existingStars) {
                modal.appendChild(createCelebrationStars());
                // Play grand celebration sound when all 22 cards are unlocked
                playCelebrationSound();
            } else if (!allUnlocked && existingStars) {
                existingStars.remove();
            }

            if (container) {
                container.scrollTop = 0;
            }

            modal.classList.add('active');
            document.body.style.overflow = 'hidden';

            requestAnimationFrame(() => {
                if (container) {
                    container.scrollTop = 0;
                }
            });
        }

        function closeGallery() {
            const modal = document.getElementById('gallery-modal');
            modal.classList.remove('active');
            document.body.style.overflow = '';

            // Clean up celebration elements
            const stars = modal.querySelector('.gallery-celebration');
            if (stars) {
                stars.remove();
            }
        }

        // Show hint for locked card
        function showCardHint(cardIndex) {
            const card = tarotCards[cardIndex];
            const sequence = calculateAnswerSequence(cardIndex);
            const lang = t[currentLanguage];

            // Add backdrop
            const backdrop = document.createElement('div');
            backdrop.className = 'hint-backdrop';
            backdrop.style.cssText = 'position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.7); z-index: 10001;';

            const hintModal = document.createElement('div');
            hintModal.className = 'card-hint';
            hintModal.innerHTML = `
                <h3>${lang.hintTitle}</h3>
                <p style="font-size: 0.9em; color: var(--color-text-gold);">${card.name}</p>
                <p>${lang.hintDesc}</p>
                <div class="hint-sequence">${sequence}</div>
                <p style="font-size: 0.85em; opacity: 0.8;">${currentLanguage === 'zh' ? '答案順序對應四題選項 (1-4)' : 'Answer sequence for 4 questions (1-4)'}</p>
                <button class="btn" id="hint-close-btn">${lang.hintClose}</button>
            `;

            // Function to close hint and remove backdrop
            const closeHint = () => {
                hintModal.remove();
                backdrop.remove();
            };

            // Backdrop click closes hint
            backdrop.onclick = closeHint;

            document.body.appendChild(backdrop);
            document.body.appendChild(hintModal);

            // Button click closes hint
            document.getElementById('hint-close-btn').onclick = closeHint;

            // Vibrate if available
            if (navigator.vibrate) {
                navigator.vibrate(50);
            }
        }

        // Event delegation for gallery modal
        document.getElementById('gallery-modal').addEventListener('click', function(e) {
            if (e.target === this) {
                closeGallery();
            }
        });

        // Event delegation for gallery cards (better performance than individual listeners)
        document.getElementById('gallery-grid').addEventListener('click', function(e) {
            const cardDiv = e.target.closest('.gallery-card');
            if (!cardDiv) return;

            const cardIndex = parseInt(cardDiv.dataset.cardIndex);

            if (cardDiv.classList.contains('unlocked')) {
                // Prevent if clicking on image directly
                if (e.target.tagName === 'IMG') return;

                // Play magical sound for unlocked cards
                playUnlockedSound();

                // Shining animation for unlocked cards
                cardDiv.classList.remove('shining');
                void cardDiv.offsetWidth; // Trigger reflow
                cardDiv.classList.add('shining');

                // Remove class after animation using requestAnimationFrame for better performance
                setTimeout(() => {
                    requestAnimationFrame(() => {
                        cardDiv.classList.remove('shining');
                    });
                }, 600);
            } else if (cardDiv.classList.contains('locked')) {
                // Play simple tap sound for locked cards
                playLockedSound();

                // Show hint for locked cards
                showCardHint(cardIndex);
            }
        });

        // Show loading indicator
        function showLoading(message) {
            const loadingDiv = document.createElement('div');
            loadingDiv.className = 'loading-overlay';
            loadingDiv.id = 'loading-indicator';
            loadingDiv.innerHTML = `
                <div class="loading-stars">
                    <div class="loading-star"></div>
                    <div class="loading-star"></div>
                    <div class="loading-star"></div>
                    <div class="loading-star"></div>
                    <div class="loading-star"></div>
                </div>
                <div class="loading-text">${message || (currentLanguage === 'zh' ? '正在生成圖片...' : 'Generating image...')}</div>
            `;
            document.body.appendChild(loadingDiv);
            return loadingDiv;
        }

        // Hide loading indicator
        function hideLoading() {
            const loadingDiv = document.getElementById('loading-indicator');
            if (loadingDiv) {
                loadingDiv.remove();
            }
        }

        // Save result - generate shareable image
        async function saveResult() {
            playButtonSound();
            if (currentResultIndex === null) return;

            const result = tarotCards[currentResultIndex];
            const lang = currentLanguage;

            // Show loading indicator
            const loading = showLoading(lang === 'zh' ? '✨ 正在生成圖片...' : '✨ Generating image...');

            // Use setTimeout to allow loading UI to render
            await new Promise(resolve => setTimeout(resolve, 50));

            try {
                // Create canvas
            const canvas = document.createElement('canvas');
            canvas.width = 1200;
            canvas.height = 1600;
            const ctx = canvas.getContext('2d');

            // Purple starry background - darker at top/bottom, lighter in center
            const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
            gradient.addColorStop(0, '#1a0d2e');
            gradient.addColorStop(0.5, '#6a0572');
            gradient.addColorStop(1, '#1a0d2e');
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Draw stars in background
            ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
            for (let i = 0; i < 80; i++) {
                const x = Math.random() * canvas.width;
                const y = Math.random() * canvas.height;
                const size = Math.random() * 3 + 1;
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

            // Draw decorative stars (larger)
            const drawStar = (x, y, size, color, points = 4) => {
                ctx.save();
                ctx.translate(x, y);
                ctx.fillStyle = color;
                ctx.shadowBlur = 20;
                ctx.shadowColor = color;

                ctx.beginPath();
                for (let i = 0; i < points * 2; i++) {
                    const radius = i % 2 === 0 ? size : size / 2.5;
                    const angle = (Math.PI / points) * i;
                    const px = Math.cos(angle) * radius;
                    const py = Math.sin(angle) * radius;
                    if (i === 0) ctx.moveTo(px, py);
                    else ctx.lineTo(px, py);
                }
                ctx.closePath();
                ctx.fill();
                ctx.restore();
            };

            // Decorative stars around the canvas
            drawStar(50, 50, 20, '#d4af37');
            drawStar(1150, 50, 15, '#c154c1');
            drawStar(200, 520, 12, '#d4af37');
            drawStar(1000, 520, 12, '#d4af37');
            drawStar(80, 840, 12, '#c154c1');
            drawStar(1120, 840, 12, '#c154c1');
            drawStar(200, 750, 10, '#d4af37');
            drawStar(1000, 750, 10, '#d4af37');

        // Load and draw the tarot card image
        const cardImage = new Image();
        cardImage.crossOrigin = "anonymous";

        await new Promise((resolve, reject) => {
            cardImage.onload = () => resolve();
            cardImage.onerror = () => {
                console.warn('Failed to load card image, continuing without it');
                resolve();
            };
            cardImage.src = result.image;
            // Timeout after 10 seconds
            setTimeout(() => resolve(), 10000);
        });

       // Draw decorative top symbols (more space at top)
        ctx.textAlign = 'center';
        ctx.fillStyle = '#c154c1';
        ctx.font = '48px "Noto Sans Symbols 2", "Apple Color Emoji", "Segoe UI Emoji", sans-serif';
        ctx.shadowColor = 'rgba(193, 84, 193, 0.8)';
        ctx.shadowBlur = 20;
        ctx.fillText('☽ ✦ ☾', canvas.width / 2, 90);

        // Draw title with enhanced glow (moved down more)
        ctx.fillStyle = '#e8c551';
        ctx.textAlign = 'center';
        ctx.font = 'bold 68px "Noto Serif TC", serif';
        const titleText = lang === 'zh' ? '✦ 你的塔羅啟示 ✦' : '✦ Your Tarot Message ✦';
        ctx.shadowColor = 'rgba(212, 175, 55, 0.8)';
        ctx.shadowBlur = 30;
        ctx.fillText(titleText, canvas.width / 2, 220);



            // Card name (number + Chinese + English) - moved down
            ctx.shadowBlur = 20;
            ctx.font = 'bold 38px "Noto Serif TC", serif';
            ctx.fillStyle = '#e8c551';
            // Strip HTML tags for canvas rendering
            const cleanName = result.name.replace(/<[^>]*>/g, '');
            ctx.fillText(cleanName, canvas.width / 2, 310);

    // Draw card image if loaded (moved down together with heading and name)
        let imageEndY = 380;
        if (cardImage.complete && cardImage.naturalHeight !== 0) {
            const imgWidth = 400; // Reduced from 600 to 400 (33% reduction)
            const imgHeight = (cardImage.naturalHeight / cardImage.naturalWidth) * imgWidth;
            const imgX = (canvas.width - imgWidth) / 2;
            const imgY = 380;
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

        // Calculate available space
        const bottomSpace = 30; // Space needed for footer elements
        const availableHeight = canvas.height - imageEndY - bottomSpace;

            // Description text - calculate text first to determine box size
            ctx.shadowBlur = 0;
            ctx.fillStyle = '#f7f2c6';
            ctx.font = '26px "Noto Serif TC", "Philosopher", serif';
            ctx.textAlign = 'center';

            const desc = lang === 'zh' ? result.descZh : result.descEn;
            // Remove markdown and HTML, keep only core description
            const cleanDesc = desc.replace(/\*\*/g, '').replace(/<[^>]*>/g, '').replace(/🎉|✨|🧘‍♀️|🌿|🛡️️|📜|💖|🚀|🦁|💡|🍀|⚖️|🔄|🦋|💧|⛓️|⚡|🌟|🌙|☀️|🎺|🌎/g, '').replace(/啟示:|Revelation:/g, '').trim();

            // Word wrap for description (handle Chinese and English differently)
            const descBoxPadding = 70; // horizontal padding inside box
            const descBoxMaxWidth = 850; // reduced width for better proportions
            const maxWidth = descBoxMaxWidth - descBoxPadding;
            const lines = [];
            let currentLine = '';

            if (lang === 'zh') {
                // For Chinese, split by characters for better wrapping
                const chars = cleanDesc.split('');
                for (let char of chars) {
                    const testLine = currentLine + char;
                    const metrics = ctx.measureText(testLine);
                    if (metrics.width > maxWidth && currentLine !== '') {
                        lines.push(currentLine);
                        currentLine = char;
                    } else {
                        currentLine = testLine;
                    }
                }
            } else {
                // For English, split by words
                const words = cleanDesc.split(' ');
                for (let word of words) {
                    const testLine = currentLine + word + ' ';
                    const metrics = ctx.measureText(testLine);
                    if (metrics.width > maxWidth && currentLine !== '') {
                        lines.push(currentLine.trim());
                        currentLine = word + ' ';
                    } else {
                        currentLine = testLine;
                    }
                }
            }
            if (currentLine) lines.push(currentLine.trim());

            // Calculate dynamic description box dimensions based on text
            const lineHeight = 45;
            const numLines = lines.length;
            const textHeight = numLines * lineHeight;
            const descBoxVertPadding = 42; // vertical padding (top and bottom combined)
            const descHeight = Math.max(textHeight + descBoxVertPadding * 2, 120); // minimum height
            const descWidth = descBoxMaxWidth;

            // Calculate description box position
            const descBoxStartY = imageEndY + 30; // start position after image
            const descY = descBoxStartY;
            const descX = (canvas.width - descWidth) / 2;

            // Draw description frame with golden border and rounded corners
            const descBorderRadius = 20;
            ctx.shadowBlur = 25;
            ctx.shadowColor = '#d4af37';
            ctx.fillStyle = 'rgba(26, 13, 46, 0.9)';
            ctx.strokeStyle = '#d4af37';
            ctx.lineWidth = 4;

            // Fill rounded rectangle
            roundRect(ctx, descX, descY, descWidth, descHeight, descBorderRadius);
            ctx.fill();

            // Stroke rounded rectangle
            roundRect(ctx, descX, descY, descWidth, descHeight, descBorderRadius);
            ctx.stroke();

            // Draw description lines - centered vertically within the box
            ctx.shadowBlur = 0;
            ctx.fillStyle = '#f7f2c6';
            const textStartY = descY + (descHeight - textHeight) / 2 + lineHeight * 0.75; // center and adjust baseline
            for (let i = 0; i < numLines; i++) {
                ctx.fillText(lines[i], canvas.width / 2, textStartY + i * lineHeight);
            }

            // Footer decorative stars - centered between description box and footer text
            const descBoxBottom = descY + descHeight;
            const footerTextY = canvas.height - 45; // position of '暉日塔羅' text
            const symbolsY = descBoxBottom + (footerTextY - descBoxBottom) / 2;

            ctx.textAlign = 'center';
            ctx.fillStyle = '#d4af37';
            ctx.font = '36px "Philosopher", serif';
            ctx.shadowBlur = 15;
            ctx.shadowColor = 'rgba(212, 175, 55, 0.8)';
            ctx.fillText('◆ ☆ ◇', canvas.width / 2, symbolsY);

            // Footer text
            ctx.fillStyle = '#c154c1';
            ctx.font = 'bold 28px "Noto Serif TC", serif';
            ctx.shadowBlur = 15;
            ctx.shadowColor = 'rgba(193, 84, 193, 0.8)';
            ctx.fillText('暉日塔羅 大阿爾克那 MascotTarot Major Arcana', canvas.width / 2, footerTextY);

            // QR Code (generate with current page URL)
            try {
                const qrContainer = document.createElement('div');
                qrContainer.style.position = 'absolute';
                qrContainer.style.left = '-9999px';
                document.body.appendChild(qrContainer);

                const qrCode = new QRCode(qrContainer, {
                    text: 'https://www.threads.com/@grafittiii_uru/post/DQ8z1FUEYiO',
                    width: 120,
                    height: 120,
                    colorDark: '#000000',
                    colorLight: '#ffffff',
                    correctLevel: QRCode.CorrectLevel.H
                });

                // Wait a bit for QR to generate
                await new Promise(resolve => setTimeout(resolve, 100));

                const qrImg = qrContainer.querySelector('img');
                if (qrImg && qrImg.complete) {
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

                    // Draw QR image
                    ctx.save();
                    roundRectQR(ctx, qrX + qrPadding, qrY + qrPadding, qrSize - qrPadding * 2, qrSize - qrPadding * 2, qrRadius - 5);
                    ctx.clip();
                    ctx.drawImage(qrImg, qrX + qrPadding, qrY + qrPadding, qrSize - qrPadding * 2, qrSize - qrPadding * 2);
                    ctx.restore();
                }

                document.body.removeChild(qrContainer);
            } catch (error) {
                console.error('QR code generation failed:', error);
            }

                // Convert canvas to blob and download
                canvas.toBlob((blob) => {
                    if (blob) {
                        const url = URL.createObjectURL(blob);
                        const link = document.createElement('a');

                        // Extract card number and English name
                        const cardNumber = cleanName.split(' ')[0];
                        // Extract English name from parentheses
                        const enNameMatch = result.name.match(/\(([^)]+)\)/);
                        const enName = enNameMatch ? enNameMatch[1] : '';

                        // Filename format: 暉日塔羅(card number) (card English name)
                        link.download = `暉日塔羅${cardNumber} ${enName}.png`;
                        link.href = url;
                        link.click();
                        URL.revokeObjectURL(url);

                        hideLoading();
                        showCustomAlert(lang === 'zh' ? '✅ 圖片已儲存！' : '✅ Image saved!');
                    } else {
                        hideLoading();
                        showCustomAlert(lang === 'zh' ? '❌ 圖片生成失敗' : '❌ Failed to generate image');
                    }
                }, 'image/png');
            } catch (error) {
                console.error('Error generating image:', error);
                hideLoading();
                showCustomAlert(lang === 'zh' ? '❌ 圖片生成失敗' : '❌ Failed to generate image');
            }
        }

        // Share result
        async function shareResult() {
            playButtonSound();
            // ========== INSERT YOUR SHARE LINK HERE ==========
            // Replace the URL below with your GitHub Pages or hosting link
            const SHARE_LINK = 'https://grafittiii-hub.github.io/MascotTarotQuiz/';
            // ==================================================

            const finalCard = tarotCards[totalScore % 22];
            // Remove HTML tags from card name for sharing
            const cardNameText = finalCard.name.replace(/<[^>]*>/g, '');
            const shareText = currentLanguage === 'zh'
                ? `🔮 我的專屬啟示是【${cardNameText}】!\n\n來試試你的專屬塔羅啟示: ${SHARE_LINK}`
                : `🔮 My personal revelation is【${cardNameText}】!\n\nTry your own tarot revelation: ${SHARE_LINK}`;

            if (navigator.share) {
                try {
                    await navigator.share({
                        title: currentLanguage === 'zh' ? '我的塔羅心靈啟示' : 'My Tarot Revelation',
                        text: shareText
                    });
                } catch (error) {
                    if (error.name !== 'AbortError') {
                        console.error('Share failed:', error);
                    }
                }
            } else {
                // Fallback: copy to clipboard
                navigator.clipboard.writeText(shareText).then(() => {
                    showCustomAlert(currentLanguage === 'zh' ? '✅ 連結已複製到剪貼簿!' : '✅ Link copied to clipboard!');
                });
            }
        }

        // Custom alert
        function showCustomAlert(message) {
            const modal = document.createElement('div');
            modal.style.cssText = 'position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.7); display: flex; align-items: center; justify-content: center; z-index: 10000;';
            modal.innerHTML = `
                <div style="background: var(--color-primary); padding: 30px; border-radius: 10px; box-shadow: 0 0 40px rgba(212, 175, 55, 0.5); max-width: 400px; width: 90%; margin: 20px; border: 2px solid var(--color-secondary); text-align: center;">
                    <p style="color: var(--color-text-light); margin-bottom: 20px; white-space: pre-line; line-height: 1.6;">${message}</p>
                    <button class="btn" onclick="this.closest('div').parentElement.remove()">${currentLanguage === 'zh' ? '確定' : 'OK'}</button>
                </div>
            `;
            document.body.appendChild(modal);
        }

        // ==================== MYSTICAL SOUND EFFECTS ====================
        /**
         * Play mystical transition sound when entering the app
         * Uses Web Audio API to generate ethereal tones (no file needed)
         *
         * To use a custom sound file instead:
         * 1. Download a mystical sound from Pixabay, Mixkit, or Freesound
         * 2. Save as 'mystical-transition.mp3' in your repository
         * 3. Uncomment the code in playMysticalSound() marked "OPTION 2"
         * 4. Comment out the Web Audio API code marked "OPTION 1"
         */

        let audioContext = null;
        let soundEnabled = true; // Set to false to disable sound

        async function playMysticalSound() {
            if (!soundEnabled) return;

            try {
                // ========== OPTION 1: Web Audio API (No file needed) ==========
                // Generates a mystical chime programmatically
                if (!audioContext) {
                    audioContext = new (window.AudioContext || window.webkitAudioContext)();
                }

                // Resume audio context if suspended (required for autoplay)
                if (audioContext.state === 'suspended') {
                    await audioContext.resume();
                }

                const now = audioContext.currentTime;
                const duration = 1.2;
                const volume = 0.7; // Subtle volume (70%)

                // Create ethereal bell-like tones
                const frequencies = [523.25, 659.25, 783.99]; // C5, E5, G5 (mystical chord)

                frequencies.forEach((freq, index) => {
                    const oscillator = audioContext.createOscillator();
                    const gainNode = audioContext.createGain();

                    oscillator.type = 'sine'; // Smooth, bell-like tone
                    oscillator.frequency.value = freq;

                    // Volume envelope (fade in and out)
                    gainNode.gain.setValueAtTime(0, now);
                    gainNode.gain.linearRampToValueAtTime(volume / frequencies.length, now + 0.1);
                    gainNode.gain.exponentialRampToValueAtTime(0.01, now + duration);

                    oscillator.connect(gainNode);
                    gainNode.connect(audioContext.destination);

                    oscillator.start(now + (index * 0.05)); // Slight stagger for richness
                    oscillator.stop(now + duration);
                });

                // ========== OPTION 2: Use Custom Sound File ==========
                // Uncomment below to use your own MP3 file instead
                /*
                const audio = new Audio('mystical-transition.mp3');
                audio.volume = 0.4; // 40% volume
                audio.play().catch(err => {
                    console.log('Sound autoplay blocked:', err);
                    // Gracefully handle autoplay restrictions
                });
                */

            } catch (error) {
                // Gracefully handle audio errors (don't break the app)
                console.log('Audio not available:', error);
            }
        }

        // Play a simple tap sound for locked cards
        async function playLockedSound() {
            if (!soundEnabled) return;

            try {
                if (!audioContext) {
                    audioContext = new (window.AudioContext || window.webkitAudioContext)();
                }

                // Resume audio context if suspended (required for repeated plays)
                if (audioContext.state === 'suspended') {
                    await audioContext.resume();
                }

                const oscillator = audioContext.createOscillator();
                const gainNode = audioContext.createGain();

                oscillator.connect(gainNode);
                gainNode.connect(audioContext.destination);

                // Simple short tap sound (200Hz, 80ms)
                oscillator.frequency.value = 200;
                oscillator.type = 'sine';

                // Quick fade out for a clean tap - increased volume to 50%
                gainNode.gain.setValueAtTime(0.5, audioContext.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.08);

                oscillator.start(audioContext.currentTime);
                oscillator.stop(audioContext.currentTime + 0.08);
            } catch (err) {
                console.log('Audio playback blocked:', err);
            }
        }

        // Play a magical sparkle sound for unlocked cards
        async function playUnlockedSound() {
            if (!soundEnabled) return;

            try {
                if (!audioContext) {
                    audioContext = new (window.AudioContext || window.webkitAudioContext)();
                }

                // Resume audio context if suspended (required for repeated plays)
                if (audioContext.state === 'suspended') {
                    await audioContext.resume();
                }

                const now = audioContext.currentTime;

                // Create three ascending tones for a magical shimmer effect
                const frequencies = [523.25, 659.25, 783.99]; // C5, E5, G5 (major chord)
                const delays = [0, 0.05, 0.1]; // Staggered timing for sparkle effect

                frequencies.forEach((freq, index) => {
                    const oscillator = audioContext.createOscillator();
                    const gainNode = audioContext.createGain();

                    oscillator.connect(gainNode);
                    gainNode.connect(audioContext.destination);

                    oscillator.frequency.value = freq;
                    oscillator.type = 'sine';

                    const startTime = now + delays[index];
                    const duration = 0.4;

                    // Soft attack and decay for ethereal quality - increased volume to 50%
                    gainNode.gain.setValueAtTime(0, startTime);
                    gainNode.gain.linearRampToValueAtTime(0.5, startTime + 0.02);
                    gainNode.gain.exponentialRampToValueAtTime(0.01, startTime + duration);

                    oscillator.start(startTime);
                    oscillator.stop(startTime + duration);
                });

                // Add a subtle shimmer with higher frequency - increased volume
                const shimmer = audioContext.createOscillator();
                const shimmerGain = audioContext.createGain();

                shimmer.connect(shimmerGain);
                shimmerGain.connect(audioContext.destination);

                shimmer.frequency.value = 1318.51; // E6
                shimmer.type = 'sine';

                const shimmerStart = now + 0.15;
                shimmerGain.gain.setValueAtTime(0, shimmerStart);
                shimmerGain.gain.linearRampToValueAtTime(0.3, shimmerStart + 0.01);
                shimmerGain.gain.exponentialRampToValueAtTime(0.01, shimmerStart + 0.25);

                shimmer.start(shimmerStart);
                shimmer.stop(shimmerStart + 0.25);
            } catch (err) {
                console.log('Audio playback blocked:', err);
            }
        }

        // Play a grand celebration sound when all 22 cards are unlocked
        async function playCelebrationSound() {
            if (!soundEnabled) return;

            try {
                if (!audioContext) {
                    audioContext = new (window.AudioContext || window.webkitAudioContext)();
                }

                // Resume audio context if suspended
                if (audioContext.state === 'suspended') {
                    await audioContext.resume();
                }

                const now = audioContext.currentTime;

                // Create an ascending triumphant arpeggio (C major scale ascending)
                const frequencies = [
                    261.63, 329.63, 392.00, 523.25,  // C4, E4, G4, C5
                    659.25, 783.99, 1046.50          // E5, G5, C6
                ];
                const delays = [0, 0.08, 0.16, 0.24, 0.32, 0.40, 0.48];

                frequencies.forEach((freq, index) => {
                    const oscillator = audioContext.createOscillator();
                    const gainNode = audioContext.createGain();

                    oscillator.connect(gainNode);
                    gainNode.connect(audioContext.destination);

                    oscillator.frequency.value = freq;
                    oscillator.type = 'triangle'; // Warmer, richer tone

                    const startTime = now + delays[index];
                    const duration = 0.6;

                    // Expressive volume envelope - increased volume to 60%
                    gainNode.gain.setValueAtTime(0, startTime);
                    gainNode.gain.linearRampToValueAtTime(0.6, startTime + 0.05);
                    gainNode.gain.exponentialRampToValueAtTime(0.01, startTime + duration);

                    oscillator.start(startTime);
                    oscillator.stop(startTime + duration);
                });

                // Add sparkly high notes for magic - increased volume
                const sparkleFreqs = [1318.51, 1568.00, 2093.00]; // E6, G6, C7
                const sparkleDelays = [0.6, 0.65, 0.7];

                sparkleFreqs.forEach((freq, index) => {
                    const osc = audioContext.createOscillator();
                    const gain = audioContext.createGain();

                    osc.connect(gain);
                    gain.connect(audioContext.destination);

                    osc.frequency.value = freq;
                    osc.type = 'sine';

                    const startTime = now + sparkleDelays[index];
                    gain.gain.setValueAtTime(0, startTime);
                    gain.gain.linearRampToValueAtTime(0.5, startTime + 0.02);
                    gain.gain.exponentialRampToValueAtTime(0.01, startTime + 0.5);

                    osc.start(startTime);
                    osc.stop(startTime + 0.5);
                });

                // Add deep celebratory bass note at the end - increased volume to 50%
                const bass = audioContext.createOscillator();
                const bassGain = audioContext.createGain();

                bass.connect(bassGain);
                bassGain.connect(audioContext.destination);

                bass.frequency.value = 130.81; // C3
                bass.type = 'sine';

                const bassStart = now + 0.5;
                bassGain.gain.setValueAtTime(0, bassStart);
                bassGain.gain.linearRampToValueAtTime(0.5, bassStart + 0.05);
                bassGain.gain.exponentialRampToValueAtTime(0.01, bassStart + 1.2);

                bass.start(bassStart);
                bass.stop(bassStart + 1.2);

            } catch (err) {
                console.log('Audio playback blocked:', err);
            }
        }

        // Play a subtle button click sound
        async function playButtonSound() {
            if (!soundEnabled) return;

            try {
                if (!audioContext) {
                    audioContext = new (window.AudioContext || window.webkitAudioContext)();
                }

                // Resume audio context if suspended
                if (audioContext.state === 'suspended') {
                    await audioContext.resume();
                }

                const oscillator = audioContext.createOscillator();
                const gainNode = audioContext.createGain();

                oscillator.connect(gainNode);
                gainNode.connect(audioContext.destination);

                // Pleasant click sound (higher pitched, very brief) - increased volume to 50%
                oscillator.frequency.value = 800;
                oscillator.type = 'sine';

                const now = audioContext.currentTime;
                gainNode.gain.setValueAtTime(0.5, now);
                gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.05);

                oscillator.start(now);
                oscillator.stop(now + 0.05);
            } catch (err) {
                console.log('Audio playback blocked:', err);
            }
        }

        // Play fairy-like starry magical transition sound (900ms duration)
        // Rising magic wand effect with sparkles
        async function playMagicalTransitionSound() {
            if (!soundEnabled) return;

            try {
                if (!audioContext) {
                    audioContext = new (window.AudioContext || window.webkitAudioContext)();
                }

                // Resume audio context if suspended
                if (audioContext.state === 'suspended') {
                    await audioContext.resume();
                }

                const now = audioContext.currentTime;

                // Magic wand rising sweep (0-900ms)
                // Continuously rising arpeggio like a magic wand being waved upward
                const risingNotes = [
                    523.25,   // C5
                    659.25,   // E5
                    783.99,   // G5
                    1046.50,  // C6
                    1318.51,  // E6
                    1567.98,  // G6
                    2093.00   // C7 - high magical peak
                ];
                const noteDelays = [0, 0.12, 0.24, 0.36, 0.48, 0.60, 0.72];

                risingNotes.forEach((freq, index) => {
                    const osc = audioContext.createOscillator();
                    const gain = audioContext.createGain();
                    osc.connect(gain);
                    gain.connect(audioContext.destination);

                    osc.frequency.value = freq;
                    osc.type = 'sine'; // Pure fairy-like tone

                    const startTime = now + noteDelays[index];
                    const duration = 0.35;

                    // Quick attack, gentle sustain and decay
                    gain.gain.setValueAtTime(0, startTime);
                    gain.gain.linearRampToValueAtTime(0.5, startTime + 0.02);
                    gain.gain.linearRampToValueAtTime(0.4, startTime + 0.1);
                    gain.gain.exponentialRampToValueAtTime(0.01, startTime + duration);

                    osc.start(startTime);
                    osc.stop(startTime + duration);
                });

                // Sparkling stars effect (scattered throughout)
                // Random twinkling high notes for starry atmosphere
                const sparkleFreqs = [2093.00, 2349.32, 2637.02, 3135.96, 3520.00]; // C7, D7, E7, G7, A7
                const sparkleTimings = [0.15, 0.30, 0.45, 0.55, 0.70];

                sparkleFreqs.forEach((freq, index) => {
                    const osc = audioContext.createOscillator();
                    const gain = audioContext.createGain();
                    osc.connect(gain);
                    gain.connect(audioContext.destination);

                    osc.frequency.value = freq;
                    osc.type = 'sine';

                    const startTime = now + sparkleTimings[index];
                    const duration = 0.15;

                    // Very quick sparkle
                    gain.gain.setValueAtTime(0, startTime);
                    gain.gain.linearRampToValueAtTime(0.3, startTime + 0.01);
                    gain.gain.exponentialRampToValueAtTime(0.01, startTime + duration);

                    osc.start(startTime);
                    osc.stop(startTime + duration);
                });

                // Fairy dust shimmer (throughout the sound)
                // Continuous high-frequency shimmer like fairy dust floating
                const shimmer = audioContext.createOscillator();
                const shimmerGain = audioContext.createGain();
                shimmer.connect(shimmerGain);
                shimmerGain.connect(audioContext.destination);

                shimmer.frequency.value = 4186.01; // C8 - very high fairy dust
                shimmer.type = 'sine';

                // Gentle shimmer that grows and fades
                shimmerGain.gain.setValueAtTime(0, now);
                shimmerGain.gain.linearRampToValueAtTime(0.15, now + 0.2);
                shimmerGain.gain.linearRampToValueAtTime(0.2, now + 0.5);
                shimmerGain.gain.exponentialRampToValueAtTime(0.01, now + 0.9);

                shimmer.start(now);
                shimmer.stop(now + 0.9);

                // Final magical "ding" at the peak (750ms)
                const finalDing = audioContext.createOscillator();
                const dingGain = audioContext.createGain();
                finalDing.connect(dingGain);
                dingGain.connect(audioContext.destination);

                finalDing.frequency.value = 2093.00; // C7 - bright and magical
                finalDing.type = 'sine';

                const dingStart = now + 0.75;
                dingGain.gain.setValueAtTime(0, dingStart);
                dingGain.gain.linearRampToValueAtTime(0.6, dingStart + 0.01);
                dingGain.gain.exponentialRampToValueAtTime(0.01, dingStart + 0.25);

                finalDing.start(dingStart);
                finalDing.stop(dingStart + 0.25);

            } catch (err) {
                console.log('Audio playback blocked:', err);
            }
        }

        // Hide loading screen once fonts are loaded
        function hideLoadingScreen() {
            const loadingScreen = document.getElementById('loading-screen');
            const loadingSymbol = document.getElementById('loading-symbol');
            const progressContainer = document.getElementById('loading-progress-container');

            // Add ready/glow effect to symbol and hide progress bar
            if (loadingSymbol) {
                loadingSymbol.classList.add('ready');
            }
            if (progressContainer) {
                progressContainer.classList.add('hidden');
            }

            // Show enlarged symbol for longer before fading out (increased from 400ms to 1200ms)
            setTimeout(() => {
                if (loadingScreen) {
                    loadingScreen.classList.add('fade-out');
                    // Smoother, longer fade transition (increased from 300ms to 800ms)
                    setTimeout(() => {
                        loadingScreen.style.display = 'none';
                    }, 800); // Match the CSS transition duration
                }
            }, 1200); // Show glow for 1200ms before fading out
        }

        // Update loading progress bar
        function updateLoadingProgress(percentage) {
            const progressBar = document.getElementById('loading-progress-bar');
            if (progressBar) {
                progressBar.style.width = `${percentage}%`;
            }
        }

        // Initialize
        document.addEventListener('DOMContentLoaded', () => {
            // Set initial language to Chinese
            document.documentElement.setAttribute('lang', 'zh-TW');
            document.getElementById('lang-toggle').textContent = 'EN';

            showPage('intro-page');
            checkFileSharing();

            let fontsLoaded = false;
            let imagesStarted = false;

            // Track progress
            const checkReadyState = () => {
                if (fontsLoaded && imagesStarted) {
                    updateLoadingProgress(100);
                    hideLoadingScreen();
                }
            };

            // Wait for fonts to load before hiding loading screen
            if (document.fonts) {
                document.fonts.ready.then(() => {
                    fontsLoaded = true;
                    updateLoadingProgress(50);
                    checkReadyState();
                });
            } else {
                // Fallback for browsers without FontFaceSet API
                setTimeout(() => {
                    fontsLoaded = true;
                    updateLoadingProgress(50);
                    checkReadyState();
                }, 300); // Reduced from 500ms
            }

            // Start preloading images immediately (non-blocking)
            updateLoadingProgress(30);
            preloadTarotImages();
            // Mark images as started immediately (they load in background)
            setTimeout(() => {
                imagesStarted = true;
                updateLoadingProgress(80);
                checkReadyState();
            }, 200); // Quick check

            // ==================== IMAGE PROTECTION ====================
            // Prevent context menu on all images to disable long press save
            document.addEventListener('contextmenu', function(e) {
                if (e.target.tagName === 'IMG') {
                    e.preventDefault();
                }
            }, { passive: false });

            // Prevent image dragging
            document.addEventListener('dragstart', function(e) {
                if (e.target.tagName === 'IMG') {
                    e.preventDefault();
                }
            });

            // Prevent image selection
            document.addEventListener('selectstart', function(e) {
                if (e.target.tagName === 'IMG') {
                    e.preventDefault();
                }
            });

            // Initialize audio context on first user interaction to prevent blocking
            let audioInitialized = false;
            const initAudio = () => {
                if (!audioInitialized && soundEnabled) {
                    audioInitialized = true;
                    if (!audioContext) {
                        audioContext = new (window.AudioContext || window.webkitAudioContext)();
                    }
                    // Resume if suspended
                    if (audioContext.state === 'suspended') {
                        audioContext.resume();
                    }
                }
            };

            // Use event delegation for ripple effects on all buttons
            document.body.addEventListener('click', (e) => {
                // Initialize audio on first click
                initAudio();

                const btn = e.target.closest('.btn');
                if (btn) {
                    createRipple(e);
                }

                // Add haptic feedback to option buttons (quiz answers)
                if (e.target.classList.contains('option-btn')) {
                    triggerHaptic('medium');
                }
            }, { passive: false });

            // ==================== KEYBOARD NAVIGATION FOR QUIZ ====================
            // Allow users to press 1, 2, 3, 4 keys to select quiz answers on computers
            document.addEventListener('keydown', (e) => {
                // Only activate on quiz page
                const quizPage = document.getElementById('quiz-page');
                if (!quizPage || !quizPage.classList.contains('active')) {
                    return;
                }

                // Check if key pressed is 1, 2, 3, or 4
                const key = e.key;
                if (!['1', '2', '3', '4'].includes(key)) {
                    return;
                }

                // Get all option buttons
                const optionButtons = document.querySelectorAll('.option-btn');
                const buttonIndex = parseInt(key) - 1; // Convert to 0-based index

                // Check if the button exists and is not disabled
                if (optionButtons[buttonIndex] && !optionButtons[buttonIndex].disabled) {
                    e.preventDefault(); // Prevent default browser behavior
                    optionButtons[buttonIndex].click(); // Trigger click on the corresponding button
                }
            });
        });
    </script>
</body>
</html>
