import * as React from "react";
import type { SVGProps } from "react";
const SvgSimCardMinimalistic = (props: SVGProps<SVGSVGElement>) => {
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
        d="M12.62 2.762A7.453 7.453 0 0 0 12 2.75c-2.378 0-4.086.002-5.386.176-1.279.172-2.05.5-2.62 1.069-.569.57-.896 1.34-1.068 2.619-.174 1.3-.176 3.008-.176 5.386s.002 4.086.176 5.386c.172 1.279.5 2.05 1.069 2.62.57.569 1.34.896 2.619 1.068 1.3.174 3.008.176 5.386.176s4.086-.002 5.386-.176c1.279-.172 2.05-.5 2.62-1.069.569-.57.896-1.34 1.068-2.619.174-1.3.176-3.008.176-5.386 0-.353 0-.487-.012-.62a3.293 3.293 0 0 0-.749-1.807 7.673 7.673 0 0 0-.439-.457L14.884 3.95a7.718 7.718 0 0 0-.457-.44 3.292 3.292 0 0 0-1.806-.748Zm-.588-1.512c.311 0 .512 0 .719.018.963.084 1.9.473 2.64 1.094.16.133.305.279.53.504l.024.023 5.19 5.19c.224.225.37.37.503.53a4.791 4.791 0 0 1 1.094 2.64c.018.207.018.408.018.72v.088c0 2.309 0 4.118-.19 5.53-.194 1.444-.6 2.584-1.494 3.479-.895.895-2.035 1.3-3.48 1.494-1.411.19-3.22.19-5.529.19h-.114c-2.309 0-4.118 0-5.53-.19-1.444-.194-2.584-.6-3.479-1.494-.895-.895-1.3-2.035-1.494-3.48-.19-1.411-.19-3.22-.19-5.529v-.114c0-2.309 0-4.118.19-5.53.194-1.444.6-2.584 1.494-3.479.895-.895 2.035-1.3 3.48-1.494 1.411-.19 3.22-.19 5.529-.19h.088Zm-2.605 11H14.573c.393 0 .696 0 .963.053a2.75 2.75 0 0 1 2.161 2.16c.053.268.053.571.053.964v.146c0 .393 0 .696-.053.963a2.75 2.75 0 0 1-2.16 2.161c-.268.053-.571.053-.964.053H9.427c-.393 0-.696 0-.963-.053a2.75 2.75 0 0 1-2.161-2.16c-.053-.268-.053-.571-.053-.964a175.73 175.73 0 0 0 0-.146c0-.393 0-.696.053-.963a2.75 2.75 0 0 1 2.16-2.161c.268-.053.571-.053.964-.053Zm.073 1.5c-.5 0-.641.004-.744.024a1.25 1.25 0 0 0-.982.982c-.02.103-.024.243-.024.744 0 .5.004.641.024.744.099.496.486.883.982.982.103.02.243.024.744.024h5c.5 0 .641-.004.744-.024a1.25 1.25 0 0 0 .982-.982c.02-.103.024-.243.024-.744 0-.5-.004-.641-.024-.744a1.25 1.25 0 0 0-.982-.982c-.103-.02-.243-.024-.744-.024h-5Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgSimCardMinimalistic;
