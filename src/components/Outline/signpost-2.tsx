import * as React from "react";
import type { SVGProps } from "react";
const SvgSignpost2 = (props: SVGProps<SVGSVGElement>) => {
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
        d="M8.25 7A.75.75 0 0 1 9 6.25h6a.75.75 0 0 1 0 1.5H9A.75.75 0 0 1 8.25 7ZM9 15.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5H9Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.75 2a.75.75 0 0 0-1.5 0v.75H6.606c-.562 0-1.005 0-1.422.135a2.75 2.75 0 0 0-.526.235c-.38.22-.676.55-1.051.968l-.09.1c-.404.45-.744.828-.99 1.164-.26.352-.463.715-.543 1.148a2.75 2.75 0 0 0 0 1c.08.433.282.796.542 1.148.247.336.587.714.992 1.165l.089.1c.375.418.671.748 1.05.967.168.097.344.175.527.235.417.136.86.136 1.422.135h4.644v.5H6.462c-.67 0-1.229 0-1.681.046-.473.048-.913.153-1.309.418-.3.2-.558.458-.759.758-.264.396-.369.835-.417 1.309-.046.452-.046 1.011-.046 1.68v.077c0 .67 0 1.229.046 1.681.048.473.153.913.417 1.309.201.3.459.558.76.759.395.264.835.369 1.308.417.452.046 1.011.046 1.68.046h4.789v1H10a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5h-1.25v-1h4.644c.562 0 1.005 0 1.422-.135.183-.06.36-.138.526-.235.38-.22.676-.55 1.051-.968l.09-.1c.404-.45.744-.828.99-1.164.26-.352.463-.715.543-1.148.061-.33.061-.67 0-1-.08-.433-.282-.796-.542-1.148-.247-.336-.587-.714-.992-1.165l-.089-.1c-.375-.418-.671-.748-1.05-.967a2.751 2.751 0 0 0-.527-.235c-.417-.136-.86-.136-1.422-.135H12.75v-.5h4.788c.67 0 1.229 0 1.681-.046.473-.048.913-.153 1.309-.418.3-.2.558-.458.759-.758.264-.396.369-.836.417-1.309.046-.452.046-1.011.046-1.68v-.077c0-.67 0-1.229-.046-1.681-.048-.473-.153-.913-.418-1.309a2.75 2.75 0 0 0-.758-.759c-.396-.264-.836-.369-1.309-.417-.452-.046-1.011-.046-1.68-.046H12.75V2ZM6.704 4.25c-.706 0-.894.009-1.056.061a1.25 1.25 0 0 0-.239.107c-.148.085-.28.22-.751.745-.435.484-.725.808-.924 1.078-.191.26-.253.41-.275.532a1.25 1.25 0 0 0 0 .454c.022.121.084.272.275.532.199.27.489.594.924 1.078.472.526.603.66.751.745.076.044.156.08.239.107.162.052.35.061 1.056.061H17.5c.718 0 1.2 0 1.567-.038.355-.036.519-.1.628-.173.136-.09.253-.208.344-.345.073-.108.137-.272.173-.627.037-.367.038-.85.038-1.567 0-.718 0-1.2-.038-1.567-.036-.355-.1-.519-.173-.627a1.251 1.251 0 0 0-.344-.345c-.109-.073-.273-.137-.628-.173-.367-.037-.85-.038-1.567-.038H6.704Zm10.592 9c.706 0 .894.009 1.056.061.083.027.163.063.239.107.148.085.28.22.751.745.435.484.725.808.924 1.078.191.26.253.41.275.532.028.15.028.304 0 .454-.022.121-.084.272-.275.532-.199.27-.489.594-.924 1.078-.472.526-.603.66-.751.745-.076.044-.156.08-.24.107-.161.052-.349.061-1.055.061H6.5c-.718 0-1.2 0-1.567-.038-.355-.036-.519-.1-.627-.173a1.25 1.25 0 0 1-.345-.344c-.073-.109-.137-.273-.173-.628-.037-.367-.038-.85-.038-1.567 0-.718 0-1.2.038-1.567.036-.355.1-.519.173-.627a1.25 1.25 0 0 1 .345-.345c.108-.073.272-.137.627-.173.367-.037.85-.038 1.567-.038h10.796Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgSignpost2;