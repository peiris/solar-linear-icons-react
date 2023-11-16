import * as React from "react";
import type { SVGProps } from "react";
const SvgChefHat = (props: SVGProps<SVGSVGElement>) => {
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
        d="M19 18h.75H19ZM5 14.584h.75a.75.75 0 0 0-.45-.687l-.3.687Zm14 0-.3-.687a.75.75 0 0 0-.45.687H19ZM15.75 7a.75.75 0 0 0 1.5 0h-1.5Zm-9 0a.75.75 0 0 0 1.5 0h-1.5ZM7 4.25A5.75 5.75 0 0 0 1.25 10h1.5A4.25 4.25 0 0 1 7 5.75v-1.5Zm10 1.5A4.25 4.25 0 0 1 21.25 10h1.5A5.75 5.75 0 0 0 17 4.25v1.5Zm-2 15.5H9v1.5h6v-1.5Zm-6 0c-.964 0-1.612-.002-2.095-.067-.461-.062-.659-.169-.789-.3l-1.06 1.062c.455.455 1.022.64 1.65.725.606.082 1.372.08 2.294.08v-1.5ZM4.25 18c0 .922-.002 1.688.08 2.294.084.628.27 1.195.725 1.65l1.061-1.06c-.13-.13-.237-.328-.3-.79-.064-.482-.066-1.13-.066-2.094h-1.5Zm14 0c0 .964-.002 1.612-.067 2.095-.062.461-.169.659-.3.789l1.062 1.06c.455-.455.64-1.022.725-1.65.082-.606.08-1.372.08-2.294h-1.5ZM15 22.75c.922 0 1.688.002 2.294-.08.628-.084 1.195-.27 1.65-.726l-1.06-1.06c-.13.13-.328.237-.79.3-.482.064-1.13.066-2.094.066v1.5Zm-8-17c.214 0 .423.016.628.046l.219-1.484A5.792 5.792 0 0 0 7 4.25v1.5Zm5-4.5a5.252 5.252 0 0 0-4.973 3.563l1.42.482A3.752 3.752 0 0 1 12 2.75v-1.5ZM7.027 4.813A5.245 5.245 0 0 0 6.75 6.5h1.5c0-.423.07-.828.198-1.205l-1.42-.482ZM17 4.25c-.287 0-.57.021-.847.062l.22 1.484A4.29 4.29 0 0 1 17 5.75v-1.5Zm-5-1.5a3.752 3.752 0 0 1 3.552 2.545l1.42-.482A5.252 5.252 0 0 0 12 1.25v1.5Zm3.552 2.545c.128.377.198.782.198 1.205h1.5c0-.589-.097-1.156-.277-1.687l-1.42.482ZM5.75 18v-3.416h-1.5V18h1.5Zm-.45-4.103A4.251 4.251 0 0 1 2.75 10h-1.5a5.751 5.751 0 0 0 3.45 5.271l.6-1.374Zm12.95.687V18h1.5v-3.416h-1.5Zm3-4.584a4.251 4.251 0 0 1-2.55 3.897l.6 1.374A5.751 5.751 0 0 0 22.75 10h-1.5Zm-5.5-3.5V7h1.5v-.5h-1.5Zm-9 0V7h1.5v-.5h-1.5Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        
        d="M5 18h14"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgChefHat;
