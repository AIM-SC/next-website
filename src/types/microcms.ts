import { MicroCMSDate, MicroCMSImage } from "microcms-js-sdk";

export type TagType = {
    title: string;
}

export type ArticleType = {
  id: string;
  title: string;
  body: string;
  tags: TagType[];
  thumbnail: MicroCMSImage;
} & MicroCMSDate;