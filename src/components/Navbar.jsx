import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Search, Bell, ChevronDown } from 'lucide-react';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const isHome = location.pathname === '/';

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 0);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    if (isHome) return null;

    const links = [
        { label: 'Home', path: '/' },
        { label: 'About Me', path: '/about' },
        { label: 'Experience', path: '/experience' },
        { label: 'Projects', path: '/projects' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${scrolled ? 'bg-[#141414]' : 'bg-gradient-to-b from-black/70 via-black/30 to-transparent'
                }`}
        >
            <div className="flex items-center justify-between h-16 px-4 md:px-12">
                {/* Left: Logo + Links */}
                <div className="flex items-center gap-6 md:gap-10">
                    <span
                        onClick={() => navigate('/')}
                        className="font-netflix text-netflix-red text-[28px] leading-none cursor-pointer select-none"
                    >
                        YASHFLIX
                    </span>
                    <span className="hidden md:inline text-[10px] text-[#555] tracking-[0.2em] uppercase font-light ml-3">
                        Every project tells a story
                    </span>

                    <div className="hidden md:flex items-center gap-5">
                        {links.map((l) => (
                            <button
                                key={l.path}
                                onClick={() => navigate(l.path)}
                                className={`text-[13px] transition-colors duration-200 ${location.pathname === l.path
                                    ? 'text-white font-semibold'
                                    : 'text-[#b3b3b3] hover:text-[#e5e5e5]'
                                    }`}
                            >
                                {l.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Right: Icons */}
                <div className="flex items-center gap-4">
                    <button className="text-white hover:text-[#b3b3b3] transition-colors">
                        <Search size={18} />
                    </button>
                    <button className="text-white hover:text-[#b3b3b3] transition-colors relative">
                        <Bell size={18} />
                    </button>
                    <div className="flex items-center gap-1 cursor-pointer group">
                        <div className="w-8 h-8 rounded overflow-hidden bg-[#e50914]">
                            <div className="w-full h-full flex items-center justify-center text-white text-sm font-bold">
                                YK
                            </div>
                        </div>
                        <ChevronDown
                            size={14}
                            className="text-white transition-transform duration-200 group-hover:rotate-180"
                        />
                    </div>
                </div>
            </div>
        </nav>
    );
}
