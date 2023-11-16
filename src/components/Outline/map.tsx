import * as React from "react";
import type { SVGProps } from "react";
const SvgMap = (props: SVGProps<SVGSVGElement>) => {
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
        d="m17.861 3.163.16.054 1.202.4c.463.155.87.29 1.191.44.348.162.667.37.911.709.244.338.341.707.385 1.088.04.353.04.781.04 1.27v8.212c0 .698 0 1.287-.054 1.753-.056.484-.182.962-.535 1.348a2.25 2.25 0 0 1-.746.538c-.478.212-.971.18-1.448.081-.46-.096-1.018-.282-1.68-.503l-.043-.014c-1.12-.374-1.505-.49-1.877-.477a2.251 2.251 0 0 0-.441.059c-.363.085-.703.299-1.686.954l-1.382.922-.14.093c-1.062.709-1.8 1.201-2.664 1.317-.863.116-1.705-.165-2.915-.57l-.16-.053-1.202-.4c-.463-.155-.87-.29-1.191-.44-.348-.162-.667-.37-.911-.71-.244-.338-.341-.706-.385-1.088-.04-.353-.04-.78-.04-1.269V8.665c0-.699 0-1.288.054-1.753.056-.484.182-.962.535-1.348a2.25 2.25 0 0 1 .746-.538c.478-.213.972-.181 1.448-.081.46.095 1.018.282 1.68.503l.043.014c1.12.373 1.505.49 1.878.477a2.25 2.25 0 0 0 .44-.059c.363-.086.703-.3 1.686-.954l1.382-.922.14-.094c1.062-.708 1.8-1.2 2.663-1.316.864-.116 1.706.165 2.916.57Zm-2.111.943V16.58c.536.058 1.1.246 1.843.494l.125.042c.717.239 1.192.396 1.555.472.356.074.477.04.532.016a.75.75 0 0 0 .249-.179c.04-.044.11-.149.152-.51.043-.368.044-.869.044-1.624V7.163c0-.54-.001-.88-.03-1.138-.028-.239-.072-.328-.112-.382-.039-.054-.109-.125-.326-.226-.236-.11-.56-.218-1.07-.389l-1.165-.388c-.887-.296-1.413-.464-1.797-.534Zm-1.5 12.654V4.434c-.311.18-.71.441-1.276.818l-1.382.922-.11.073c-.688.46-1.201.802-1.732.994v12.326c.311-.18.71-.442 1.276-.819l1.382-.921.11-.073c.688-.46 1.201-.802 1.732-.994Zm-6 3.135V7.42c-.536-.058-1.1-.246-1.843-.494l-.125-.042c-.717-.239-1.192-.396-1.556-.472-.355-.074-.476-.041-.53-.017a.75.75 0 0 0-.25.18c-.04.043-.11.148-.152.509-.043.368-.044.87-.044 1.625v8.128c0 .54.001.88.03 1.138.028.239.072.327.112.382.039.054.109.125.326.226.236.11.56.218 1.07.389l1.165.388c.887.295 1.412.463 1.797.534Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgMap;
