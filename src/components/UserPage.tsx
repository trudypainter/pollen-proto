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
  const [userData, setUserData] = useState<any>({});
  const [channelData, setChannelData] = useState<any>({});
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    let urlArr = window.location.href.split("/");
    let username = urlArr[urlArr.length - 1];

    setLoading(true);
    arena
      .user(username)
      .get()
      .then((userObj: object) => {
        setUserData(userObj);
        arena
          .user(username)
          .channels({ page: 1, per: 100 })
          .then((channelData: object) => {
            setChannelData(channelData);
            setLoading(false);
          });
      })
      .catch((err: Error) => console.log(err));
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
