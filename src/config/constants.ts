import { Project } from '@/types';

// ==========================================
// BRAND IDENTITY
// ==========================================
export const BRAND = {
  name: "Lumina Estates",
  tagline: "Elevating Horizons, Crafting Legacies",
  founded: 1985,
  stats: {
    years: "38+",
    sqft: "15M+",
    projects: "60+",
    families: "45,000+"
  },
  contact: {
    phone: "+91 22 4000 5000",
    email: "concierge@luminaestates.com",
    address: "Lumina House, The Capital, BKC, Mumbai - 400051"
  }
};

// ==========================================
// PROJECTS (CMS SCHEMA: 'project')
// ==========================================
export const PROJECTS_DATA: Project[] = [
  // ONGOING
  {
    id: '1',
    title: 'The Obsidian',
    location: 'Bandra West',
    type: 'Residential',
    status: 'Ongoing',
    price: '₹ 12.5 Cr +',
    reraId: 'P51800012345',
    imageUrl: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=800', // Modern dark luxury facade
    description: 'Ultra-luxury sea-facing residences.',
    stats: { units: 45, area: '4 BHK & Penthouse' }
  },
  {
    id: '2',
    title: 'Lumina Zenith',
    location: 'Worli',
    type: 'Residential',
    status: 'Ongoing',
    price: '₹ 18 Cr +',
    reraId: 'P51900067890',
    imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800', // High rise glass
    description: 'Sky villas touching the clouds.',
    stats: { units: 120, area: '3 & 4 BHK' }
  },
  {
    id: '3',
    title: 'Aurora Heights',
    location: 'Powai',
    type: 'Residential',
    status: 'Ongoing',
    price: '₹ 4.5 Cr +',
    reraId: 'P51800054321',
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800', // Resort style residential
    description: 'Lake view apartments with infinity pool.',
    stats: { units: 200, area: '2 & 3 BHK' }
  },
  {
    id: '4',
    title: 'Lumina Nexus',
    location: 'BKC',
    type: 'Commercial',
    status: 'Ongoing',
    price: 'On Request',
    reraId: 'P51800098765',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800', // Glass Corporate
    description: 'Grade A office spaces for global HQs.',
    stats: { units: 50, area: 'Offices' }
  },

  // UPCOMING
  {
    id: '5',
    title: 'Project Aeon',
    location: 'Juhu',
    type: 'Redevelopment',
    status: 'Upcoming',
    price: 'Coming Soon',
    reraId: 'P51800011223',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800', // Modern balcony view
    description: 'Coming soon to the golden mile.',
    stats: {}
  },
  {
    id: '6',
    title: 'The Reserve',
    location: 'Malabar Hill',
    type: 'Residential',
    status: 'Upcoming',
    price: 'Invite Only',
    reraId: 'P51700033445',
    imageUrl: 'https://images.unsplash.com/photo-1600596542815-3ad19fb2a258?auto=format&fit=crop&q=80&w=800', // Classic luxury mansion style
    description: 'Exclusive by invitation only.',
    stats: {}
  },

  // COMPLETED
  {
    id: '7',
    title: 'Lumina Solitaire',
    location: 'Andheri West',
    type: 'Residential',
    status: 'Completed',
    price: 'Sold Out',
    reraId: 'P51800055667',
    imageUrl: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=800', // Apartment Interior/Exterior
    description: 'Delivered 2023.',
    stats: {}
  },
  {
    id: '8',
    title: 'Orbital Tech Park',
    location: 'Andheri East',
    type: 'Commercial',
    status: 'Completed',
    price: 'Leased',
    reraId: 'P51800077889',
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800', // Corporate Lobby
    description: 'IT Park.',
    stats: {}
  },
  {
    id: '9',
    title: 'Lumina Pristine',
    location: 'Goregaon',
    type: 'Residential',
    status: 'Completed',
    price: 'Sold Out',
    reraId: 'P51800099001',
    imageUrl: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=800', // Modern housing
    description: 'A landmark in green living.',
    stats: {}
  }
];

