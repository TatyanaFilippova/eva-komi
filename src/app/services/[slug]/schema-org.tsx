export function SchemaOrg(props: {
  title: string;
  subtitle: string;
  url: string;
}) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: props.title,
          serviceType: props.subtitle,
          description: props.subtitle,
          areaServed: {
            "@type": "Place", // валидный тип
            name: "Сыктывкар",
          },
          provider: {
            "@type": "LocalBusiness",
            name: "Эвакуатор Сыктывкар",
            telephone: "+7(912)864-01-11",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Сыктывкар",
              addressRegion: "Республика Коми",
              addressCountry: "RU",
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
          },
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+7(912)864-01-11",
            contactType: "customer service",
            availableLanguage: ["Russian"],
          },
          url: props.url,
          keywords: [
            "эвакуатор легковых",
            "эвакуатор Сыктывкар",
            "эвакуация авто",
            "помощь на дороге",
            props.title,
            props.subtitle,
          ],
        }),
      }}
    />
  );
}
