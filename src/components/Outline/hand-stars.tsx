import * as React from "react";
import type { SVGProps } from "react";
const SvgHandStars = (props: SVGProps<SVGSVGElement>) => {
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
        d="M12 2.9a13.1 13.1 0 0 0-.484.829l-.13.235a16.3 16.3 0 0 0-.03.054c-.11.198-.257.466-.5.65-.249.189-.548.255-.762.302l-.058.013-.255.057c-.465.106-.755.173-.95.241.12.181.323.42.651.804l.174.202.04.047c.147.17.344.398.435.69.09.29.059.589.036.817a19.16 19.16 0 0 0-.006.062l-.027.271c-.047.484-.075.797-.075 1.018.193-.068.456-.188.858-.373l.238-.11.055-.025c.198-.093.478-.224.79-.224.312 0 .592.131.79.224l.055.025.238.11c.402.185.665.305.858.373 0-.221-.028-.534-.075-1.018l-.027-.27a7.623 7.623 0 0 0-.006-.063c-.023-.228-.053-.528.037-.817.09-.292.287-.52.435-.69l.04-.047.173-.202c.328-.384.53-.623.65-.804-.194-.068-.484-.135-.95-.24l-.254-.058a11.642 11.642 0 0 0-.058-.013c-.214-.047-.513-.113-.761-.302-.244-.184-.391-.452-.5-.65l-.03-.054-.131-.235A13.04 13.04 0 0 0 12 2.9Zm2.153 6.35a.02.02 0 0 1 .002 0h-.002Zm-4.308 0h.002-.002Zm1.038-7.365c.216-.282.568-.635 1.117-.635.55 0 .901.353 1.117.635.208.271.42.653.651 1.067l.026.046.13.235a12.312 12.312 0 0 0 .133.23l.065.017.173.04.255.057.052.012c.447.101.864.195 1.179.32.341.134.753.376.912.887.157.503-.036.937-.23 1.246-.183.29-.465.62-.771.978l-.207.242a11.76 11.76 0 0 0-.176.211c.002.056.009.135.024.286l.03.321c.047.48.09.917.074 1.261-.016.358-.1.838-.525 1.16-.438.333-.927.268-1.274.168-.325-.093-.715-.272-1.133-.465a22.99 22.99 0 0 0-.049-.022l-.238-.11A11.635 11.635 0 0 0 12 9.974a10.663 10.663 0 0 0-.218.098l-.238.11a22.99 22.99 0 0 0-.049.022c-.418.193-.808.372-1.133.465-.347.1-.836.165-1.273-.168-.426-.322-.51-.802-.526-1.16-.016-.344.027-.781.073-1.26l.005-.052.027-.27a5.04 5.04 0 0 0 .023-.286 12.507 12.507 0 0 0-.175-.211l-.174-.203-.034-.039c-.306-.358-.588-.688-.77-.978-.195-.309-.388-.743-.231-1.246.159-.51.571-.753.912-.887.315-.125.732-.219 1.18-.32l.051-.012.255-.057a11.43 11.43 0 0 0 .239-.057l.04-.069.091-.16.131-.236.026-.046c.23-.414.444-.796.651-1.067ZM4 8.202c.052.096.163.293.346.43.195.15.43.2.528.22l.025.005.02.005-.032.038a2.214 2.214 0 0 1-.018.02c-.068.079-.222.253-.292.48-.07.225-.045.455-.033.56 0 .01.002.02.003.028v.011A1.304 1.304 0 0 0 4 9.855c-.24 0-.453.099-.548.144l.002-.011.003-.028c.011-.105.036-.335-.034-.56-.07-.227-.224-.401-.292-.48a2.214 2.214 0 0 1-.018-.02l-.033-.038.02-.005.026-.005c.097-.02.333-.07.529-.22.182-.137.293-.334.345-.43Zm-1.065-.076-.142-.627.142.627Zm.471 2.506v.003-.003Zm1.188.003v-.003.003Zm-1.45-3.92c.129-.169.402-.465.856-.465.454 0 .728.296.856.464.121.159.24.372.35.568l.018.034.05.088.084.019.039.009c.21.047.445.1.63.173.212.084.548.265.678.682.127.409-.038.747-.156.934a4.87 4.87 0 0 1-.435.552l-.073.086.012.12.003.039c.023.226.046.47.037.67-.01.212-.062.597-.41.861-.362.274-.755.207-.967.146a4.603 4.603 0 0 1-.645-.264L4 11.4l-.071.033a4.603 4.603 0 0 1-.644.264c-.213.06-.606.127-.967-.147-.35-.264-.402-.649-.411-.862-.01-.2.015-.443.037-.67l.003-.038.012-.12-.073-.086-.026-.03a4.87 4.87 0 0 1-.409-.522c-.118-.187-.283-.525-.156-.934.13-.417.466-.598.677-.682a4.565 4.565 0 0 1 .67-.182l.085-.02.049-.087.019-.034c.11-.196.228-.41.349-.568ZM20 8.201c.052.096.163.293.346.43a1.32 1.32 0 0 0 .553.225l.02.005-.032.038a1.363 1.363 0 0 0-.31.5c-.07.225-.045.455-.033.56 0 .01.002.02.003.028v.011A1.304 1.304 0 0 0 20 9.855c-.24 0-.453.099-.547.144v-.011l.003-.028a1.388 1.388 0 0 0-.033-.56 1.363 1.363 0 0 0-.292-.48l-.018-.02-.033-.038.02-.005.026-.005c.097-.02.333-.07.528-.22.183-.137.294-.334.346-.43Zm-.594 2.43v.003-.003Zm-.262-3.918c.129-.168.402-.464.856-.464.454 0 .727.296.856.464.121.159.24.372.35.568l.018.034.05.088.084.019.039.009c.21.047.446.1.63.173.212.084.548.265.678.682.127.409-.038.747-.156.934-.107.169-.265.353-.41.523l-.025.03-.073.085.012.12.003.039c.022.226.046.47.037.67-.01.212-.062.597-.41.861-.362.274-.755.207-.967.146-.191-.055-.41-.156-.608-.247-.012-.005-.025-.01-.037-.017L20 11.4l-.071.033-.037.016a4.603 4.603 0 0 1-.608.247c-.212.061-.605.128-.966-.146-.35-.264-.402-.649-.411-.862-.01-.2.015-.443.037-.67l.003-.038.012-.12-.073-.086-.026-.03a4.863 4.863 0 0 1-.409-.522c-.117-.187-.283-.525-.156-.934.13-.417.466-.598.677-.682a4.566 4.566 0 0 1 .67-.182l.085-.02.049-.087.019-.034c.11-.196.228-.41.349-.568Zm1.45 3.92v-.002.003Zm-11.91 3.814c1.866-.361 3.863-.28 5.48.684.226.135.44.304.625.512.376.423.57.947.579 1.473.191-.123.383-.26.577-.407l1.808-1.365a2.637 2.637 0 0 1 3.124 0c.835.63 1.169 1.763.57 2.723-.425.681-1.066 1.624-1.717 2.228-.66.61-1.597 1.124-2.306 1.466-.862.416-1.792.646-2.697.792-1.85.3-3.774.254-5.602-.123a14.276 14.276 0 0 0-2.865-.293H4a.75.75 0 0 1 0-1.5h2.26c1.062 0 2.135.111 3.168.324a14.1 14.1 0 0 0 5.06.111c.828-.134 1.602-.333 2.284-.662.683-.33 1.451-.764 1.938-1.215.493-.457 1.044-1.248 1.465-1.922.127-.204.109-.497-.202-.732-.37-.28-.947-.28-1.316 0l-1.808 1.365c-.72.545-1.609 1.128-2.71 1.304a8.875 8.875 0 0 1-.347.048 10.03 10.03 0 0 1-2.11.02.75.75 0 1 1 .14-1.493c.628.06 1.19.046 1.668-.003l.03-.003a.742.742 0 0 0 .15-1.138 1.152 1.152 0 0 0-.275-.222c-1.181-.705-2.759-.822-4.426-.5a12.124 12.124 0 0 0-4.535 1.935.75.75 0 0 1-.868-1.224 13.622 13.622 0 0 1 5.118-2.183Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgHandStars;
