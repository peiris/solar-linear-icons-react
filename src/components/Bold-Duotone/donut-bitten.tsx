import * as React from "react";
import type { SVGProps } from "react";
const SvgDonutBitten = (props: SVGProps<SVGSVGElement>) => {
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
        d="M12 2C6.477 2 2 6.477 2 12c0 .354.018.704.054 1.048C2.404 13.352 4.367 15 6 15c1.212 0 2.606-.908 3.387-1.5l.01-.009a3 3 0 1 1 4.61.739c.47.412 1.084.77 1.798.77 1.69 0 1.69-2 3.38-2 1.077 0 1.925.814 2.399 1.403l.092.132c.211-.81.324-1.659.324-2.535 0-5.523-4.477-10-10-10Z"
        opacity={0.5}
      />
      <path
        fill="currentColor"
        d="M19.527 5.417a.759.759 0 0 0-.058.053l-1 1a.75.75 0 1 0 1.06 1.06l.905-.904c-.272-.426-.575-.83-.907-1.209ZM5.416 4.472c.017.02.034.04.053.058l1 1a.75.75 0 0 0 1.06-1.06l-.904-.905c-.426.272-.83.576-1.209.907ZM10.469 4.53a.75.75 0 1 1 1.06-1.06l1 1a.75.75 0 1 1-1.06 1.06l-1-1ZM16.6 5.45a.75.75 0 0 0-1.2-.9l-1.5 2a.75.75 0 1 0 1.2.9l1.5-2ZM8.409 7.56a.75.75 0 0 0 .918.53l1.366-.366a.75.75 0 0 0-.388-1.448l-1.366.366a.75.75 0 0 0-.53.918ZM17.465 10.354a.75.75 0 0 1-1.499.07L15.9 9.013a.75.75 0 0 1 1.498-.07l.067 1.412ZM18.436 12.059a.75.75 0 0 0 1.059.067l1.678-1.478a.75.75 0 0 0-.992-1.126L18.503 11a.75.75 0 0 0-.067 1.059ZM5.524 8.167a.75.75 0 1 1 1.365-.62l.585 1.286a.75.75 0 0 1-1.365.621l-.585-1.287ZM6.942 10.895a.75.75 0 0 1 .162 1.048l-.835 1.141a.75.75 0 1 1-1.21-.886l.835-1.14a.75.75 0 0 1 1.048-.163ZM2.855 8.98a.75.75 0 1 1 1.497-.084l.079 1.412a.75.75 0 0 1-1.498.083L2.855 8.98Z"
      />
      <path
        fill="currentColor"
        d="M6 15c1.212 0 2.607-.908 3.388-1.5l.009-.009a2.999 2.999 0 0 0 4.61.739c.47.412 1.085.77 1.799.77.845 0 1.267-.5 1.69-1 .422-.5.844-1 1.689-1 1.077 0 1.926.814 2.399 1.403l.092.132-.049.182c-.54-.461-1.44-.445-2.148.078-.601.445-.893 1.13-.793 1.726l-.102.101-.334-.452c-.616-.832-1.927-.906-2.93-.165-1.003.742-1.316 2.018-.7 2.85l.185.25-.185.186c-.513-.162-1.148-.054-1.675.337-.798.59-.935 1.693-.453 2.36A10.14 10.14 0 0 1 12 22c-5.168 0-9.421-3.922-9.945-8.952C2.404 13.352 4.367 15 6 15Z"
      />
    </svg>
  );
};
export default SvgDonutBitten;
