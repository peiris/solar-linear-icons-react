import * as React from "react";
import type { SVGProps } from "react";
const SvgMagicStick2 = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M13.036 3.652c2.215-1.312 3.322-1.968 4.136-1.503.813.466.793 1.744.755 4.3l-.01.662c-.012.727-.017 1.09.118 1.41.136.319.397.558.919 1.036l.475.435c1.837 1.683 2.756 2.524 2.54 3.47-.215.944-1.422 1.366-3.835 2.212l-.624.218c-.686.24-1.028.36-1.291.601-.264.24-.417.575-.724 1.243l-.28.609c-1.079 2.351-1.619 3.527-2.565 3.646-.947.118-1.673-.899-3.125-2.934l-.376-.526c-.413-.578-.62-.867-.917-1.038-.298-.17-.654-.203-1.365-.268l-.648-.06c-2.505-.228-3.757-.343-4.126-1.214-.37-.872.388-1.923 1.903-4.026l.392-.544c.43-.597.646-.896.725-1.242.079-.346.012-.7-.12-1.409l-.122-.645c-.468-2.493-.702-3.74.016-4.397s1.913-.29 4.302.445l.618.19c.678.21 1.018.314 1.365.27.346-.043.661-.23 1.29-.602l.574-.34Z"
      />
      <path
        fill="currentColor"
        d="M17.53 16.47a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm2.94 5.06a.75.75 0 1 0 1.06-1.06l-1.06 1.06Zm-4-4 4 4 1.06-1.06-4-4-1.06 1.06Z"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgMagicStick2;
