"use client";

export default function CaveatsPage() {
  return (
    <>
      <h1>Caveats</h1>
      <h2>{`1. "Stale" searchParams in other slots if searchParams are updated in a different slot`}</h2>
      <h2>{`2. Cannot use kebab-case for slot name`}</h2>
    </>
  );
}
