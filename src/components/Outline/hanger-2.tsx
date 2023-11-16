import * as React from "react";
import type { SVGProps } from "react";
const SvgHanger2 = (props: SVGProps<SVGSVGElement>) => {
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
        d="M10.286 3.91c0-.568.538-1.16 1.374-1.16.836 0 1.374.592 1.374 1.16 0 .311-.112.581-.294.78-.113.122-.237.245-.38.385l-.08.08a8.953 8.953 0 0 0-.529.558c-.265.312-.553.723-.658 1.23a4.331 4.331 0 0 0-1.774.722l-7.095 4.992c-.927.652-1.166 1.702-.828 2.582.332.866 1.194 1.511 2.306 1.511H5.26c-.01.364-.01.764-.01 1.198v.104c0 .899 0 1.648.08 2.242.085.628.27 1.195.726 1.65.456.456 1.023.642 1.65.726.595.08 1.344.08 2.243.08h4.104c.898 0 1.648 0 2.242-.08.628-.084 1.195-.27 1.65-.726.456-.455.642-1.022.726-1.65.08-.594.08-1.343.08-2.242v-.104c0-.434 0-.834-.01-1.198h1.557c1.125 0 1.99-.657 2.316-1.533.33-.891.073-1.948-.877-2.588l-7.433-5.01a4.331 4.331 0 0 0-1.614-.66c.05-.081.118-.172.205-.274.126-.149.274-.298.44-.464l.075-.072c.14-.14.295-.292.435-.445.443-.48.69-1.115.69-1.795 0-1.542-1.364-2.659-2.874-2.659S8.786 2.367 8.786 3.91a.75.75 0 0 0 1.5 0Zm8.3 11.34h1.711c.509 0 .806-.277.91-.555.097-.264.047-.582-.31-.822l-7.432-5.01a2.906 2.906 0 0 0-1.655-.483 2.891 2.891 0 0 0-1.628.512l-7.095 4.991c-.346.243-.391.558-.29.819.105.275.403.548.905.548h1.712c.109-.447.299-.852.641-1.194.456-.456 1.023-.642 1.65-.726.595-.08 1.344-.08 2.243-.08h4.104c.898 0 1.648 0 2.242.08.628.084 1.195.27 1.65.726.343.342.533.747.642 1.194Zm-11.47-.134c.13-.13.328-.237.79-.3.482-.064 1.13-.066 2.094-.066h4c.964 0 1.611.002 2.094.066.462.063.66.17.79.3.13.13.237.328.3.79.064.482.066 1.13.066 2.094s-.002 1.612-.067 2.095c-.062.461-.169.659-.3.789-.13.13-.327.237-.789.3-.483.064-1.13.066-2.094.066h-4c-.964 0-1.612-.002-2.095-.067-.461-.062-.659-.169-.79-.3-.13-.13-.237-.327-.299-.788-.065-.483-.066-1.131-.066-2.095 0-.964.001-1.612.066-2.095.062-.461.17-.659.3-.789Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgHanger2;
