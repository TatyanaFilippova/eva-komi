import { businessSchema } from "@/app/schema-org";
import { SITE_URL } from "@/utils/seo/metadata";

export function SchemaOrg() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Услуги эвакуатора в Сыктывкаре и Республике Коми",
    serviceType: [
      "Эвакуация легковых автомобилей",
      "Эвакуация внедорожников",
      "Эвакуация мотоциклов",
      "Эвакуация спецтехники",
    ],
    url: `${SITE_URL}/services/`,
    provider: businessSchema,
    areaServed: businessSchema.areaServed,
    offers: [
      {
        "@type": "Offer",
        price: "2000",
        priceCurrency: "RUB",
        description: "Эвакуация легкового автомобиля по Сыктывкару до 10 км",
        availability: "https://schema.org/InStock",
      },
      {
        "@type": "Offer",
        price: "3500",
        priceCurrency: "RUB",
        description: "Эвакуация внедорожника или микроавтобуса до 20 км",
        availability: "https://schema.org/InStock",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Главная",
        item: `${SITE_URL}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Услуги",
        item: `${SITE_URL}/services/`,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
