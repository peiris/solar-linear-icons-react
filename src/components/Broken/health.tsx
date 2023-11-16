import * as React from "react";
import type { SVGProps } from "react";
const SvgHealth = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M18.5 9h-2m0 0h-2m2 0V7m0 2v2"
      />
      <path
        fill="currentColor"
        d="m8.962 19.379.472-.583-.472.583ZM12 5.574l-.548.512a.75.75 0 0 0 1.096 0L12 5.574Zm3.038 13.805.473.582-.473-.582ZM12 21v-.75.75Zm-9.348-7.318a.75.75 0 1 0 1.283-.776l-1.283.776Zm3.885 2.489a.75.75 0 1 0-1.074 1.046l1.074-1.046ZM2.75 9.318c0-2.905 1.268-4.7 2.836-5.315 1.565-.613 3.754-.175 5.866 2.083l1.096-1.024c-2.388-2.554-5.199-3.36-7.509-2.456C2.732 3.51 1.25 5.992 1.25 9.318h1.5ZM15.51 19.96c1.493-1.211 3.281-2.834 4.703-4.647 1.407-1.794 2.537-3.879 2.537-5.997h-1.5c0 1.612-.88 3.364-2.218 5.071-1.324 1.689-3.016 3.232-4.466 4.408l.945 1.165Zm7.24-10.644c0-3.325-1.482-5.807-3.79-6.71-2.31-.905-5.12-.1-7.508 2.455l1.096 1.024c2.112-2.258 4.301-2.696 5.866-2.083 1.568.614 2.836 2.41 2.836 5.314h1.5ZM8.49 19.961c1.27 1.032 2.152 1.789 3.51 1.789v-1.5c-.723 0-1.173-.324-2.566-1.454l-.945 1.165Zm6.076-1.165c-1.393 1.13-1.843 1.454-2.566 1.454v1.5c1.358 0 2.24-.757 3.51-1.789l-.944-1.165Zm-10.63-5.89C3.187 11.67 2.75 10.455 2.75 9.318h-1.5c0 1.512.576 3 1.402 4.364l1.283-.776Zm5.498 5.89a33.875 33.875 0 0 1-2.897-2.625l-1.074 1.046a35.35 35.35 0 0 0 3.026 2.744l.945-1.165Z"
      />
    </svg>
  );
};
export default SvgHealth;
