import * as React from "react";
import type { SVGProps } from "react";
const SvgDelivery = (props: SVGProps<SVGSVGElement>) => {
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
        d="M18.09 2.549c-.552-.31-1.14-.34-1.761-.263-.59.074-1.309.26-2.172.485l-2.019.524c-.863.225-1.581.411-2.13.634-.579.234-1.079.548-1.403 1.093-.326.548-.358 1.134-.277 1.746.077.577.27 1.277.5 2.111l.543 1.964c.23.835.424 1.534.655 2.07.245.57.572 1.055 1.128 1.367.552.309 1.14.34 1.762.262.59-.073 1.309-.26 2.172-.485l2.019-.524c.863-.224 1.581-.411 2.13-.634.579-.234 1.079-.548 1.403-1.093.326-.548.358-1.134.277-1.745-.077-.577-.27-1.278-.5-2.112l-.543-1.964c-.23-.834-.424-1.534-.655-2.07-.245-.57-.573-1.055-1.128-1.366Zm-3.605 1.686c.925-.24 1.548-.4 2.03-.46.461-.058.682-.007.843.083.157.088.308.241.483.65.185.43.353 1.029.601 1.927l.514 1.863c.249.898.413 1.498.474 1.96.058.439.006.638-.08.781-.087.147-.245.296-.675.47-.448.181-1.07.345-1.995.585l-1.92.499c-.925.24-1.548.4-2.03.46-.462.059-.682.008-.843-.082-.157-.088-.308-.242-.483-.65-.185-.43-.353-1.03-.601-1.928l-.514-1.862c-.249-.9-.413-1.499-.474-1.96-.058-.44-.006-.638.08-.782.087-.147.245-.296.675-.47.448-.181 1.07-.344 1.995-.585l1.92-.499Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.2 4.725a.75.75 0 0 0-.4 1.445l1.703.473c.426.118.743.44.851.831l1.952 7.063c-.075.015-.15.032-.225.052-1.977.513-3.185 2.502-2.643 4.467.54 1.955 2.594 3.082 4.563 2.57 1.724-.447 2.863-2.016 2.767-3.712l8.42-2.188a.75.75 0 0 0-.377-1.452l-8.438 2.193a3.719 3.719 0 0 0-2.506-1.91L6.8 7.074a2.707 2.707 0 0 0-1.896-1.878l-1.703-.472ZM7.459 16.04c1.212-.314 2.428.389 2.74 1.519.31 1.12-.37 2.303-1.574 2.616-1.212.315-2.428-.389-2.74-1.519-.31-1.12.37-2.303 1.574-2.616Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgDelivery;
