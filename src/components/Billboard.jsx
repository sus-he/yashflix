import { Play, Info } from 'lucide-react';

export default function Billboard({
    title,
    subtitle,
    description,
    tag,
    maturity,
    onPlay,
    onMoreInfo,
    playLabel = 'Resume',
    infoLabel = 'More Info',
    showButtons = true,
}) {
    return (
        <div className="relative w-full min-h-[70vh] md:min-h-[80vh] flex items-end page-enter">
            {/* Cinematic background layers */}
            <div className="absolute inset-0">
                <div className="absolute top-0 right-0 w-2/3 h-1/2 bg-gradient-to-bl from-[#e50914]/8 to-transparent" />
                <div className="billboard-vignette absolute inset-0" />
                <div className="billboard-fade-bottom absolute bottom-0 left-0 right-0 h-[45%]" />
            </div>

            {/* Content */}
            <div className="relative z-10 px-4 md:px-12 pb-[14vh] max-w-3xl">
                {/* Netflix-style tag badge */}
                {tag && (
                    <div className="flex items-center gap-3 mb-4">
                        <span className="bg-[#e50914] text-white text-[11px] font-bold px-2.5 py-[3px] rounded-sm tracking-wider uppercase flex items-center gap-1.5">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M5 2l7 10L5 22V2z M12 2l7 10-7 10V2z" /></svg>
                            {tag}
                        </span>
                        {maturity && (
                            <span className="text-[#f5c518] text-[13px] font-medium">{maturity}</span>
                        )}
                    </div>
                )}

                {/* Title in Bebas Neue */}
                <h1 className="font-netflix text-[52px] md:text-[68px] lg:text-[84px] leading-[0.95] mb-5 text-white text-shadow tracking-wider">
                    {title}
                </h1>

                {/* Subtitle */}
                {subtitle && (
                    <div className="flex items-center gap-3 mb-4 text-sm">
                        <span className="text-[#bcbcbc]">{subtitle}</span>
                    </div>
                )}

                {/* Description */}
                {description && (
                    <p className="text-sm md:text-base text-[#d2d2d2] leading-[1.6] mb-7 max-w-xl">
                        {description}
                    </p>
                )}

                {/* Buttons */}
                {showButtons && (
                    <div className="flex items-center gap-2">
                        {onPlay && (
                            <button
                                onClick={onPlay}
                                className="flex items-center gap-2 bg-white text-[#141414] font-semibold px-5 md:px-7 py-[7px] rounded text-sm hover:bg-white/80 transition-colors duration-200"
                            >
                                <Play size={18} fill="#141414" strokeWidth={0} />
                                {playLabel}
                            </button>
                        )}
                        {onMoreInfo && (
                            <button
                                onClick={onMoreInfo}
                                className="flex items-center gap-2 bg-[rgba(109,109,110,0.7)] text-white font-semibold px-5 md:px-7 py-[7px] rounded text-sm hover:bg-[rgba(109,109,110,0.4)] transition-colors duration-200"
                            >
                                <Info size={18} />
                                {infoLabel}
                            </button>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
