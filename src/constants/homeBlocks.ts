import { Blocks } from "@/shared/components/BlockConstructor/BlockConstructor";
import { PRICE_DISCLAIMER, PRICES, RESPONSE_TIME } from "@/constants/pricing";

export const homeBlocks = [
  {
    __typename: "ComponentEvaKomiBigCenterText",
    title: "Эвакуатор в Сыктывкаре и Республике Коми — услуги от Эва Коми",
  },
  {
    __typename: "ComponentEvaKomiText",
    title: "Стоимость эвакуации в Сыктывкаре",
    content: `Эвакуация легкового автомобиля — ${PRICES.legkovoy} (${PRICES.legkovoyNote}). Внедорожники и микроавтобусы — ${PRICES.vnedorozhnik}. Мототехника — ${PRICES.moto}. Грузовой и коммерческий транспорт — ${PRICES.gruzovoy}.\n\n${RESPONSE_TIME}\n\n${PRICE_DISCLAIMER} Подробный прайс — на странице «Цены».`,
  },
  {
    __typename: "ComponentEvaKomiServiceCards",
    title: "Какие проблемы мы решаем",
    description:
      "Неважно, попали ли вы в ДТП, сломались на трассе или хотите перегнать автомobile — обеспечим безопасную транспортировку с гарантией сохранности.",
    variant: "services",
    list: [
      {
        title: "Эвакуация легковых автомобилей",
        description:
          "Седаны, хетчбеки, универсалы, минивены и кроссоверы до 2,5 тонн. Бережная погрузка на платформу.",
        link: "/services/evakuacziya-legkovyh-avtomobilej/",
        size: "m",
        image: { url: "/images/image_36_17852407c3.png" },
      },
      {
        title: "Эвакуация мототехники",
        description:
          "Мотоциклы, квадроциклы, скутеры. Специальные крепления и фиксаторы для сохранности техники.",
        link: "/services/evakuacziya-mototehniki/",
        size: "s",
        image: { url: "/images/image_37_c715c42e07.png" },
      },
      {
        title: "Перевозка грузового транспорта",
        description:
          "ГАЗели, фургоны, коммерческий транспорт. Помощь предпринимателям и юридическим лицам.",
        link: "/services/evakuator-dlya-gruzovyh-avtomobilej/",
        size: "s",
        image: { url: "/images/image_38_61fb0d6d81.png" },
      },
      {
        title: "Эвакуатор для внедорожников и микроавтобусов",
        description:
          "Низкорамные платформы для внедорожников, джипов, минивэнов и микроавтобусов.",
        link: "/services/evakuator-dlya-vnedorozhnikov-i-mikroavtobusov/",
        size: "m",
        image: {
          url: "/images/artage_io_thumb_377bef05a9291628c2e5042420cb35e2_2968f8006f.png",
        },
      },
      {
        title: "Междугородняя перевозка автомобилей",
        description:
          "Доставка по Коми (Ухта, Воркута, Печора) и в другие регионы: Киров, Пермь, Архангельск.",
        link: "/services/dalnie-perevozki-avtomobilej-iz-syktyvkara/",
        size: "m",
        image: { url: "/images/2334235_a84ad94b22.png" },
      },
      {
        title: "Помощь при ДТП",
        description:
          "Срочный выезд на место аварии. Погрузка повреждённого авто и доставка на СТО, стоянку или экспертизу.",
        link: "/services/pomoshh-pri-dtp/",
        size: "s",
        image: { url: "/images/354_b2413994e0.png" },
      },
    ],
  },
  {
    __typename: "ComponentEvaKomiServiceCards",
    title: "Почему выбирают наш эвакуатор в Коми?",
    description:
      "Команда профессиональных водителей готова прийти на помощь 24 часа в сутки, 7 дней в неделю",
    variant: "advantages",
    list: [
      {
        title: "Оперативный выезд",
        description: RESPONSE_TIME,
        image: { url: "/images/1_572e0e87cd.png" },
      },
      {
        title: "Честные цены «от»",
        description:
          "Называем ориентировочную стоимость до выезда. Итоговая цена согласуется с учётом всех факторов.",
        image: { url: "/images/2_52d97fbf54.png" },
      },
      {
        title: "Все виды эвакуации",
        description:
          "Легковые, грузовые, внедорожники, мото, междугород. Одна служба — любая задача.",
        image: { url: "/images/3_016e6076d8.png" },
      },
    ],
  },
  {
    __typename: "ComponentEvaKomiFaq",
    title: "Частые вопросы об эвакуаторе в Сыктывкаре",
    list: [
      {
        question: "Сколько стоит вызвать эвакуатор в Сыктывкаре?",
        answer: `Эвакуация легкового авто — ${PRICES.legkovoy} по городу. Внедорожник — ${PRICES.vnedorozhnik}. Точная цена зависит от расстояния и сложности погрузки. ${PRICE_DISCLAIMER}`,
      },
      {
        question: "Как быстро приедет эвакуатор?",
        answer: RESPONSE_TIME,
      },
      {
        question: "Работаете ли вы ночью и в выходные?",
        answer:
          "Да, служба «Эва Коми» работает круглосуточно — 24/7, включая праздники и непогоду.",
      },
      {
        question: "Какие способы оплаты принимаете?",
        answer:
          "Наличные, банковская карта и онлайн-перевод. Способ оплаты согласуем при оформлении заявки.",
      },
      {
        question: "Куда можете доставить автомобиль?",
        answer:
          "На СТО, стоянку, в гараж, к дому или в другой город. Маршрут согласовываем заранее.",
      },
    ],
  },
] satisfies Blocks;
