import * as React from "react";
import type { SVGProps } from "react";
const SvgEraserSquare = (props: SVGProps<SVGSVGElement>) => {
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
        d="m7.67 11.606.53.53-.53-.53ZM6 13.968h-.75H6ZM10.032 18v.75V18Zm1.574-10.33-.53-.53.53.53Zm1.045 8.403a.75.75 0 1 0 1.06-1.06l-1.06 1.06Zm-3.663-5.784a.75.75 0 1 0-1.061 1.06l1.06-1.06Zm6.812 1.574L11.863 15.8l1.061 1.06 3.936-3.936-1.06-1.06Zm-7.6.274L12.137 8.2l-1.061-1.06-3.936 3.936 1.06 1.06Zm0 3.663c-.571-.572-.946-.949-1.186-1.264-.228-.298-.264-.452-.264-.568h-1.5c0 .576.242 1.046.571 1.478.316.414.777.873 1.319 1.414L8.2 15.8Zm-1.06-4.724c-.542.542-1.003 1-1.319 1.414-.329.432-.571.902-.571 1.478h1.5c0-.116.036-.27.264-.568.24-.315.615-.692 1.186-1.263l-1.06-1.061Zm4.723 4.724c-.571.571-.948.946-1.263 1.186-.298.228-.452.264-.568.264v1.5c.576 0 1.046-.242 1.478-.571.414-.316.872-.777 1.414-1.319l-1.06-1.06ZM7.14 16.86c.541.542 1 1.003 1.414 1.319.432.329.902.571 1.478.571v-1.5c-.116 0-.27-.036-.568-.264-.315-.24-.692-.615-1.264-1.186l-1.06 1.06ZM15.8 8.2c.571.572.946.949 1.186 1.264.228.298.264.452.264.568h1.5c0-.576-.242-1.046-.571-1.478-.316-.414-.777-.873-1.319-1.414L15.8 8.2Zm1.06 4.724c.542-.542 1.003-1 1.319-1.414.329-.432.571-.902.571-1.478h-1.5c0 .116-.036.27-.264.568-.24.315-.615.692-1.186 1.263l1.06 1.061Zm0-5.784c-.541-.542-1-1.003-1.414-1.319-.432-.329-.902-.571-1.478-.571v1.5c.116 0 .27.036.568.264.315.24.692.615 1.264 1.186l1.06-1.06ZM12.137 8.2c.571-.571.948-.946 1.263-1.186.298-.228.452-.264.568-.264v-1.5c-.576 0-1.046.242-1.478.571-.414.316-.872.777-1.414 1.319l1.06 1.06Zm1.574 6.812L8.988 10.29l-1.061 1.06 4.724 4.724 1.06-1.06Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"
      />
    </svg>
  );
};
export default SvgEraserSquare;
