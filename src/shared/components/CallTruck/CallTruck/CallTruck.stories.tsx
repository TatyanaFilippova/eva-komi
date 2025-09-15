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
  },
  {
    titleCard: "Способ 2",
    descriptionCard: "Напишите в нашу группу ВК",
    method: "vk.com/evakyatorkomi",
    processButton: "Перейти",
    id: 2,
  },
  {
    titleCard: "Способ 3",
    descriptionCard: "Напишите в Telegram/Whatsapp",
    method: "8 912 864 01 11",
    processButton: "Показать QR код",
    id: 3,
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
