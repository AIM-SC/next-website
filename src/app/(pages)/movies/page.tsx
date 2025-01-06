import { XMLParser } from "fast-xml-parser";
import SwitchMovieType from "../../components/switchMovieType";
import { Entry, VideoId } from "@/types";

const moviePage = async() => {


  const xmlFileUrl = "https://www.youtube.com/feeds/videos.xml?channel_id=UCPvxIswjXQ1VU2H3WyBss8w";

  const response = await fetch(xmlFileUrl);
  const parser = new XMLParser();
  const xmlText = await response.text();
  const jsonObj = parser.parse(xmlText);

  const entries: Entry[] = jsonObj.feed.entry;

  let longVideoIds:VideoId[] = [];
  let shortVideoIds:VideoId[] = [];

  entries.forEach((entry) => {
    const videoId = entry["yt:videoId"];
    if (entry.title.toLowerCase().includes("shorts")) {
      shortVideoIds.push(videoId);
    } else {
      longVideoIds.push(videoId);
    }
  });

  // 先頭9この動画だけを表示
  longVideoIds = longVideoIds.slice(0, 9);
  shortVideoIds = shortVideoIds.slice(0, 9);

  return (
    <div className="my-[5%] pt-[55px] pb-[30px] bg-[#F0EBDC]">
          <div className="left_side fixed top-[280px] left-[7px] ml-1 hidden [writing-mode:vertical-rl] lg:block">
            <p>AIM COMMONS</p>
          </div>
          <div className="right_side fixed top-[280px] right-[7px] mr-1 hidden [writing-mode:vertical-rl] lg:block">
            <p>AIM COMMONS</p>
          </div>
      <div className="text-base text-[#d9ae4c] text-center font-bold mb-5">VIDEO</div>
      <div className="text-3xl text-black text-center font-semibold mb-5">動画配信</div>
      <div className="text-lg text-black text-center font-bold">AIM Commons配信動画一覧</div>

      <div className="mx-auto">
        <SwitchMovieType longVideoIds={longVideoIds} shortVideoIds={shortVideoIds}/>
      </div>

      <button className="block mx-auto mt-[2%] bg-red-600 text-white text-lg font-bold py-2 px-4 rounded-lg">
        <a href="https://www.youtube.com/channel/UCPvxIswjXQ1VU2H3WyBss8w" target="_blank">
          YouTubeチャンネルへ
        </a>
      </button>
    </div>
  );
};

export default moviePage;
