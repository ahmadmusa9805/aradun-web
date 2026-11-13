import {
  ReadingRoute,
  readingMetadata,
} from "@/modules/content/reading-route.server";
export const dynamic = "force-dynamic";
type Props = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: Props) {
  return readingMetadata("insights", (await params).slug);
}
export default async function Page({ params }: Props) {
  return <ReadingRoute kind="insights" slug={(await params).slug} />;
}
