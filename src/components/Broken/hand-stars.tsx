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
        stroke="currentColor"
        strokeWidth={1.5}
        d="M10.861 3.363C11.368 2.454 11.621 2 12 2s.632.454 1.139 1.363l.13.235c.145.259.217.388.329.473.112.085.252.117.532.18l.254.058c.984.222 1.476.334 1.593.71.117.376-.218.769-.889 1.553l-.174.203c-.19.223-.285.334-.328.472-.043.138-.029.287 0 .584l.026.27c.102 1.047.152 1.57-.154 1.803-.306.233-.767.02-1.688-.404l-.239-.11c-.261-.12-.392-.18-.531-.18s-.27.06-.531.18l-.239.11c-.92.425-1.382.637-1.688.404-.306-.233-.256-.756-.154-1.802l.026-.271c.029-.297.043-.446 0-.584-.043-.138-.138-.25-.328-.472l-.174-.203c-.67-.784-1.006-1.177-.889-1.553.117-.376.609-.488 1.593-.71l.254-.058c.28-.063.42-.095.532-.18.112-.085.184-.214.328-.473l.131-.235ZM19.43 7.682c.254-.455.38-.682.57-.682.19 0 .316.227.57.682l.065.117c.072.13.108.194.164.237.056.042.126.058.266.09l.127.028c.492.112.738.167.796.356.059.188-.109.384-.444.776l-.087.101c-.095.112-.143.168-.164.237-.022.068-.014.143 0 .292l.013.135c.05.523.076.785-.077.901-.153.116-.383.01-.844-.202l-.12-.055c-.13-.06-.196-.09-.265-.09-.07 0-.135.03-.266.09l-.119.055c-.46.212-.69.318-.844.202-.153-.116-.128-.378-.077-.901l.013-.135c.014-.15.022-.224 0-.292-.021-.07-.069-.125-.164-.237l-.087-.101c-.335-.392-.503-.588-.444-.776.058-.189.304-.244.796-.356l.127-.028c.14-.032.21-.048.266-.09.056-.043.092-.108.164-.237l.066-.117ZM3.43 7.682C3.685 7.227 3.81 7 4 7c.19 0 .316.227.57.682l.065.117c.072.13.108.194.164.237.056.042.126.058.266.09l.127.028c.492.112.738.167.797.356.058.188-.11.384-.445.776l-.087.101c-.095.112-.143.168-.164.237-.022.068-.014.143 0 .292l.013.135c.05.523.076.785-.077.901-.153.116-.384.01-.844-.202l-.12-.055c-.13-.06-.196-.09-.265-.09-.07 0-.135.03-.266.09l-.119.055c-.46.212-.69.318-.844.202-.153-.116-.128-.378-.077-.901l.013-.135c.014-.15.022-.224 0-.292-.021-.07-.069-.125-.164-.237l-.087-.101c-.335-.392-.503-.588-.445-.776.059-.189.305-.244.797-.356l.127-.028c.14-.032.21-.048.266-.09.056-.043.092-.108.164-.237l.066-.117Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M4 21.388h2.26c1.01 0 2.033.106 3.016.308 1.74.359 3.573.402 5.33.118m-.93-3.297c.12-.014.235-.03.345-.047.911-.145 1.676-.633 2.376-1.162l1.808-1.365a1.887 1.887 0 0 1 2.22 0c.573.433.749 1.146.386 1.728-.423.678-1.019 1.545-1.591 2.075m-5.544-1.229a8.176 8.176 0 0 1-.11.012m.11-.012a.998.998 0 0 0 .427-.24 1.492 1.492 0 0 0 .126-2.134 1.9 1.9 0 0 0-.45-.367c-2.797-1.669-7.15-.398-9.779 1.467m9.676 1.274a.524.524 0 0 1-.11.012m0 0a9.274 9.274 0 0 1-1.814.004"
      />
    </svg>
  );
};
export default SvgHandStars;
