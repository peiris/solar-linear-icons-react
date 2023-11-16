import * as React from "react";
import type { SVGProps } from "react";
const SvgBag3 = (props: SVGProps<SVGSVGElement>) => {
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
        d="M8.921 7.293a.75.75 0 0 1 .957.457 2.251 2.251 0 0 0 4.245 0 .75.75 0 1 1 1.414.5 3.751 3.751 0 0 1-7.073 0 .75.75 0 0 1 .457-.957Zm3.44-1.793h-.722c-1.625 0-2.707.003-3.527.104-.778.096-1.137.263-1.389.472-.252.21-.482.531-.72 1.278-.25.787-.452 1.85-.752 3.448-.42 2.24-.702 3.761-.752 4.907-.048 1.105.137 1.575.397 1.888.26.313.687.581 1.782.737 1.135.162 2.683.166 4.962.166h.72c2.28 0 3.827-.004 4.962-.166 1.095-.156 1.522-.424 1.782-.737.26-.314.445-.783.397-1.888-.05-1.146-.332-2.667-.752-4.907-.3-1.598-.501-2.66-.752-3.448-.238-.747-.468-1.069-.72-1.278-.252-.209-.61-.376-1.389-.472-.82-.101-1.902-.104-3.527-.104Zm-6.596-.578c-1.11.922-1.403 2.483-1.988 5.604-.823 4.389-1.235 6.583-.035 8.029C4.942 20 7.174 20 11.64 20h.72c4.466 0 6.699 0 7.899-1.445 1.2-1.446.788-3.64-.035-8.03-.585-3.12-.878-4.681-1.989-5.603C17.125 4 15.536 4 12.361 4h-.722c-3.175 0-4.763 0-5.874.922Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgBag3;