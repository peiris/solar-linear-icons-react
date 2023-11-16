import * as React from "react";
import type { SVGProps } from "react";
const SvgHeadphonesSquare = (props: SVGProps<SVGSVGElement>) => {
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
        d="M12.053 2c2.148 0 3.83 0 5.143.179 1.345.183 2.405.564 3.237 1.407.833.843 1.21 1.916 1.39 3.277C22 8.193 22 9.896 22 12.07v5.297c0 .817 0 1.378-.143 1.87a3.52 3.52 0 0 1-1.847 2.188c-.457.22-1.004.307-1.801.434l-.13.02c-.284.046-.526.085-.727.105-.209.02-.422.027-.64-.016a2.1 2.1 0 0 1-1.561-1.35 2.223 2.223 0 0 1-.116-.639c-.012-.204-.012-.452-.012-.742v-4.173c0-.425 0-.791.097-1.105a2.103 2.103 0 0 1 1.528-1.43c.316-.073.677-.044 1.096-.01l.093.007.11.01c.783.062 1.32.104 1.775.275.32.12.616.284.883.487v-1.174c0-2.24-.002-3.848-.165-5.073-.16-1.204-.463-1.93-.993-2.466-.53-.537-1.247-.844-2.436-1.006-1.21-.165-2.799-.166-5.011-.166s-3.801.001-5.01.166c-1.19.162-1.907.47-2.437 1.006-.53.536-.834 1.262-.994 2.466-.162 1.225-.164 2.833-.164 5.073v1.174c.267-.203.563-.368.883-.487.456-.17.992-.213 1.775-.276l.11-.009.093-.007c.42-.034.78-.063 1.096.01a2.103 2.103 0 0 1 1.528 1.43c.098.314.097.68.097 1.105v4.172c0 .291 0 .54-.012.743-.012.213-.04.427-.116.638a2.1 2.1 0 0 1-1.56 1.35 2.148 2.148 0 0 1-.641.017c-.201-.02-.443-.059-.727-.104l-.13-.02c-.797-.128-1.344-.215-1.801-.436a3.52 3.52 0 0 1-1.847-2.188C2 18.745 2 18.184 2 17.367V12.07c0-2.174 0-3.878.177-5.207.18-1.36.557-2.434 1.39-3.277.832-.843 1.893-1.224 3.236-1.407C8.116 2 9.8 2 11.947 2h.106Z"
      />
    </svg>
  );
};
export default SvgHeadphonesSquare;
