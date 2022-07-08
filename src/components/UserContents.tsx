import Link from "next/link";
import { useEffect, useState } from "react";
import Block from "./Block";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
} from "@chakra-ui/react";
import Router from "next/router";

export const UserContents = (props: {
  username: string;
  userObj: any;
  channelsObj: any;
}) => {
  console.log("🟡", props.userObj);
  console.log("⭐️", props.channelsObj);

  return (
    <div className="font-sans">
      <div className="w-full p-20">
        <div className="font-semibold text-4xl">{props.userObj.username}</div>
        <div className=" text-base">
          Lorem ipsum metadata description is missing
        </div>
      </div>

      <div className="w-full px-20">
        {props.channelsObj.map((channel: any) => (
          <div className="my-4 ">
            <div className="mt-12 font-semibold text-4xl hover:underline">
              <a href={props.userObj.slug + "/" + channel.slug}>
                {channel.title}
              </a>
            </div>
            <div className="mb-4">{channel.metadata.description}</div>

            <div className="flex flex-shrink-0 flex-row overflow-x-scroll">
              {channel.contents.map((block: any) => (
                <div className="flex-shrink-0">
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
        ))}
      </div>
    </div>
  );
};

export default UserContents;
