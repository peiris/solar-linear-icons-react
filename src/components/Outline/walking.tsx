import * as React from "react";
import type { SVGProps } from "react";
const SvgWalking = (props: SVGProps<SVGSVGElement>) => {
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
        d="M12.5 2.75a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5ZM9.25 4.5a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0Zm4.278 6.253a4.315 4.315 0 0 0-.258-.003h-1.091l-.091.912c-.174 1.74-.235 2.44-.08 3.101.156.662.522 1.261 1.453 2.742l2.574 4.096a.75.75 0 0 1-1.27.798l-2.574-4.096-.073-.116c-.835-1.327-1.35-2.146-1.57-3.08-.22-.935-.123-1.898.034-3.459l.013-.136.076-.761c-.5.003-.872.012-1.17.049-.378.045-.554.125-.679.225-.124.1-.24.254-.367.613-.133.377-.248.888-.419 1.657l-.304 1.368a.75.75 0 0 1-1.464-.326l.314-1.411c.158-.714.292-1.314.459-1.788.177-.502.419-.943.843-1.283.424-.34.906-.48 1.435-.545.499-.06 1.114-.06 1.845-.06h2.131c.136 0 .241 0 .34.007a2.75 2.75 0 0 1 2.417 1.887c.03.094.056.197.09.329l.005.024c.056.224.073.288.089.332.21.606.845.955 1.469.807.046-.01.109-.031.328-.104l.73-.243a.75.75 0 0 1 .474 1.422l-.73.244-.032.01a5.25 5.25 0 0 1-.424.13 2.75 2.75 0 0 1-3.232-1.774 5.214 5.214 0 0 1-.119-.428l-.008-.033a4.31 4.31 0 0 0-.066-.25 1.25 1.25 0 0 0-1.098-.857Zm-3.112 6.123a.75.75 0 0 1 .208 1.04l-3 4.5a.75.75 0 1 1-1.248-.832l3-4.5a.75.75 0 0 1 1.04-.208Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgWalking;
