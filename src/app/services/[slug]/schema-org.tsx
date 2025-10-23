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
          areaServed: {
            "@type": "City",
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
              addressCountry: "Россия",
            },
            openingHours: "Mo-Su 00:00-23:59",
          },
          availableChannel: {
            "@type": "ServiceChannel",
            serviceUrl: props.url,
            availableLanguage: "ru",
            servicePhone: {
              "@type": "ContactPoint",
              telephone: "+7(912)864-01-11",
              contactType: "customer service",
              availableLanguage: "ru",
            },
          },
          description: props.subtitle,
          keywords:
            "эвакуатор легковых, эвакуатор Сыктывкар, эвакуация авто, помощь на дороге " +
            props.title +
            props.subtitle,
        }),
      }}
    />
  );
}
