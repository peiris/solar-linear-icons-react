import * as React from "react";
import type { SVGProps } from "react";
const SvgHeartLock = (props: SVGProps<SVGSVGElement>) => {
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
        d="M12 11.25a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0V12a.75.75 0 0 1 .75-.75Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6.265 6.492c-.2.062-.396.136-.587.22C3.66 7.606 2.25 9.687 2.25 12.1c0 2.361 1.017 4.157 2.337 5.596 1.056 1.151 2.348 2.114 3.483 2.96.256.191.505.377.74.557.461.351.96.73 1.466 1.016.507.287 1.09.522 1.724.522.634 0 1.217-.235 1.724-.522.506-.287 1.005-.665 1.466-1.016.235-.18.484-.366.74-.557 1.135-.846 2.427-1.809 3.483-2.96 1.32-1.439 2.337-3.235 2.337-5.596 0-2.413-1.41-4.494-3.428-5.386a5.45 5.45 0 0 0-.587-.221c-.094-1.576-.632-2.863-1.587-3.777C15.098 1.711 13.642 1.25 12 1.25s-3.098.461-4.148 1.465c-.955.914-1.493 2.2-1.587 3.777ZM7.79 6.25c1.381-.018 2.847.492 4.21 1.658 1.363-1.166 2.829-1.676 4.21-1.658-.125-1.107-.529-1.905-1.099-2.45-.697-.668-1.74-1.05-3.111-1.05-1.37 0-2.414.382-3.111 1.05-.57.545-.974 1.343-1.099 2.45ZM3.75 12.1c0-1.825 1.065-3.365 2.535-4.016 1.429-.632 3.352-.466 5.183 1.375a.75.75 0 0 0 1.064 0c1.83-1.841 3.754-2.007 5.183-1.375 1.47.65 2.535 2.19 2.535 4.015 0 1.877-.792 3.328-1.942 4.582-.95 1.036-2.1 1.894-3.229 2.737-.269.2-.536.4-.8.601-.474.362-.892.676-1.294.903-.402.228-.72.328-.985.328-.266 0-.583-.1-.985-.328-.402-.227-.82-.541-1.294-.903a93.6 93.6 0 0 0-.8-.601c-1.128-.842-2.278-1.7-3.229-2.737-1.15-1.254-1.942-2.705-1.942-4.582Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgHeartLock;
