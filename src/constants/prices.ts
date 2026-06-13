import { FaqItem } from "@/shared/components/Faq/Faq";
import { PRICE_DISCLAIMER, PRICES } from "@/constants/pricing";

export const pricesPageData = {
  metaTitle: "Цены на эвакуатор в Сыктывкаре | Стоимость эвакуации авто | Эва Коми",
  metaDescription:
    "Актуальные цены на эвакуатор в Сыктывкаре и Республике Коми. Эвакуация легковых авто от 2 000 ₽, внедорожников от 3 500 ₽. Окончательная стоимость зависит от маршрута. Звоните 24/7: 8 (912) 864-01-11",
  title: "Цены на услуги эвакуатора в Сыктывкаре",
  subtitle: "Прозрачное ценообразование",
  description:
    "Все цены указаны «от» — итоговая стоимость зависит от типа транспорта, расстояния и сложности погрузки. Точную цену называем при оформлении заявки.",
  items: [
    {
      service: "Эвакуация легкового автомобиля",
      price: PRICES.legkovoy,
      note: PRICES.legkovoyNote,
      link: "/services/evakuacziya-legkovyh-avtomobilej/",
    },
    {
      service: "Эвакуация внедорожника или микроавтобуса",
      price: PRICES.vnedorozhnik,
      note: PRICES.vnedorozhnikNote,
      link: "/services/evakuator-dlya-vnedorozhnikov-i-mikroavtobusov/",
    },
    {
      service: "Эвакуация мототехники",
      price: PRICES.moto,
      note: "Мотоциклы, квадроциклы, скутеры",
      link: "/services/evakuacziya-mototehniki/",
    },
    {
      service: "Эвакуация грузового транспорта",
      price: PRICES.gruzovoy,
      note: "ГАЗели, фургоны, коммерческий транспорт",
      link: "/services/evakuator-dlya-gruzovyh-avtomobilej/",
    },
    {
      service: "Помощь при ДТП",
      price: PRICES.dtp,
      note: "Срочный выезд, аккуратная погрузка",
      link: "/services/pomoshh-pri-dtp/",
    },
    {
      service: "Междугородняя перевозка",
      price: PRICES.mezhgorod,
      note: "По Республике Коми и России",
      link: "/services/dalnie-perevozki-avtomobilej-iz-syktyvkara/",
    },
  ],
  factors: [
    "Расстояние от места погрузки до точки назначения",
    "Тип и масса транспортного средства",
    "Сложность погрузки (авто не на ходу, после ДТП, в снегу)",
    "Время суток и дорожные условия",
    "Необходимость дополнительного оборудования (лебёдка, манипулятор)",
  ],
  disclaimer: PRICE_DISCLAIMER,
  faq: [
    {
      question: "Почему цена «от»?",
      answer:
        "Базовый тариф зависит от типа авто. Итоговая стоимость уточняется с учётом расстояния и сложности — мы называем её до выезда эвакуатора.",
    },
    {
      question: "Есть ли скрытые доплаты?",
      answer:
        "Нет. Все условия согласовываем заранее. Если ситуация на месте отличается от описанной — обсудим до погрузки.",
    },
    {
      question: "Как узнать точную цену?",
      answer:
        "Позвоните по номеру +7 (912) 864-01-11 или напишите в группу ВК. Опишите ситуацию — назовём ориентировочную стоимость.",
    },
  ] satisfies FaqItem[],
};
