/** Small, shared line icons for the eight approved categories. Decorative only. */
export function CategoryIcon({ index }: { index: number }) {
  const paths = [
    "m8 6-6 6 6 6m8-12 6 6-6 6m-3-15-2 18",
    "M8 2h8a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm2 3h4m-3 14h2",
    "M9 4a3 3 0 0 0-5 2 4 4 0 0 0-1 7 4 4 0 0 0 4 6 3 3 0 0 0 5 1V5a3 3 0 0 0-3-1Zm6 0a3 3 0 0 1 5 2 4 4 0 0 1 1 7 4 4 0 0 1-4 6 3 3 0 0 1-5 1M7 9l3 2m-4 4 3-1m8-5-3 2m4 4-3-1",
    "m3 10 15-6v16L3 14v-4Zm4 5 2 6h3l-2-5m11-6v4",
    "M6 19a4 4 0 1 1-1-8 6 6 0 0 1 12-2 5 5 0 1 1 1 10H6Z",
    "m12 2 9 4v6c0 5-6 9-9 10-3-1-9-5-9-10V6l9-4Zm-4 10 3 3 5-6",
    "m14 4 6-2 2 6-11 11-6-6L14 4ZM4 15c-3 1 0 6-3 7 5 0 8-1 8-4",
    "M5 4h14a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3Zm5 4 6 4-6 4V8Z",
  ];
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="category-icon"
    >
      <path d={paths[index % paths.length]} />
    </svg>
  );
}
