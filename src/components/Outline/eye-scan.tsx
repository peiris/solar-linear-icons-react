import * as React from "react";
import type { SVGProps } from "react";
const SvgEyeScan = (props: SVGProps<SVGSVGElement>) => {
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
        d="M18.29 2.89c-1.028-.138-2.383-.14-4.29-.14a.75.75 0 0 1 0-1.5h.056c1.838 0 3.294 0 4.433.153 1.172.158 2.121.49 2.87 1.238.684.685 1.058 1.336 1.233 2.341.158.904.158 2.122.158 3.922V9a.75.75 0 0 1-1.5 0c0-1.92-.003-3.001-.135-3.76-.118-.673-.33-1.051-.817-1.538-.423-.423-1.003-.677-2.009-.812ZM2.75 15a.75.75 0 0 0-1.5 0v.096c0 1.8 0 3.018.158 3.922.175 1.005.549 1.656 1.233 2.34.749.75 1.698 1.081 2.87 1.239 1.14.153 2.595.153 4.433.153H10a.75.75 0 0 0 0-1.5c-1.907 0-3.261-.002-4.29-.14-1.005-.135-1.585-.389-2.008-.812-.487-.487-.7-.865-.817-1.538-.132-.759-.135-1.84-.135-3.76ZM22.75 15a.75.75 0 0 0-1.5 0c0 1.92-.003 3.001-.135 3.76-.118.673-.33 1.051-.817 1.538-.423.423-1.003.677-2.009.812-1.027.138-2.382.14-4.289.14a.75.75 0 0 0 0 1.5h.056c1.838 0 3.294 0 4.433-.153 1.172-.158 2.121-.49 2.87-1.238.684-.685 1.058-1.336 1.233-2.341.158-.904.158-2.123.158-3.922V15ZM10 1.25h-.056c-1.838 0-3.294 0-4.433.153-1.172.158-2.121.49-2.87 1.238-.684.685-1.058 1.336-1.233 2.341-.158.904-.158 2.122-.158 3.922V9a.75.75 0 1 0 1.5 0c0-1.92.003-3.001.135-3.76.118-.673.33-1.051.817-1.538.423-.423 1.003-.677 2.009-.812 1.028-.138 2.382-.14 4.289-.14a.75.75 0 0 0 0-1.5Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 9.25a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5ZM10.75 12a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.324 9.45c1.27-1.473 3.452-3.2 6.676-3.2s5.406 1.727 6.676 3.2l.032.038c.27.314.55.637.741 1.024.214.433.301.897.301 1.488 0 .59-.087 1.055-.3 1.488-.192.387-.471.71-.742 1.024l-.032.037c-1.27 1.474-3.452 3.201-6.676 3.201s-5.406-1.727-6.676-3.2l-.032-.038c-.27-.314-.55-.637-.741-1.024-.214-.433-.301-.897-.301-1.488 0-.59.087-1.055.3-1.488.192-.387.471-.71.742-1.024l.032-.038ZM12 7.75c-2.631 0-4.434 1.397-5.54 2.68-.313.364-.466.549-.565.747-.083.169-.145.389-.145.823 0 .434.062.654.145.823.099.198.252.383.565.747 1.106 1.283 2.909 2.68 5.54 2.68 2.631 0 4.434-1.397 5.54-2.68.314-.364.466-.549.565-.747.083-.169.145-.389.145-.823 0-.434-.062-.654-.145-.823-.099-.198-.252-.383-.566-.747C16.435 9.147 14.632 7.75 12 7.75Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgEyeScan;
