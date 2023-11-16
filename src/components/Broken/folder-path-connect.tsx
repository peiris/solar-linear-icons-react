import * as React from "react";
import type { SVGProps } from "react";
const SvgFolderPathConnect = (props: SVGProps<SVGSVGElement>) => {
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
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M16.5 7.5h-3M22 20h-8M2 20h8M12 18v-3"
      />
      <circle cx={12} cy={20} r={2} stroke="currentColor"  />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M5 5.217c0-.573 0-.86.049-1.099.213-1.052 1.1-1.874 2.232-2.073C7.538 2 7.847 2 8.465 2c.27 0 .406 0 .536.011.56.049 1.093.254 1.526.587.1.078.196.167.388.344l.385.358c.571.53.857.795 1.198.972.188.097.388.174.594.228.377.1.78.1 1.588.1h.261c1.843 0 2.765 0 3.363.5.055.046.108.095.157.146.439.453.52 1.104.536 2.254m-.003 3.6c-.025 1.612-.154 2.526-.814 3.139-.82.761-2.14.761-4.78.761h-2.8c-2.64 0-3.96 0-4.78-.761C5 13.477 5 12.25 5 9.8V8.5"
      />
    </svg>
  );
};
export default SvgFolderPathConnect;
