import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ContentRow({ title, children }) {
    const rowRef = useRef(null);
    const [showLeft, setShowLeft] = useState(false);
    const [showRight, setShowRight] = useState(true);

    const checkScroll = () => {
        if (!rowRef.current) return;
        const { scrollLeft, scrollWidth, clientWidth } = rowRef.current;
        setShowLeft(scrollLeft > 10);
        setShowRight(scrollLeft < scrollWidth - clientWidth - 10);
    };

    useEffect(() => {
        const row = rowRef.current;
        if (row) {
            checkScroll();
            row.addEventListener('scroll', checkScroll, { passive: true });
            window.addEventListener('resize', checkScroll);
            return () => {
                row.removeEventListener('scroll', checkScroll);
                window.removeEventListener('resize', checkScroll);
            };
        }
    }, []);

    const scroll = (dir) => {
        if (!rowRef.current) return;
        const amount = rowRef.current.clientWidth * 0.8;
        rowRef.current.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' });
    };

    return (
        <div className="mb-8 md:mb-12 relative group/row">
            <h2 className="text-[15px] md:text-[18px] font-semibold text-[#e5e5e5] px-4 md:px-12 mb-2 md:mb-3 tracking-wide">
                {title}
            </h2>

            <div className="relative">
                {/* Left arrow */}
                {showLeft && (
                    <button
                        onClick={() => scroll('left')}
                        className="absolute left-0 top-0 bottom-0 z-20 w-10 md:w-14 row-fade-left flex items-center justify-center opacity-0 group-hover/row:opacity-100 transition-opacity duration-300"
                    >
                        <ChevronLeft className="text-white" size={28} />
                    </button>
                )}

                {/* Scrollable row */}
                <div
                    ref={rowRef}
                    className="scroll-row flex gap-1 md:gap-[6px] overflow-x-auto px-4 md:px-12 py-2"
                >
                    {children}
                </div>

                {/* Right arrow */}
                {showRight && (
                    <button
                        onClick={() => scroll('right')}
                        className="absolute right-0 top-0 bottom-0 z-20 w-10 md:w-14 row-fade-right flex items-center justify-center opacity-0 group-hover/row:opacity-100 transition-opacity duration-300"
                    >
                        <ChevronRight className="text-white" size={28} />
                    </button>
                )}
            </div>
        </div>
    );
}
