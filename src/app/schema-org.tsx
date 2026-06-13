import { CONTACTS, SITE_NAME, SITE_URL } from "@/utils/seo/metadata";

const businessSchema = {
  "@type": "AutomotiveBusiness" as const,
  name: SITE_NAME,
  telephone: CONTACTS.phoneDisplay,
  address: {
    "@type": "PostalAddress" as const,
    addressLocality: "Сыктывкар",
    addressRegion: "Республика Коми",
    addressCountry: "RU",
  },
  areaServed: {
    "@type": "Place" as const,
    name: "Сыктывкар, Республика Коми",
  },
};

export function SchemaOrg() {
  const schema = {
    "@context": "https://schema.org",
    ...businessSchema,
    description:
      "Круглосуточные услуги эвакуатора по Сыктывкару и всей Республике Коми. Быстрая подача, аккуратная эвакуация и фиксированные цены.",
    url: `${SITE_URL}/`,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    priceRange: "₽₽",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: CONTACTS.phoneDisplay,
      contactType: "customer service",
      availableLanguage: ["Russian"],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export { businessSchema };
