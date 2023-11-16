import * as React from "react";
import type { SVGProps } from "react";
const SvgMedalStarCircle = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      role="img"
      strokeWidth={props.strokeWidth ? props.strokeWidth : 1.5}
      width={24}
      height={24}
      {...props}
    >
      <path
        fill="currentColor"
        d="M13 2h-2c-1.886 0-2.828 0-3.414.586C7 3.172 7 4.114 7 6v4h10V6c0-1.886 0-2.828-.586-3.414C15.828 2 14.886 2 13 2Z"
        opacity={0.5}
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 22a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm0-11c-.284 0-.474.34-.854 1.023l-.098.176c-.108.194-.162.29-.246.354-.085.064-.19.088-.4.135l-.19.044c-.738.167-1.107.25-1.195.532-.088.283.164.577.667 1.165l.13.152c.143.167.215.25.247.354.032.104.021.215 0 .438l-.02.203c-.076.785-.114 1.178.115 1.352.23.174.576.015 1.267-.303l.178-.082c.197-.09.295-.136.399-.136.104 0 .202.046.399.136l.178.082c.691.319 1.037.477 1.267.303.23-.174.191-.567.115-1.352l-.02-.203c-.021-.223-.032-.334 0-.438.032-.103.104-.187.247-.354l.13-.152c.503-.588.755-.882.667-1.165-.088-.282-.457-.365-1.195-.532l-.19-.044c-.21-.047-.315-.07-.4-.135-.084-.064-.138-.16-.246-.354l-.098-.176C12.474 11.34 12.284 11 12 11Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgMedalStarCircle;
