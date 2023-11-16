import * as React from "react";
import type { SVGProps } from "react";
const SvgPrinterMinimalistic = (props: SVGProps<SVGSVGElement>) => {
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
        d="M11.945 1.25h.11c1.367 0 2.47 0 3.337.117.9.12 1.658.38 2.26.981.74.74.968 1.727 1.05 2.951.244.017.474.039.69.068.9.12 1.658.38 2.26.981.602.602.86 1.36.982 2.26.116.867.116 1.97.116 3.337v.11c0 1.367 0 2.47-.116 3.337-.122.9-.38 1.658-.982 2.26-.74.74-1.727.968-2.951 1.05-.017.244-.038.474-.067.69-.122.9-.38 1.658-.982 2.26-.602.602-1.36.86-2.26.982-.867.116-1.97.116-3.337.116h-.11c-1.367 0-2.47 0-3.337-.116-.9-.122-1.658-.38-2.26-.982-.602-.602-.86-1.36-.981-2.26-.03-.216-.051-.446-.068-.69-1.224-.082-2.21-.31-2.95-1.05-.603-.602-.861-1.36-.982-2.26-.117-.867-.117-1.97-.117-3.337v-.11c0-1.367 0-2.47.117-3.337.12-.9.38-1.658.981-2.26.602-.602 1.36-.86 2.26-.981a10.4 10.4 0 0 1 .69-.068c.082-1.224.31-2.21 1.05-2.95.602-.603 1.36-.861 2.26-.982.867-.117 1.97-.117 3.337-.117ZM6.807 5.253c.357-.003.736-.003 1.138-.003h8.11c.402 0 .78 0 1.138.003-.082-1.02-.267-1.508-.602-1.844-.277-.277-.665-.457-1.4-.556-.755-.101-1.756-.103-3.191-.103-1.435 0-2.437.002-3.192.103-.734.099-1.122.28-1.399.556-.335.336-.52.823-.602 1.844Zm-1.554 11.94c-.003-.357-.003-.736-.003-1.138v-3.117c-.155.063-.302.126-.443.19a.75.75 0 1 1-.614-1.37C5.915 10.987 8.48 10.25 12 10.25c3.52 0 6.085.736 7.807 1.509a.75.75 0 1 1-.614 1.368c-.14-.063-.288-.126-.443-.189v3.117c0 .402 0 .78-.003 1.138 1.02-.082 1.509-.267 1.844-.602.277-.277.457-.665.556-1.4.101-.755.103-1.756.103-3.191 0-1.435-.002-2.437-.103-3.192-.099-.734-.28-1.122-.556-1.399-.277-.277-.665-.457-1.4-.556-.755-.101-1.756-.103-3.191-.103H8c-1.435 0-2.437.002-3.192.103-.734.099-1.122.28-1.399.556-.277.277-.457.665-.556 1.4-.101.754-.103 1.756-.103 3.191 0 1.435.002 2.437.103 3.192.099.734.28 1.122.556 1.399.336.335.823.52 1.844.602Zm11.997-4.766c-1.377-.39-3.116-.677-5.25-.677s-3.873.288-5.25.677V16c0 1.435.002 2.436.103 3.192.099.734.28 1.122.556 1.399.277.277.665.457 1.4.556.754.101 1.756.103 3.191.103 1.435 0 2.437-.002 3.192-.103.734-.099 1.122-.28 1.399-.556.277-.277.457-.665.556-1.4.101-.755.103-1.756.103-3.191v-3.573Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgPrinterMinimalistic;
