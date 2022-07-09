import Link from "next/link";
import { useEffect, useState } from "react";
import ChannelContents from "./ChannelContents";
import UserContents from "./UserContents";

const Arena = require("are.na");
const arena = new Arena({
  accessToken: "jOjmF09t2R8a_7pB-5u6VnexekhMzrtLoVVDoUityBg",
});

export const HeaderMenu = () => {
  const [urlArr, setUrlArr] = useState([""]);
  useEffect(() => {
    let urlArr = window.location.href.split("/").slice(3);
    setUrlArr(urlArr);
  }, []);

  return (
    <div className="px-20 pt-10">
      <Link href="/">
        <a className="text-large font-semibold  hover:underline">Pollen</a>
      </Link>
      {urlArr.map((url) => (
        <span key={url}>
          {" / "}
          <Link href={"/" + url}>
            <a className="text-large hover:underline"> {url}</a>
          </Link>
        </span>
      ))}
    </div>
  );
};

export default HeaderMenu;
