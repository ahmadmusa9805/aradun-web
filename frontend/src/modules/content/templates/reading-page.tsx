import Link from "next/link";
import type { Reading } from "../reading";
import { readingPaths } from "../reading";
import { PublicPage, PublicSection, ProjectInvitation } from "./public-page";

export function ReadingPage({ reading }: { reading: Reading }) {
  return (
    <PublicPage title={reading.title} intro={reading.summary}>
      <p>
        <Link prefetch={false} href={readingPaths[reading.kind]}>
          Back to{" "}
          {reading.kind === "work"
            ? "Our Work"
            : reading.kind === "help"
              ? "FAQs & Help"
              : "Insights"}
        </Link>
      </p>
      {reading.classification && (
        <p className="public-eyebrow">{reading.classification}</p>
      )}
      {reading.author && (
        <p>
          By {reading.author}
          {reading.publishedAt && (
            <>
              {" "}
              ·{" "}
              <time dateTime={reading.publishedAt}>
                {new Intl.DateTimeFormat("en", {
                  dateStyle: "long",
                  timeZone: "UTC",
                }).format(new Date(reading.publishedAt))}
              </time>
            </>
          )}
        </p>
      )}
      <nav aria-label="On this page">
        <h2>On this page</h2>
        <ol>
          {reading.sections.map((section, index) => (
            <li key={index}>
              <a href={`#section-${index + 1}`}>{section.title}</a>
            </li>
          ))}
        </ol>
      </nav>
      <article className="public-reading" aria-label={reading.title}>
        {reading.sections.map((section, index) => (
          <PublicSection
            key={index}
            id={`section-${index + 1}`}
            title={section.title}
          >
            {section.blocks.map((block, blockIndex) => {
              switch (block.type) {
                case "heading":
                  return <h3 key={blockIndex}>{block.text}</h3>;
                case "list":
                  return (
                    <ul key={blockIndex}>
                      {block.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  );
                case "link":
                  return (
                    <p key={blockIndex}>
                      <Link prefetch={false} href={block.href}>
                        {block.text}
                      </Link>
                    </p>
                  );
                case "quote":
                  return <blockquote key={blockIndex}>{block.text}</blockquote>;
                case "code-text":
                  return (
                    <pre key={blockIndex}>
                      <code>{block.text}</code>
                    </pre>
                  );
                case "paragraph":
                  return <p key={blockIndex}>{block.text}</p>;
              }
            })}
          </PublicSection>
        ))}
      </article>
      {reading.related.length > 0 && (
        <PublicSection title="Related reading & services">
          <ul>
            {reading.related.map((item) => (
              <li key={item.href}>
                <Link prefetch={false} href={item.href}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </PublicSection>
      )}
      <ProjectInvitation />
    </PublicPage>
  );
}
