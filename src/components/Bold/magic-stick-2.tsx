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
        fill="currentColor"
        d="m13.036 3.652-.573.339c-.63.373-.945.56-1.291.603-.347.043-.687-.061-1.365-.27l-.618-.19c-2.39-.736-3.584-1.103-4.302-.446-.718.657-.484 1.904-.016 4.397l.121.645c.133.709.2 1.063.12 1.409-.078.346-.293.645-.724 1.242l-.392.544C2.48 14.028 1.723 15.08 2.093 15.95c.37.872 1.621.987 4.126 1.216l.648.06c.711.064 1.067.097 1.365.267.298.17.504.46.917 1.038l.376.526c1.452 2.035 2.178 3.052 3.125 2.934.946-.119 1.486-1.295 2.566-3.646l.28-.609c.156-.341.273-.596.385-.795l4.589 4.59a.75.75 0 1 0 1.06-1.061L17.1 16.038c.122-.045.258-.092.411-.146l.624-.218c2.413-.846 3.62-1.268 3.835-2.213.215-.945-.703-1.786-2.54-3.469l-.475-.435c-.522-.478-.783-.717-.919-1.036-.135-.32-.13-.683-.118-1.41l.01-.661c.038-2.557.058-3.835-.755-4.3-.814-.466-1.921.19-4.136 1.502Z"
      />
    </svg>
  );
};
export default SvgMagicStick2;
