import * as React from "react";
import type { SVGProps } from "react";
const SvgFuel = (props: SVGProps<SVGSVGElement>) => {
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
        d="M11.95 10.25h.1c.664 0 1.237 0 1.696.061.243.033.48.086.705.177a.644.644 0 0 1 .019-.018l1-1a.75.75 0 1 1 1.06 1.06l-1 1a.644.644 0 0 1-.018.018c.09.225.144.463.176.706.062.459.062 1.032.062 1.696v.1c0 .664 0 1.237-.062 1.696a2.89 2.89 0 0 1-.177.705.644.644 0 0 1 .02.018l1 1a.75.75 0 1 1-1.061 1.061l-1-1-.007-.007-.011-.012a2.89 2.89 0 0 1-.706.177c-.459.062-1.032.062-1.697.062h-.098c-.665 0-1.238 0-1.697-.062a2.89 2.89 0 0 1-.705-.177.716.716 0 0 1-.019.02l-1 1a.75.75 0 0 1-1.06-1.061l1-1a.7.7 0 0 1 .018-.019 2.888 2.888 0 0 1-.176-.705c-.062-.46-.062-1.032-.062-1.697v-.099c0-.664 0-1.237.062-1.696.032-.243.085-.481.177-.706a.7.7 0 0 1-.02-.018l-1-1A.75.75 0 1 1 8.53 9.47l1 1a.685.685 0 0 1 .019.018 2.89 2.89 0 0 1 .705-.177c.459-.061 1.032-.061 1.697-.061Zm-1.496 1.548c-.325.044-.427.114-.484.172-.057.057-.128.159-.172.484-.046.347-.048.817-.048 1.546 0 .728.002 1.199.048 1.546.044.325.115.427.172.484.057.057.159.128.484.172.347.046.818.048 1.546.048.728 0 1.2-.002 1.546-.048.325-.044.427-.115.484-.172.057-.057.128-.159.172-.484.046-.347.048-.818.048-1.546 0-.729-.002-1.2-.048-1.546-.044-.325-.115-.427-.172-.485-.057-.057-.159-.127-.484-.171-.347-.047-.818-.048-1.546-.048-.728 0-1.2.001-1.546.048Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18.122 2.378c1.153-.227 2.175-.193 3.053.442.875.632 1.24 1.596 1.41 2.773.165 1.15.165 2.666.165 4.576v5.768c0 1.396 0 2.518-.116 3.4-.12.913-.378 1.681-.977 2.292-.602.613-1.36.878-2.263 1.002-.868.119-1.971.119-3.338.119H7.944c-1.367 0-2.47 0-3.338-.12-.902-.123-1.661-.388-2.263-1-.6-.612-.856-1.38-.977-2.293-.116-.882-.116-2.004-.116-3.4v-2.893c0-1.012 0-1.833.074-2.498.077-.692.24-1.29.614-1.827.375-.539.877-.895 1.496-1.2.246-.12.52-.238.823-.357a.756.756 0 0 1-.007-.102v-.041c0-.618 0-1.142.047-1.566.05-.447.159-.874.442-1.251.126-.168.274-.318.439-.448.373-.292.798-.405 1.242-.456.418-.048.934-.048 1.538-.048h.949c.419 0 .77-.001 1.078.083.66.18 1.2.635 1.502 1.233l2.34-.835C15.594 3.1 17 2.599 18.123 2.378Zm.29 1.472c-1 .196-2.3.658-4.142 1.315l-8 2.855c-.987.352-1.667.596-2.174.845-.489.24-.749.455-.927.71-.18.258-.293.582-.354 1.137-.064.572-.065 1.31-.065 2.375v2.796c0 1.463.002 2.486.103 3.258.1.752.282 1.153.561 1.438.277.283.665.466 1.396.566.754.103 1.754.105 3.19.105h8c1.436 0 2.436-.002 3.19-.105.731-.1 1.118-.283 1.396-.566.28-.285.461-.686.56-1.438.102-.772.104-1.795.104-3.258v-5.65c0-1.988-.002-3.396-.15-4.426-.147-1.015-.414-1.49-.804-1.772-.386-.28-.904-.378-1.885-.185Zm-8.367 1.23a.885.885 0 0 0-.456-.3c-.086-.024-.214-.03-.77-.03H8c-.657 0-1.087.001-1.409.038-.306.035-.42.094-.489.147a.903.903 0 0 0-.165.169c-.054.073-.114.196-.15.514a9.998 9.998 0 0 0-.036.995l4.293-1.533Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgFuel;
