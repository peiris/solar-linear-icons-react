import * as React from "react";
import type { SVGProps } from "react";
const SvgText = (props: SVGProps<SVGSVGElement>) => {
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
        d="M8 2h-.066c-.886 0-1.65 0-2.262.082-.655.088-1.284.287-1.793.797-.51.51-.709 1.138-.797 1.793C3 5.284 3 6.048 3 6.934V7.95a1 1 0 1 0 2 0V7c0-.971.002-1.599.064-2.061.059-.434.153-.57.229-.646.076-.076.212-.17.646-.229C6.4 4.002 7.029 4 8 4h8c.971 0 1.599.002 2.061.064.434.059.57.153.646.229.076.076.17.212.229.646C18.998 5.4 19 6.029 19 7v.95a1 1 0 1 0 2 0V6.934c0-.886 0-1.65-.082-2.262-.088-.655-.287-1.284-.797-1.793-.51-.51-1.138-.709-1.793-.797C17.716 2 16.952 2 16.066 2H8Z"
        clipRule="evenodd"
      />
      <path fill="currentColor" d="M13 4h-2v16h2V4Z" opacity={0.3} />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6 21a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgText;
