import Link from "next/link";
import { useEffect, useState } from "react";

export const Block = (props: { block: any; blockSize: number }) => {
  const block = props.block;
  const hasImage = block.image !== undefined;

  console.log("🟡", block);

  return (
    <div
      className="m-px border-2 overflow-hidden"
      style={{ width: `${props.blockSize}px`, height: `${props.blockSize}px` }}
    >
      {hasImage ? (
        <div>
          <img
            className="object-contain w-full h-full"
            src={block.image.square.url}
          />{" "}
        </div>
      ) : (
        <div className="p-2">Channel: {block.title} </div>
      )}
    </div>
  );
};

export default Block;
