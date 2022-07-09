import Link from "next/link";
import { useEffect, useState, useLayoutEffect, useRef } from "react";

export const Block = (props: { block: any }) => {
  const block = props.block;
  const hasImage = block.image !== undefined && block.image !== null;
  const [blockWidth, setBlockWidth] = useState(400);

  if (hasImage) {
    console.log("🟡", block);
  } else {
  }

  return (
    <div className="m-px border-2 h-full">
      {hasImage ? (
        <div className="h-full bg-black">
          <img className="w-full h-full " src={block.image.square.url} />{" "}
        </div>
      ) : (
        <div className="p-2">Channel: {block.title} </div>
      )}
    </div>
  );
};

export default Block;
