import { renderToStaticMarkup } from "react-dom/server";
import { expect, it } from "vitest";
import { readingSchema } from "@/modules/content/reading";
import { ReadingPage } from "@/modules/content/templates/reading-page";
import { getHelpGuide } from "@/modules/content/data/help-guides";
import { publicFaqs } from "@/modules/content/data/public-copy";
it("provides six distinct source-managed help guides with valid client routes", () => {
  for (const faq of publicFaqs) {
    const guide = getHelpGuide(faq.id);
    expect(guide?.summary).toBe(faq.answer);
    expect(guide?.sections).toHaveLength(2);
    expect(guide?.related.length).toBeGreaterThan(0);
  }
  expect(getHelpGuide("not-published")).toBeNull();
});
const record = {
  kind: "help",
  slug: "synthetic-help",
  title: "SAMPLE help",
  summary: "Test only",
  sections: [
    {
      title: "Steps",
      blocks: [
        { type: "paragraph", text: "<script>unsafe()</script>" },
        { type: "code-text", text: "<img onerror=unsafe()>" },
        { type: "link", text: "Services", href: "/services" },
      ],
    },
  ],
  related: [],
};
it("escapes text/code and provides semantic contents and contact routes", () => {
  const html = renderToStaticMarkup(
    <ReadingPage reading={readingSchema.parse(record)} />,
  );
  expect(html).not.toContain("<script>");
  expect(html).toContain("&lt;script&gt;");
  expect(html).toContain('href="#section-1"');
  expect(html).toContain('id="section-1"');
  expect(html).toContain("<article");
  expect(html).toContain('href="/get-a-quote"');
});
it("rejects protocol-relative links and incomplete article/work identities", () => {
  expect(readingSchema.safeParse({ ...record, kind: "insights" }).success).toBe(
    false,
  );
  expect(readingSchema.safeParse({ ...record, kind: "work" }).success).toBe(
    false,
  );
  expect(
    readingSchema.safeParse({
      ...record,
      related: [{ title: "Unsafe", href: "//evil.test" }],
    }).success,
  ).toBe(false);
});
