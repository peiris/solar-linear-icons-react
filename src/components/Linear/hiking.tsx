import * as React from "react";
import type { SVGProps } from "react";
const SvgHiking = (props: SVGProps<SVGSVGElement>) => {
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
      <circle
        cx={11.5}
        cy={4.5}
        r={2.5}
        stroke="currentColor"
        
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M9 17.5 6 22"
      />
      <path
        fill="currentColor"
        d="m10.375 11.246.746.074-.746-.074Zm-.162 1.622.746.074-.746-.074Zm3.79-1.533-.48.577.48-.577Zm.081.068.48-.576-.48.576Zm3.831 0-.48-.576.48.576Zm1.565-.327a.75.75 0 0 0-.96-1.152l.96 1.152Zm-5.252 8.988.747-.067-.747.067Zm-.575 2.002a.75.75 0 1 0 1.494-.133l-1.494.133Zm1.66-9.791-.256.704.257-.704Zm1.373 0 .257.704-.257-.704Zm-4.593-2.033-.18.728.18-.728Zm.15.056-.243.71.242-.71Zm1.238.627.428-.615-.428.615Zm-1.664 5.21.397-.636-.397.636Zm1.664 1.236-.584.47.584-.47Zm.398.65-.684.307.684-.308Zm-3.674-3.462-.716.224.716-.224Zm.269.548-.615.43.615-.43Zm.011-4.423.682.311-.682-.311Zm.824-.581-.065-.747.065.747Zm-1.68 1.068-.162 1.622 1.492.15.162-1.623-1.492-.149Zm3.894.74.081.069.96-1.153-.081-.068-.96 1.153Zm4.872.069 1.085-.904-.96-1.152-1.085.903.96 1.152Zm-4.914 8.15.172 1.936 1.494-.133-.172-1.936-1.494.133Zm.123-8.15c.555.462.973.824 1.453 1l.514-1.41c-.174-.063-.358-.202-1.007-.743l-.96 1.152Zm3.831-1.153c-.648.54-.832.68-1.007.743l.515 1.41c.48-.176.897-.538 1.452-1l-.96-1.153Zm-2.378 2.153a2.75 2.75 0 0 0 1.886 0l-.515-1.41a1.25 1.25 0 0 1-.857 0l-.514 1.41Zm-3.144-2.01h.003-.002l-.01-.003a.67.67 0 0 1-.152-.06.734.734 0 0 1-.305-.3.75.75 0 0 1 .358-1.05c.017-.008.032-.013.033-.013a.77.77 0 0 0-.216.127.75.75 0 0 0 .196 1.27l.053.021.129.046.485-1.42a2.946 2.946 0 0 1-.081-.028l.008.003.024.012a.712.712 0 0 1 .206.149.747.747 0 0 1-.057 1.096.754.754 0 0 1-.172.108l-.044.018a.7.7 0 0 0 .034-.013c.014-.007.058-.026.11-.06a.744.744 0 0 0 .34-.649.75.75 0 0 0-.442-.664c-.041-.018-.075-.028-.083-.031a.804.804 0 0 0-.028-.008l-.019-.005-.008-.002-.36 1.456Zm2.57-.21c-.227-.19-.365-.305-.574-.45l-.856 1.23c.147.104.238.179.47.372l.96-1.153ZM12 11.007c.296.101.795.354 1.053.533l.856-1.231a6.78 6.78 0 0 0-1.424-.722L12 11.008Zm-.58 5.763c.942.59 1.257.798 1.477 1.07l1.168-.94c-.415-.516-.998-.869-1.85-1.402l-.796 1.272Zm3.555 3.226c-.09-1.002-.14-1.68-.412-2.285l-1.368.616c.144.32.187.695.286 1.802l1.494-.133Zm-2.078-2.155c.12.149.22.312.298.486l1.368-.616a3.75 3.75 0 0 0-.498-.81l-1.168.94Zm-3.43-5.05c-.08.802-.157 1.42.022 1.991l1.431-.448c-.065-.208-.054-.458.04-1.393l-1.493-.15Zm2.747 2.707c-.796-.497-1-.642-1.126-.821l-1.23.858c.343.49.878.809 1.561 1.235l.795-1.272Zm-2.725-.716c.084.269.209.523.37.754l1.23-.86a1.248 1.248 0 0 1-.168-.342l-1.432.448Zm1.632-3.463c.015-.146.023-.217.032-.27.007-.039.011-.048.014-.055l-1.364-.623c-.13.286-.15.557-.174.8l1.492.148Zm1.152-1.806c-.198-.05-.376-.093-.524-.122a1.827 1.827 0 0 0-.505-.036l.13 1.494c-.02.002-.005-.003.093.015.1.02.232.052.446.105l.36-1.456Zm-1.106 1.481c-.007.016-.007.01.014-.013a.501.501 0 0 1 .175-.124c.028-.011.034-.01.017-.008l-.13-1.494a1.777 1.777 0 0 0-.845.33c-.221.155-.459.388-.595.686l1.364.623Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M19 22V8M8 10l-1.672.557A1.942 1.942 0 0 0 5 12.4c0 .368.208.704.537.868L8 14.5"
      />
    </svg>
  );
};
export default SvgHiking;
