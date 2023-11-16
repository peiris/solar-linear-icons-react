import * as React from "react";
import type { SVGProps } from "react";
const SvgCondicioner = (props: SVGProps<SVGSVGElement>) => {
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
        d="M5.25 8.5A.75.75 0 0 1 6 7.75h12a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75ZM6 5.25a.75.75 0 0 0 0 1.5h12a.75.75 0 0 0 0-1.5H6Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7.525 1.25h8.95c1.168 0 2.109 0 2.858.087.776.09 1.44.28 2.005.731.22.175.419.374.594.594.45.565.641 1.23.731 2.005.087.749.087 1.69.087 2.858v.094c0 1.57 0 2.812-.114 3.797-.117 1.01-.363 1.844-.922 2.546-.222.278-.474.53-.752.752-.702.56-1.536.805-2.546.922-.985.114-2.228.114-3.797.114H9.381c-1.57 0-2.812 0-3.797-.114-1.01-.117-1.844-.363-2.546-.922a4.75 4.75 0 0 1-.752-.752c-.56-.702-.805-1.536-.922-2.546-.114-.985-.114-2.228-.114-3.797v-.094c0-1.168 0-2.109.087-2.858.09-.776.28-1.44.731-2.005a3.75 3.75 0 0 1 .594-.594c.565-.45 1.23-.641 2.005-.731.749-.087 1.69-.087 2.858-.087ZM4.839 2.827c-.637.074-.986.21-1.242.414a2.25 2.25 0 0 0-.356.356c-.204.256-.34.605-.414 1.242-.076.653-.077 1.507-.077 2.732 0 1.628.001 2.784.104 3.672.101.872.292 1.39.605 1.783.152.19.324.363.515.515.311.248.702.42 1.285.53.015-.414.06-.784.2-1.123a2.75 2.75 0 0 1 1.488-1.489c.29-.12.59-.167.907-.188.305-.021.676-.021 1.12-.021h6.6c.392 0 .695 0 .962.053a2.75 2.75 0 0 1 2.161 2.16c.036.181.047.378.051.607.58-.11.968-.282 1.278-.529.19-.152.363-.324.515-.515.313-.392.504-.91.605-1.783.103-.888.104-2.044.104-3.672 0-1.225-.001-2.079-.077-2.732-.074-.637-.21-.986-.414-1.242a2.248 2.248 0 0 0-.356-.356c-.256-.204-.605-.34-1.242-.414-.653-.076-1.507-.077-2.732-.077H7.57c-1.225 0-2.079.001-2.732.077Zm12.41 11.392c-.002-.28-.007-.383-.023-.463a1.25 1.25 0 0 0-.982-.982c-.103-.02-.244-.024-.744-.024H9c-.476 0-.796 0-1.043.017-.241.017-.358.046-.436.078a1.25 1.25 0 0 0-.676.677c-.048.115-.078.282-.09.697.724.03 1.595.031 2.674.031h5.142c1.08 0 1.954 0 2.678-.031Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M7.416 16.876a.75.75 0 0 1 .208 1.04l-.307.46a.571.571 0 0 0 .133.774c.88.66 1.09 1.891.48 2.806l-.306.46a.75.75 0 1 1-1.248-.832l.306-.46a.571.571 0 0 0-.132-.774 2.071 2.071 0 0 1-.48-2.806l.306-.46a.75.75 0 0 1 1.04-.208ZM12.416 16.876a.75.75 0 0 1 .208 1.04l-.307.46a.571.571 0 0 0 .133.774c.88.66 1.09 1.891.48 2.806l-.306.46a.75.75 0 1 1-1.248-.832l.306-.46a.571.571 0 0 0-.132-.774 2.071 2.071 0 0 1-.48-2.806l.306-.46a.75.75 0 0 1 1.04-.208ZM17.416 16.876a.75.75 0 0 1 .208 1.04l-.307.46a.571.571 0 0 0 .133.774c.88.66 1.09 1.891.48 2.806l-.306.46a.75.75 0 1 1-1.248-.832l.306-.46a.571.571 0 0 0-.132-.774 2.071 2.071 0 0 1-.48-2.806l.306-.46a.75.75 0 0 1 1.04-.208Z"
      />
    </svg>
  );
};
export default SvgCondicioner;
