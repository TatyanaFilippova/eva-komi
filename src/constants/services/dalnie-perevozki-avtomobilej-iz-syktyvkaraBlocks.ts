import { Blocks } from "@/shared/components/BlockConstructor/BlockConstructor";
import { PRICE_DISCLAIMER, PRICES, RESPONSE_TIME } from "@/constants/pricing";

export const dalnie_perevozki_avtomobilej_iz_syktyvkara_blocks = [
  {
    __typename: "ComponentEvaKomiText",
    title: "Дальние перевозки автомобилей из Сыктывкара",
    content:
      "«Эва Коми» выполняет междугороднюю транспортировку автомобилей по Республике Коми и в другие регионы России. Надёжные системы крепления, опытные водители, соблюдение сроков доставки.\n\nПеревозим легковые авто, внедорожники, коммерческий транспорт — после покупки, при переезде, после поломки на трассе.",
  },
  {
    __typename: "ComponentEvaKomiText",
    title: "Направления перевозок",
    content:
      "По Республике Коми: Ухта, Воркута, Печора, Усинск, Емва и другие города.\n\nСоседние регионы: Киров, Пермь, Архангельск, Санкт-Петербург, Москва, Нижний Новгород, Казань.\n\nДругие направления — по индивидуальному запросу.",
  },
  {
    __typename: "ComponentEvaKomiText",
    title: "Стоимость междугородней перевозки",
    content: `Тариф — ${PRICES.mezhgorod}. Минимальная стоимость и точная цена рассчитываются по маршруту, типу авто и срочности.\n\n${PRICE_DISCLAIMER}`,
  },
  {
    __typename: "ComponentEvaKomiServiceCards",
    title: "Почему выбирают нас для дальних перевозок",
    variant: "advantages",
    list: [
      {
        title: "Опытные водители",
        description: "Стаж междугородних перевозок от 5 лет",
        image: { url: "/images/1_572e0e87cd.png" },
      },
      {
        title: "Цена «от» по маршруту",
        description: "Согласовываем стоимость до начала перевозки",
        image: { url: "/images/3_016e6076d8.png" },
      },
      {
        title: "Сохранность авто",
        description: "Надёжные крепления на всём маршруте",
        image: { url: "/images/2_52d97fbf54.png" },
      },
    ],
  },
  {
    __typename: "ComponentEvaKomiFaq",
    title: "Вопросы о междугородних перевозках",
    list: [
      {
        question: "Сколько стоит перевезти авто из Сыктывкара в Ухту?",
        answer: `Расчёт по тарифу ${PRICES.mezhgorod}. Точную цену назовём после уточнения маршрута. ${PRICE_DISCLAIMER}`,
      },
      {
        question: "Сколько времени занимает доставка?",
        answer:
          "Зависит от расстояния и погодных условий. Сроки согласовываем при оформлении заявки.",
      },
      {
        question: "Можно ли перевезти неисправный автомобиль?",
        answer:
          "Да, погрузим неисправное или купленное «на ходу» авто и доставим в другой город.",
      },
    ],
  },
] satisfies Blocks;
