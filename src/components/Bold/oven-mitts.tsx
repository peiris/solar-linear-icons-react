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
        d="m4.019 16.537 3.569 3.49C8.933 21.341 9.606 22 10.443 22c.514 0 .966-.248 1.55-.745.358-.304.537-.457.545-.677.008-.22-.169-.393-.522-.74l-7.91-7.765c-.24-.236-.36-.354-.492-.387a.489.489 0 0 0-.266.007c-.13.04-.247.166-.479.418-.58.63-.869 1.098-.869 1.634 0 .818.673 1.476 2.019 2.792ZM20.078 13.397a6.314 6.314 0 0 0 0-9.073c-2.562-2.505-6.716-2.505-9.278 0l-.466.455C9.914 3.152 8.668 1.98 7.214 2c-1.773.027-3.182 1.817-3.148 4l-.033 3.457c-.002.218-.003.327.036.421.039.094.115.17.268.32l8.788 8.627c.33.324.495.486.7.486.204 0 .37-.161.7-.485l5.553-5.43Z"
      />
    </svg>
  );
};
export default SvgOvenMitts;
