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

export const ChannelContents = (props: { contents: any; channelObj: any }) => {
  console.log(props.channelObj);

  //   console.log("🟢", props.contents);
  const [blockSize, setBlockSize] = useState(200);
  let dateObj = new Date(props.channelObj.created_at);
  let dateStr = dateObj.toLocaleDateString("en-US");

  return (
    <div className="font-sans">
      <div className="w-full p-20">
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

      <div className="w-full px-20 py-0">
        <div className="w-full py-10 flex justify-between">
          <div className="font-semibold text-xl">Contributions</div>
          <div className="w-48">
            <Slider
              aria-label="slider-ex-1"
              defaultValue={200}
              focusThumbOnChange={false}
              min={12}
              max={400}
              step={4}
              onChange={(val) => setBlockSize(val)}
            >
              <SliderTrack bg="gray.200">
                <SliderFilledTrack bg="gray.300" />
              </SliderTrack>
              <SliderThumb />
            </Slider>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap mx-20">
        {props.contents.map((block: any) => (
          <div>
            <Block
              key={block.id.toString()}
              block={block}
              blockSize={blockSize}
            />{" "}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChannelContents;
