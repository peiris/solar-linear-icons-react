import * as React from "react";
import type { SVGProps } from "react";
const SvgAccumulator = (props: SVGProps<SVGSVGElement>) => {
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
        d="M22 11.975V14c0 2.828 0 4.243-.879 5.121C20.243 20 18.828 20 16 20H8c-2.828 0-4.243 0-5.121-.879C2 18.243 2 16.828 2 14v-2.025c0-1.846 0-2.768.392-3.458a3 3 0 0 1 1.125-1.125C4.207 7 5.129 7 6.975 7h.28c.123 0 .184 0 .24-.006a1 1 0 0 0 .725-.448c.03-.048.058-.103.113-.213.11-.22.165-.33.228-.425a2 2 0 0 1 1.447-.895C10.123 5 10.246 5 10.492 5h3.018c.246 0 .37 0 .482.013a2 2 0 0 1 1.448.895c.063.095.118.205.228.425.055.11.082.165.113.213a1 1 0 0 0 .724.447c.057.007.118.007.241.007h.28c1.846 0 2.768 0 3.458.392a3 3 0 0 1 1.125 1.125c.392.69.392 1.612.392 3.458Z"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16.5 11.25a.75.75 0 0 1 .75.75v.75H18a.75.75 0 0 1 0 1.5h-.75V15a.75.75 0 0 1-1.5 0v-.75H15a.75.75 0 0 1 0-1.5h.75V12a.75.75 0 0 1 .75-.75ZM5.25 13.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M19.044 3.25c.433 0 .83 0 1.152.043.356.048.732.16 1.04.47.31.309.422.684.47 1.04.043.323.043 2.72.043 3.152v.864a2.14 2.14 0 0 0-.141-.302 3 3 0 0 0-1.125-1.125C19.793 7 18.871 7 17.025 7h-.28c-.123 0-.184 0-.24-.006a.999.999 0 0 1-.22-.051V4.87a3.26 3.26 0 0 1 .008-.068c.047-.356.16-.731.469-1.04.309-.31.685-.422 1.04-.47.323-.043.72-.043 1.152-.043h.09ZM4.99 3.25c-.433 0-.83 0-1.153.043-.356.048-.731.16-1.04.47-.31.309-.422.684-.47 1.04-.043.323-.043 2.72-.043 3.152v.781c.032-.076.068-.149.108-.219a3 3 0 0 1 1.125-1.125C4.207 7 5.13 7 6.975 7h.28c.123 0 .184 0 .241-.006a1 1 0 0 0 .253-.064V4.871a3.194 3.194 0 0 0-.008-.068c-.048-.356-.16-.731-.47-1.04-.308-.31-.684-.422-1.04-.47-.322-.043-.72-.043-1.152-.043h-.09Z"
      />
    </svg>
  );
};
export default SvgAccumulator;
