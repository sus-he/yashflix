// ============================================================
// DATA.JS — Single source of truth for all portfolio content.
// Edit text, add projects, or update roles here.
// ============================================================

export const profileInfo = {
    name: "Yashwanth Kumar Kallepalli",
    tagline: "IIT Kharagpur | Product & Analytics",
    location: "Visakhapatnam, Andhra Pradesh, India",
    email: "kyashwanth30@gmail.com",
    phone: "9347865123",
    linkedin: "https://www.linkedin.com/in/-yashwanth",
    resumeLink: "#", // Replace with your actual resume link
};

export const summary = `I chase growth, strive to add value and create lasting impact.

The ability to narrate a story even though it's just based on a very vague experience always intrigues me.

Areas of interest include building strategic solutions for problems, often scaling up the game.`;

export const awards = [
    {
        id: 1,
        title: "Badhwar Cup",
        subtitle: "Most Active Fresher · 2022",
        year: "2022",
        match: "98% Match",
        type: "Award",
    },
    {
        id: 4,
        title: "Gold | Open IIT Basketball",
        subtitle: "Championship 2023-24",
        year: "2023-24",
        match: "97% Match",
        type: "Sports",
    },
    {
        id: 2,
        title: "Silver | Inter Hall Basketball",
        subtitle: "General Championship 2022-23",
        year: "2022-23",
        match: "95% Match",
        type: "Sports",
    },
    {
        id: 3,
        title: "Bronze | Open IIT Basketball",
        subtitle: "Championship 2022-23",
        year: "2022-23",
        match: "93% Match",
        type: "Sports",
    },
    {
        id: 5,
        title: "RP Hall Cup",
        subtitle: "Rajendra Prasad Hall of Residence · 2023",
        year: "2023",
        match: "92% Match",
        type: "Award",
    },
];

export const kharagpurRoles = [
    {
        id: 1,
        title: "Shaurya, IIT Kharagpur",
        role: "Steering Committee Member",
        duration: "1 year",
        date: "Jun 2024 – May 2025",
        location: "Kharagpur, West Bengal, India",
        category: "Leadership",
        color: "#e50914",
    },
    {
        id: 2,
        title: "Shaurya, IIT Kharagpur",
        role: "Founding Team Head",
        subtitle: "Publicity and Marketing",
        duration: "1 year",
        date: "Jun 2023 – May 2024",
        location: "Kharagpur, West Bengal, India",
        category: "Founding",
        color: "#f89e0c",
    },
    {
        id: 4,
        title: "Rajendra Prasad Hall of Residence",
        role: "General Secretary",
        subtitle: "Sports and Games",
        duration: "9 months",
        date: "Sep 2023 – May 2024",
        location: "Kharagpur, West Bengal, India",
        category: "Sports",
        color: "#46d369",
    },
    {
        id: 5,
        title: "Inter IIT Cultural Meet",
        role: "Head | Core Operations",
        subtitle: "Organising Committee",
        duration: "3 months",
        date: "Oct 2023 – Dec 2023",
        location: "Kharagpur, West Bengal, India",
        category: "Operations",
        color: "#4285f4",
    },
    {
        id: 3,
        title: "Inter IIT Cultural Meet 7.0",
        role: "Dramatics Contingent Member",
        duration: "1 month",
        date: "December 2024",
        location: "Kharagpur, West Bengal, India",
        category: "Cultural",
        color: "#a855f7",
    },
    {
        id: 6,
        title: "Technology Students' Gymkhana, IIT Kharagpur",
        role: "Secretary: Basketball",
        subtitle: "Subcommittee",
        duration: "6 months",
        date: "Nov 2022 – Apr 2023",
        location: "Kharagpur, West Bengal, India",
        category: "Sports",
        color: "#46d369",
    },
    {
        id: 7,
        title: "Kshitij, IIT Kharagpur",
        role: "Design Subhead",
        duration: "7 months",
        date: "Jul 2022 – Jan 2023",
        location: "Kharagpur, West Bengal, India",
        category: "Design",
        color: "#f5c518",
    },
];

export const education = [
    {
        id: 1,
        institution: "Indian Institute of Technology, Kharagpur",
        degree: "Bachelor of Science – BS, Applied Geology",
        period: "November 2021 – June 2025",
        icon: "🎓",
        badge: "University",
        badgeColor: "#e50914",
    },
    {
        id: 2,
        institution: "Sri Venkateswara Classes",
        degree: "10+2, Mathematics and Science",
        period: "April 2018 – March 2020",
        icon: "📘",
        badge: "Intermediate",
        badgeColor: "#4285f4",
    },
    {
        id: 3,
        institution: "Alwardas Public School",
        degree: "10th, Science",
        period: "July 2008 – March 2018",
        icon: "🏫",
        badge: "School",
        badgeColor: "#a855f7",
    },
];

export const experience = {
    main: {
        id: 1,
        company: "Zoca",
        role: "Operations Intern",
        date: "May 2023 – July 2023",
        duration: "3 months",
        location: "Bengaluru, Karnataka, India",
        description:
            "Spearheaded operational processes and contributed to the company's growth strategy. Managed client relations and product workflows in a fast-paced startup environment in Bengaluru.",
        type: "Professional Experience",
        tags: ["Operations", "Strategy", "Startup"],
    },
    related: [
        {
            id: 2,
            company: "HPAIR",
            role: "Delegate | ACONF 2023",
            date: "August 2023",
            duration: "1 week",
            location: "Hong Kong SAR",
            description:
                "Chosen as a Delegate for the 2023 HPAIR Asia Conference. Addressed the world's most pressing issues through innovative solutions and cross-cultural collaboration.",
            type: "International",
            color: "#e50914",
        },
    ],
};

export const skills = [
    "Client Relations",
    "Soft Skills",
    "Product Management",
];

export const certifications = [
    "Strategy Consulting Virtual Experience Program",
];

export const languages = [
    { name: "Hindi", level: "Professional Working" },
    { name: "Telugu", level: "Native or Bilingual" },
    { name: "English", level: "Full Professional" },
];

// Projects — Add your projects here later!
export const projects = [];

export const profiles = [
    {
        id: "about",
        name: "About Me",
        path: "/about",
        avatar: "🏀",
        bgColor: "#e50914",
    },
    {
        id: "projects",
        name: "Projects",
        path: "/projects",
        avatar: "🎬",
        bgColor: "#0080ff",
    },
    {
        id: "experience",
        name: "Experience",
        path: "/experience",
        avatar: "♟️",
        bgColor: "#564db0",
    },
];
