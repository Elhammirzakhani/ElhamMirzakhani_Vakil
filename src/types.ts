export type ServiceIcon = 'civil' | 'criminal' | 'family';
export type ValueIcon = 'confidentiality' | 'transparency' | 'documents' | 'followup';

export interface ServiceDetailGroup {
  title?: string;
  items: string[];
}

export interface LegalService {
  id: string;
  title: string;
  icon: ServiceIcon;
  summary: string;
  description: string;
  detailGroups: ServiceDetailGroup[];
  scope: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface BusinessConfig {
  siteUrl: string;
  attorney: {
    fullName: string;
    englishName: string;
    title: string;
    barAssociation: string;
    licenseNumber: string;
    portrait: {
      srcSet: string;
      fallbackSrc: string;
      width: number;
      height: number;
    };
    officeDetailUrl: string;
    licenseImageUrl: string;
    biography: {
      headline: string;
      lead: string;
      paragraphs: string[];
      coreValues: {
        title: string;
        desc: string;
        icon: ValueIcon;
      }[];
    };
  };
  contact: {
    phoneDisplay: string;
    phoneInternational: string;
    telUri: string;
    whatsappNumber: string;
    whatsappDigits: string;
    whatsappPrefillMessage: string;
    whatsappUrl: string;
    email: string;
    emailUri: string;
    address: string;
    shortAddress: string;
    city: string;
    province: string;
    workingHours: string;
    workingDays: string;
    workingHoursShort: string;
    appointmentNote: string;
    mapsCoordinates: {
      lat: number;
      lng: number;
    };
    mapsUrl: string;
    mapsEmbedUrl: string;
    social: {
      instagramHandle: string;
      instagramUrl: string;
    };
  };
  services: LegalService[];
  faqs: FaqItem[];
}
