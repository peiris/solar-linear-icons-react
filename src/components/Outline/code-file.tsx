import * as React from "react";
import type { SVGProps } from "react";
const SvgCodeFile = (props: SVGProps<SVGSVGElement>) => {
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
        d="M12.25 2.834c-.46-.078-1.088-.084-2.22-.084-1.917 0-3.28.002-4.312.14-1.012.135-1.593.39-2.016.812-.423.423-.677 1.003-.812 2.009-.138 1.028-.14 2.382-.14 4.29v4c0 1.906.002 3.26.14 4.288.135 1.006.389 1.586.812 2.01.423.422 1.003.676 2.009.811 1.028.139 2.382.14 4.289.14h4c1.907 0 3.262-.002 4.29-.14 1.005-.135 1.585-.389 2.008-.812.423-.423.677-1.003.812-2.009.138-1.027.14-2.382.14-4.289v-.437c0-1.536-.01-2.264-.174-2.813h-3.13c-1.133 0-2.058 0-2.79-.098-.763-.103-1.425-.325-1.954-.854-.529-.529-.751-1.19-.854-1.955-.098-.73-.098-1.656-.098-2.79V2.835Zm1.5.776V5c0 1.2.002 2.024.085 2.643.08.598.224.891.428 1.094.203.204.496.348 1.094.428.619.083 1.443.085 2.643.085h2.02a45.815 45.815 0 0 0-1.17-1.076l-3.959-3.563A37.2 37.2 0 0 0 13.75 3.61Zm-3.575-2.36c1.385 0 2.28 0 3.103.315.823.316 1.485.912 2.51 1.835l.107.096 3.958 3.563.125.112c1.184 1.065 1.95 1.754 2.361 2.678.412.924.412 1.954.411 3.546v.661c0 1.838 0 3.294-.153 4.433-.158 1.172-.49 2.121-1.238 2.87-.749.748-1.698 1.08-2.87 1.238-1.14.153-2.595.153-4.433.153H9.944c-1.838 0-3.294 0-4.433-.153-1.172-.158-2.121-.49-2.87-1.238-.748-.749-1.08-1.698-1.238-2.87-.153-1.14-.153-2.595-.153-4.433V9.945c0-1.838 0-3.294.153-4.433.158-1.172.49-2.121 1.238-2.87.75-.749 1.701-1.08 2.878-1.238 1.144-.153 2.607-.153 4.455-.153H10.176Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10.263 13.298a.75.75 0 0 1 .44.965l-1.5 4a.75.75 0 0 1-1.405-.526l1.5-4a.75.75 0 0 1 .965-.44Zm-2.733.172a.75.75 0 0 1 0 1.06l-.47.47.47.47a.75.75 0 0 1-1.06 1.06l-1-1a.75.75 0 0 1 0-1.06l1-1a.75.75 0 0 1 1.06 0Zm3.44 2a.75.75 0 0 1 1.06 0l1 1a.75.75 0 0 1 0 1.06l-1 1a.75.75 0 1 1-1.06-1.06l.47-.47-.47-.47a.75.75 0 0 1 0-1.06Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgCodeFile;
