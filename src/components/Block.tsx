import Link from "next/link";
import { useEffect, useState, useLayoutEffect, useRef } from "react";

export const Block = (props: { block: any }) => {
  const ref = useRef(undefined);
  const block = props.block;
  const hasImage = block.image !== undefined && block.image !== null;
  const [blockWidth, setBlockWidth] = useState(400);

  if (hasImage) {
    console.log("🟡", block);
  } else {
  }

  useEffect(() => {
    console.log("🐸 hitting use effect");
    if (ref.current) {
      setBlockWidth(ref.current.offsetWidth);
    }
  }, [props]);

  return (
    <div
      ref={ref}
      className="m-px border-2 overflow-hidden"
      style={{ height: `${blockWidth}px` }}
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
