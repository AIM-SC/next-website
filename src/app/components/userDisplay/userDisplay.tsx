import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCouch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { format } from "date-fns";
import { UserCountLayout } from "./userCountLayout";

type apiResponse = {
  createdAt: string;
  contents: {
    countList: {
      sofa_backleft: number;
      pc: number;
      tatami: number;
      cafe: number;
      highchair: number;
      movable: number;
      sofa_backright: number;
      sofa_frontleft: number;
      sofa_frontright: number;
      vf_mac: number;
      vf_win: number;
      silent: number;
    };
    comment: string;
  };
}[];

export default async function UserDisplay() {
  const now = new Date();
  const hour = now.getHours();

  let total: number | "---";
  let note: string | undefined;
  let congestion = "";
  let sofaCongestion = "";
  let icon = 0;
  let sofaCount = 0;

  if (hour >= 10 && hour < 17) {
    const url =
      "https://script.google.com/macros/s/AKfycbzANLahldgD9yJ2Rf2xxN1sHUNtgXAeBEmjkQBPVQSdSs5gRQaY0CuPUwE5CeDSxrYH-Q/exec?limit=1";
    const res = await fetch(url, { cache: "no-store" });
    const data: apiResponse = await res.json();
    console.log(data[0].contents);

    total = Object.values(data[0].contents.countList).reduce(
      (sum, v) => sum + v,
      0
    );

    if (data[0].contents.countList.sofa_backleft !== 0) {
      sofaCount += 1;
    }
    if (data[0].contents.countList.sofa_backright !== 0) {
      sofaCount += 1;
    }
    if (data[0].contents.countList.sofa_frontleft !== 0) {
      sofaCount += 1;
    }
    if (data[0].contents.countList.sofa_frontright !== 0) {
      sofaCount += 1;
    }

    if (typeof total === "number") {
      if (total >= 20) {
        congestion = "混雑しています";
        icon = 4;
      } else if (total >= 15) {
        congestion = "やや混雑しています";
        icon = 3;
      } else if (total >= 10) {
        congestion = "やや空いています";
        icon = 2;
      } else if (total >= 1) {
        congestion = "空いています";
        icon = 1;
      } else if (total === 0) {
        congestion = "空いています";
        icon = 0;
      }
    }

    if (sofaCount !== 4) {
      sofaCongestion = "ソファ空きあり";
    } else {
      sofaCongestion = "ソファ空きなし";
    }

    note = format(new Date(data[0].createdAt), "MM/dd HH:mm");
  } else {
    total = "---";
  }

  return (
    <UserCountLayout note={note ? `${note}集計` : ""}>
      <div className="items-baseline flex justify-center">
        <span className="font-bold text-4xl">
          {total === undefined ? "—" : total}
        </span>
        <span className="text-lg">人</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex flex-col gap-2">
          <div className="flex gap-1">
            <FontAwesomeIcon
              icon={faUser}
              className={`size-4 ${icon > 0 ? "text-black" : "text-gray-400"}`}
            />
            <FontAwesomeIcon
              icon={faUser}
              className={`size-4 ${icon > 1 ? "text-black" : "text-gray-400"}`}
            />
            <FontAwesomeIcon
              icon={faUser}
              className={`size-4 ${icon > 2 ? "text-black" : "text-gray-400"}`}
            />
            <FontAwesomeIcon
              icon={faUser}
              className={`size-4 ${icon > 3 ? "text-black" : "text-gray-400"}`}
            />
          </div>
          <div className="flex gap-1">
            <FontAwesomeIcon
              icon={faCouch}
              className={`size-4 ${
                sofaCount > 0 ? "text-black" : "text-gray-400"
              }`}
            />
            <FontAwesomeIcon
              icon={faCouch}
              className={`size-4 ${
                sofaCount > 1 ? "text-black" : "text-gray-400"
              }`}
            />
            <FontAwesomeIcon
              icon={faCouch}
              className={`size-4 ${
                sofaCount > 2 ? "text-black" : "text-gray-400"
              }`}
            />
            <FontAwesomeIcon
              icon={faCouch}
              className={`size-4 ${
                sofaCount > 3 ? "text-black" : "text-gray-400"
              }`}
            />
          </div>
        </div>

        <div className="text-left">
          <p>{congestion}</p>
          <p>{sofaCongestion}</p>
        </div>
      </div>
    </UserCountLayout>
  );
}
