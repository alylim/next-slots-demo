"use client";

import { cn } from "@/lib/utils";
import { useToast } from "../toast";

type SlotDisplayProps = React.HtmlHTMLAttributes<HTMLDivElement> & {};

function SlotDisplay({ className, children }: SlotDisplayProps) {
  const { toast } = useToast();

  function handleClick() {
    toast({ description: "Im the toast." });
  }
  return (
    <div className={cn(className)}>
      {children}
      <button className="bg-red-100 hover:bg-red-200 py-2 px-4 rounded" onClick={handleClick}>
        Make toast
      </button>
    </div>
  );
}

export { SlotDisplay };
