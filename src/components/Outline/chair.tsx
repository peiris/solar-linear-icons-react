import * as React from "react";
import type { SVGProps } from "react";
const SvgChair = (props: SVGProps<SVGSVGElement>) => {
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
        d="M11.964 2.25h.072c.904 0 1.633 0 2.222.053.606.055 1.136.172 1.617.45a3.75 3.75 0 0 1 1.373 1.372c.278.481.394 1.011.449 1.617.053.589.053 1.318.053 2.222v3.407c.494.104.941.309 1.302.72.445.51.59 1.146.651 1.846l.004.047c.035.41.069.797.047 1.121-.025.371-.126.75-.427 1.078-.31.34-.702.465-1.076.519-.152.022-.32.034-.5.04V21a.75.75 0 0 1-1.5 0v-4.25h-8.5V21a.75.75 0 0 1-1.5 0v-4.258a4.84 4.84 0 0 1-.502-.04c-.374-.054-.765-.18-1.076-.519-.301-.328-.402-.707-.427-1.078-.022-.324.012-.712.047-1.12l.004-.048c.06-.7.206-1.336.651-1.845.361-.412.808-.617 1.302-.721V7.964c0-.904 0-1.633.053-2.222.055-.606.172-1.136.45-1.617a3.75 3.75 0 0 1 1.372-1.373c.481-.277 1.011-.394 1.617-.449.589-.053 1.318-.053 2.222-.053Zm-3.52 9H7.75V8c0-.948 0-1.61.047-2.122.046-.503.13-.788.255-1.003a2.25 2.25 0 0 1 .823-.824c.215-.124.5-.208 1.003-.254.512-.046 1.174-.047 2.122-.047s1.61 0 2.122.047c.503.046.788.13 1.003.254.342.198.626.482.824.824.124.215.208.5.254 1.003.046.512.047 1.174.047 2.122v3.25H8.444Zm.056 1.5c-.849 0-1.4.002-1.806.065-.374.057-.517.15-.617.265-.126.144-.234.384-.285.985-.041.474-.062.745-.05.94a.55.55 0 0 0 .024.144c.004.01.006.013.012.02l.001.001.003.002a.68.68 0 0 0 .179.045c.218.031.524.033 1.04.033h10c.514 0 .82-.002 1.038-.033a.68.68 0 0 0 .179-.045l.003-.001.001-.002a.048.048 0 0 0 .012-.02.551.551 0 0 0 .023-.144c.013-.195-.008-.466-.049-.94-.051-.6-.159-.841-.285-.985-.1-.114-.243-.208-.617-.265-.406-.063-.957-.065-1.806-.065h-7Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgChair;