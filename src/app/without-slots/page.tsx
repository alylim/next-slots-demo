import { FastComponent, SlowComponent } from "@/components/slot-components";

type PageProps = {
  params: Record<string, string>;
  searchParams: Record<string, string>;
};

async function WithoutSlot({ ...props }: PageProps) {
  return (
    <div className="flex flex-row gap-4">
      <FastComponent {...props} />
      <SlowComponent {...props} />
    </div>
  );
}

export default WithoutSlot;
