import { useState } from 'react';
import { X } from 'lucide-react';
import Billboard from '../components/Billboard';
import ContentRow from '../components/ContentRow';
import ContentCard from '../components/ContentCard';
import { summary, awards, kharagpurRoles, education, profileInfo } from '../data';

export default function AboutMe() {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="page-enter bg-[#141414] min-h-screen flex flex-col">
            {/* Billboard / Hero Section */}
            <Billboard
                tag="FEATURED"
                title="YASHWANTH KUMAR"
                maturity="IIT Kharagpur '25"
                description={summary}
                playLabel="Resume"
                onPlay={() => {
                    if (profileInfo.resumeLink && profileInfo.resumeLink !== '#') {
                        window.open(profileInfo.resumeLink, '_blank');
                    } else {
                        alert('Resume link not set yet. Update resumeLink in data.js!');
                    }
                }}
                onMoreInfo={() => setShowModal(true)}
            />

            {/* Row 1: Awards */}
            <ContentRow title="Top Rated Achievements">
                {awards.map((award) => (
                    <ContentCard
                        key={award.id}
                        variant="award"
                        title={award.title}
                        subtitle={award.subtitle}
                        meta={award.year}
                        item={award}
                    />
                ))}
            </ContentRow>

            {/* Row 2: Kharagpur Roles */}
            <ContentRow title="Leadership & Responsibility">
                {kharagpurRoles.map((role) => (
                    <ContentCard
                        key={role.id}
                        variant="role"
                        title={role.role}
                        subtitle={role.title}
                        meta={role.duration}
                        item={role}
                    />
                ))}
            </ContentRow>

            {/* Row 3: Education */}
            <ContentRow title="Background">
                {education.map((edu) => (
                    <ContentCard
                        key={edu.id}
                        variant="education"
                        title={edu.institution}
                        subtitle={edu.degree}
                        meta={edu.period}
                        icon={edu.icon}
                        item={edu}
                    />
                ))}
            </ContentRow>

            {/* Spacer to push footer down */}
            <div className="flex-1" />

            {/* Footer */}
            <footer className="px-4 md:px-12 py-8 border-t border-[#222]">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <div>
                        <span className="font-netflix text-[#e50914] text-[20px] tracking-wider">YASHFLIX</span>
                        <p className="text-[12px] text-[#555] mt-1">
                            {profileInfo.name} · IIT Kharagpur &apos;25
                        </p>
                    </div>
                    <div className="flex items-center gap-5 text-[13px]">
                        <a href={profileInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#808080] hover:text-white transition-colors duration-200">
                            LinkedIn
                        </a>
                        <a href={`mailto:${profileInfo.email}`} className="text-[#808080] hover:text-white transition-colors duration-200">
                            Email
                        </a>
                    </div>
                </div>
            </footer>

            {/* More Info Modal */}
            {showModal && (
                <div
                    className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4"
                    onClick={() => setShowModal(false)}
                >
                    <div
                        className="modal-enter bg-[#181818] rounded-lg max-w-lg w-full overflow-hidden relative shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="relative h-40 bg-gradient-to-b from-[#e50914]/15 to-[#181818] flex items-end p-6">
                            <button
                                onClick={() => setShowModal(false)}
                                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#181818] flex items-center justify-center text-white hover:bg-[#333] transition-colors"
                            >
                                <X size={16} />
                            </button>
                            <h2 className="text-2xl font-bold text-white">{profileInfo.name}</h2>
                        </div>
                        <div className="p-6 pt-4">
                            <div className="flex items-center gap-3 mb-4 text-sm">
                                <span className="text-[#46d369] font-semibold">Featured 2025</span>
                                <span className="maturity-tag text-[#bcbcbc]">IIT Kharagpur</span>
                            </div>
                            <p className="text-[13px] text-[#d2d2d2] leading-relaxed mb-5 whitespace-pre-line">{summary}</p>
                            <div className="space-y-2 text-[13px] text-[#777]">
                                <p><span className="text-[#999]">Location:</span> {profileInfo.location}</p>
                                <p><span className="text-[#999]">Email:</span> {profileInfo.email}</p>
                                <p><span className="text-[#999]">Phone:</span> {profileInfo.phone}</p>
                                <p>
                                    <span className="text-[#999]">LinkedIn:</span>{' '}
                                    <a href={profileInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-white underline hover:text-[#e50914] transition-colors">
                                        View Profile
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
