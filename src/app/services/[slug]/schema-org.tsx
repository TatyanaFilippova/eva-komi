import { businessSchema } from "@/app/schema-org";
import { SITE_NAME, SITE_URL } from "@/utils/seo/metadata";

export function SchemaOrg(props: {
  title: string;
  description: string;
  url: string;
}) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: props.title,
    description: props.description,
    url: props.url,
    areaServed: businessSchema.areaServed,
    provider: businessSchema,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: businessSchema.telephone,
      contactType: "customer service",
      availableLanguage: ["Russian"],
    },
  };

  const breadcrumbSchema = {
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
      {
        "@type": "ListItem",
        position: 3,
        name: props.title,
        item: props.url,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}

export function StaticPageBreadcrumb(props: {
  pageName: string;
  path: string;
}) {
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
        name: props.pageName,
        item: `${SITE_URL}${props.path}`,
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

export function AboutSchemaOrg() {
  const schema = {
    "@context": "https://schema.org",
    ...businessSchema,
    name: SITE_NAME,
    description:
      "Профессиональная служба эвакуации автомобилей в Сыктывкаре и Республике Коми. Круглосуточный выезд, современный автопарк.",
    url: `${SITE_URL}/about/`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
