import * as React from "react";
import type { SVGProps } from "react";
const SvgRocket = (props: SVGProps<SVGSVGElement>) => {
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
        d="m7.58 15.008.53-.531-.53.53Zm0-5.477L7.05 9l.53.53Zm6.867 6.846.53.531-.53-.531Zm-5.494 0-.53.531.53-.531Zm2.747 1.936v.75-.75Zm8.594-7.765-.53-.531.53.53Zm-5.355-9.02a.75.75 0 0 0 .572 1.386l-.572-1.386ZM7.737 15.16a.75.75 0 1 0 1.06 1.062l-1.06-1.062Zm3.12-.991a.75.75 0 1 0-1.06-1.063l1.06 1.063Zm1.362 4.049.26.704-.26-.704Zm-6.47-6.512-.695-.28.696.28Zm7.28-6.55a.75.75 0 1 0-1.058-1.063l1.059 1.062Zm6.735 4.86-5.847 5.829 1.06 1.062 5.846-5.83-1.059-1.061ZM9.483 15.846l-1.374-1.37L7.05 15.54l1.374 1.37 1.059-1.063ZM17.547 2.75h.569v-1.5h-.57v1.5Zm3.703 3.123v.567h1.5v-.567h-1.5ZM18.116 2.75c.936 0 1.564.002 2.031.064.446.06.633.163.755.284l1.059-1.062c-.447-.446-1.003-.626-1.614-.708-.59-.08-1.337-.078-2.231-.078v1.5Zm4.634 3.123c0-.892.002-1.636-.078-2.225-.082-.611-.264-1.166-.711-1.612L20.9 3.098c.122.121.225.307.285.75.063.466.064 1.09.064 2.025h1.5ZM8.11 14.477c-.663-.66-1.105-1.104-1.391-1.478-.273-.356-.331-.56-.331-.73h-1.5c0 .632.265 1.152.64 1.642.361.472.89.997 1.522 1.628l1.06-1.062Zm.314 2.431c.632.63 1.159 1.158 1.632 1.518.492.374 1.013.637 1.644.637v-1.5c-.173 0-.378-.059-.735-.33-.375-.286-.82-.727-1.482-1.387l-1.06 1.062Zm12.4-5.83c.798-.795 1.354-1.332 1.647-2.036l-1.385-.575c-.151.364-.436.667-1.322 1.55l1.06 1.062Zm.426-4.638c0 1.249-.013 1.663-.164 2.027l1.385.575c.292-.704.28-1.476.28-2.602h-1.5Zm-3.703-5.19c-1.13 0-1.903-.013-2.608.278l.572 1.386c.366-.15.784-.164 2.036-.164v-1.5Zm-8.75 14.973 2.06-2.053-1.06-1.063-2.06 2.054 1.06 1.062Zm5.12-.377c-.511.51-.896.893-1.226 1.178-.332.287-.556.426-.731.491l.518 1.408c.428-.158.814-.436 1.193-.764.38-.328.808-.755 1.305-1.25l-1.059-1.063Zm-1.957 1.669a.729.729 0 0 1-.26.048v1.5c.27 0 .528-.048.778-.14l-.518-1.408ZM7.05 9c-.485.484-.904.901-1.23 1.272-.324.37-.6.745-.766 1.156l1.392.56c.07-.177.216-.4.502-.727.285-.325.663-.702 1.161-1.2L7.05 9Zm-1.996 2.428a2.23 2.23 0 0 0-.166.841h1.5c0-.09.016-.179.058-.282l-1.392-.56Zm3.055-1.366 4.92-4.906-1.058-1.062L7.05 9l1.058 1.062Z"
      />
      <path
        fill="currentColor"
        d="m5.573 11.532.53-.53V11l-.53.532Zm4.347-4.11a.75.75 0 1 0 .811-1.261L9.92 7.422Zm-.224-1.035.406-.63-.406.63Zm-2.57-1.319.11-.742-.11.742Zm-4.9 2.956.529.53-.53-.53Zm3.113-2.727.288.692-.288-.692Zm-2.476 4.13-.276.697.276-.698Zm-.162.742a.75.75 0 0 0 .571-1.387l-.571 1.387Zm-.217-.893.277-.697-.277.697Zm2.735 2.962a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm.403-1.716a.75.75 0 1 0-1.059 1.062l1.06-1.062Zm5.11-4.361-.63-.405-.812 1.261.63.405.811-1.261Zm-.63-.405c-.621-.4-1.123-.723-1.554-.956-.442-.238-.855-.406-1.312-.474L7.017 5.81c.22.033.46.117.819.31.368.2.814.485 1.454.897l.812-1.26ZM2.755 8.555a56.596 56.596 0 0 1 1.71-1.659c.27-.247.518-.46.73-.623.223-.172.365-.256.432-.284l-.575-1.385c-.257.107-.527.291-.773.481-.258.2-.54.442-.826.703-.572.522-1.2 1.149-1.757 1.705l1.059 1.062Zm4.481-4.229a4.13 4.13 0 0 0-2.184.278l.575 1.385a2.63 2.63 0 0 1 1.39-.179l.22-1.484ZM2.208 9.974l.379.15.552-1.395-.378-.15-.553 1.395Zm.379.15.114.045.571-1.387-.133-.053-.552 1.395Zm-.891-2.631a1.514 1.514 0 0 0 .512 2.48l.553-1.394-.007-.003c0-.001-.003-.004-.003-.008V8.56s0-.002.004-.005l-1.06-1.062Zm3.347 4.569.176.176 1.06-1.06L6.105 11l-1.061 1.061Zm-.48-.478.48.479L6.104 11l-.48-.48-1.06 1.063ZM12.5 18.5l-.53.53a.759.759 0 0 0 .035.034l.494-.564Zm5.323-5.268a.75.75 0 0 0-1.259.815l1.26-.815Zm-.223 1.035-.63.408.63-.408Zm1.322 2.562.742-.11-.742.11Zm-2.964 4.887-.53-.531.53.53Zm2.735-3.105-.692-.29.692.29Zm-3.248 2.686a.75.75 0 1 0-1.393.555l1.393-.555Zm-2.917-1.774a.75.75 0 1 0 .989-1.128l-.99 1.128Zm3.346 2.276.53.532-.53-.532Zm-3.125-4.11a.75.75 0 0 0-1.061 1.06l1.06-1.06Zm3.815-3.642.406.628 1.26-.816-.407-.627-1.259.815Zm-1.135 7.138-.085.083 1.06 1.063.084-.084-1.06-1.062Zm1.541-6.51c.414.638.7 1.082.9 1.45.194.357.278.596.31.814l1.484-.22c-.068-.457-.237-.87-.476-1.31-.233-.43-.557-.93-.958-1.55l-1.26.816Zm-.482 7.572c.557-.556 1.186-1.183 1.71-1.753.261-.285.505-.565.704-.822.19-.246.376-.515.483-.772l-1.384-.578a2.318 2.318 0 0 1-.284.43 11.97 11.97 0 0 1-.625.728c-.497.541-1.1 1.143-1.663 1.705l1.059 1.062Zm1.693-5.308c.067.456.007.934-.18 1.383l1.384.578c.29-.693.388-1.448.28-2.181l-1.484.22Zm-4.664 1.456-.523-.459-.989 1.128.523.459.989-1.128Zm1.828 2.873a.07.07 0 0 1 .028-.016.047.047 0 0 1 .022-.001.056.056 0 0 1 .024.012c.012.01.021.022.026.034l-1.393.555c.384.964 1.632 1.196 2.352.479l-1.06-1.063ZM13.03 17.97l-.281-.281-1.061 1.06.281.282 1.06-1.061ZM13.917 10.629a.75.75 0 1 0 1.06-1.063l-1.06 1.063Zm2.747-1.063a.75.75 0 0 0 1.059 1.063l-1.06-1.063Zm1.059-2.738a2.696 2.696 0 0 0-3.806 0l1.06 1.062a1.196 1.196 0 0 1 1.687 0l1.059-1.062Zm-3.806 0a2.682 2.682 0 0 0 0 3.8l1.06-1.062a1.182 1.182 0 0 1 0-1.676l-1.06-1.062Zm3.806 3.8a2.682 2.682 0 0 0 0-3.8l-1.06 1.062a1.182 1.182 0 0 1 0 1.676l1.06 1.063Z"
      />
    </svg>
  );
};
export default SvgRocket;
