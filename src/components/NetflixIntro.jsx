import { useState, useEffect } from 'react';

export default function NetflixIntro({ onComplete }) {
    const [phase, setPhase] = useState('black'); // black → zoom → tagline → fade-out

    useEffect(() => {
        const t1 = setTimeout(() => setPhase('zoom'), 500);
        const t2 = setTimeout(() => setPhase('tagline'), 3200);
        const t3 = setTimeout(() => setPhase('fade-out'), 4200);
        const t4 = setTimeout(() => onComplete(), 5000);

        return () => {
            clearTimeout(t1);
            clearTimeout(t2);
            clearTimeout(t3);
            clearTimeout(t4);
        };
    }, [onComplete]);

    return (
        <div
            className={`fixed inset-0 z-[9999] bg-black flex items-center justify-center transition-opacity duration-700 ${phase === 'fade-out' ? 'opacity-0 pointer-events-none' : 'opacity-100'
                }`}
        >
            {/* Ambient red glow */}
            <div
                className={`absolute rounded-full transition-all duration-[2.5s] ease-out ${phase !== 'black'
                    ? 'w-[600px] h-[600px] opacity-30'
                    : 'w-[100px] h-[100px] opacity-0'
                    }`}
                style={{
                    background:
                        'radial-gradient(circle, rgba(229,9,20,0.5) 0%, rgba(229,9,20,0.15) 35%, transparent 65%)',
                }}
            />

            <div className="relative z-10 flex flex-col items-center">
                {/* The Y letter — Netflix N-style cinematic zoom */}
                <div
                    className={`intro-y-wrapper ${phase === 'black' ? 'intro-y-before' : 'intro-y-animate'
                        }`}
                >
                    <svg
                        viewBox="0 0 100 130"
                        className="intro-y-svg"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <defs>
                            {/* Left ribbon gradient — darker, recessed */}
                            <linearGradient id="yLeft" x1="0" y1="0" x2="0.8" y2="1">
                                <stop offset="0%" stopColor="#b20710" />
                                <stop offset="100%" stopColor="#8b050d" />
                            </linearGradient>
                            {/* Right ribbon gradient — brighter, front-facing */}
                            <linearGradient id="yRight" x1="1" y1="0" x2="0.2" y2="1">
                                <stop offset="0%" stopColor="#e50914" />
                                <stop offset="100%" stopColor="#c1070f" />
                            </linearGradient>
                            {/* Center/stem gradient */}
                            <linearGradient id="yStem" x1="0.5" y1="0" x2="0.5" y2="1">
                                <stop offset="0%" stopColor="#e50914" />
                                <stop offset="100%" stopColor="#9b060e" />
                            </linearGradient>
                            {/* Highlight overlay */}
                            <linearGradient id="yShine" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="rgba(255,255,255,0.25)" />
                                <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                            </linearGradient>
                        </defs>

                        {/* Left arm — back ribbon (thick) */}
                        <path
                            d="M 2,0  L 32,0  L 62,60  L 38,60  Z"
                            fill="url(#yLeft)"
                        />

                        {/* Right arm — front ribbon (thick, overlaps at center) */}
                        <path
                            d="M 68,0  L 98,0  L 62,60  L 38,60  Z"
                            fill="url(#yRight)"
                        />

                        {/* Stem — thick, drops from junction */}
                        <path
                            d="M 38,60  L 62,60  L 62,130  L 38,130  Z"
                            fill="url(#yStem)"
                        />

                        {/* Shine stripe on left arm */}
                        <path
                            d="M 12,0  L 20,0  L 52,60  L 46,60  Z"
                            fill="url(#yShine)"
                        />

                        {/* Shine stripe on stem */}
                        <path
                            d="M 43,60  L 50,60  L 50,130  L 43,130  Z"
                            fill="url(#yShine)"
                        />
                    </svg>
                </div>

                {/* Tagline — fades in after zoom completes */}
                <p
                    className={`mt-6 text-[11px] md:text-[13px] tracking-[0.35em] uppercase font-light transition-all duration-700 ease-out ${phase === 'tagline' || phase === 'fade-out'
                        ? 'opacity-100 translate-y-0 text-[#808080]'
                        : 'opacity-0 translate-y-4 text-[#808080]'
                        }`}
                    style={{ fontFamily: "'Inter', sans-serif" }}
                >
                    Every project tells a story
                </p>
            </div>
        </div>
    );
}
