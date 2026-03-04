import { Calendar, Trophy } from 'lucide-react';

export default function ContentCard({ title, subtitle, meta, icon, description, variant = 'default', item }) {

    // ─── AWARD CARD ───
    if (variant === 'award') {
        const typeColor = item?.type === 'Sports' ? '#4285f4' : '#e50914';
        return (
            <div className="card-netflix flex-shrink-0 w-[180px] md:w-[200px] rounded overflow-hidden cursor-pointer bg-[#181818]">
                {/* Top section */}
                <div className="h-[80px] relative overflow-hidden bg-gradient-to-br from-[#1a1a2e] to-[#181818]">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-transparent" />
                    {/* Trophy + badge */}
                    <div className="absolute top-2.5 left-2.5 z-10 flex items-center gap-1.5">
                        <Trophy size={14} className="text-[#f5c518]" />
                        <span className="text-[9px] font-bold text-white px-1.5 py-[1px] rounded-sm uppercase tracking-wider" style={{ backgroundColor: typeColor }}>{item?.type}</span>
                    </div>
                    {/* Match % */}
                    {item?.match && (
                        <div className="absolute top-2.5 right-2.5 z-10">
                            <span className="text-[#46d369] text-[11px] font-bold">{item.match}</span>
                        </div>
                    )}
                </div>

                {/* Info */}
                <div className="px-2.5 py-2">
                    <h3 className="text-white text-[13px] font-bold leading-tight mb-1">{title}</h3>
                    <p className="text-[#e50914] text-[10px] leading-snug mb-0.5">{subtitle}</p>
                    {item?.year && <p className="text-[#555] text-[10px]">{item.year}</p>}
                </div>
            </div>
        );
    }

    // ─── ROLE / LEADERSHIP CARD ───
    if (variant === 'role') {
        const { category, duration, date, color } = item || {};
        return (
            <div className="card-netflix flex-shrink-0 w-[180px] md:w-[200px] rounded overflow-hidden cursor-pointer bg-[#181818]">
                {/* Top with accent */}
                <div className="h-[90px] relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${color || '#333'}15, #181818)` }}>
                    <div className="absolute left-0 top-0 bottom-0 w-[3px]" style={{ backgroundColor: color || '#e50914' }} />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-transparent" />
                    {/* Badge + duration */}
                    <div className="absolute top-2.5 left-2.5 right-2.5 z-10 flex items-center gap-1.5">
                        <span className="px-1.5 py-[1px] rounded-sm text-[9px] font-bold text-white uppercase tracking-wider" style={{ backgroundColor: color || '#e50914' }}>{category}</span>
                        {duration && <span className="text-[10px] text-[#888]">{duration}</span>}
                    </div>
                </div>

                {/* Info */}
                <div className="px-2.5 py-2">
                    <h3 className="text-white text-[13px] font-bold leading-tight mb-1">{title}</h3>
                    {item?.subtitle && <p className="text-[#9b9b9b] text-[10px] mb-1">{item.subtitle}</p>}
                    <p className="text-[#777] text-[10px] mb-1.5">{subtitle}</p>
                    {date && (
                        <div className="flex items-center gap-1 text-[9px] text-[#555]">
                            <Calendar size={9} />
                            {date}
                        </div>
                    )}
                </div>
            </div>
        );
    }

    // ─── EDUCATION CARD ───
    if (variant === 'education') {
        const badgeColor = item?.badgeColor || '#e50914';
        const badgeLabel = item?.badge || 'Education';
        return (
            <div className="card-netflix flex-shrink-0 w-[180px] md:w-[200px] rounded overflow-hidden cursor-pointer bg-[#181818]">
                <div className="h-[60px] relative overflow-hidden bg-gradient-to-br from-[#1c1c3a]/40 to-[#181818]">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-transparent" />
                    <div className="absolute top-2.5 left-2.5 z-10">
                        <span className="px-1.5 py-[1px] rounded-sm text-[9px] font-bold text-white uppercase tracking-wider" style={{ backgroundColor: badgeColor }}>{badgeLabel}</span>
                    </div>
                </div>
                <div className="px-2.5 py-2">
                    <h3 className="text-white text-[13px] font-bold leading-tight mb-1">{title}</h3>
                    <p className="text-[#e50914] text-[10px] leading-snug mb-0.5">{subtitle}</p>
                    {meta && <p className="text-[#555] text-[10px]">{meta}</p>}
                </div>
            </div>
        );
    }

    // ─── EXPERIENCE CARD ───
    if (variant === 'experience') {
        return (
            <div className="card-netflix flex-shrink-0 w-[280px] md:w-[340px] rounded overflow-hidden cursor-pointer bg-[#181818]">
                <div className="h-[130px] relative overflow-hidden bg-gradient-to-br from-[#e50914]/10 to-[#181818]">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-transparent" />
                    <div className="absolute top-3 left-3 z-10">
                        <span className="px-2 py-[2px] rounded-sm text-[10px] font-bold text-white bg-[#e50914] uppercase tracking-wider">{meta || 'Experience'}</span>
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 z-10">
                        <h3 className="text-white text-[15px] font-semibold leading-tight">{title}</h3>
                    </div>
                </div>
                <div className="px-3 py-2.5">
                    <p className="text-[#e50914] text-[12px] font-medium mb-1.5">{subtitle}</p>
                    {description && <p className="text-[#9b9b9b] text-[12px] leading-snug line-clamp-2">{description}</p>}
                </div>
            </div>
        );
    }

    // ─── DEFAULT CARD ───
    return (
        <div className="card-netflix flex-shrink-0 w-[180px] md:w-[200px] rounded overflow-hidden cursor-pointer bg-[#181818]">
            <div className="h-[80px] relative overflow-hidden bg-gradient-to-br from-[#2a2a2a] to-[#181818]">
                <div className="absolute inset-0 bg-gradient-to-t from-[#181818] to-transparent" />
                {icon && <div className="absolute top-3 left-3 z-10 text-xl">{icon}</div>}
                <div className="absolute bottom-3 left-3 right-3 z-10">
                    <h3 className="text-white text-[13px] font-semibold leading-tight">{title}</h3>
                </div>
            </div>
            <div className="px-2.5 py-2">
                {subtitle && <p className="text-[#9b9b9b] text-[11px] leading-snug">{subtitle}</p>}
                {meta && <p className="text-[#555] text-[10px] mt-1">{meta}</p>}
            </div>
        </div>
    );
}
