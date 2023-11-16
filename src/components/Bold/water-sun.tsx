import * as React from "react";
import type { SVGProps } from "react";
const SvgWaterSun = (props: SVGProps<SVGSVGElement>) => {
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
        d="M12 1.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75ZM4.4 4.399a.75.75 0 0 1 1.06 0l.393.392a.75.75 0 0 1-1.06 1.061l-.394-.393a.75.75 0 0 1 0-1.06Zm15.2 0a.75.75 0 0 1 0 1.06l-.392.393a.75.75 0 0 1-1.06-1.06l.392-.393a.75.75 0 0 1 1.06 0ZM1.25 12a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75Zm19 0a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75ZM4.57 18.866c.687-1.074 2.157-1.039 2.888-.104.99 1.267 2.372 2.488 4.542 2.488 2.209 0 3.57-.979 4.505-2.23.72-.962 2.286-1.119 3.04.024.626.945 1.304 1.687 2.627 1.998a.75.75 0 1 1-.344 1.46c-1.852-.436-2.807-1.533-3.534-2.631a.28.28 0 0 0-.253-.128.432.432 0 0 0-.335.177C16.54 21.48 14.76 22.75 12 22.75c-2.842 0-4.611-1.64-5.724-3.065a.304.304 0 0 0-.246-.125.23.23 0 0 0-.196.114c-.74 1.156-1.695 2.365-3.662 2.828a.75.75 0 1 1-.344-1.46c1.401-.33 2.08-1.14 2.742-2.176Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M22.172 16.042c-1.323-.311-2.001-1.053-2.626-1.999a1.747 1.747 0 0 0-1.677-.79 6 6 0 1 0-11.775-.19 1.706 1.706 0 0 0-1.524.803c-.662 1.035-1.34 1.846-2.742 2.176a.75.75 0 1 0 .344 1.46c1.967-.463 2.922-1.672 3.662-2.828a.23.23 0 0 1 .196-.114.304.304 0 0 1 .246.125C7.389 16.11 9.158 17.75 12 17.75c2.76 0 4.539-1.27 5.706-2.83a.432.432 0 0 1 .335-.177.28.28 0 0 1 .253.127c.727 1.1 1.682 2.196 3.534 2.632a.75.75 0 0 0 .344-1.46Z"
      />
    </svg>
  );
};
export default SvgWaterSun;
