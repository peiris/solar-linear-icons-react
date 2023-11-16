import * as React from "react";
import type { SVGProps } from "react";
const SvgMagicStick = (props: SVGProps<SVGSVGElement>) => {
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
        d="M16.714 2.127c-.836-.43-1.922.263-4.095 1.65l-.562.36c-.618.394-.927.591-1.273.648-.347.056-.692-.034-1.382-.215l-.628-.164C6.345 3.769 5.13 3.45 4.436 4.13c-.696.68-.412 1.908.157 4.363l.147.635c.161.697.242 1.046.177 1.393-.066.346-.27.65-.68 1.26l-.372.555c-1.439 2.145-2.158 3.217-1.753 4.067.406.85 1.668.915 4.192 1.045l.654.033c.717.037 1.076.056 1.382.213.306.158.524.436.962.994l.398.507c1.539 1.962 2.309 2.943 3.255 2.788.945-.154 1.441-1.342 2.433-3.717l.257-.614c.282-.675.422-1.012.677-1.261.255-.25.595-.382 1.274-.647l.618-.24c2.39-.933 3.586-1.4 3.765-2.345.179-.945-.777-1.744-2.688-3.342l-.495-.413c-.543-.454-.815-.68-.963-.992-.149-.312-.158-.672-.175-1.393l-.016-.657c-.062-2.538-.093-3.806-.928-4.236Z"
      />
      <path
        fill="currentColor"
        d="M19.53 18.47a.75.75 0 1 0-1.06 1.06l2 2a.75.75 0 1 0 1.06-1.06l-2-2Z"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgMagicStick;
