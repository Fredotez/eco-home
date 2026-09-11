import type {
    ContactSection,
    HeroSection,
    ServiceItem,
    StatItem,
    WhyChooseItem,
} from "../types/home";

export const hero: HeroSection = {
    headline: "Moving, painting, cleanup, and home support when you need it most.",
    description:
        "Eco Home Services and Maple Movers deliver dependable support for local moves, junk removal, painting, deliveries, repairs, and property prep across Ottawa and surrounding areas.",
    badge: "Trusted local service for homes, rentals, and property transitions",
    primaryAction: "Explore services",
    secondaryAction: "Request a quote",
};

export const services: ServiceItem[] = [
    {
        title: "Moving Labor",
        description:
            "Professional moving crews for local moves, from straightforward labor to full white-glove service.",
        offerings: [
            "2 movers from $120/hr",
            "3 movers from $180/hr",
            "4 movers from $240/hr",
            "White-glove service with packing, setup, and furniture handling",
        ],
        priceEstimate: "From $120/hr",
        image: "/img/DrivewayLay.jpeg",
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
        image: "/img/LawnCare.jpeg",
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
        image: "/img/CF9EC8A3-327F-43BB-BCD8-EC2A37295097_4_5005_c.jpeg",
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
        image: "/img/87EF1625-8AEE-491D-9ABF-50D14D13A19C.jpeg",
        alt: "Premium painting services",
    },
    {
        title: "Repairs & Handyman Work",
        description:
            "General home repairs, installations, furniture assembly, and TV mounting for everyday maintenance and small improvements.",
        offerings: [
            "General repairs and installations",
            "Furniture assembly and TV mounting",
            "Small fix-ups and functional upgrades",
            "Flexible hourly scheduling",
        ],
        priceEstimate: "$90–$160/hr",
        image: "/img/AF7FD3A0-EC63-48BE-985D-D35433398D05.jpeg",
        alt: "Repairs and handyman work",
    },
    {
        title: "Home Improvement Projects",
        description:
            "Painting touch-ups, minor renovations, interior enhancements, and practical upgrades that improve daily living.",
        offerings: [
            "Interior upgrades and touch-ups",
            "Minor renovations and improvements",
            "Custom small project execution",
            "Professional finishing for rental and resale properties",
        ],
        priceEstimate: "$120–$220/hr",
        image: "/img/444D16BB-198C-42C3-B97F-7351B5EAAFD5.jpeg",
        alt: "Home improvement projects",
        imagePosition: "center 40%",
    },
    {
        title: "Outdoor & Yard Services",
        description:
            "Yard clean-up, landscaping, sod, interlocking, garden design, and outdoor setup or takedown for easy curb appeal.",
        offerings: [
            "Hourly rates from $110–$190/hr",
            "Interlock installation from $25/sq ft",
            "Fence and sod installation quotes available",
            "Seasonal outdoor refresh and property prep",
        ],
        priceEstimate: "$110–$190/hr",
        image: "/img/Lawn.jpeg",
        alt: "Outdoor and yard services",
    },
    {
        title: "Seasonal Maintenance",
        description:
            "Snow removal, seasonal prep, weeding, trimming, fertilizing, and pressure washing to keep spaces protected all year.",
        offerings: [
            "Snow removal and winter prep",
            "Routine seasonal maintenance",
            "Pressure washing and outdoor detail work",
            "Custom scheduling for residential and property upkeep",
        ],
        priceEstimate: "$120–$200/hr",
        image: "/img/Snow.jpeg",
        alt: "Seasonal maintenance services",
    },
    {
        title: "Property Turnover & Prep",
        description:
            "Rental turnover clean-up, staging prep, and repairs before move-in, between occupants, or before sale.",
        offerings: [
            "Turnover visits from $150",
            "Cleaning and touch-up coordination",
            "Pre-move-in and pre-sale property prep",
            "Fast turnaround for landlords and property managers",
        ],
        priceEstimate: "From $150/visit",
        image: "/img/Lawn.jpeg",
        alt: "Property turnover and prep",
        imagePosition: "center 42%",
    },
    {
        title: "Cleaning",
        description:
            "Home and property cleaning services tailored to your space, schedule, and level of detail needed.",
        offerings: [
            "Residential cleaning support",
            "Property and turnover clean-up",
            "Custom quote based on scope and size",
        ],
        priceEstimate: "Custom Quote",
        image: "/img/Ciment.jpeg",
        alt: "Cleaning service",
    },
    {
        title: "Helping Hand",
        description:
            "General on-demand assistance for projects, move-in support, or extra labour when you need a reliable helping hand.",
        offerings: [
            "Flexible labour support",
            "General assistance for projects and events",
            "Custom quote for one-off jobs",
        ],
        priceEstimate: "Custom Quote",
        image: "/img/Driveway.jpeg",
        alt: "Helping hand support",
    },
];

export const stats: StatItem[] = [
    { value: "10+", label: "Years of local service" },
    { value: "Ottawa", label: "Serving homes and properties across the region" },
    { value: "Fast", label: "Responsive support for moves and seasonal work" },
];

export const whyChoose: WhyChooseItem[] = [
    {
        title: "Reliable service",
        description:
            "From moving day to seasonal maintenance, we show up prepared and communicate clearly from start to finish.",
    },
    {
        title: "Professional finish",
        description:
            "We focus on clean execution, careful handling, and practical solutions that make the job feel easy.",
    },
    {
        title: "Flexible support",
        description:
            "Whether you need a one-time project or ongoing property care, our services are tailored to your timeline and budget.",
    },
];

export const contactSection: ContactSection = {
    heading: "Ready to plan your next move or home project?",
    description:
        "Contact Eco-Home for a free estimate on moving labor, junk removal, painting, repairs, and ongoing property support.",
    phone: "YOUR BUSINESS PHONE",
    email: "your-business-email@example.com",
    requestOptions: services.map((service) => service.title),
    imageA: "/img/Lawn.jpeg",
    imageB: "/img/Driveway.jpeg",
};
