import { Blocks } from "@/shared/components/BlockConstructor/BlockConstructor";

export interface HomeData {
  metaTitle: string;
  metaDescription: string;
  title: string;
  text: string;
  blocks: Blocks;
}

export interface ServicesPageData {
  metaTitle: string;
  metaDescription: string;
  title: string;
  text: string;
  subtitle: string;
  blocks: Blocks;
}

export interface ServiceDetailData {
  slug: string;
  title: string;
  subTitle: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  interactiveText?: string;
  banner: { url: string };
  blocks: Blocks;
}
