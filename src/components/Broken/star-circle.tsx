import * as React from "react";
import type { SVGProps } from "react";
const SvgStarCircle = (props: SVGProps<SVGSVGElement>) => {
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
        stroke="currentColor"
        strokeWidth={1.5}
        d="M10.861 9.363C11.368 8.454 11.621 8 12 8s.632.454 1.139 1.363l.13.235c.145.259.217.388.329.473.112.085.252.117.532.18l.254.058c.984.222 1.476.334 1.593.71.117.377-.218.769-.889 1.553l-.174.203c-.19.223-.285.334-.328.472-.043.138-.029.287 0 .584l.026.27c.102 1.047.152 1.57-.154 1.803-.306.233-.767.02-1.688-.403l-.239-.11c-.261-.12-.392-.181-.531-.181s-.27.06-.531.18l-.239.11c-.92.425-1.382.637-1.688.404-.306-.232-.256-.756-.154-1.802l.026-.271c.029-.297.043-.446 0-.584-.043-.138-.138-.25-.328-.472l-.174-.203c-.67-.784-1.006-1.176-.889-1.553.117-.376.609-.488 1.593-.71l.254-.058c.28-.063.42-.095.532-.18.112-.085.184-.214.328-.473l.131-.235Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M7 3.338A9.954 9.954 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"
      />
    </svg>
  );
};
export default SvgStarCircle;
