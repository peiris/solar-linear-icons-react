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
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M17 7c0-3.314-1.988-5-5-5S7 3.686 7 7M12 12v2.5"
        opacity={0.5}
      />
      <path
        fill="currentColor"
        d="m9.266 20.615.455-.596-.455.596ZM12 8.931l-.532.528a.75.75 0 0 0 1.064 0L12 8.931Zm2.734 11.684.456.597-.456-.597Zm-5.013-.596c-1.37-1.045-2.852-2.055-4.029-3.338-1.15-1.254-1.942-2.705-1.942-4.582h-1.5c0 2.361 1.017 4.157 2.337 5.596 1.294 1.411 2.945 2.54 4.224 3.517l.91-1.193ZM3.75 12.1c0-1.824 1.065-3.364 2.535-4.015 1.429-.632 3.352-.466 5.183 1.375l1.064-1.057c-2.22-2.232-4.795-2.6-6.854-1.69C3.66 7.606 2.25 9.687 2.25 12.1h1.5Zm5.06 9.113c.461.351.96.73 1.466 1.016.507.287 1.09.522 1.724.522v-1.5c-.266 0-.583-.1-.985-.328-.402-.227-.82-.541-1.294-.903l-.91 1.193Zm6.38 0c1.278-.977 2.929-2.106 4.223-3.517 1.32-1.439 2.337-3.235 2.337-5.596h-1.5c0 1.877-.792 3.328-1.942 4.582-1.177 1.283-2.66 2.293-4.029 3.338l.91 1.193Zm6.56-9.113c0-2.413-1.41-4.494-3.428-5.386-2.059-.912-4.635-.543-6.854 1.689l1.064 1.057c1.83-1.841 3.754-2.007 5.183-1.375 1.47.65 2.535 2.19 2.535 4.015h1.5Zm-7.47 7.92c-.475.362-.893.676-1.295.903-.402.228-.72.328-.985.328v1.5c.634 0 1.217-.235 1.724-.522.506-.287 1.005-.665 1.466-1.016l-.91-1.193Z"
      />
    </svg>
  );
};
export default SvgHeartLock;
