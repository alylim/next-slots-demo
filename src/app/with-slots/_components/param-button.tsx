"use client";

import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";

function ParamButton() {
  const searchParams = useSearchParams();
  const count = parseInt(searchParams.get("count") || "0") || 0;
  const path = usePathname();
  const newCount = count + 1;

  return (
    <Link
      href={`${path}?count=${newCount}`}
      className="bg-blue-300 hover:bg-blue-400 py-2 px-4 rounded text-white"
    >
      Update searchParams
    </Link>
  );
}

export { ParamButton };
