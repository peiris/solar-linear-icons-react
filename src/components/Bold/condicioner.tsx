import * as React from "react";
import type { SVGProps } from "react";
const SvgCondicioner = (props: SVGProps<SVGSVGElement>) => {
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
        fillRule="evenodd"
        d="M6.835 16.83a.75.75 0 0 1 .336 1.006l-.184.367a.231.231 0 0 0 .043.267c.527.527.658 1.332.324 1.998l-.183.368a.75.75 0 0 1-1.342-.671l.184-.368a.231.231 0 0 0-.044-.267 1.731 1.731 0 0 1-.324-1.998l.184-.367a.75.75 0 0 1 1.006-.336ZM17.835 16.83a.75.75 0 0 1 .336 1.006l-.184.367a.231.231 0 0 0 .043.267c.527.527.658 1.332.324 1.998l-.183.368a.75.75 0 1 1-1.342-.671l.184-.368a.231.231 0 0 0-.044-.267 1.731 1.731 0 0 1-.324-1.998l.184-.367a.75.75 0 0 1 1.006-.336ZM12.416 16.876a.75.75 0 0 1 .208 1.04l-.307.46a.571.571 0 0 0 .133.774c.88.66 1.09 1.892.48 2.806l-.306.46a.75.75 0 1 1-1.248-.832l.306-.46a.571.571 0 0 0-.132-.774 2.071 2.071 0 0 1-.48-2.806l.306-.46a.75.75 0 0 1 1.04-.208ZM6 2h12c1.886 0 2.828 0 3.414.586C22 3.172 22 4.114 22 6v3c0 2.828 0 4.243-.879 5.121-.53.531-1.258.742-2.374.825-.005-.67-.02-1.402-.059-1.692-.066-.492-.215-.963-.597-1.345s-.854-.531-1.345-.597c-.459-.062-1.032-.062-1.697-.062H8.951c-.665 0-1.238 0-1.697.062-.491.066-.963.215-1.345.597s-.531.853-.597 1.345c-.04.29-.054 1.023-.059 1.692-1.116-.083-1.843-.294-2.374-.825C2 13.243 2 11.828 2 9V6c0-1.886 0-2.828.586-3.414C3.172 2 4.114 2 6 2Zm-.75 6.5A.75.75 0 0 1 6 7.75h12a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75Zm0-2.5A.75.75 0 0 1 6 5.25h12a.75.75 0 0 1 0 1.5H6A.75.75 0 0 1 5.25 6Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M16 15H8c-.45 0-.865 0-1.247-.004.004-.648.016-1.322.045-1.542.044-.325.115-.427.172-.484.057-.057.159-.128.484-.172.347-.046.818-.048 1.546-.048h6c.728 0 1.2.002 1.546.048.325.044.427.115.484.172.057.057.128.159.172.484.03.22.04.894.045 1.542C16.865 15 16.45 15 16 15Z"
      />
    </svg>
  );
};
export default SvgCondicioner;
