import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Block from "./Block";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
} from "@chakra-ui/react";
import { stringify } from "querystring";

const INIT_COLS = 3;

export const ChannelContents = (props: { contents: any; channelObj: any }) => {
  // console.log(props.channelObj);

  const [gridCols, setGridCols] = useState(INIT_COLS);
  const [blockHeight, setBlockHeight] = useState(
    (window.innerWidth * 10) / 12 / INIT_COLS - 2
  );
  let dateObj = new Date(props.channelObj.created_at);
  let dateStr = dateObj.toLocaleDateString("en-US");

  const calculateBlockWidth = (val: number) => {
    const blockHeight: number = (window.innerWidth * 10) / 12 / val - 2;
    console.log("vw in pixels", window.innerWidth, val, blockHeight);

    setBlockHeight(blockHeight);
  };

  return (
    <div className="font-sans w-10/12 mx-auto ">
      <div className="w-full py-8">
        <div className="text-base">
          {`${dateStr} • Created by `}{" "}
          <a
            href={"/" + props.channelObj.owner.slug}
            className="font-semibold hover:underline"
          >{`${props.channelObj.owner.username}`}</a>
        </div>
        <div className="font-semibold text-4xl">{props.channelObj.title}</div>
        <div className="text-base">{props.channelObj.metadata.description}</div>
      </div>

      <div className="w-full px-1/12  sticky top-0 bg-white">
        <div className="w-full py-8 flex justify-between ">
          <div className="font-semibold text-xl">Contributions</div>
          <div className="w-48">
            <Slider
              aria-label="slider-ex-1"
              defaultValue={INIT_COLS}
              focusThumbOnChange={false}
              min={1}
              max={20}
              step={1}
              onChange={(val) => {
                console.log(val);
                calculateBlockWidth(val);
                setGridCols(val);
              }}
            >
              <SliderTrack bg="gray.200">
                <SliderFilledTrack bg="gray.300" />
              </SliderTrack>
              <SliderThumb />
            </Slider>
          </div>
        </div>
      </div>

      <div
        className="grid auto-rows-min pb-20"
        style={{
          gridTemplateColumns: `repeat(${gridCols}, 1fr)`,
        }}
      >
        {props.contents.map((block: any) => (
          <div key={block.id.toString()}>
            <Block block={block} blockHeight={blockHeight} />{" "}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChannelContents;
