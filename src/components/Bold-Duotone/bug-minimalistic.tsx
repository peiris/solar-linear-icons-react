import * as React from "react";
import type { SVGProps } from "react";
const SvgBugMinimalistic = (props: SVGProps<SVGSVGElement>) => {
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
        d="M5 10a7 7 0 0 1 14 0v5a7 7 0 1 1-14 0v-5Z"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        d="M9.75 15.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75ZM10.5 9.75a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3ZM17.416 2.624a.75.75 0 1 0-.832-1.248l-2.786 1.857c.593.157 1.154.39 1.674.687l1.944-1.296ZM18.83 8.458a6.954 6.954 0 0 0-.477-1.402.755.755 0 0 1 .07-.033l1.798-.72a.75.75 0 1 1 .557 1.393l-1.797.72c-.05.02-.1.034-.151.042ZM19 13.75h3a.75.75 0 0 0 0-1.5h-3v1.5ZM17.942 18.702c.245-.392.452-.81.616-1.25a.747.747 0 0 1 .22.052l2 .8a.75.75 0 0 1-.556 1.393l-2-.8a.746.746 0 0 1-.28-.195ZM5.442 17.452c.164.44.37.858.616 1.25a.746.746 0 0 1-.28.195l-2 .8a.75.75 0 1 1-.557-1.393l2-.8a.747.747 0 0 1 .22-.052ZM5 12.25H2a.75.75 0 0 0 0 1.5h3v-1.5ZM5.648 7.056a6.948 6.948 0 0 0-.478 1.402.754.754 0 0 1-.15-.042l-1.798-.72a.75.75 0 0 1 .557-1.392l1.797.719c.025.01.049.02.072.033ZM8.528 3.92 6.584 2.624a.75.75 0 0 1 .832-1.248l2.786 1.857a6.957 6.957 0 0 0-1.674.687Z"
      />
    </svg>
  );
};
export default SvgBugMinimalistic;
