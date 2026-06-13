import { CONTACTS } from "@/utils/seo/metadata";

export const RUNNING_LINE_TEXT = "Все услуги службы эвакуации";

export const CALL_TRUCK = {
  title: "Как вызвать эвакуатор",
  description:
    "Также вы можете задать свой вопрос, получить консультацию, узнать текущие цены и акции.",
} as const;

export const listCardCall = [
  {
    titleCard: "Способ 1",
    descriptionCard: "Позвоните по номеру",
    method: CONTACTS.phoneDisplay,
    processButton: "Позвонить",
    id: 1,
    href: CONTACTS.phoneHref,
  },
  {
    titleCard: "Способ 2",
    descriptionCard: "Напишите в нашу группу ВК",
    method: "vk.com/evakyatorkomi",
    processButton: "Перейти",
    id: 2,
    href: CONTACTS.vk,
  },
  {
    titleCard: "Способ 3",
    descriptionCard: "Напишите в WhatsApp",
    method: CONTACTS.whatsappDisplay,
    processButton: "Перейти",
    id: 3,
    href: CONTACTS.whatsappHref,
  },
] as const;

export { CONTACTS };
