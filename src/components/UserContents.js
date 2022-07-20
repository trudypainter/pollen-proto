import Link from "next/link";
import { useEffect, useState } from "react";
import Block from "./Block";
import Router from "next/router";

export const UserContents = (props) => {
  console.log("🟡 userobj", props.userObj);
  console.log("⭐️ channels list", props.channelsObj);

  const publicChannels = props.channelsObj.filter(
    (channel) => channel.status !== "private"
  );

  return (
    <div className="font-sans w-10/12 mx-auto">
      <div className="w-full pt-20">
        <div className="font-semibold text-4xl">{props.userObj.username}</div>
        <div className=" text-base">
          Lorem ipsum metadata description is missing
        </div>
      </div>

      <div className="w-full ">
        {publicChannels.map((channel) => (
          <div key={channel.id.toString()} className="my-4 ">
            <div className="mt-12 font-semibold text-4xl hover:underline">
              <a href={props.userObj.slug + "/" + channel.slug}>
                {channel.title}
              </a>
            </div>

            {/* catch if there is no metadata */}
            <div className="mb-4">
              {channel.metadata !== null && channel.metadata.description}
            </div>

            {/* catch if there is no content preview */}
            {channel.contents !== null && (
              <div>
                <div className="flex flex-shrink-0 flex-row overflow-x-scroll">
                  {channel.contents.map((block) => (
                    <div key={block.id.toString()} className="flex-shrink-0">
                      {block.image && (
                        <img
                          className="min-w-80 w-80 h-80 object-cover mr-4"
                          src={block.image.square.url}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserContents;
