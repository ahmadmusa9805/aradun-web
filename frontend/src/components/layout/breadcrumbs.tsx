import Link from "next/link";

export function Breadcrumbs({
  parents,
  current,
}: {
  parents: readonly { label: string; href: string }[];
  current: string;
}) {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <ol>
        {parents.map((parent) => (
          <li key={parent.href}>
            <Link prefetch={false} href={parent.href}>
              {parent.label}
            </Link>
            <span aria-hidden="true">/</span>
          </li>
        ))}
        <li aria-current="page">{current}</li>
      </ol>
    </nav>
  );
}
