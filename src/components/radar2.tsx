import * as React from "react";
import type { SVGProps } from "react";
const SvgRadar2 = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      role="img"
      className={props.className ? props.className + " h-6 w-6" : "h-6 w-6"}
    >
      <path d="m21.66 14.588-.725-.194.724.194Zm-12.248 7.07-.194.725.194-.724ZM2.34 9.412l-.725-.194.725.194Zm12.247-7.07-.194.724.194-.725Zm-3.06 10.241a.75.75 0 1 0 .944-1.165l-.944 1.165ZM5.002 6.336l.472-.583-.472.583Zm-1.366.178-.627-.41.627.41Zm3.082-3.876a.75.75 0 1 0 .737 1.306l-.737-1.306Zm3.148 2.957a.75.75 0 0 0 .474 1.423l-.474-1.423Zm11.069 8.8a9.25 9.25 0 0 1-11.329 6.54l-.388 1.45c5.735 1.536 11.63-1.867 13.166-7.602l-1.45-.388Zm-11.329 6.54a9.25 9.25 0 0 1-6.54-11.329l-1.45-.388C.08 14.952 3.483 20.847 9.218 22.383l.388-1.449Zm4.788-17.87a9.25 9.25 0 0 1 6.54 11.33l1.45.388c1.536-5.735-1.867-11.63-7.602-13.166l-.388 1.449Zm-1.922 8.353L5.474 5.752 4.53 6.918l6.998 5.664.944-1.165ZM3.065 9.605a9.24 9.24 0 0 1 1.198-2.68L3.01 6.102a10.74 10.74 0 0 0-1.393 3.115l1.45.388Zm4.39-5.662a9.218 9.218 0 0 1 6.94-.878l.387-1.45c-2.83-.757-5.7-.312-8.064 1.022l.737 1.306Zm-1.981 1.81c-.733-.594-1.891-.526-2.465.35l1.254.822a.128.128 0 0 1 .099-.06.228.228 0 0 1 .168.053l.944-1.166ZM17.25 12A5.25 5.25 0 0 1 12 17.25v1.5A6.75 6.75 0 0 0 18.75 12h-1.5ZM12 17.25A5.25 5.25 0 0 1 6.75 12h-1.5A6.75 6.75 0 0 0 12 18.75v-1.5Zm0-10.5c2.9 0 5.25 2.35 5.25 5.25h1.5A6.75 6.75 0 0 0 12 5.25v1.5ZM6.75 12c0-1.27.45-2.431 1.198-3.339L6.79 7.707A6.726 6.726 0 0 0 5.25 12h1.5Zm3.59-4.983A5.244 5.244 0 0 1 12 6.75v-1.5c-.745 0-1.462.12-2.134.344l.474 1.423Z" />
    </svg>
  );
};
export default SvgRadar2;