import * as React from "react";
import type { SVGProps } from "react";
const SvgGlobus = (props: SVGProps<SVGSVGElement>) => {
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
        strokeLinecap="round"
        
        d="M12 22v-2"
        opacity={0.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M4 16.562A10.287 10.287 0 0 0 11.687 20C17.383 20 22 15.383 22 9.687 22 6.633 20.672 3.888 18.562 2"
      />
      <path
        stroke="currentColor"
        
        d="M7 4.553c.585.552 1.79 2.063 1.931 3.684.131 1.515 1.096 2.746 2.569 2.763.566.006 1.139-.418 1.137-1.005 0-.182-.03-.367-.074-.538a1.137 1.137 0 0 1 .062-.79c.457-.978 1.357-1.241 2.07-1.772.316-.236.604-.484.732-.684.35-.553.702-1.658.526-2.211m-2.662 13c-.22-.414-.527-1.49 0-2.483.659-1.241 2.854-1.241 2.854-1.241 1.692-.018 2.302-.782 2.588-1.462M19 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
        opacity={0.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M10 22h4"
      />
    </svg>
  );
};
export default SvgGlobus;
