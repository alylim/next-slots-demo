"use client";

import { useSearchParams } from "next/navigation";

function ParamDisplay() {
  const searchParams = useSearchParams();
  const entries = Array.from(searchParams.entries());

  return (
    <div>
      {entries.map(([key, value]) => (
        <div key={key}>
          {key}: {value}
        </div>
      ))}
    </div>
  );
}

export { ParamDisplay };
