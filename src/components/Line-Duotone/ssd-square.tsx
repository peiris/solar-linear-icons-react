import * as React from "react";
import type { SVGProps } from "react";
const SvgSsdSquare = (props: SVGProps<SVGSVGElement>) => {
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
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M19 17v1M16.5 17v1M14 17v1M11.5 17v1"
        opacity={0.4}
      />
      <path
        fill="currentColor"
        d="m19 5.118.72-.21-.002-.007-.003-.009-.715.226Zm-14 0-.715-.226-.003.009-.002.008.72.209ZM2.889 20.643l.433-.612-.433.612Zm-.552-.584.634-.4-.634.4Zm19.326 0-.634-.4.634.4Zm-.552.584-.433-.612.433.612Zm0-6.698-.433.612.433-.612Zm.552.584-.634.4.634-.4Zm-18.774-.584.433.612-.433-.612Zm-.552.584.634.4-.634-.4ZM7.5 3.75h9v-1.5h-9v1.5Zm9 0c.428 0 .753.1 1.016.305.269.21.549.59.769 1.288l1.43-.45c-.28-.89-.698-1.57-1.277-2.021-.587-.457-1.261-.622-1.938-.622v1.5Zm-9-1.5c-.676 0-1.351.165-1.938.622-.58.451-.997 1.13-1.277 2.02l1.43.45c.22-.697.5-1.077.77-1.287.262-.205.587-.305 1.015-.305v-1.5Zm10.78 3.076 2.851 9.839 1.44-.418-2.85-9.838-1.441.417Zm-14-.417-2.852 9.838 1.44.418L5.72 5.326 4.28 4.91Zm1.22 9.43h13v-1.5h-13v1.5Zm13 5.911h-13v1.5h13v-1.5Zm-13 0c-.719 0-1.198-.001-1.563-.04-.35-.038-.509-.104-.615-.18l-.866 1.225c.398.282.842.395 1.32.446.464.05 1.038.049 1.724.049v-1.5Zm-4.25-2.956c0 .729 0 1.329.046 1.812.047.493.15.945.407 1.353l1.268-.8c-.08-.126-.145-.313-.182-.697-.038-.394-.039-.91-.039-1.668h-1.5Zm2.072 2.737a1.313 1.313 0 0 1-.35-.372l-1.27.8c.198.313.453.584.754.796l.866-1.224Zm17.928-2.737c0 .758 0 1.274-.039 1.668-.037.384-.103.57-.182.697l1.268.8c.258-.408.36-.86.407-1.353.047-.483.046-1.083.046-1.812h-1.5ZM18.5 21.75c.686 0 1.26.001 1.723-.049.479-.052.923-.164 1.321-.446l-.866-1.224c-.106.075-.265.141-.615.179-.365.039-.844.04-1.563.04v1.5Zm2.529-2.091c-.095.15-.215.275-.351.372l.866 1.224c.3-.212.556-.483.753-.796l-1.268-.8Zm-2.529-5.32c.719 0 1.198 0 1.563.04.35.037.509.103.615.178l.866-1.224c-.398-.282-.842-.394-1.32-.446-.464-.05-1.038-.049-1.724-.049v1.5Zm4.25 2.955c0-.729 0-1.329-.046-1.811-.047-.494-.15-.946-.407-1.354l-1.268.8c.08.127.145.313.182.697.038.394.039.91.039 1.668h1.5Zm-2.072-2.737c.136.097.256.223.35.373l1.27-.8a2.811 2.811 0 0 0-.754-.797l-.866 1.224ZM5.5 12.838c-.686 0-1.26 0-1.723.05-.479.05-.923.163-1.321.445l.866 1.224c.106-.075.265-.14.615-.178.365-.04.844-.04 1.563-.04v-1.5Zm-2.75 4.456c0-.758 0-1.274.039-1.668.037-.384.103-.57.182-.696l-1.268-.8c-.258.407-.36.86-.407 1.353-.047.482-.046 1.082-.046 1.811h1.5Zm-.294-3.961c-.3.212-.556.484-.753.796l1.268.8c.095-.15.215-.275.351-.372l-.866-1.224Z"
      />
    </svg>
  );
};
export default SvgSsdSquare;
