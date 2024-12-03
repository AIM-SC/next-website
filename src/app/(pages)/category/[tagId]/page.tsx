// /info/article/page.tsx

import { notFound } from "next/navigation";

export default function ArticleIndex() {
  notFound(); // 404ページを返す
  return null;
}