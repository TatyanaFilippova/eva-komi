import { Blocks } from "@/shared/components/BlockConstructor/BlockConstructor";

export const dalnie_perevozki_avtomobilej_iz_syktyvkara_blocks = [
  {
    __typename: "ComponentEvaKomiBigCenterText",
    title: "Мы специализируемся на безопасной транспортировке автомобилей по России. \n\nНаши эвакуаторы оборудованы надежными системами крепления, а водители имеют большой опыт междугородних перевозок. \n\nМы гарантируем сохранность вашего автомобиля и соблюдение сроков доставки.",
  },
  {
    __typename: "ComponentEvaKomiText",
    title: "Список доступных городов",
    content: "Север: Архангельск, Северодвинск, Котлас\n\nЦентр: Москва, Санкт-Петербург, Нижний Новгород\n\nУрал: Пермь, Екатеринбург, Уфа\n\nПоволжье: Киров, Казань, Самара\n\nДругие города: по индивидуальному запросу",
  },
  {
    __typename: "ComponentEvaKomiServiceCards",
    title: "Почему выбирают нас для дальних перевозок?",
    variant: "advantages",
    list: [
      {
        title: "Опытные водители",
        description: "Стаж водителей от 5 лет",
        image: { url: "/images/1_572e0e87cd.png" },
      },
      {
        title: "Фиксированная цена",
        description: "Без скрытых доплат и повышений",
        image: { url: "/images/3_016e6076d8.png" },
      },
      {
        title: "Готовы идти навстречу",
        description: "Учтем ваши требования, найдем решение для любой проблемы",
        image: { url: "/images/2_52d97fbf54.png" },
      },
    ],
  },
] satisfies Blocks;