// ==========================================
// BLOGS (CMS SCHEMA: 'post')
// ==========================================
export const BLOGS_DATA = [
  {
    title: "The Shift to Sustainable Luxury: Green Living in Mumbai",
    date: "Dec 15, 2025",
    img: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=600", // Green building detail
    snippet: "Why modern homebuyers are prioritizing LEED certified buildings and carbon-neutral homes."
  },
  {
    title: "Investment Outlook 2026: Why Commercial Real Estate is Booming",
    date: "Nov 30, 2025",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600", // Financial/Chart abstract or skyline
    snippet: "An in-depth analysis of rental yields in BKC and Lower Parel."
  },
  {
    title: "Smart Homes: The New Standard for High-End Living",
    date: "Nov 6, 2025",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=600", // Smart home device/modern living
    snippet: "From voice-controlled lighting to AI security, exploring the tech stack of modern apartments."
  },
  {
    title: "Homes Without GST? A Festival Blessing or a Mirage",
    date: "Sep 22, 2025",
    img: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&q=80&w=600", // Indian festival/lights or keys
    snippet: "Analyzing the impact of GST waivers during festive seasons on property sales."
  },
  {
    title: "Unlock Growth: Real Estate Investment Benefits You Can't Miss",
    date: "Sep 11, 2025",
    img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=600", // Business growth/keys
    snippet: "Why the current fiscal quarter is considered an auspicious time for real estate investments in India."
  },
  {
    title: "Vaastu Tips for Your New Luxury Home",
    date: "Aug 26, 2025",
    img: "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&q=80&w=600", // Zen/Peaceful interior
    snippet: "Essential Vaastu Shastra tips to ensure prosperity and peace in your new home."
  }
];

// ==========================================
// TESTIMONIALS (CMS SCHEMA: 'testimonial')
// ==========================================
export const TESTIMONIALS_DATA = [
  {
    name: "The Oberoi Family",
    project: "Lumina Zenith",
    image: "https://images.unsplash.com/photo-1542596594-649edbc13630?auto=format&fit=crop&q=80&w=800" // Happy couple/family
  },
  {
    name: "Dr. & Mrs. Merchant",
    project: "The Obsidian",
    image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&q=80&w=800" // Older couple luxury
  },
  {
    name: "Mr. Rajesh Singhania",
    project: "Lumina Solitaire",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800" // Business man
  }
];

// ==========================================
// TEAM (CMS SCHEMA: 'teamMember')
// ==========================================
export const TEAM_DATA = [
  { name: "RAJIV MALHOTRA", role: "Chairman", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300" }, // Senior business man
  { name: "SIMRAN KAPOOR", role: "Managing Director", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300" }, // Business woman
  { name: "VIKRAM MEHTA", role: "Director - Projects", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=300", center: true }, // Business man
  { name: "ANJALI DESAI", role: "Director - Design", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=300" }, // Creative woman
  { name: "ARJUN NAIR", role: "Director - Sales", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300" }, // Young professional
  { name: "KABIR SINGH", role: "Director - Finance", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300" }, // Professional smiling
];

// ==========================================
// CAREERS (CMS SCHEMA: 'jobOpening')
// ==========================================
export const CAREERS_DATA = [
  { title: "RELATIONSHIP MANAGER", exp: "4 to 6 years", loc: "Sales Gallery, Worli", type: "Full Time", department: "Sales" },
  { title: "SENIOR ARCHITECT", exp: "Min 7-10 Years", loc: "Lumina House, BKC", type: "Full Time", department: "Architecture" },
  { title: "SITE ENGINEER", exp: "Min 4-7 Years", loc: "Project Aeon, Juhu", type: "Full Time", department: "Engineering" }
];

// ==========================================
// NEWS / MEDIA (CMS SCHEMA: 'newsItem')
// ==========================================
export const NEWS_DATA = [
  { title: "Best Redevelopment Project - The Obsidian (Real Estate & Business Excellence Awards 2024)", img: "https://images.unsplash.com/photo-1567427018141-0584cfcbf1b8?auto=format&fit=crop&q=80&w=600" }, // Award ceremony / Stage
  { title: "Lumina Estates Featured in Architectural Digest - 'The Future of Living'", img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=600" }, // Architecture magazine style
  { title: "Lumina Zenith Sample Flat Unveiling - August 2025", img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=600" }, // Interior party/unveiling
  { title: "Developer of the Year - Luxury (Global Real Estate Awards 2024)", img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=600" }, // Handshake/Award
  { title: "Best Quality & Architectural Design - Aurora Heights", img: "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?auto=format&fit=crop&q=80&w=600" }, // Building detail
  { title: "Lumina Sports Cup 2024 @ Orbital Tech Park", img: "https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&q=80&w=600" }, // Sports/Turf
];

// ==========================================
// VERTICALS (CMS SCHEMA: 'vertical')
// ==========================================
export const VERTICALS_DATA = [
  {
    title: "LUMINA INTERIORS",
    description: "Curating bespoke living spaces with Italian marble, German fittings, and automation systems that anticipate your needs. Our interior division ensures the inside is as spectacular as the facade.",
    img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800", // Luxurious Interior
  },
  {
    title: "LUMINA COMMERCIAL",
    description: "Creating Grade-A workspaces that inspire productivity. From ergonomic designs to LEED Gold certified sustainability, we build offices for the future of work.",
    img: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800", // Modern Office
  }
];