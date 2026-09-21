export interface LegalService {
  id: string;
  title: string;
  icon: string;
  description: string;
  details: string[];
  scope: string;
}

export interface ConsultationRequest {
  fullName: string;
  phone: string;
  serviceCategory: string;
  description: string;
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
        icon: string;
      }[];
    };
  };
  contact: {
    phoneDisplay: string;
    phoneInternational: string;
    telUri: string;
    whatsappNumber: string;
    whatsappPrefillMessage: string;
    whatsappUrl: string;
    email: string;
    emailUri: string;
    address: string;
    city: string;
    province: string;
    workingHours: string;
    workingDays: string;
    appointmentNote: string;
    mapsCoordinates: {
      lat: number;
      lng: number;
    };
    mapsUrl: string;
    social: {
      instagramHandle: string;
      instagramUrl: string;
    };
  };
  services: LegalService[];
}
