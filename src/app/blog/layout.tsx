/** Blog section layout with shared metadata. */
import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "IDI Journal",
  description: `Design insights, Southern California trends, and stories from the IDI community. The official blog of ${SITE_NAME}.`,
  alternates: { canonical: "/blog" },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
