export default function Layout({
  children,
  slow_slot,
  fast_slot,
  error_slot,
}: {
  children: React.ReactNode;
  slow_slot: React.ReactNode;
  fast_slot: React.ReactNode;
  error_slot: React.ReactNode;
}) {
  return (
    <>
      <div className="flex flex-row gap-4">
        {fast_slot}
        {slow_slot}
        {error_slot}
      </div>
      <div>{children}</div>
    </>
  );
}
