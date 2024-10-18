import { mockFetch } from "@/server/fetch";
import { SlotDisplay } from "./slot-display";

type PageProps = {
  params: Record<string, string>;
  searchParams: Record<string, string>;
};

async function FastComponent({ params, searchParams, res }: PageProps & { res?: string }) {
  const response = res ? res : await mockFetch(1000);

  return (
    <SlotDisplay color="green">
      <div>This is a fast fetch</div>
      <div>{`params are ${JSON.stringify(params)}`}</div>
      <div>{`searchParams are ${JSON.stringify(searchParams)}`}</div>
      <div>{response}</div>
    </SlotDisplay>
  );
}

export { FastComponent };
