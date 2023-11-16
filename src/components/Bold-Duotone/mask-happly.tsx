import * as React from "react";
import type { SVGProps } from "react";
const SvgMaskHapply = (props: SVGProps<SVGSVGElement>) => {
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
        d="M21 6.43V11.9c0 5.69-4.239 8.45-6.899 9.622C13.38 21.841 13.02 22 12 22c-1.02 0-1.38-.159-2.101-.477C7.239 20.351 3 17.59 3 11.901V6.43c0-2.269 0-3.404.707-4.024.708-.621 1.789-.434 3.95-.061l1.055.182c1.64.283 2.46.425 3.288.425.828 0 1.648-.142 3.288-.425l1.054-.182c2.163-.373 3.244-.56 3.95.06C21 3.026 21 4.16 21 6.43Z"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        d="M7.171 9.14c.124-.256.586-.606 1.33-.606.742 0 1.205.35 1.328.606a.738.738 0 0 0 1.006.348.79.79 0 0 0 .336-1.043c-.459-.95-1.567-1.466-2.67-1.466-1.104 0-2.213.515-2.672 1.466a.79.79 0 0 0 .336 1.043.738.738 0 0 0 1.006-.348ZM15.5 8.534c-.743 0-1.206.35-1.329.606a.738.738 0 0 1-1.006.348.79.79 0 0 1-.336-1.043c.459-.95 1.568-1.466 2.671-1.466 1.104 0 2.212.515 2.671 1.466a.79.79 0 0 1-.336 1.043.738.738 0 0 1-1.006-.348c-.123-.256-.586-.606-1.329-.606ZM7.989 14.542a.804.804 0 0 1-.032-1.104.748.748 0 0 1 1.067-.022c.02.016.067.053.103.079.1.071.267.177.506.285.475.217 1.248.453 2.367.453 1.12 0 1.892-.236 2.367-.453.239-.108.406-.214.507-.285.05-.036.084-.064.102-.079l.014-.012.001-.001a.732.732 0 0 1 1.052.035.797.797 0 0 1-.026 1.098v.002h-.002l-.003.004-.008.007-.02.019a3.028 3.028 0 0 1-.262.209 4.571 4.571 0 0 1-.751.426c-.663.302-1.64.584-2.97.584-1.331 0-2.309-.282-2.971-.584a4.569 4.569 0 0 1-.752-.427 3.054 3.054 0 0 1-.288-.232l-.001-.002Z"
      />
    </svg>
  );
};
export default SvgMaskHapply;
