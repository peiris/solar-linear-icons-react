import * as React from "react";
import type { SVGProps } from "react";
const SvgStarAngle = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M2.93 12.773c-.571 1.65-.857 2.476-.492 2.986.365.51 1.14.366 2.687.079l.4-.075c.44-.081.66-.122.868-.062.208.06.38.215.723.523l.312.282c1.208 1.086 2.364 1.386 2.364 1.386.551-.244.685-1.113.953-2.852l.069-.45c.076-.494.114-.74.233-.945.12-.205.307-.344.682-.622l.34-.254c1.318-.979 1.977-1.468 1.953-2.129-.024-.66-.716-1.054-2.098-1.84l-.358-.205c-.393-.223-.59-.335-.723-.522-.134-.187-.19-.427-.301-.908l-.102-.437c-.394-1.692-.59-2.538-1.157-2.702-.567-.165-1.128.461-2.25 1.713l-.29.324c-.319.356-.478.534-.68.623-.203.09-.424.08-.868.061l-.404-.017c-1.56-.066-2.341-.1-2.667.46-.326.558.019 1.338.707 2.9"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M11.924 8.799 15 9.65m-5.208 8.24 3.273.95m-2.017-5.197 7.977 2.314M9.283 4.025l7.978 2.315c.566.164.763 1.01 1.157 2.701l.101.438c.112.48.168.721.302.908.134.186.33.298.723.522m0 0 .357.204c1.383.787 2.074 1.18 2.098 1.841.025.66-.634 1.15-1.952 2.129l-.34.253c-.375.278-.562.418-.682.622m.519-5.049-1.905-.527m1.386 5.576c-.12.205-.157.452-.233.946l-.07.45a9.21 9.21 0 0 1-.33 1.4c-.197.618-.296.926-.654 1.132-.359.206-.706.106-1.4-.096"
      />
    </svg>
  );
};
export default SvgStarAngle;
