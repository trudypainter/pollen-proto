import Link from "next/link";
import { useEffect, useState } from "react";
import ChannelContents from "./ChannelContents";
import HeaderMenu from "./HeaderMenu";

const Arena = require("are.na");
const arena = new Arena();

export const ChannelPage = () => {
  const [data, setData] = useState<any>({});
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    let urlArr = window.location.href.split("/");
    let username = urlArr[urlArr.length - 2];
    let channelSlug = urlArr[urlArr.length - 1];

    setLoading(true);
    console.log(channelSlug);
    arena
      .channel(channelSlug)
      .get({ page: 1, per: 300 })
      .then((chan: object) => {
        console.log(chan);
        setData(chan);
        setLoading(false);
      })
      .catch((err: Error) => console.log(err));
  }, []);

  // if (isLoading) return <p>Loading...</p>;
  // if (!isLoading) return <div> {data?.id} </div>;
  return (
    <div>
      <HeaderMenu />

      {isLoading ? (
        <div className="grid h-screen place-items-center">
          Loading Channel...
        </div>
      ) : (
        <ChannelContents
          contents={data?.contents}
          channelObj={data}
        ></ChannelContents>
      )}
    </div>
  );
};

export default ChannelPage;
