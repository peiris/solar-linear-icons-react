import * as React from "react";
import type { SVGProps } from "react";
const SvgNotebookSquare = (props: SVGProps<SVGSVGElement>) => {
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
        fill="#1C274D"
        fillRule="evenodd"
        d="M16.52 5.273c1.272-.063 2.23.984 2.23 2.179v5.459c0 1.26-1.018 2.226-2.204 2.314-.493.037-.99.097-1.368.189-.738.18-1.711.65-2.321.972a1.84 1.84 0 0 1-1.714 0c-.61-.321-1.583-.792-2.321-.972-.377-.092-.875-.152-1.368-.19-1.186-.088-2.204-1.052-2.204-2.313V7.496c0-1.22.998-2.278 2.292-2.183.525.038 1.13.106 1.636.23.922.224 2.02.763 2.635 1.086.103.054.23.052.333-.008.556-.321 1.521-.842 2.354-1.073.623-.173 1.39-.244 2.02-.275Zm.73 2.179c0-.418-.319-.698-.657-.681-.602.03-1.235.096-1.693.223-.63.174-1.451.607-2.002.926a1.833 1.833 0 0 1-.148.076v6.763c.61-.296 1.39-.636 2.072-.802.498-.122 1.093-.19 1.612-.228.476-.035.816-.413.816-.818V7.45Zm-6.134.505c.044.023.089.045.134.064v6.738c-.61-.296-1.39-.636-2.072-.802-.498-.122-1.093-.19-1.612-.228-.476-.035-.816-.413-.816-.818V7.496c0-.426.333-.713.682-.687.5.036 1.007.097 1.39.19.726.178 1.682.637 2.294.958Z"
        clipRule="evenodd"
      />
      <path
        fill="#1C274D"
        fillRule="evenodd"
        d="M9.944.25C8.106.25 6.65.25 5.51.403c-1.172.158-2.121.49-2.87 1.238-.748.749-1.08 1.698-1.238 2.87-.153 1.14-.153 2.595-.153 4.433v4.112c0 1.838 0 3.294.153 4.433.158 1.172.49 2.121 1.238 2.87.749.748 1.698 1.08 2.87 1.238 1.14.153 2.595.153 4.433.153h4.112c1.838 0 3.294 0 4.433-.153 1.172-.158 2.121-.49 2.87-1.238.748-.749 1.08-1.698 1.238-2.87.153-1.14.153-2.595.153-4.433V8.945c0-1.838 0-3.294-.153-4.433-.158-1.172-.49-2.121-1.238-2.87C20.61.893 19.66.561 18.489.403 17.349.25 15.894.25 14.056.25H9.944ZM3.702 2.702c.423-.423 1.003-.677 2.009-.812 1.028-.138 2.382-.14 4.289-.14h4c1.907 0 3.262.002 4.29.14 1.005.135 1.585.389 2.008.812.423.423.677 1.003.812 2.009.138 1.028.14 2.382.14 4.289v4c0 1.907-.002 3.262-.14 4.29-.135 1.005-.389 1.585-.812 2.008-.423.423-1.003.677-2.009.812-1.027.138-2.382.14-4.289.14h-4c-1.907 0-3.261-.002-4.29-.14-1.005-.135-1.585-.389-2.008-.812-.423-.423-.677-1.003-.812-2.009-.138-1.027-.14-2.382-.14-4.289V9c0-1.907.002-3.261.14-4.29.135-1.005.389-1.585.812-2.008Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgNotebookSquare;
