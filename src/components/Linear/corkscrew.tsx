import * as React from "react";
import type { SVGProps } from "react";
const SvgCorkscrew = (props: SVGProps<SVGSVGElement>) => {
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
        d="m18.261 13.482.53-.53-.53.53ZM10.518 5.74l-.53.53.53-.53Zm3.097-3.098-.53.53.53-.53Zm7.743 7.744.53-.53-.53.53ZM1.47 21.47a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm3.082-2.022-.53-.53.53.53Zm.215-1.243-.678.321.678-.32Zm-.95-2.004-.677.321.678-.32Zm.79-.696-.403.633.402-.633Zm6.706 4.259.402-.633-.402.633Zm.743-.775-.615.428.615-.428Zm-5.593-8.024-.615.428.615-.428Zm.763-.763.429-.615-.43.615Zm5.548 3.867-.43.615.43-.615Zm.779-.736-.639.393.639-.393Zm-.646-1.05.639-.393-.64.393Zm2.013-2.142a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm6.969-.286L14.145 2.11l-1.06 1.06 7.743 7.744 1.06-1.06ZM9.987 6.269l7.744 7.744 1.06-1.061-7.743-7.743-1.06 1.06Zm7.744 7.744a2.94 2.94 0 0 0 4.158 0l-1.06-1.061a1.44 1.44 0 0 1-2.038 0l-1.06 1.06ZM9.987 2.11a2.94 2.94 0 0 0 0 4.158l1.061-1.06a1.44 1.44 0 0 1 0-2.037l-1.06-1.06Zm4.158 0a2.94 2.94 0 0 0-4.158 0l1.061 1.06a1.44 1.44 0 0 1 2.037 0l1.06-1.06Zm6.683 8.804a1.44 1.44 0 0 1 0 2.037l1.06 1.06a2.94 2.94 0 0 0 0-4.157l-1.06 1.06ZM2.53 22.53l2.553-2.552-1.061-1.06L1.47 21.47l1.06 1.06Zm2.915-4.646-.95-2.004-1.355.642.95 2.004 1.355-.642Zm-1.241-1.746 6.707 4.259.804-1.266-6.707-4.26-.804 1.267Zm8.467 2.422L7.08 10.536l-1.23.857 5.592 8.024 1.23-.857Zm-5.874-7.742 5.548 3.866.857-1.23-5.547-3.867-.858 1.23Zm7.395 2.122-.646-1.05-1.278.786.646 1.05 1.278-.786Zm-.597-1.475 1.325-1.324-1.06-1.06-1.325 1.324 1.06 1.06Zm-.05.425a.345.345 0 0 1 .05-.425l-1.06-1.06a1.845 1.845 0 0 0-.267 2.271l1.278-.786Zm-1.2 2.794c1.154.805 2.584-.546 1.847-1.744l-1.278.786a.218.218 0 0 1-.022-.144.193.193 0 0 1 .056-.11.193.193 0 0 1 .112-.049.217.217 0 0 1 .142.03l-.857 1.231Zm-5.266-4.148a.22.22 0 0 1 .03.146.193.193 0 0 1-.053.113.193.193 0 0 1-.113.052.22.22 0 0 1-.146-.03l.858-1.23c-1.189-.828-2.635.618-1.807 1.806l1.23-.857Zm3.832 9.861c1.197.76 2.57-.675 1.76-1.837l-1.23.857a.218.218 0 0 1-.03-.143.193.193 0 0 1 .05-.112.193.193 0 0 1 .11-.055.218.218 0 0 1 .144.024l-.804 1.266ZM4.496 15.88a.214.214 0 0 1-.05.239.214.214 0 0 1-.243.02l.805-1.267c-1.098-.698-2.425.475-1.868 1.65l1.356-.642Zm.587 4.098c.551-.552.695-1.39.362-2.094l-1.356.642a.344.344 0 0 1-.067.391l1.06 1.061Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M22 12a2.15 2.15 0 1 1-4.3 0 2.15 2.15 0 0 1 4.3 0Z"
      />
    </svg>
  );
};
export default SvgCorkscrew;