import * as React from "react";
import type { SVGProps } from "react";
const SvgScanner = (props: SVGProps<SVGSVGElement>) => {
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
        d="M3.464 3.464C2 4.93 2 7.286 2 12c0 4.714 0 7.071 1.464 8.535C4.93 22 7.286 22 12 22c4.714 0 7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464Z"
        opacity={0.5}
      />
      <path
        fill="currentColor"
        d="M10.004 5.752a.75.75 0 1 0-.008-1.5c-1.082.006-1.98.03-2.713.159-.752.131-1.395.382-1.922.883-.455.433-.76.872-.925 1.503-.15.572-.177 1.275-.184 2.198a.75.75 0 1 0 1.5.011c.008-.949.04-1.466.135-1.828.08-.303.206-.51.509-.798.242-.23.572-.392 1.145-.492.592-.103 1.37-.13 2.463-.136ZM14.004 4.252a.75.75 0 0 0-.008 1.5c1.093.006 1.871.033 2.463.136.573.1.903.262 1.145.492.303.289.43.495.509.798.095.362.128.88.135 1.828a.75.75 0 0 0 1.5-.011c-.007-.923-.034-1.626-.184-2.198-.166-.63-.47-1.07-.925-1.503-.527-.501-1.17-.752-1.922-.883-.733-.129-1.631-.153-2.713-.159ZM5 11.25a.75.75 0 0 0 0 1.5h14a.75.75 0 0 0 0-1.5H5ZM5.752 14.995a.75.75 0 1 0-1.5.011c.007.923.034 1.626.184 2.198.166.63.47 1.07.925 1.503.527.5 1.17.751 1.922.883.733.128 1.631.153 2.713.159a.75.75 0 0 0 .008-1.5c-1.093-.006-1.871-.033-2.463-.137-.573-.1-.903-.261-1.145-.492-.303-.288-.43-.495-.509-.797-.095-.362-.127-.88-.135-1.828ZM19.748 15.006a.75.75 0 1 0-1.5-.011c-.008.948-.04 1.466-.135 1.828-.08.302-.206.509-.509.797-.242.23-.572.392-1.145.492-.592.104-1.37.13-2.463.137a.75.75 0 1 0 .008 1.5c1.082-.006 1.98-.03 2.713-.16.752-.13 1.395-.381 1.922-.882.455-.434.76-.873.925-1.503.15-.572.177-1.275.184-2.198Z"
      />
    </svg>
  );
};
export default SvgScanner;