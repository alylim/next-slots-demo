export const dynamic = "force-dynamic";

import { Suspense } from "react";
import { SlowComponent, FastComponent, FailComponent } from "@/components/slot-components";

type PageProps = {
  params: Record<string, string>;
  searchParams: Record<string, string>;
};

async function SuspenseError({ ...props }: PageProps) {
  return (
    <div className="flex flex-row gap-4">
      <Suspense fallback={<p>Loading fast component...</p>}>
        <FastComponent {...props} />
      </Suspense>
      <Suspense fallback={<p>Loading slow component...</p>}>
        <SlowComponent {...props} />
      </Suspense>
      <Suspense fallback={<p>Loading error component...</p>}>
        <FailComponent {...props} />
      </Suspense>
    </div>
  );
}

export default SuspenseError;
