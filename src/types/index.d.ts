export type VideoId = string;

export type Entry = {
    id: string;
    "yt:videoId": string;
    "yt:channelId": string;
    title: string;
    link: string;
    author: Author;
    published: string;
    updated: string
  };
  
export type Author = {
    name: string;
    uri: string;
};
  
export type Props = {
    longVideoIds: string[];
    shortVideoIds: string[];
};