import type { Metadata } from "next";

export const SITE_URL = "https://evakuator-service11.ru";
export const SITE_NAME = "Эва Коми";

export const CONTACTS = {
  phoneDisplay: "+7 (912) 864-01-11",
  phoneTel: "+79128640111",
  phoneHref: "tel:+79128640111",
  additionalDisplay: "+7 (963) 022-16-79",
  additionalTel: "+79630221679",
  vk: "https://vk.com/evakyatorkomi",
  address: "г. Сыктывкар, Республика Коми",
} as const;

export function buildPageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = `${SITE_URL}${path}`;

  return {
    title: {
      absolute: title,
    },
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: "ru_RU",
      type: "website",
    },
  };
}
