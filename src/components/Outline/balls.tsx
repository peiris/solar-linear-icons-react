import * as React from "react";
import type { SVGProps } from "react";
const SvgBalls = (props: SVGProps<SVGSVGElement>) => {
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
        d="M8.485 2.75a5.72 5.72 0 0 0-2.86.771 5.724 5.724 0 0 0-1.992 1.917l.121.082c.23.16.545.4.907.733.725.667 1.638 1.704 2.43 3.206.55 1.042.892 2.024 1.105 2.865.384-.907.914-1.762 1.64-2.488.307-.306.636-.578.983-.818-.31-.433-.618-.924-.91-1.477a12.72 12.72 0 0 1-1.317-3.89c-.056-.346-.088-.65-.107-.901Zm1.525.203a9.5 9.5 0 0 0 .063.46 11.22 11.22 0 0 0 1.162 3.428c.29.55.597 1.027.9 1.437a10.687 10.687 0 0 1 2.046-.67 5.734 5.734 0 0 0-.702-1.982 5.729 5.729 0 0 0-3.469-2.673Zm5.65 4.408a7.235 7.235 0 0 0-.882-2.485 7.24 7.24 0 0 0-5.41-3.573A7.249 7.249 0 0 0 7.36 15.659a19.746 19.746 0 0 0-.047 3.646 3.645 3.645 0 0 0 3.381 3.382c.962.073 2.134.1 3.357-.017 2.09-.202 4.442-.837 6.112-2.506 1.67-1.67 2.305-4.021 2.506-6.112.117-1.223.09-2.395.017-3.357a3.645 3.645 0 0 0-3.382-3.382 19.746 19.746 0 0 0-3.644.048Zm-8.67 6.686a5.73 5.73 0 0 1-3.469-2.673 5.733 5.733 0 0 1-.52-4.549c.17.125.392.3.645.533.616.566 1.417 1.47 2.119 2.801a11.22 11.22 0 0 1 1.162 3.428c.027.166.047.32.063.46ZM17.754 8.75l3.496 3.496c-.002-.51-.025-.995-.059-1.437a2.145 2.145 0 0 0-2-2 19.953 19.953 0 0 0-1.437-.059Zm3.385 5.506-5.395-5.395c-1.827.22-3.615.803-4.847 2.036-1.233 1.232-1.815 3.02-2.036 4.847l5.395 5.395c1.827-.22 3.615-.803 4.847-2.036 1.233-1.232 1.815-3.02 2.036-4.847Zm-8.893 6.994L8.75 17.754c.002.51.025.995.059 1.437a2.146 2.146 0 0 0 2 2c.442.034.927.057 1.437.059Zm2.724-9.28a.75.75 0 0 1 1.06 0l.47.47.47-.47a.75.75 0 0 1 1.06 1.06l-.47.47.47.47a.75.75 0 0 1-1.06 1.06l-.47-.47-.44.44.47.47a.75.75 0 0 1-1.06 1.06l-.47-.47-.44.44.47.47a.75.75 0 0 1-1.06 1.06l-.47-.47-.47.47a.75.75 0 0 1-1.06-1.06l.47-.47-.47-.47a.75.75 0 1 1 1.06-1.06l.47.47.44-.44-.47-.47a.75.75 0 1 1 1.06-1.06l.47.47.44-.44-.47-.47a.75.75 0 0 1 0-1.06Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgBalls;