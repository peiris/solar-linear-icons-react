import * as React from "react";
import type { SVGProps } from "react";
const SvgDiploma = (props: SVGProps<SVGSVGElement>) => {
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
      <circle cx={12} cy={16} r={3} stroke="#1C274D" strokeWidth={1.5} />
      <path
        stroke="#1C274D"
        strokeWidth={1.5}
        d="m12 19.26-2.263 2.17c-.324.31-.486.465-.623.52-.313.122-.66.017-.824-.25-.072-.117-.095-.328-.14-.75-.025-.239-.038-.358-.077-.458a.827.827 0 0 0-.5-.48c-.104-.037-.229-.049-.477-.073-.44-.044-.661-.065-.783-.134a.617.617 0 0 1-.26-.79c.056-.132.218-.287.542-.598L8.073 17l1.04-1.04M12 19.26l2.263 2.17c.324.31.486.465.623.52.313.122.66.017.824-.25.072-.117.095-.328.14-.75.025-.239.038-.358.077-.458a.828.828 0 0 1 .5-.48c.105-.037.229-.049.477-.073.44-.043.661-.065.783-.134a.617.617 0 0 0 .26-.79c-.056-.132-.218-.287-.542-.598L15.926 17 15 16.073"
      />
      <path
        stroke="#1C274D"
        strokeWidth={1.5}
        d="M17.32 17.996c1.972-.021 3.072-.145 3.801-.875C22 16.243 22 14.828 22 12V8c0-2.828 0-4.243-.879-5.121C20.243 2 18.828 2 16 2H8c-2.828 0-4.243 0-5.121.879C2 3.757 2 5.172 2 8v4c0 2.828 0 4.243.879 5.121.768.769 1.946.865 4.121.877"
        opacity={0.5}
      />
      <path
        stroke="#1C274D"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M9 6h6M7 9.5h10"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgDiploma;
