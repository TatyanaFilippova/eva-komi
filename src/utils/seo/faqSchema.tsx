import { Blocks } from "@/shared/components/BlockConstructor/BlockConstructor";
import { FaqItem } from "@/shared/components/Faq/Faq";

export function FaqSchema({ items }: { items: FaqItem[] }) {
  if (items.length === 0) {
    return null;
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function collectFaqFromBlocks(blocks: Blocks): FaqItem[] {
  return blocks.flatMap((block) =>
    block.__typename === "ComponentEvaKomiFaq" ? block.list : [],
  );
}
