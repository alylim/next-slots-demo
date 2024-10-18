"use client";

export default function NestedRoute() {
  const handleRefresh = () => {
    window.location.reload(); // Forces a full page reload
  };

  return (
    <div>
      <p>{`I'm the nested route`}</p>
      <button
        onClick={handleRefresh}
        className="bg-blue-500 hover:bg-blue-400 py-2 px-4 rounded text-white"
      >
        Refresh Page
      </button>
    </div>
  );
}
