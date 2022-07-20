import Link from "next/link";
import { useEffect, useState } from "react";
import ChannelContents from "./ChannelContents";
import HeaderMenu from "./HeaderMenu";

const Arena = require("are.na");
const arena = new Arena();

export const ChannelPage = () => {
  const [contents, setContents] = useState([]);
  const [data, setData] = useState({});
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    let urlArr = window.location.href.split("/");
    let username = urlArr[urlArr.length - 2];
    let channelSlug = urlArr[urlArr.length - 1];

    const buildReqParams = (channelObj) => {
      let page = 0;
      let paramList = [];
      while (page * 100 < channelObj.length) {
        page += 1;
        paramList.push({ page: page, per: 100 });
      }
      return paramList;
    };

    const getRestOfChannel = (chanObj) => {
      let paramList = buildReqParams(chanObj);

      Promise.all(
        paramList.map((param) => arena.channel(channelSlug).get(param))
      ).then((responses) => {
        console.log("😀", responses);

        let contentList = [];
        for (let response of responses) {
          contentList = [...contentList, ...response.contents];
        }
        console.log(contentList);

        setContents(contentList);
        setLoading(false);
      });
    };

    const getChannelContents = () => {
      arena
        .channel(channelSlug)
        .get({ page: 1, per: 100 })
        .then((chan) => {
          setData(chan);
          getRestOfChannel(chan);
        })
        .catch((err) => console.log(err));
    };

    setLoading(true);
    console.log(channelSlug);
    getChannelContents();
  }, []);

  return (
    <div>
      <HeaderMenu />

      {isLoading ? (
        <div className="grid h-screen place-items-center">
          Loading Channel...
        </div>
      ) : (
        <ChannelContents
          contents={contents}
          channelObj={data}
        ></ChannelContents>
      )}
    </div>
  );
};

export default ChannelPage;
