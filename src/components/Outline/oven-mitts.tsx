import * as React from "react";
import type { SVGProps } from "react";
const SvgOvenMitts = (props: SVGProps<SVGSVGElement>) => {
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
        d="M9.481 4.565c-.436-1.157-1.35-1.828-2.257-1.815-1.219.019-2.438 1.316-2.408 3.237v.01l-.032 3.35v.115c-.004.425-.008.793-.063 1.13l8.577 8.385 6.256-6.117a5.565 5.565 0 0 0 0-8c-2.27-2.22-5.96-2.22-8.23 0L9.896 6.257a.75.75 0 1 1-1.048-1.072l.633-.62Zm1.145-1.098c-.691-1.304-1.927-2.24-3.424-2.217-2.322.035-3.92 2.312-3.886 4.751l-.032 3.332c-.007.815-.021 1.025-.091 1.2-.027.067-.081.164-.224.34-.147.181-.35.402-.652.73-.595.647-1.067 1.3-1.067 2.142 0 .644.276 1.174.663 1.67.368.472.903.995 1.544 1.622L7.1 20.599c.642.627 1.176 1.15 1.658 1.509.508.38 1.042.642 1.685.642s1.176-.263 1.684-.642c.482-.36 1.017-.882 1.658-1.51l6.818-6.665a7.064 7.064 0 0 0 0-10.145c-2.74-2.679-7.108-2.786-9.978-.321Zm1.597 16.558-8.226-8.043c-.157.182-.345.386-.56.62l-.016.017c-.564.613-.671.895-.671 1.126 0 .174.06.382.346.748.298.382.759.835 1.447 1.508l3.569 3.489c.688.673 1.151 1.123 1.543 1.415.373.279.594.345.788.345.193 0 .414-.066.787-.345.277-.206.59-.492.993-.88Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgOvenMitts;
