import * as React from "react";
import type { SVGProps } from "react";
const SvgStarsMinimalistic = (props: SVGProps<SVGSVGElement>) => {
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
        d="M5.48 1.903a.5.5 0 0 0-.981.003v.002l-.003.01a3.448 3.448 0 0 1-.045.201 6.854 6.854 0 0 1-.153.532c-.145.434-.342.86-.568 1.088-.226.227-.65.427-1.084.575a6.856 6.856 0 0 1-.732.203l-.01.002a.5.5 0 0 0 .002.982h.002l.01.003a3.448 3.448 0 0 1 .201.045c.137.034.326.084.532.153.434.145.86.342 1.088.568.227.226.427.65.575 1.084a6.856 6.856 0 0 1 .203.732l.002.01a.5.5 0 0 0 .982-.002v-.002l.003-.01a3.448 3.448 0 0 1 .045-.201c.034-.137.084-.326.153-.532.145-.434.342-.86.568-1.088.226-.227.65-.427 1.084-.575a6.856 6.856 0 0 1 .732-.203l.01-.002a.5.5 0 0 0-.002-.982h-.002l-.01-.003a3.448 3.448 0 0 1-.201-.045 6.854 6.854 0 0 1-.532-.153c-.434-.145-.86-.342-1.088-.568-.227-.226-.427-.65-.575-1.084a6.856 6.856 0 0 1-.203-.732l-.002-.01Zm.916 3.092c-.303-.142-.607-.325-.84-.556-.232-.23-.416-.533-.56-.835-.143.303-.326.607-.557.84-.23.232-.533.416-.835.56.303.143.607.326.84.557.232.23.416.533.56.835.143-.303.326-.607.557-.84.23-.232.533-.416.835-.56ZM19 3.25a.75.75 0 0 1 .75.75v.25H20a.75.75 0 0 1 0 1.5h-.25V6a.75.75 0 0 1-1.5 0v-.25H18a.75.75 0 0 1 0-1.5h.25V4a.75.75 0 0 1 .75-.75Zm-7.012 2.93c-.329.43-.702 1.095-1.253 2.082l-.278.5-.054.096c-.25.453-.478.862-.845 1.14-.372.283-.824.384-1.314.494l-.104.023-.54.123c-1.072.242-1.787.406-2.275.598-.473.187-.536.325-.56.402-.027.086-.048.252.235.703.29.459.78 1.035 1.508 1.887l.369.431.068.08c.338.393.638.744.777 1.188.137.442.091.904.04 1.43l-.01.106-.057.576c-.11 1.135-.182 1.906-.158 2.457.025.55.14.662.193.703.041.031.152.112.644-.03.502-.143 1.174-.45 2.177-.912l.506-.233.1-.046c.455-.21.879-.407 1.343-.407.464 0 .888.196 1.344.407l.099.046.506.233c1.003.462 1.675.769 2.177.913.492.14.603.06.644.029.053-.04.168-.152.193-.703.024-.551-.048-1.322-.159-2.457l-.055-.576a65.937 65.937 0 0 0-.01-.107c-.052-.525-.098-.987.04-1.429.138-.444.438-.795.776-1.188l.068-.08.369-.431c.729-.852 1.219-1.428 1.508-1.887.284-.451.262-.617.235-.703-.024-.077-.087-.215-.56-.402-.488-.192-1.203-.356-2.274-.598l-.541-.123-.104-.023c-.49-.11-.942-.211-1.314-.493-.367-.28-.594-.688-.845-1.14l-.054-.097-.278-.5c-.55-.987-.924-1.653-1.253-2.082-.328-.428-.47-.43-.512-.43-.043 0-.184.002-.512.43Zm-1.191-.912c.411-.537.94-1.018 1.703-1.018.762 0 1.292.481 1.703 1.018.404.527.83 1.29 1.342 2.21l.308.554c.339.607.412.708.496.772.08.06.183.1.842.248l.603.137c.992.224 1.823.412 2.43.652.635.25 1.219.63 1.443 1.352.223.714-.031 1.364-.398 1.947-.355.563-.918 1.223-1.597 2.016l-.409.478c-.445.521-.518.627-.552.739-.036.114-.037.251.03.946l.062.635c.103 1.06.188 1.938.158 2.61-.03.684-.187 1.376-.784 1.83-.61.463-1.315.404-1.964.218-.627-.18-1.404-.538-2.333-.965l-.564-.26c-.62-.285-.724-.316-.816-.316-.092 0-.196.03-.816.316l-.564.26c-.93.427-1.706.785-2.333.965-.649.186-1.354.245-1.964-.218-.597-.454-.754-1.146-.784-1.83-.03-.672.055-1.55.158-2.61l.061-.635c.068-.695.067-.831.031-.946-.034-.112-.107-.218-.552-.739l-.409-.478c-.678-.793-1.242-1.453-1.597-2.016-.367-.583-.62-1.233-.398-1.947.224-.723.808-1.102 1.442-1.352.608-.24 1.439-.428 2.431-.652l.603-.137c.659-.149.763-.188.842-.248.084-.064.157-.165.496-.772l.308-.554c.513-.92.938-1.683 1.342-2.21Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgStarsMinimalistic;