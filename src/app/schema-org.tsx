// app/schema-org.tsx
export function SchemaOrg() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AutomotiveBusiness", // валидный тип для эвакуатора
    name: "Эвакуатор 24/7 — Сыктывкар и Республика Коми",
    description:
      "Круглосуточные услуги эвакуатора по Сыктывкару и всей Республике Коми. Быстрая подача, аккуратная эвакуация и низкие цены.",
    url: "https://evakuator-service11.ru/",
    telephone: "+7 (912) 864-01-11",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Сыктывкар",
      addressRegion: "Республика Коми",
      addressCountry: "RU",
    },
    areaServed: {
      "@type": "Place",
      name: "Сыктывкар, Республика Коми",
    },
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
      telephone: "+7 (912) 864-01-11",
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
