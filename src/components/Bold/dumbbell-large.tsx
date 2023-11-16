import * as React from "react";
import type { SVGProps } from "react";
const SvgDumbbellLarge = (props: SVGProps<SVGSVGElement>) => {
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
        d="m3.924 18.607 1.469 1.469c.692.692 1.038 1.038 1.468 1.038.43 0 .776-.346 1.468-1.038l.367-.367.367.367.735.734c.686.686 1.029 1.029 1.432 1.137.264.07.542.07.806 0 .403-.108.746-.451 1.432-1.137.686-.686 1.03-1.03 1.137-1.433.071-.264.071-.542 0-.806-.107-.403-.45-.746-1.137-1.432l-1.1-1.101 3.67-3.67 1.101 1.1c.686.686 1.03 1.03 1.432 1.137.264.071.542.071.806 0 .404-.107.747-.45 1.433-1.137.686-.686 1.029-1.029 1.137-1.432.07-.264.07-.542 0-.806-.108-.403-.451-.746-1.137-1.432l-.734-.735-.371-.363.37-.37c.693-.693 1.039-1.039 1.039-1.469 0-.43-.346-.776-1.038-1.468l-1.469-1.469c-.692-.692-1.038-1.038-1.468-1.038-.43 0-.776.346-1.468 1.038l-.367.368-1.102-1.102c-.686-.686-1.029-1.029-1.432-1.137a1.557 1.557 0 0 0-.806 0c-.403.108-.746.451-1.432 1.137-.686.686-1.03 1.03-1.137 1.433-.071.264-.071.542 0 .806.107.403.45.746 1.137 1.432l1.1 1.101-3.67 3.67-1.101-1.1c-.686-.686-1.03-1.03-1.432-1.137a1.557 1.557 0 0 0-.806 0c-.404.107-.747.45-1.433 1.137-.686.686-1.029 1.029-1.137 1.432-.07.264-.07.542 0 .806.108.403.451.746 1.137 1.432l1.102 1.102-.368.367c-.692.692-1.038 1.038-1.038 1.468 0 .43.346.776 1.038 1.468Z"
      />
    </svg>
  );
};
export default SvgDumbbellLarge;
