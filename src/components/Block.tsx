import Link from "next/link";
import { useEffect, useState, useLayoutEffect, useRef } from "react";

export const Block = (props: { block: any }) => {
  const block = props.block;
  const hasImage = block.image !== undefined && block.image !== null;
  const [blockWidth, setBlockWidth] = useState(400);

  let displayText = "";
  if (!hasImage) {
    console.log("🟡 no image", block);
    if (block.base_class === "Channel") {
      displayText = block.title;
    } else {
      console.log("🟢 got here");
      displayText = block.content;
    }
  }

  return (
    <div className="m-px border-2 h-full">
      {hasImage ? (
        <div className="h-full bg-black">
          <img className="w-full h-full " src={block.image.square.url} />{" "}
        </div>
      ) : (
        <div
          className={
            "w-full h-full p-2 " +
            (block.base_class === "Channel"
              ? "bg-emerald-100 flex items-center justify-center"
              : "bg-gray-100")
          }
        >
          {displayText}
        </div>
      )}
    </div>
  );
};

export default Block;
