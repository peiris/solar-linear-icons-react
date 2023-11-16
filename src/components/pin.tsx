import * as React from "react";
import type { SVGProps } from "react";
const SvgPin = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="m15.99 4.95.53-.53-.53.53Zm3.082 3.086-.531.53.53-.53ZM8.738 19.429l-.53.53.53-.53Zm-4.116-4.12.53-.53-.53.53Zm12.945-.315-.264-.702.264.702Zm-1.917.72.264.703-.264-.702ZM8.332 8.383l-.704-.258.704.258Zm.695-1.896.704.258-.704-.258Zm-3.182 4.188.2.723-.2-.723Zm1.457-.539-.439-.609.439.61Zm.374-.345.57.487-.57-.487Zm6.575 6.59.491.568-.491-.567Zm-.87 1.821-.724-.199.724.2Zm.536-1.454-.61-.438.61.438ZM2.718 12.755l-.75.005.75-.005Zm.212-.803-.65-.374.65.374Zm8.375 9.391.001-.75v.75Zm.788-.208-.371-.652.371.652Zm-.396-19.099.162.732-.162-.732ZM1.47 21.47a.75.75 0 0 0 1.062 1.06L1.47 21.47Zm5.715-3.598a.75.75 0 0 0-1.061-1.06l1.06 1.06ZM15.459 5.48l3.082 3.086 1.061-1.06L16.52 4.42l-1.061 1.06ZM9.269 18.9l-4.117-4.12-1.06 1.06 4.116 4.12 1.061-1.06Zm8.034-4.607-1.917.72.528 1.405 1.917-.72-.528-1.405ZM9.036 8.64l.695-1.896-1.409-.516-.694 1.896 1.408.516Zm-2.992 2.756c.712-.196 1.253-.334 1.696-.652l-.877-1.218c-.172.125-.397.198-1.217.424l.398 1.447Zm1.584-3.272c-.293.8-.385 1.018-.523 1.18l1.142.973c.353-.415.535-.944.79-1.637l-1.409-.516Zm.112 2.62c.187-.135.357-.292.507-.467l-1.142-.973a1.365 1.365 0 0 1-.242.222l.877 1.218Zm7.646 4.268c-.689.26-1.214.445-1.626.801l.982 1.135c.16-.14.377-.233 1.172-.531l-.528-1.405ZM14.104 18.4c.225-.819.298-1.043.422-1.216l-1.219-.875c-.317.443-.454.983-.65 1.693l1.447.398Zm-.344-2.586c-.17.146-.322.313-.453.495l1.22.875c.062-.087.134-.167.215-.236l-.982-1.135Zm-8.608-1.036c-.646-.647-1.084-1.087-1.368-1.444-.286-.359-.315-.514-.316-.583l-1.5.009c.004.582.293 1.07.642 1.508.35.44.861.95 1.481 1.57l1.061-1.06Zm.494-4.828c-.846.234-1.542.424-2.063.634-.52.208-1.012.49-1.302.994l1.3.748c.034-.06.136-.18.56-.35.424-.17 1.022-.337 1.903-.58L5.646 9.95Zm-2.178 2.8a.84.84 0 0 1 .112-.424l-1.3-.748a2.34 2.34 0 0 0-.312 1.182l1.5-.01Zm4.74 7.21c.624.624 1.137 1.139 1.578 1.49.441.352.932.642 1.518.643l.002-1.5c-.07 0-.225-.029-.585-.316-.36-.286-.802-.727-1.452-1.378l-1.061 1.06Zm4.45-1.958c-.245.888-.412 1.49-.583 1.917-.172.428-.293.53-.353.564l.743 1.303c.509-.29.792-.786 1.002-1.309.21-.524.402-1.225.637-2.077l-1.447-.398Zm-1.354 4.091c.407 0 .807-.105 1.161-.307l-.743-1.303a.835.835 0 0 1-.416.11l-.002 1.5Zm7.237-13.527c1.064 1.064 1.8 1.803 2.25 2.413.444.598.495.917.441 1.167l1.466.317c.19-.878-.16-1.647-.701-2.377-.534-.72-1.366-1.551-2.395-2.58l-1.061 1.06Zm-.71 7.13c1.361-.511 2.463-.923 3.246-1.358.795-.44 1.431-.996 1.621-1.875l-1.466-.317c-.054.25-.232.52-.883.88-.663.369-1.638.737-3.046 1.266l.528 1.404ZM16.52 4.42c-1.036-1.037-1.872-1.876-2.595-2.414-.734-.544-1.508-.897-2.39-.702l.324 1.464c.25-.055.569-.005 1.171.443.613.455 1.358 1.197 2.429 2.27l1.061-1.06ZM9.73 6.744c.522-1.423.886-2.41 1.251-3.08.36-.66.628-.84.878-.896l-.323-1.464c-.882.194-1.435.84-1.872 1.642-.431.792-.837 1.906-1.342 3.282l1.409.516ZM2.53 22.53l4.654-4.658-1.061-1.06-4.654 4.658 1.062 1.06Z" />
    </svg>
  );
};
export default SvgPin;