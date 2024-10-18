import { FastComponent } from "@/components/slot-components";
import { failedFetch } from "@/server/fetch";

type ErrorSlotPageProps = {
  params: Record<string, string>;
  searchParams: Record<string, string>;
};

async function ErrorSlot({ ...props }: ErrorSlotPageProps) {
  const response = await failedFetch();
  return <FastComponent res={response} {...props} />;
}

export default ErrorSlot;
