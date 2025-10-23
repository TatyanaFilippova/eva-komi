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
  provider: {
    "@type": "TowingService",
    name: "Эвакуатор 24/7 — Сыктывкар и Республика Коми",
    telephone: "+7 (912) 864-01-11",
    areaServed: {
      "@type": "Place",
      name: "Сыктывкар, Республика Коми",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Сыктывкар",
      addressRegion: "Республика Коми",
      addressCountry: "RU",
    },
  },
  areaServed: {
    "@type": "Place",
    name: "Сыктывкар, Республика Коми",
  },
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

export function SchemaOrg() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
