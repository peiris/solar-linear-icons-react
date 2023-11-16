import * as React from "react";
import type { SVGProps } from "react";
const SvgDropper = (props: SVGProps<SVGSVGElement>) => {
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
        d="M22 13.75v2.757c0 .657-.277 1.284-.763 1.726a7.78 7.78 0 0 1-10.474 0A2.334 2.334 0 0 1 10 16.507V10c0-1.886 0-2.828.586-3.414C11.172 6 12.114 6 14 6h4c1.886 0 2.828 0 3.414.586.503.502.574 1.267.584 2.664H18a.75.75 0 0 0 0 1.5h4v1.5h-3a.75.75 0 0 0 0 1.5h3Z"
      />
      <path
        fill="currentColor"
        d="M15.25 20.224v1.026a.75.75 0 1 0 1.5 0v-1.026a7.814 7.814 0 0 1-1.5 0ZM14.294 2.102a3.75 3.75 0 0 0-2.353-.852H7.945c-1.367 0-2.47 0-3.337.117-.9.12-1.658.38-2.26.981-.602.602-.86 1.36-.981 2.26-.117.867-.117 1.97-.117 3.337V22.25a.75.75 0 0 0 1.5 0V8c0-1.435.002-2.437.103-3.192.099-.734.28-1.122.556-1.399.277-.277.665-.457 1.4-.556L8 2.75h3.932a2.25 2.25 0 0 1 1.408.51l.002.001.03.026.005.003.083.069c.533.43 1.152.693 1.79.79V6h1.5V4.073a3.74 3.74 0 0 0 1.753-1.016l.527-.527a.75.75 0 0 0-1.06-1.06l-.523.522-.065.065c-.19.184-.404.328-.632.432V2a.75.75 0 0 0-1.5 0v.62a2.243 2.243 0 0 1-.848-.428l-.07-.058-.035-.03-.003-.002Z"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgDropper;
