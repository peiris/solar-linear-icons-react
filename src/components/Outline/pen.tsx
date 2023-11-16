import * as React from "react";
import type { SVGProps } from "react";
const SvgPen = (props: SVGProps<SVGSVGElement>) => {
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
        d="M14.757 2.621a4.682 4.682 0 0 1 6.622 6.622l-9.486 9.486c-.542.542-.86.86-1.216 1.137-.418.327-.87.607-1.35.835-.406.193-.834.336-1.56.578l-3.332 1.11-.802.268a1.81 1.81 0 0 1-2.29-2.29l1.378-4.133c.242-.727.385-1.155.578-1.562.229-.479.508-.931.835-1.35.276-.354.595-.673 1.137-1.215l9.486-9.486ZM4.4 20.821l2.841-.948c.791-.264 1.127-.377 1.44-.526.38-.182.74-.404 1.073-.663.273-.214.525-.463 1.115-1.053l7.57-7.57a7.36 7.36 0 0 1-2.757-1.744A7.358 7.358 0 0 1 13.94 5.56l-7.57 7.57c-.59.589-.84.84-1.053 1.114-.259.333-.481.692-.663 1.073-.149.313-.262.649-.526 1.44L3.18 19.6l1.22 1.22ZM15.155 4.343c.035.175.092.413.189.69a5.857 5.857 0 0 0 1.4 2.222 5.857 5.857 0 0 0 2.221 1.4c.278.097.516.154.691.189l.662-.662a3.182 3.182 0 0 0-4.5-4.5l-.663.661Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgPen;
