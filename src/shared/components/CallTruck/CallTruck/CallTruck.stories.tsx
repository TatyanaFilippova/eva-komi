import CallTruck from "@/shared/components/CallTruck/CallTruck/CallTruck";

export default {
  title: "callTruck",
};

export const listCardCall = [
  {
    titleCard: "Способ 1",
    descriptionCard: "Позвоните по номеру",
    method: "8 912 864 01 11",
    processButton: "Позвонить",
    id: 1,
    href: "tel:8 912 864 01 11",
  },
  {
    titleCard: "Способ 2",
    descriptionCard: "Напишите в нашу группу ВК",
    method: "vk.com/evakyatorkomi",
    processButton: "Перейти",
    id: 2,
    href: "https://vk.com/evakyatorkomi",
  },
  {
    titleCard: "Способ 3",
    descriptionCard: "Напишите в Whatsapp",
    method: "8 912 864 01 11",
    processButton: "Перейти",
    id: 3,
    href: "https://wa.clck.bar/79630221679",
  },
];

export const CallTruckStories = () => {
  return (
    <>
      <CallTruck
        listCardCall={listCardCall}
        title="Как вызвать эвакуатор"
        description="Также вы можете задать свой вопрос, получить консультацию, узнать текущие цены и акции."
      />
    </>
  );
};
