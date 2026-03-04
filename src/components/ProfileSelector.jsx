import { useNavigate } from 'react-router-dom';

// ─── Red outline SVG icons matching the reference ───

function CrosshairIcon() {
    return (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#e50914" strokeWidth="1.5">
            <circle cx="24" cy="24" r="16" />
            <circle cx="24" cy="24" r="8" />
            <line x1="24" y1="2" x2="24" y2="14" />
            <line x1="24" y1="34" x2="24" y2="46" />
            <line x1="2" y1="24" x2="14" y2="24" />
            <line x1="34" y1="24" x2="46" y2="24" />
        </svg>
    );
}

function ChessPawnIcon() {
    return (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#e50914" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="24" cy="12" r="6" />
            <path d="M20 18 Q18 24 16 30 L32 30 Q30 24 28 18" />
            <rect x="14" y="30" width="20" height="4" rx="1" />
            <path d="M12 38 L14 34 L34 34 L36 38" />
            <rect x="12" y="38" width="24" height="3" rx="1" />
        </svg>
    );
}

function CodeIcon() {
    return (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#e50914" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="16,14 6,24 16,34" />
            <polyline points="32,14 42,24 32,34" />
            <line x1="28" y1="10" x2="20" y2="38" />
        </svg>
    );
}

const profiles = [
    { id: 'about', name: 'About Me', path: '/about', Icon: CrosshairIcon },
    { id: 'experience', name: 'Experience', path: '/experience', Icon: ChessPawnIcon },
    { id: 'projects', name: 'Projects', path: '/projects', Icon: CodeIcon },
];

export default function ProfileSelector() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[#141414] flex flex-col items-center justify-center px-6 select-none">
            {/* YASHFLIX logo */}
            <h1
                className="font-netflix text-[#e50914] text-[40px] md:text-[56px] tracking-[6px] mb-6 profile-appear"
                style={{ animationDelay: '0.1s' }}
            >
                YASHFLIX
            </h1>

            {/* Who's watching? */}
            <p
                className="text-[#e5e5e5] text-[18px] md:text-[22px] font-light mb-10 profile-appear"
                style={{ animationDelay: '0.2s' }}
            >
                Who&apos;s watching?
            </p>

            {/* Profile cards */}
            <div className="flex items-start justify-center gap-4 md:gap-6 mb-12">
                {profiles.map((profile, i) => (
                    <button
                        key={profile.id}
                        onClick={() => navigate(profile.path)}
                        className="profile-appear flex flex-col items-center gap-2.5 group focus:outline-none"
                        style={{ animationDelay: `${0.3 + i * 0.1}s` }}
                    >
                        <div className="w-[100px] h-[100px] md:w-[130px] md:h-[130px] rounded bg-[#2b2b2b] flex items-center justify-center border border-transparent group-hover:border-[#e5e5e5]/30 transition-all duration-200">
                            <profile.Icon />
                        </div>
                        <span className="text-[#808080] text-[12px] md:text-[13px] group-hover:text-[#e5e5e5] transition-colors duration-200">
                            {profile.name}
                        </span>
                    </button>
                ))}
            </div>

            {/* Name at bottom */}
            <p
                className="profile-appear text-[#555] text-[10px] md:text-[11px] tracking-[2px] uppercase"
                style={{ animationDelay: '0.65s' }}
            >
                Yashwanth Kumar Kallepalli
            </p>
        </div>
    );
}
