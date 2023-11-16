import * as React from "react";
import type { SVGProps } from "react";
const SvgMasks = (props: SVGProps<SVGSVGElement>) => {
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
        strokeWidth={1.5}
        d="m16.758 12.677-.845-3.298c-.44-1.719-.66-2.578-1.236-3.01a1.947 1.947 0 0 0-.638-.317c-.684-.194-1.46.17-3.015.897-1.15.54-1.726.809-2.326 1a9.57 9.57 0 0 1-.632.176c-.611.149-1.238.216-2.493.351-1.694.182-2.54.273-3.04.798a2.079 2.079 0 0 0-.4.609c-.292.675-.072 1.534.369 3.253l.845 3.297c.993 3.876 4.296 5.096 6.516 5.473.677.115 1.016.172 2.044-.116s1.294-.514 1.825-.968c1.742-1.487 4.02-4.27 3.026-8.145Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M16.5 17.221c1.741-.75 3.48-2.157 4.153-4.788l.845-3.297c.441-1.719.661-2.578.37-3.253a2.08 2.08 0 0 0-.401-.609c-.5-.525-1.346-.616-3.04-.798-1.255-.135-1.882-.202-2.493-.35a9.573 9.573 0 0 1-.632-.178c-.6-.19-1.175-.46-2.326-.999-1.554-.727-2.331-1.091-3.015-.897-.229.065-.445.172-.638.317-.575.432-.795 1.291-1.236 3.01l-.7 2.73"
        opacity={0.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M5.259 13.296c.06-.62.521-1.175 1.19-1.355.669-.179 1.346.072 1.708.578"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M19.18 8.936c-.06-.62-.521-1.175-1.19-1.354-.67-.18-1.346.071-1.708.577"
        opacity={0.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M11.055 11.742c.06-.619.52-1.175 1.19-1.354.669-.18 1.346.072 1.708.578"
      />
      <path
        fill="currentColor"
        d="M11.096 7.042a.75.75 0 0 1-1.22-.872l1.22.872Zm.904-.29c-.38-.1-.73.048-.904.29l-1.22-.872c.55-.77 1.553-1.123 2.512-.866L12 6.753Zm.478.313A.894.894 0 0 0 12 6.753l.388-1.45c.524.141.966.445 1.276.843l-1.186.92Z"
        opacity={0.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M13.2 16.231s-1.024-.76-2.812-.282c-1.787.48-2.294 1.65-2.294 1.65"
      />
    </svg>
  );
};
export default SvgMasks;
