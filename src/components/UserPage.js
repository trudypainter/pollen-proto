import { getCustomRoute } from "next/dist/server/server-route-utils";
import Link from "next/link";
import { useEffect, useState } from "react";
import ChannelContents from "./ChannelContents";
import HeaderMenu from "./HeaderMenu";
import UserContents from "./UserContents";

const Arena = require("are.na");
const arena = new Arena({
  accessToken: "jOjmF09t2R8a_7pB-5u6VnexekhMzrtLoVVDoUityBg",
});

export const UserPage = () => {
  const [userData, setUserData] = useState({});
  const [channelData, setChannelData] = useState({});
  const [isLoading, setLoading] = useState(true);

  const getUser = (username) => {
    console.log();
    arena
      .user(username)
      .get()
      .then((userObj) => {
        setUserData(userObj);
        arena
          .user(username)
          .channels({ page: 1, per: 100 })
          .then((channelData) => {
            setChannelData(channelData);
            setLoading(false);
          });
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    let urlArr = window.location.href.split("/");
    let username = urlArr[urlArr.length - 1];

    setLoading(true);
    getUser(username);
  }, []);

  // if (isLoading) return <p>Loading...</p>;
  // if (!isLoading) return <div> {data?.id} </div>;
  return (
    <div>
      <HeaderMenu />

      {isLoading ? (
        <div className="grid h-screen place-items-center">Loading User...</div>
      ) : (
        <div>
          <UserContents
            username={userData.username}
            userObj={userData}
            channelsObj={channelData}
          />
        </div>
      )}
    </div>
  );
};

export default UserPage;
