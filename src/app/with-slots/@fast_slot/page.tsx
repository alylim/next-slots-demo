import { FastComponent } from "@/components/slot-components";
import { mockFetch } from "@/server/fetch";
import Link from "next/link";

type FastSlotPageProps = {
  params: Record<string, string>;
  searchParams: Record<string, string>;
};

async function FastSlot({ searchParams, ...props }: FastSlotPageProps) {
  const response = await mockFetch(1000);
  return (
    <div>
      <FastComponent res={response} searchParams={searchParams} {...props} />
      <Link
        className="bg-gray-100 hover:bg-gray-200 py-2 px-4 rounded"
        href={"/with-slots/nested-route"}
      >
        To nested route
      </Link>
    </div>
  );
}

export default FastSlot;
