export interface PortfolioImage {
  id: string;
  src: string;
  category: string;
  title: string;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
  location: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
}

export interface Award {
  id: string;
  title: string;
  organization: string;
  year: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface PricingPackage {
  id: string;
  name: string;
  price: string;
  period?: string;
  description?: string;
  features: string[];
  popular?: boolean;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Booking {
  id: string;
  name: string;
  email: string;
  phone: string;
  eventType: string;
  package: string;
  date: string;
  guestCount?: string;
  location?: string;
  budget: string;
  message: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  createdAt: string;
}
