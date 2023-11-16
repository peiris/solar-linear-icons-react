import * as React from "react";
import type { SVGProps } from "react";
const SvgCode2 = (props: SVGProps<SVGSVGElement>) => {
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
        d="M8.502 5.387A.75.75 0 0 0 7.5 4.272L5.76 5.836c-.736.663-1.347 1.212-1.766 1.71-.441.525-.755 1.088-.755 1.784 0 .695.314 1.258.755 1.782.42.499 1.03 1.049 1.766 1.711L7.5 14.387a.75.75 0 1 0 1.003-1.115l-1.696-1.527c-.788-.709-1.32-1.19-1.663-1.598-.33-.393-.403-.622-.403-.817 0-.196.072-.425.403-.818.344-.409.875-.889 1.663-1.598l1.696-1.527ZM15.443 10.498a.75.75 0 0 1 1.06-.055l1.737 1.563c.736.663 1.347 1.213 1.766 1.711.441.524.755 1.088.755 1.783 0 .695-.314 1.259-.755 1.783-.42.498-1.03 1.048-1.766 1.71l-1.738 1.565a.75.75 0 1 1-1.003-1.116l1.696-1.526c.788-.71 1.32-1.19 1.663-1.599.33-.392.403-.622.403-.817 0-.195-.072-.425-.403-.817-.344-.41-.875-.89-1.663-1.599L15.5 11.557a.75.75 0 0 1-.056-1.059Z"
      />
      <path
        fill="currentColor"
        d="M14.18 4.275a.75.75 0 0 1 .532.918l-3.987 15a.75.75 0 0 1-1.45-.386l3.987-15a.75.75 0 0 1 .918-.532Z"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgCode2;
