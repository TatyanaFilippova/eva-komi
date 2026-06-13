import type { Metadata, Viewport } from "next";
import "./_globals.scss";
import { ReactNode } from "react";
import ProgressBar from "./../shared/components/progressBar/ProgressBar";
import Provider from "@/app/Provider";
import Analytics from "@/app/analytics";
import { SITE_NAME, SITE_URL } from "@/utils/seo/metadata";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — эвакуатор в Сыктывкаре 24/7`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Служба эвакуации «Эва Коми» в Сыктывкаре и Республике Коми. Круглосуточный вызов эвакуатора, фиксированные цены, быстрый выезд.",
  icons: {
    icon: "/favicon.ico",
  },
  verification: {
    yandex: "b2563083b856b8fa",
    google: "mhCrUZ_agoGt5Zst9mllZvMhl4HLaQFuIsKExpPRiZI",
  },
};

export const viewport: Viewport = {
  themeColor: "#fff",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ru">
      <body data-version="1.0.0">
        <ProgressBar>
          <Analytics />
          <Provider>{children}</Provider>
        </ProgressBar>
      </body>
    </html>
  );
}
