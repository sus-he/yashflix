import { useState, useEffect } from 'react';

export default function NetflixIntro({ onComplete }) {
    const [phase, setPhase] = useState('black'); // black → logo → fade-out

    useEffect(() => {
        // Phase 1: Show black screen briefly
        const t1 = setTimeout(() => setPhase('logo'), 300);
        // Phase 2: Start fade-out after the logo animation plays
        const t2 = setTimeout(() => setPhase('fade-out'), 2800);
        // Phase 3: Fully done, unmount
        const t3 = setTimeout(() => onComplete(), 3500);

        return () => {
            clearTimeout(t1);
            clearTimeout(t2);
            clearTimeout(t3);
        };
    }, [onComplete]);

    return (
        <div
            className={`netflix-intro fixed inset-0 z-[9999] bg-black flex items-center justify-center transition-opacity duration-700 ${phase === 'fade-out' ? 'opacity-0' : 'opacity-100'
                }`}
        >
            {/* Ambient glow behind the text */}
            <div
                className={`absolute w-[400px] h-[400px] rounded-full transition-all duration-[2s] ${phase === 'logo'
                        ? 'opacity-60 scale-100'
                        : 'opacity-0 scale-50'
                    }`}
                style={{
                    background:
                        'radial-gradient(circle, rgba(229,9,20,0.4) 0%, rgba(229,9,20,0.1) 40%, transparent 70%)',
                }}
            />

            {/* YASHFLIX Logo */}
            <h1
                className={`font-netflix relative z-10 text-[#e50914] tracking-[0.35em] select-none transition-all duration-[2s] ease-out ${phase === 'logo'
                        ? 'intro-logo-visible'
                        : 'intro-logo-hidden'
                    }`}
            >
                YASHFLIX
            </h1>

            {/* Subtle "tudum" bar flash at the bottom */}
            <div
                className={`absolute bottom-0 left-0 right-0 h-[2px] bg-[#e50914] transition-all duration-500 ${phase === 'logo' ? 'intro-bar-flash' : 'opacity-0'
                    }`}
            />
        </div>
    );
}
