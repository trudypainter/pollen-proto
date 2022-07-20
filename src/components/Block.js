import Link from "next/link";
import {
  useEffect,
  useState,
  useLayoutEffect,
  useRef,
  MutableRefObject,
} from "react";

export const Block = (props) => {
  const block = props.block;
  const hasImage = block.image !== undefined && block.image !== null;
  const [blockWidth, setBlockWidth] = useState(380);

  // console.log(props.blockHeight);
  let displayText = "";
  if (!hasImage) {
    // console.log("🟡 no image", block);
    if (block.base_class === "Channel") {
      displayText = block.title;
    } else {
      // console.log("🟢 got here");
      displayText = block.content;
    }
  }

  return (
    <div
      className={"overflow-scroll m-px border-2"}
      style={{ height: props.blockHeight, width: props.blockHeight }}
    >
      {hasImage ? (
        <div className="h-full bg-black">
          <img className="w-full h-full " src={block.image.square.url} />{" "}
        </div>
      ) : (
        <div
          className={
            "h-full w-full p-2 " +
            (block.base_class === "Channel"
              ? "bg-emerald-100 flex items-center justify-center"
              : "bg-white")
          }
        >
          {displayText}
        </div>
      )}
    </div>
  );
};

export default Block;
