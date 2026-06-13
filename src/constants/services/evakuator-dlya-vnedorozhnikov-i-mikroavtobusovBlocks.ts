import { Blocks } from "@/shared/components/BlockConstructor/BlockConstructor";
import { PRICE_DISCLAIMER, PRICES, RESPONSE_TIME } from "@/constants/pricing";

export const evakuator_dlya_vnedorozhnikov_i_mikroavtobusov_blocks = [
  {
    __typename: "ComponentEvaKomiText",
    title: "Эвакуатор для внедорожников и микроавтobусов",
    content:
      "Стандартные эвакуаторы не всегда подходят для высоких внедорожников, джипов, кроссоверов и микроавтobусов. У нас — низкорамные платформы и усиленная конструкция, которая позволяет безопасно погрузить крупногабаритный транспорт без риска зацепить бампер или пороги.\n\nПеревозим Toyota Land Cruiser, Pajero, UAZ, Mercedes Sprinter, Ford Transit и аналогичную технику.",
  },
  {
    __typename: "ComponentEvaKomiText",
    title: "Особенности перевозки",
    content:
      "Подбираем эвакуатор под высоту и колёсную базу автомобиля. Используем длинные аппарели для низкой посадки платформы. Надёжно фиксируем колёса и кузов. Доставляем на СТО, в сервис 4×4 или по вашему адресу.\n\nРаботаем по Сыктывкару и всей Республике Коми.",
  },
  {
    __typename: "ComponentEvaKomiText",
    title: "Стоимость",
    content: `Базовый тариф — ${PRICES.vnedorozhnik} (${PRICES.vnedorozhnikNote}). ${RESPONSE_TIME}\n\n${PRICE_DISCLAIMER}`,
  },
  {
    __typename: "ComponentEvaKomiServiceCards",
    title: "Почему нам доверяют",
    variant: "advantages",
    list: [
      {
        title: "Низкорамные платформы",
        description: "Подходят для высоких внедорожников и минивэнов",
        image: { url: "/images/1_572e0e87cd.png" },
      },
      {
        title: "Опытные водители",
        description: "Знают особенности погрузки крупногабаритной техники",
        image: { url: "/images/2_52d97fbf54.png" },
      },
      {
        title: "Честная цена «от»",
        description: "Согласовываем стоимость до выезда",
        image: { url: "/images/3_016e6076d8.png" },
      },
    ],
  },
  {
    __typename: "ComponentEvaKomiFaq",
    title: "Вопросы об эвакуации внедорожников",
    list: [
      {
        question: "Сколько стоит эвакуатор для внедорожника?",
        answer: `${PRICES.vnedorozhnik}. ${PRICE_DISCLAIMER}`,
      },
      {
        question: "Эвакуируете ли микроавтobусы?",
        answer:
          "Да, перевозим Mercedes Sprinter, Ford Transit, ГАЗель Next и другие микроавтobусы.",
      },
      {
        question: "Можно ли перевезти внедорожник с большим клиренсом?",
        answer:
          "Да, используем низкорамные платформы — погрузка без повреждения бамперов и порогов.",
      },
    ],
  },
] satisfies Blocks;
