export const dynamic = "force-dynamic";

import { SlotDisplay } from "@/components/slot-components/slot-display";
import { mockFetch } from "@/server/fetch";

type SlowSlotPageProps = {
  params: Record<string, string>;
  searchParams: Record<string, string>;
};

async function SlowSlot({ params, searchParams }: SlowSlotPageProps) {
  const response = await mockFetch(5000);

  return (
    <SlotDisplay>
      <div>This is a slow fetch</div>
      <div>{`params are ${JSON.stringify(params)}`}</div>
      <div>{`searchParams are ${JSON.stringify(searchParams)}`}</div>
      <div>{response}</div>
    </SlotDisplay>
  );
}

export default SlowSlot;
