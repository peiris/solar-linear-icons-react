import * as React from "react";
import type { SVGProps } from "react";
const SvgMultipleForwardLeft = (props: SVGProps<SVGSVGElement>) => {
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
        d="M12.476 5.183 7.498 9.608c-.93.827-1.396 1.24-1.568 1.73a2 2 0 0 0 0 1.324c.172.489.637.902 1.568 1.73l4.978 4.424c.422.376.633.563.812.57a.5.5 0 0 0 .405-.182c.114-.138.114-.42.114-.986v-2.79c2.428 0 4.993.78 6.865 2.165.975.72 1.463 1.08 1.648 1.067a.451.451 0 0 0 .39-.24c.096-.16.011-.658-.159-1.653-1.105-6.467-5.555-8.196-8.744-8.196v-2.79c0-.565 0-.847-.114-.986a.5.5 0 0 0-.405-.181c-.18.006-.39.194-.812.57Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9.818 3.99a.75.75 0 0 0-1.06-.04L3.542 8.794a4.647 4.647 0 0 0 .15 6.944l5.09 4.333a.75.75 0 1 0 .972-1.142l-5.09-4.333a3.147 3.147 0 0 1-.102-4.703L9.78 5.05a.75.75 0 0 0 .039-1.06Z"
        clipRule="evenodd"
        opacity={0.3}
      />
    </svg>
  );
};
export default SvgMultipleForwardLeft;
