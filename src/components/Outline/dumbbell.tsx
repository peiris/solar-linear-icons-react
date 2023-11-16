import * as React from "react";
import type { SVGProps } from "react";
const SvgDumbbell = (props: SVGProps<SVGSVGElement>) => {
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
        d="M4.975 6.25h.05c.445 0 .816 0 1.12.02.317.022.617.07.907.19a2.75 2.75 0 0 1 1.489 1.488c.075.181.114.387.138.563.025.188.041.396.051.61.01.198.014.411.017.629h6.506c.003-.218.008-.431.017-.63.01-.213.026-.421.051-.609.024-.176.063-.382.138-.563a2.75 2.75 0 0 1 1.489-1.489c.29-.12.59-.167.907-.188.304-.021.675-.021 1.12-.021h.05c.445 0 .816 0 1.12.02.317.022.617.07.907.19a2.75 2.75 0 0 1 1.489 1.488c.12.29.167.59.188.907.021.304.021.675.021 1.12v4.05c0 .445 0 .816-.02 1.12a2.822 2.822 0 0 1-.19.907 2.75 2.75 0 0 1-1.488 1.489c-.29.12-.59.167-.907.188-.304.021-.675.021-1.12.021h-.05c-.445 0-.816 0-1.12-.02a2.822 2.822 0 0 1-.907-.19 2.75 2.75 0 0 1-1.489-1.488 2.328 2.328 0 0 1-.138-.563 7.039 7.039 0 0 1-.051-.61c-.01-.198-.014-.411-.017-.629H8.747c-.003.218-.008.431-.017.63-.01.213-.026.421-.051.609a2.325 2.325 0 0 1-.138.563 2.75 2.75 0 0 1-1.489 1.489c-.29.12-.59.167-.907.188-.304.021-.675.021-1.12.021h-.05c-.445 0-.816 0-1.12-.02a2.822 2.822 0 0 1-.907-.19 2.75 2.75 0 0 1-1.489-1.488c-.12-.29-.167-.59-.188-.907-.021-.304-.021-.675-.021-1.12v-4.05c0-.445 0-.816.02-1.12.022-.317.07-.617.19-.907a2.75 2.75 0 0 1 1.488-1.489c.29-.12.59-.167.907-.188.304-.021.675-.021 1.12-.021ZM3.957 7.767c-.241.017-.358.046-.435.078a1.25 1.25 0 0 0-.677.677c-.032.077-.061.194-.078.435A17.09 17.09 0 0 0 2.75 10v4c0 .476 0 .796.017 1.043.017.241.046.358.078.435.127.307.37.55.677.677.077.032.194.061.435.078.247.017.567.017 1.043.017s.796 0 1.043-.017c.241-.017.358-.046.435-.078.307-.127.55-.37.677-.677 0 0 .005-.012.012-.045.008-.036.017-.085.026-.147.017-.126.03-.286.039-.477.018-.383.018-.838.018-1.309a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 .75.75c0 .47 0 .926.018 1.309.01.19.022.35.04.477.008.063.017.11.025.147.008.033.013.046.013.046.126.307.37.549.676.676.077.032.194.061.435.078.247.017.567.017 1.043.017s.796 0 1.043-.017c.241-.017.358-.046.435-.078.307-.127.55-.37.677-.677.032-.077.061-.194.078-.435.017-.247.017-.567.017-1.043v-4c0-.476 0-.796-.017-1.043-.017-.241-.046-.358-.078-.435a1.25 1.25 0 0 0-.677-.677c-.077-.032-.194-.061-.435-.078A17.091 17.091 0 0 0 19 7.75c-.476 0-.796 0-1.043.017-.241.017-.358.046-.435.078a1.25 1.25 0 0 0-.677.677s-.005.013-.012.045a1.731 1.731 0 0 0-.026.147c-.017.126-.03.286-.039.477-.018.383-.018.838-.018 1.309a.75.75 0 0 1-.75.75H8a.75.75 0 0 1-.75-.75c0-.47 0-.926-.018-1.309a5.6 5.6 0 0 0-.04-.477 1.699 1.699 0 0 0-.025-.147c-.007-.032-.013-.046-.013-.046a1.248 1.248 0 0 0-.676-.676c-.077-.032-.194-.061-.435-.078A17.09 17.09 0 0 0 5 7.75c-.476 0-.796 0-1.043.017Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgDumbbell;
