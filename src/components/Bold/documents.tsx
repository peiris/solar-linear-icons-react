import * as React from "react";
import type { SVGProps } from "react";
const SvgDocuments = (props: SVGProps<SVGSVGElement>) => {
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
        d="M1.75 10v4c0 2.829 0 4.243.879 5.122.217.217.467.38.763.504a8.48 8.48 0 0 1-.019-.134c-.123-.918-.123-2.063-.123-3.393V7.902c0-1.33 0-2.476.123-3.393l.02-.134a2.309 2.309 0 0 0-.764.504C1.75 5.758 1.75 7.172 1.75 10ZM21.75 10v4c0 2.829 0 4.243-.879 5.122-.217.217-.467.38-.763.504l.019-.134c.123-.918.123-2.063.123-3.393V7.902c0-1.33 0-2.476-.123-3.393a8.452 8.452 0 0 0-.02-.134c.297.123.547.287.764.504.879.879.879 2.293.879 5.121Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.629 2.879C4.75 3.757 4.75 5.172 4.75 8v8c0 2.828 0 4.243.879 5.121C6.507 22 7.922 22 10.75 22h2c2.828 0 4.243 0 5.121-.879.879-.878.879-2.293.879-5.121V8c0-2.828 0-4.243-.879-5.121C16.993 2 15.578 2 12.75 2h-2c-2.828 0-4.243 0-5.121.879ZM8 17a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3A.75.75 0 0 1 8 17Zm.75-4.75a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5h-6ZM8 9a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6A.75.75 0 0 1 8 9Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgDocuments;
