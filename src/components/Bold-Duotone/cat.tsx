import * as React from "react";
import type { SVGProps } from "react";
const SvgCat = (props: SVGProps<SVGSVGElement>) => {
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
        d="M9.606 5.563c.766 0 .914-.157 2.394-.157s1.628.157 2.394.157c.638 0 2.554-1.563 3.511-1.563.958 0 2.075.563 2.075 2.188v1.875c-.002.492-.18 2-.88 1.597 1.111 1.314.88 2.922.88 4.34 0 3.906-5.267 5-7.98 5s-7.98-1.094-7.98-5c0-1.418-.231-3.026.88-4.34-.7.403-.878-1.105-.88-1.598V6.188C4.02 4.563 5.137 4 6.095 4c.957 0 2.873 1.563 3.511 1.563Z"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        d="M9.016 11.063c-.489 0-.815.317-.98.583a1.811 1.811 0 0 0-.254.948c0 .332.082.67.254.947.165.266.491.584.98.584.49 0 .815-.318.98-.584.172-.278.254-.615.254-.947 0-.333-.082-.67-.254-.948-.165-.266-.49-.584-.98-.584ZM14.037 11.646c.164-.266.49-.584.98-.584.488 0 .814.318.979.584.172.278.254.615.254.948 0 .332-.082.67-.254.947-.165.266-.49.584-.98.584-.489 0-.815-.318-.98-.584a1.81 1.81 0 0 1-.254-.947c0-.333.082-.67.255-.948Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.178 14.08c.252-.098.55-.143.841-.143.292 0 .59.045.842.143.123.048.275.123.408.245.134.123.307.35.307.675a.915.915 0 0 1-.307.675 1.294 1.294 0 0 1-.408.245c-.253.098-.55.143-.842.143-.29 0-.588-.045-.84-.143a1.295 1.295 0 0 1-.41-.245.915.915 0 0 1-.306-.675c0-.325.173-.552.307-.675.133-.122.285-.197.408-.245Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M17.863 13.375a.75.75 0 0 1 .75-.75c.296 0 .65.067.981.149.345.085.72.199 1.076.321.684.234 1.41.532 1.737.744a.75.75 0 0 1-.813 1.26c-.157-.101-.722-.35-1.409-.585-.328-.112-.659-.212-.95-.284a3.053 3.053 0 0 0-.622-.105.75.75 0 0 1-.75-.75ZM17.968 15.125a.75.75 0 1 0 0 1.5c.206 0 .55.115.98.343.342.18.656.385.901.545l.131.086a.75.75 0 0 0 .814-1.26l-.113-.074a13.008 13.008 0 0 0-1.032-.623c-.457-.242-1.08-.517-1.681-.517ZM3.815 14.514c-.687.235-1.252.484-1.408.585a.75.75 0 0 1-.814-1.26c.328-.212 1.053-.51 1.737-.744.357-.122.732-.237 1.077-.321.33-.082.684-.149.98-.149a.75.75 0 0 1 0 1.5c-.107 0-.317.03-.622.105-.29.072-.621.172-.95.284ZM4.02 17.599l.131-.086c.246-.16.56-.365.901-.545.431-.228.775-.343.98-.343a.75.75 0 0 0 0-1.5c-.6 0-1.224.275-1.68.517-.41.216-.79.465-1.033.623l-.113.074a.75.75 0 0 0 .814 1.26Z"
      />
    </svg>
  );
};
export default SvgCat;
