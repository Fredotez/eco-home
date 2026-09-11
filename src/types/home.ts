export interface HeroSection {
    headline: string;
    description: string;
    badge: string;
    primaryAction: string;
    secondaryAction: string;
}

export interface ServiceItem {
    title: string;
    description: string;
    offerings: string[];
    priceEstimate: string;
    image: string;
    alt: string;
    imagePosition?: string;
}

export interface StatItem {
    value: string;
    label: string;
}

export interface WhyChooseItem {
    title: string;
    description: string;
}

export interface ContactSection {
    heading: string;
    description: string;
    phone: string;
    email: string;
    requestOptions: string[];
    imageA: string;
    imageB: string;
}
