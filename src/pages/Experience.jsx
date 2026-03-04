import { useState } from 'react';
import { Play, Info, MapPin, Calendar, Globe, X } from 'lucide-react';
import ContentRow from '../components/ContentRow';
import { experience, profileInfo } from '../data';

export default function Experience() {
    const { main, related } = experience;
    const [showDetails, setShowDetails] = useState(false);

    return (
        <div className="page-enter bg-[#141414] min-h-screen">

            {/* ═══════════ HERO SECTION ═══════════ */}
            <div className="relative w-full min-h-[75vh] md:min-h-[80vh] flex items-end">
                {/* Background layers */}
                <div className="absolute inset-0">
                    <div className="absolute top-0 right-0 w-2/3 h-1/2 bg-gradient-to-bl from-[#e50914]/6 to-transparent" />
                    <div className="billboard-vignette absolute inset-0" />
                    <div className="billboard-fade-bottom absolute bottom-0 left-0 right-0 h-[45%]" />
                </div>

                {/* Content */}
                <div className="relative z-10 px-4 md:px-12 pb-[10vh] max-w-3xl">
                    {/* ORIGINAL SERIES badge + Season */}
                    <div className="flex items-center gap-3 mb-5">
                        <span className="bg-[#e50914] text-white text-[11px] font-bold px-2.5 py-[3px] rounded-sm tracking-wider uppercase flex items-center gap-1.5">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M5 2l7 10L5 22V2z M12 2l7 10-7 10V2z" /></svg>
                            Original Series
                        </span>
                        <span className="text-[#46d369] text-[14px] font-medium">Season 1</span>
                    </div>

                    {/* Company name — large Bebas Neue */}
                    <h1 className="font-netflix text-[72px] md:text-[96px] lg:text-[110px] leading-[0.9] text-white mb-3 tracking-wider">
                        {main.company.toUpperCase()}
                    </h1>

                    {/* Role */}
                    <h2 className="text-[18px] md:text-[22px] text-[#e5e5e5] font-normal mb-4">
                        {main.role}
                    </h2>

                    {/* Location + Date line */}
                    <div className="flex flex-wrap items-center gap-4 mb-5 text-[13px] text-[#808080]">
                        <span className="flex items-center gap-1.5">
                            <MapPin size={13} className="text-[#808080]" />
                            {main.location}
                        </span>
                        <span className="flex items-center gap-1.5">
                            <Calendar size={13} className="text-[#808080]" />
                            {main.date}
                        </span>
                    </div>

                    {/* Description */}
                    <p className="text-[14px] text-[#b3b3b3] leading-[1.7] mb-6 max-w-xl">
                        {main.description}
                    </p>

                    {/* Skill tags */}
                    {main.tags && (
                        <div className="flex flex-wrap items-center gap-2 mb-7">
                            {main.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="text-[12px] text-[#e5e5e5] border border-[#4d4d4d] rounded-full px-3.5 py-1 hover:border-[#808080] transition-colors cursor-default"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}

                    {/* Buttons */}
                    <div className="flex items-center gap-2">
                        <a
                            href={profileInfo.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-white text-[#141414] font-semibold px-5 md:px-7 py-[7px] rounded text-sm hover:bg-white/80 transition-colors duration-200"
                        >
                            <Play size={18} fill="#141414" strokeWidth={0} />
                            Connect
                        </a>
                        <button
                            onClick={() => setShowDetails(true)}
                            className="flex items-center gap-2 bg-[rgba(109,109,110,0.7)] text-white font-semibold px-5 md:px-7 py-[7px] rounded text-sm hover:bg-[rgba(109,109,110,0.4)] transition-colors duration-200"
                        >
                            <Info size={18} />
                            Details
                        </button>
                    </div>
                </div>
            </div>

            {/* ═══════════ RELATED CONTENT ROW ═══════════ */}
            {related.length > 0 && (
                <ContentRow title="More Like This">
                    {related.map((item) => (
                        <div
                            key={item.id}
                            className="card-netflix flex-shrink-0 w-[280px] md:w-[340px] rounded overflow-hidden cursor-pointer bg-[#181818]"
                        >
                            {/* Card top */}
                            <div className="h-[130px] relative overflow-hidden bg-gradient-to-br from-[#1a1a2e]/60 to-[#181818]">
                                <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-transparent" />
                                {/* Globe icon */}
                                <div className="absolute top-3 left-3 z-10">
                                    <Globe size={18} className="text-[#808080]" />
                                </div>
                                {/* Category badge */}
                                {item.type && (
                                    <div className="absolute top-3 left-10 z-10">
                                        <span
                                            className="px-2 py-[2px] rounded-sm text-[10px] font-bold text-white uppercase tracking-wider"
                                            style={{ backgroundColor: item.color || '#e50914' }}
                                        >
                                            {item.type}
                                        </span>
                                    </div>
                                )}
                                {/* Title at bottom of card image */}
                                <div className="absolute bottom-3 left-3 right-3 z-10">
                                    <h3 className="text-white text-[15px] font-bold leading-tight">{item.role}</h3>
                                    <p className="text-[#9b9b9b] text-[12px] mt-0.5">{item.company}</p>
                                </div>
                            </div>

                            {/* Card info */}
                            <div className="px-3 py-2.5">
                                <div className="flex items-center gap-3 text-[11px] text-[#777] mb-1.5">
                                    <span className="flex items-center gap-1">
                                        <MapPin size={10} />
                                        {item.location}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Calendar size={10} />
                                        {item.date}
                                    </span>
                                </div>
                                {item.description && (
                                    <p className="text-[#9b9b9b] text-[11px] leading-snug line-clamp-2">{item.description}</p>
                                )}
                            </div>
                        </div>
                    ))}
                </ContentRow>
            )}

            {/* Footer spacer */}
            <div className="h-20" />

            {/* ═══════════ DETAILS MODAL ═══════════ */}
            {showDetails && (
                <div
                    className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4"
                    onClick={() => setShowDetails(false)}
                >
                    <div
                        className="modal-enter bg-[#181818] rounded-lg max-w-lg w-full overflow-hidden relative shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="relative h-36 bg-gradient-to-b from-[#e50914]/15 to-[#181818] flex items-end p-6">
                            <button
                                onClick={() => setShowDetails(false)}
                                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#181818] flex items-center justify-center text-white hover:bg-[#333] transition-colors"
                            >
                                <X size={16} />
                            </button>
                            <div>
                                <span className="bg-[#e50914] text-white text-[9px] font-bold px-2 py-[2px] rounded-sm tracking-wider uppercase">Original Series</span>
                                <h2 className="font-netflix text-3xl text-white mt-2 tracking-wider">{main.company.toUpperCase()}</h2>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-6 pt-4">
                            <div className="flex items-center gap-3 mb-3 text-sm">
                                <span className="text-[#46d369] font-semibold">Season 1</span>
                                <span className="text-[#bcbcbc] text-[13px]">{main.date}</span>
                            </div>

                            <h3 className="text-white text-[16px] font-semibold mb-1">{main.role}</h3>
                            <p className="text-[13px] text-[#808080] mb-4 flex items-center gap-1.5">
                                <MapPin size={12} /> {main.location}
                            </p>

                            <p className="text-[13px] text-[#d2d2d2] leading-relaxed mb-5">{main.description}</p>

                            {main.tags && (
                                <div className="flex flex-wrap gap-2">
                                    {main.tags.map((tag) => (
                                        <span key={tag} className="text-[11px] text-[#b3b3b3] border border-[#4d4d4d] rounded-full px-3 py-0.5">{tag}</span>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
