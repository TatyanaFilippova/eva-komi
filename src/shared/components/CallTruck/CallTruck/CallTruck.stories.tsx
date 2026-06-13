import CallTruck from "@/shared/components/CallTruck/CallTruck/CallTruck";
import { CALL_TRUCK, listCardCall } from "@/constants/site";

export default {
  title: "callTruck",
};

export { listCardCall };

export const CallTruckStories = () => {
  return (
    <>
      <CallTruck
        listCardCall={[...listCardCall]}
        title={CALL_TRUCK.title}
        description={CALL_TRUCK.description}
      />
    </>
  );
};
