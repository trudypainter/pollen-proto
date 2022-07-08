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

  // if (isLoading) return <p>Loading...</p>;
  // if (!isLoading) return <div> {data?.id} </div>;
  return (
    <div className="px-20 pt-10">
      <a className="text-large font-semibold  hover:underline" href="/">
        Pollen
      </a>{" "}
      {urlArr.map((url) => (
        <span>
          {" / "}
          <a
            className="text-large   hover:underline"
            href={"/" + urlArr.slice(0, urlArr.indexOf(url) + 1).join("/")}
          >
            {url}
          </a>
        </span>
      ))}
    </div>
  );
};

export default HeaderMenu;
