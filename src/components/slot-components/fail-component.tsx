import { failedFetch } from "@/server/fetch";
import { SlotDisplay } from "./slot-display";

type PageProps = {
  params: Record<string, string>;
  searchParams: Record<string, string>;
};

async function FailComponent({ params, searchParams }: PageProps) {
  const response = await failedFetch();

  return (
    <div className="border border-black">
      <SlotDisplay>
        <div>This is a failed fetch</div>
        <div>{`params are ${JSON.stringify(params)}`}</div>
        <div>{`searchParams are ${JSON.stringify(searchParams)}`}</div>
        <div>{response}</div>
      </SlotDisplay>
    </div>
  );
}

export { FailComponent };
