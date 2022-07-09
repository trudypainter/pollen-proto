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
import { stringify } from "querystring";

const INIT_COLS = 3;

export const ChannelContents = (props: { contents: any; channelObj: any }) => {
  console.log(props.channelObj);

  //   console.log("🟢", props.contents);
  const [gridCols, setGridCols] = useState(INIT_COLS);

  let dateObj = new Date(props.channelObj.created_at);
  let dateStr = dateObj.toLocaleDateString("en-US");

  return (
    <div className="font-sans w-10/12 mx-auto ">
      <div className="w-full py-20">
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

      <div className="w-full px-1/12 py-0 relative">
        <div className="w-full py-10 flex justify-between sticky top-140">
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

      {/* <div className="flex flex-wrap mx-20">
        {props.contents.map((block: any) => (
          <div key={block.id.toString()}>
            <Block block={block} blockSize={blockSize} />{" "}
          </div>
        ))}
      </div> */}

      <div
        className="grid pb-20"
        style={{ gridTemplateColumns: `repeat(${gridCols}, minmax(0, 1fr))` }}
      >
        {props.contents.map((block: any) => (
          <div key={block.id.toString()}>
            <Block block={block} />{" "}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChannelContents;
