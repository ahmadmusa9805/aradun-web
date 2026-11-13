import type { ReactNode } from "react";

export function Table({
  caption,
  columns,
  children,
}: {
  caption: string;
  columns: readonly { id: string; label: string }[];
  children: ReactNode;
}) {
  return (
    <div
      className="ui-table-scroll"
      tabIndex={0}
      role="region"
      aria-label={caption}
    >
      <table className="ui-table">
        <caption>{caption}</caption>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.id} scope="col">
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
}
