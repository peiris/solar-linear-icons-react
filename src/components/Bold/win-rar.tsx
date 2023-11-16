import * as React from "react";
import type { SVGProps } from "react";
const SvgWinRar = (props: SVGProps<SVGSVGElement>) => {
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
        d="M17.848 3.235C18 3.602 18 4.068 18 5v14c0 .932 0 1.398-.152 1.765a2.003 2.003 0 0 1-1.083 1.083C16.398 22 15.932 22 15 22c-.932 0-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083C12 20.398 12 19.932 12 19V5c0-.932 0-1.398.152-1.765a2.003 2.003 0 0 1 1.083-1.083C13.602 2 14.068 2 15 2c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083ZM15.75 11a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0v-2Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M10.65 21a4.006 4.006 0 0 1-.127-.804c-.023-.33-.023-.724-.023-1.152V4.956c0-.428 0-.822.023-1.152.017-.254.05-.525.127-.804H5c-.932 0-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083C2 4.602 2 5.068 2 6c0 .932 0 1.398.152 1.765a2 2 0 0 0 1.083 1.083C3.602 9 4.068 9 5 9c-.932 0-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083C2 10.602 2 11.068 2 12c0 .932 0 1.398.152 1.765a2 2 0 0 0 1.083 1.083C3.602 15 4.068 15 5 15c-.932 0-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083C2 16.602 2 17.068 2 18c0 .932 0 1.398.152 1.765a2 2 0 0 0 1.083 1.083C3.602 21 4.068 21 5 21h5.65ZM19.35 21c.705-.003 1.097-.02 1.415-.152a2 2 0 0 0 1.083-1.083C22 19.398 22 18.932 22 18c0-.932 0-1.398-.152-1.765a2 2 0 0 0-1.083-1.083c-.295-.122-.653-.146-1.265-.15v4.042c0 .428 0 .822-.023 1.152-.017.254-.05.525-.127.804ZM19.5 14.999c.612-.005.97-.029 1.265-.151a2 2 0 0 0 1.083-1.083C22 13.398 22 12.932 22 12c0-.932 0-1.398-.152-1.765a2 2 0 0 0-1.083-1.083c-.295-.122-.653-.146-1.265-.15v5.997ZM19.5 8.999c.612-.005.97-.029 1.265-.151a2 2 0 0 0 1.083-1.083C22 7.398 22 6.932 22 6c0-.932 0-1.398-.152-1.765a2 2 0 0 0-1.083-1.083c-.318-.132-.71-.15-1.415-.152.077.28.11.55.127.804.023.33.023.724.023 1.152V9Z"
      />
    </svg>
  );
};
export default SvgWinRar;