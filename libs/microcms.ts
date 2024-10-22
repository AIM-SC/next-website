// libs/microcms.ts

import { createClient } from "microcms-js-sdk";
import type {
  MicroCMSQueries,
  MicroCMSImage,
  MicroCMSDate,
} from "microcms-js-sdk";

export type Tag = {
    title: string
}

//お知らせ・ブログの型定義
export type Article = {
  id: string;
  title: string;
  body: string;
  tags: Tag[];
  thumbnail: MicroCMSImage;
} & MicroCMSDate;

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error("MICROCMS_API_KEY is required");
}

// API取得用のクライアントを作成
export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

// お知らせ一覧を取得
export const getInfoList = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<Article>({
    endpoint: "posts",
    queries,
  });

  // データの取得が目視しやすいよう明示的に遅延効果を追加
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return listData;
};

// お知らせの詳細を取得
export const getInfoDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  try {
    const detailData = await client.get<Article>({
      endpoint: "posts",
      contentId,
      queries,
    });

    console.log("Fetched detail data:", detailData); // デバッグ用

    if (!detailData) {
      console.error("No data found for contentId:", contentId);
      return null;
    }

    return detailData;
  } catch (error) {
    console.error("Error fetching detail:", error);
    return null;
  }
};

// ブログ一覧を取得
export const getBlogList = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<Article>({
    endpoint: "techblogs",
    queries,
  });

  console.log(listData)

  // データの取得が目視しやすいよう明示的に遅延効果を追加
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return listData;
};

// ブログの詳細を取得
export const getBlogDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  try {
    const detailData = await client.get<Article>({
      endpoint: "techblogs",
      contentId,
      queries,
    });

    console.log("Fetched detail data:", detailData); // デバッグ用

    if (!detailData) {
      console.error("No data found for contentId:", contentId);
      return null;
    }

    return detailData;
  } catch (error) {
    console.error("Error fetching detail:", error);
    return null;
  }
};
