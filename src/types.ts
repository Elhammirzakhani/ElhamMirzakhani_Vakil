export type ServiceIcon = 'civil' | 'criminal' | 'family' | 'registration';
export type ValueIcon = 'confidentiality' | 'transparency' | 'documents' | 'followup';

export interface LegalService {
  id: string;
  title: string;
  icon: ServiceIcon;
  description: string;
  details: string[];
  scope: string;
}

export interface BusinessConfig {
  attorney: {
    fullName: string;
    englishName: string;
    title: string;
    barAssociation: string;
    licenseNumber: string;
    avatarUrl: string;
    licenseImageUrl: string;
    biography: {
      headline: string;
      lead: string;
      fullText: string;
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
}
