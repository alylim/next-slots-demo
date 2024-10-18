"use client";

export default function Error({ error }: { error: Error & { digest?: string } }) {
  return (
    <div>
      <h2>Im the error slot error page!</h2>
      <p>{error.toString()}</p>
    </div>
  );
}
