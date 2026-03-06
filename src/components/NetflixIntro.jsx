import { useState, useEffect } from 'react';

export default function NetflixIntro({ onComplete }) {
    const [phase, setPhase] = useState('black'); // black → ribbon → tagline → fade-out

    useEffect(() => {
        const t1 = setTimeout(() => setPhase('ribbon'), 400);
        const t2 = setTimeout(() => setPhase('tagline'), 2600);
        const t3 = setTimeout(() => setPhase('fade-out'), 3800);
        const t4 = setTimeout(() => onComplete(), 4500);

        return () => {
            clearTimeout(t1);
            clearTimeout(t2);
            clearTimeout(t3);
            clearTimeout(t4);
        };
    }, [onComplete]);

    return (
        <div
            className={`fixed inset-0 z-[9999] bg-black flex items-center justify-center transition-opacity duration-700 ${phase === 'fade-out' ? 'opacity-0' : 'opacity-100'
                }`}
        >
            {/* Ambient red glow */}
            <div
                className={`absolute w-[500px] h-[500px] rounded-full transition-all duration-[2s] ${phase !== 'black' ? 'opacity-40 scale-100' : 'opacity-0 scale-50'
                    }`}
                style={{
                    background:
                        'radial-gradient(circle, rgba(229,9,20,0.35) 0%, rgba(229,9,20,0.08) 45%, transparent 70%)',
                }}
            />

            {/* The Y letter — Netflix N-style ribbon animation */}
            <div className="relative z-10 flex flex-col items-center">
                <div
                    className={`intro-y-container ${phase !== 'black' ? 'intro-y-visible' : 'intro-y-hidden'
                        }`}
                >
                    <svg
                        viewBox="0 0 200 250"
                        className="intro-y-svg"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {/* Shadow / depth layer */}
                        <defs>
                            <linearGradient id="ribbonLeft" x1="0" y1="0" x2="1" y2="1">
                                <stop offset="0%" stopColor="#b20710" />
                                <stop offset="100%" stopColor="#e50914" />
                            </linearGradient>
                            <linearGradient id="ribbonRight" x1="1" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#e50914" />
                                <stop offset="100%" stopColor="#b20710" />
                            </linearGradient>
                            <linearGradient id="ribbonCenter" x1="0.5" y1="0" x2="0.5" y2="1">
                                <stop offset="0%" stopColor="#ff1a25" />
                                <stop offset="100%" stopColor="#b20710" />
                            </linearGradient>
                            <filter id="yShadow">
                                <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#e50914" floodOpacity="0.5" />
                            </filter>
                        </defs>

                        {/* Left arm of Y — ribbon style */}
                        <polygon
                            points="30,10 65,10 110,120 100,150 55,150 75,120"
                            fill="url(#ribbonLeft)"
                            className="intro-ribbon intro-ribbon-left"
                        />

                        {/* Right arm of Y — ribbon style */}
                        <polygon
                            points="135,10 170,10 125,120 145,150 100,150 110,120"
                            fill="url(#ribbonRight)"
                            className="intro-ribbon intro-ribbon-right"
                        />

                        {/* Center stem of Y — front ribbon */}
                        <rect
                            x="80"
                            y="120"
                            width="40"
                            height="120"
                            rx="2"
                            fill="url(#ribbonCenter)"
                            className="intro-ribbon intro-ribbon-stem"
                        />

                        {/* Bright highlight strip on left arm */}
                        <polygon
                            points="45,10 55,10 100,120 90,120"
                            fill="rgba(255,255,255,0.15)"
                            className="intro-ribbon intro-ribbon-left"
                        />

                        {/* Bright highlight strip on right arm */}
                        <polygon
                            points="145,10 155,10 110,120 100,120"
                            fill="rgba(255,255,255,0.08)"
                            className="intro-ribbon intro-ribbon-right"
                        />

                        {/* Highlight on stem */}
                        <rect
                            x="88"
                            y="120"
                            width="10"
                            height="120"
                            rx="1"
                            fill="rgba(255,255,255,0.12)"
                            className="intro-ribbon intro-ribbon-stem"
                        />
                    </svg>
                </div>

                {/* Tagline — appears after Y animation */}
                <p
                    className={`intro-tagline font-light tracking-[0.3em] text-[#999] text-[11px] md:text-[13px] uppercase mt-4 transition-all duration-700 ${phase === 'tagline' || phase === 'fade-out'
                            ? 'opacity-100 translate-y-0'
                            : 'opacity-0 translate-y-3'
                        }`}
                >
                    Every project tells a story
                </p>
            </div>

            {/* Bottom bar flash */}
            <div
                className={`absolute bottom-0 left-0 right-0 h-[2px] bg-[#e50914] ${phase === 'ribbon' || phase === 'tagline' ? 'intro-bar-flash' : 'opacity-0'
                    }`}
            />
        </div>
    );
}
