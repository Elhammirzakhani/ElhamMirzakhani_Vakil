import { businessConfig } from '../config/business';

/**
 * Schema.org JSON-LD built from the same config the page renders,
 * so search engines always see the same facts visitors do.
 */
export function buildStructuredData() {
  const { siteUrl, attorney, contact, services, faqs } = businessConfig;
  const url = `${siteUrl}/`;
  const image = `${siteUrl}${attorney.portrait.fallbackSrc}`;

  const person = {
    '@type': 'Person',
    '@id': `${url}#attorney`,
    name: attorney.fullName,
    alternateName: attorney.englishName,
    gender: 'Female',
    jobTitle: attorney.title,
    image,
    url,
    telephone: '+989131803538',
    sameAs: [contact.social.instagramUrl],
    worksFor: { '@id': `${url}#office` },
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'پروانه وکالت',
      name: `پروانه وکالت پایه یک دادگستری شماره ${attorney.licenseNumber}`,
      recognizedBy: { '@type': 'Organization', name: attorney.barAssociation },
    },
  };

  const office = {
    '@type': ['LegalService', 'Attorney'],
    '@id': `${url}#office`,
    name: `دفتر وکالت ${attorney.fullName}`,
    alternateName: `${attorney.englishName} Law Office`,
    description: `${attorney.fullName}، ${attorney.title} و وکیل خانم در ${contact.city}؛ مشاوره و وکالت در دعاوی حقوقی، کیفری، خانواده و ثبتی.`,
    url,
    image,
    logo: `${siteUrl}/favicon.svg`,
    telephone: '+989131803538',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'چهارراه فصیحی، ساختمان امام حسین، طبقه اول',
      addressLocality: contact.city,
      addressRegion: contact.province,
      addressCountry: 'IR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: contact.mapsCoordinates.lat,
      longitude: contact.mapsCoordinates.lng,
    },
    hasMap: contact.mapsUrl,
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday'],
      opens: '17:00',
      closes: '20:00',
    },
    areaServed: [
      { '@type': 'City', name: contact.city },
      { '@type': 'AdministrativeArea', name: `استان ${contact.province}` },
    ],
    knowsAbout: services.map((service) => service.title),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'خدمات حقوقی',
      itemListElement: services.map((service) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: service.title, description: service.description },
      })),
    },
    founder: { '@id': `${url}#attorney` },
    sameAs: [contact.social.instagramUrl],
  };

  const website = {
    '@type': 'WebSite',
    '@id': `${url}#website`,
    url,
    name: `دفتر وکالت ${attorney.fullName}`,
    inLanguage: 'fa-IR',
    publisher: { '@id': `${url}#office` },
  };

  const faqPage = {
    '@type': 'FAQPage',
    '@id': `${url}#faq`,
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  return {
    '@context': 'https://schema.org',
    '@graph': [website, office, person, faqPage],
  };
}
