import { Suspense } from "react";
import { SlowComponent, FastComponent } from "@/components/slot-components";

type PageProps = {
  params: Record<string, string>;
  searchParams: Record<string, string>;
};

async function WithSuspense({ ...props }: PageProps) {
  return (
    <div className="flex flex-row gap-4">
      <Suspense fallback={<p>Loading fast component...</p>}>
        <FastComponent {...props} />
      </Suspense>
      <Suspense fallback={<p>Loading slow component...</p>}>
        <SlowComponent {...props} />
      </Suspense>
    </div>
  );
}

export default WithSuspense;
