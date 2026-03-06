import { Lock, Clock } from 'lucide-react';
import { profileInfo } from '../data';

const comingSoonCards = [
    { id: 1, text: "An exciting project is in the works. Stay tuned!" },
    { id: 2, text: "Something creative is brewing. Check back later!" },
    { id: 3, text: "A new venture is on the horizon. Watch this space!" },
    { id: 4, text: "Innovation takes time. Big things are loading!" },
];

export default function Projects() {
    return (
        <div className="page-enter bg-[#141414] min-h-screen flex flex-col">

            {/* ═══════════ HERO SECTION ═══════════ */}
            <div className="relative pt-24 pb-10 px-4 md:px-12">
                {/* Background accent */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-0 right-0 w-2/3 h-1/2 bg-gradient-to-bl from-[#e50914]/5 to-transparent" />
                </div>

                <div className="relative z-10 max-w-4xl">
                    {/* NEW RELEASES badge */}
                    <div className="flex items-center gap-3 mb-4">
                        <span className="bg-[#e50914] text-white text-[11px] font-bold px-2.5 py-[3px] rounded-sm tracking-wider uppercase flex items-center gap-1.5">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M5 2l7 10L5 22V2z M12 2l7 10-7 10V2z" /></svg>
                            New Releases
                        </span>
                    </div>

                    {/* Title */}
                    <h1 className="font-netflix text-[52px] md:text-[72px] lg:text-[88px] leading-[0.95] text-white mb-3 tracking-wider">
                        MY PROJECTS
                    </h1>

                    {/* Subtitle */}
                    <p className="text-[14px] text-[#808080] max-w-md">
                        Great things are in production. Stay tuned for exciting updates.
                    </p>
                </div>
            </div>

            {/* ═══════════ COMING SOON CARDS ═══════════ */}
            <div className="px-4 md:px-12 pb-16 flex-1">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {comingSoonCards.map((card) => (
                        <div
                            key={card.id}
                            className="group bg-[#181818] rounded border border-[#2a2a2a] hover:border-[#e50914]/30 transition-colors duration-300 cursor-pointer overflow-hidden"
                        >
                            {/* Card content */}
                            <div className="flex flex-col items-center justify-center py-10 px-5 text-center">
                                {/* Lock icon */}
                                <div className="w-12 h-12 rounded-full border-2 border-[#e50914]/40 flex items-center justify-center mb-5 group-hover:border-[#e50914]/70 transition-colors duration-300">
                                    <Lock size={20} className="text-[#e50914]/60 group-hover:text-[#e50914] transition-colors duration-300" />
                                </div>

                                {/* Coming Soon text */}
                                <h3 className="font-netflix text-[18px] md:text-[20px] text-white tracking-[3px] mb-3">
                                    COMING SOON
                                </h3>

                                {/* Description */}
                                <p className="text-[12px] text-[#666] leading-relaxed max-w-[200px]">
                                    {card.text}
                                </p>
                            </div>

                            {/* Bottom bar */}
                            <div className="px-4 py-2.5 border-t border-[#2a2a2a] flex items-center justify-center gap-1.5 text-[11px] text-[#555]">
                                <Clock size={11} />
                                In Development
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ═══════════ FOOTER ═══════════ */}
            <footer className="px-4 md:px-12 py-8 border-t border-[#222]">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <div>
                        <span className="font-netflix text-[#e50914] text-[20px] tracking-wider">YASHFLIX</span>
                        <span className="text-[10px] text-[#555] tracking-[0.15em] uppercase font-light ml-2">Every project tells a story</span>
                        <p className="text-[12px] text-[#555] mt-1">
                            {profileInfo.name} · IIT Kharagpur &apos;25
                        </p>
                    </div>
                    <div className="flex items-center gap-5 text-[13px]">
                        <a
                            href={profileInfo.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#808080] hover:text-white transition-colors duration-200"
                        >
                            LinkedIn
                        </a>
                        <a
                            href={`mailto:${profileInfo.email}`}
                            className="text-[#808080] hover:text-white transition-colors duration-200"
                        >
                            Email
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
