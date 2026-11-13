import {
  ReadingRoute,
  readingMetadata,
} from "@/modules/content/reading-route.server";
export const dynamic = "force-dynamic";
type Props = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: Props) {
  return readingMetadata("help", (await params).slug);
}
export default async function Page({ params }: Props) {
  return <ReadingRoute kind="help" slug={(await params).slug} />;
}
