import * as React from "react";
import type { SVGProps } from "react";
const SvgGalleryAdd = (props: SVGProps<SVGSVGElement>) => {
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
        d="M17.5 11c-2.121 0-3.182 0-3.841-.659C13 9.682 13 8.621 13 6.5c0-2.121 0-3.182.659-3.841C14.318 2 15.379 2 17.5 2c2.121 0 3.182 0 3.841.659C22 3.318 22 4.379 22 6.5c0 2.121 0 3.182-.659 3.841-.659.659-1.72.659-3.841.659Zm.75-6.5a.75.75 0 0 0-1.5 0v1.25H15.5a.75.75 0 0 0 0 1.5h1.25V8.5a.75.75 0 0 0 1.5 0V7.25h1.25a.75.75 0 0 0 0-1.5h-1.25V4.5Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M22 12.698c-.002 1.47-.013 2.718-.096 3.743-.097 1.19-.296 2.184-.74 3.009a4.18 4.18 0 0 1-.73.983c-.833.833-1.893 1.21-3.237 1.39C15.884 22 14.2 22 12.053 22h-.106c-2.148 0-3.83 0-5.144-.177-1.343-.18-2.404-.557-3.236-1.39-.738-.738-1.12-1.656-1.322-2.795-.2-1.12-.236-2.512-.243-4.241C2 12.957 2 12.492 2 12v-.054c0-2.148 0-3.83.177-5.144.18-1.343.557-2.404 1.39-3.236.832-.833 1.893-1.21 3.236-1.39 1.168-.157 2.67-.175 4.499-.177a.697.697 0 1 1 0 1.396c-1.855.002-3.234.018-4.313.163-1.189.16-1.906.464-2.436.994S3.72 5.8 3.56 6.99C3.397 8.2 3.395 9.788 3.395 12v.784l.932-.814a2.14 2.14 0 0 1 2.922.097l3.99 3.99a1.86 1.86 0 0 0 2.385.207l.278-.195a2.79 2.79 0 0 1 3.471.209l2.633 2.37c.265-.557.423-1.288.507-2.32.079-.972.09-2.152.091-3.63a.698.698 0 0 1 1.396 0Z"
        opacity={0.3}
      />
    </svg>
  );
};
export default SvgGalleryAdd;
