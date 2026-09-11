import type {
    ContactSection,
    HeroSection,
    ServiceItem,
    StatItem,
    WhyChooseItem,
} from "../types/home";

export const hero: HeroSection = {
    headline: "Practical support for every home project, move, and season.",
    description:
        "From moving and repairs to home improvements, organization, yard care, and seasonal upkeep, Eco-Home provides dependable service with a polished, professional finish.",
    badge: "Trusted support for homes, rentals, and property transitions",
    primaryAction: "Explore services",
    secondaryAction: "Request a quote",
};

export const services: ServiceItem[] = [
    {
        title: "Moving & Transition Support",
        description:
            "We help make your move smooth from start to finish—without the stress. Whether you're relocating or preparing a space, we handle the heavy lifting and setup so you can focus on settling in.",
        offerings: [
            "Expert in large, medium, and small moves, both locally and long-distance",
            "Skilled moving labor for loading and unloading",
            "Reliable individual item transport",
            "Packing, unpacking, and organization services",
        ],
        priceEstimate: "From $120/hr",
        image: "/img/Moving.jpg",
        alt: "Moving labor and transition support",
    },
    {
        title: "Junk Removal & Property Clearing",
        description:
            "Premium junk removal and property-clearing services—removal, loading, transport, and responsible disposal handled end-to-end.",
        offerings: [
            "Single item removal from $149",
            "Essential clear-out from $229",
            "Half-truck clear-out from $549",
            "Add-ons such as mattresses, tires, appliances, and demolition",
        ],
        priceEstimate: "From $149",
        image: "/img/Junk.jpeg",
        alt: "Junk removal and property clearing",
    },
    {
        title: "Item Delivery & Commercial Logistics",
        description:
            "Pickup, transportation, and delivery for residential and commercial items throughout Ottawa and surrounding areas.",
        offerings: [
            "Single item delivery from $149",
            "Small commercial delivery from $249",
            "Large commercial delivery from $599",
            "White-glove, room-of-choice, and after-hours delivery options",
        ],
        priceEstimate: "From $149",
        image: "/img/Delivery.jpg",
        alt: "Item delivery and commercial logistics",
    },
    {
        title: "Premium Painting Services",
        description:
            "Professional preparation, premium materials, and flawless finishes for residential and commercial properties.",
        offerings: [
            "Single room from $650",
            "Multi-room package from $2,750",
            "Full interior from $6,500",
            "Exterior, trim, cabinetry, and feature-wall upgrades available",
        ],
        priceEstimate: "From $650",
        image: "/img/Paint.jpeg",
        alt: "Premium painting services",
    },
    {
        title: "Repairs & Handyman Work",
        description:
            "Reliable help for the fixes and upgrades that keep your home functioning properly.",
        offerings: [
            "General home repairs",
            "Installations (fixtures, shelves, hardware)",
            "Furniture assembly (IKEA and more) and TV mounting",
        ],
        priceEstimate: "$90–$160/hr",
        image: "/img/Repairs.jpg",
        alt: "Repairs and handyman work",
    },
    {
        title: "Home Improvement Projects",
        description:
            "Enhance your    living space with practical upgrades that add comfort and value.",
        offerings: [
            "Painting and touch-ups",
            "Minor renovations and upgrades",
            "Interior enhancements",
            "Execution of small projects",
        ],
        priceEstimate: "$120–$220/hr",
        image: "/img/Driveway.jpeg",
        alt: "Home improvement projects",
        imagePosition: "center 40%",
    },
    {
        title: "Outdoor & Yard Services",
        description:
            "Keep your property looking its best with efficient, seasonal outdoor work.",
        offerings: [
            "Yard clean-up and maintenance",
            "Landscaping solutions including sod installation, interlocking, and garden design",
            "Outdoor setup and takedown",
        ],
        priceEstimate: "$110–$190 per hour",
        image: "/img/LawnCare.jpeg",
        alt: "Outdoor and yard maintenance",
        imagePosition: "center 48%",
    },
    {
        title: "Seasonal Maintenance",
        description:
            "Stay ahead of the weather with services designed to protect your home year-round.",
        offerings: [
            "Snow removal and winter prep",
            "Seasonal property preparation and readiness",
            "Routine weeding, trimming, fertilizing, and soil care",
            "Pressure washing of driveways, decks, siding, patios, etc",
        ],
        priceEstimate: "$120–$200 per hour",
        image: "/img/Snow.jpeg",
        alt: "Seasonal maintenance and snow removal",
        imagePosition: "center center",
    },
    {
        title: "Property Turnover & Prep",
        description:
            "Perfect for landlords, sellers, or renters—get spaces ready quickly and professionally.",
        offerings: [
            "Rental turnover clean-up",
            "Staging support prep",
            "Repairs and touch-ups before move-in, between occupants, or pre-sale",
        ],
        priceEstimate: "From $150 per visit",
        image: "/img/Lawn.jpeg",
        alt: "Property turnover and prep",
        imagePosition: "center 42%",
    },
    {
        title: "Home Organization & Setup",
        description:
            "Create functional, organized spaces that make everyday living easier.",
        offerings: [
            "Room setup and organization",
            "Building or organizing closets, shelves, cabinets, or other storage solutions",
            "Decluttering support",
        ],
        priceEstimate: "$100–$170 per hour",
        image: "/img/Ciment.jpeg",
        alt: "Home organization and setup",
        imagePosition: "center 38%",
    },
    {
        title: "On-Demand Labour Support",
        description:
            "Extra hands when you need them—no project too small.",
        offerings: [
            "General labour help",
            "Event or project assistance",
            "Flexible hourly support",
        ],
        priceEstimate: "$95–$150 per hour",
        image: "/img/Ciment.jpeg",
        alt: "On-demand labour support",
        imagePosition: "center 42%",
    },
    {
        title: "Custom & Special Projects",
        description:
            "Have something unique in mind? We tailor our services to fit your specific needs.",
        offerings: [
            "One-off requests",
            "Multi-service projects",
            "Ongoing support arrangements",
        ],
        priceEstimate: "Estimates from $120 per hour",
        image: "/img/Interlock.jpeg",
        alt: "Custom and special projects",
        imagePosition: "center 42%",
    },
];

export const stats: StatItem[] = [
    { value: "10+", label: "Years of trusted local service" },
    { value: "300+", label: "Completed landscape and driveway projects" },
    { value: "Fast", label: "Responsive seasonal service" },
];

export const whyChoose: WhyChooseItem[] = [
    {
        title: "Reliable craftsmanship",
        description:
            "We use quality materials and professional techniques to ensure long-lasting results.",
    },
    {
        title: "Seasonal expertise",
        description:
            "From spring planting to winter snow clearing, we keep your property in top condition year-round.",
    },
    {
        title: "Clear communication",
        description:
            "We provide transparent estimates and keep you informed every step of the way.",
    },
];

export const contactSection: ContactSection = {
    heading: "Ready to improve your outdoor space?",
    description:
        "Contact Eco-Home for a free estimate on interlock, lawn care, landscape work, or dependable snow removal.",
    phone: "YOUR BUSINESS PHONE",
    email: "your-business-email@example.com",
    requestOptions: services.map((service) => service.title),
    imageA: "/img/Lawn.jpeg",
    imageB: "/img/Driveway.jpeg",
};
