import { mockFetch } from "@/server/fetch";
import { SlotDisplay } from "./slot-display";

type PageProps = {
  params: Record<string, string>;
  searchParams: Record<string, string>;
};

async function SlowComponent({ params, searchParams }: PageProps) {
  const response = await mockFetch(5000);

  return (
    <SlotDisplay color="red">
      <div>This is a slow fetch</div>
      <div>{`params are ${JSON.stringify(params)}`}</div>
      <div>{`searchParams are ${JSON.stringify(searchParams)}`}</div>
      <div>{response}</div>
    </SlotDisplay>
  );
}

export { SlowComponent };
