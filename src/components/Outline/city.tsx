import * as React from "react";
import type { SVGProps } from "react";
const SvgCity = (props: SVGProps<SVGSVGElement>) => {
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
        d="M7 1.25a.75.75 0 0 1 .75.75v1.75h.295c.433 0 .83 0 1.152.043.356.048.731.16 1.04.47.31.309.422.684.47 1.04.043.323.043.72.043 1.152V7.882c.067.053.132.11.194.173.456.456.642 1.023.726 1.65.058.434.074.95.078 1.545h.502V7.71c0-1.258 0-2.287.116-3.072.12-.814.387-1.54 1.068-2.012.68-.472 1.455-.467 2.259-.294.775.168 1.739.529 2.917.97l.096.037c.595.223 1.1.412 1.495.613.42.214.785.472 1.06.868.274.396.388.827.44 1.296.049.441.049.98.049 1.616V21.25H22a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5h.25v-9.302c0-.899 0-1.648.08-2.242.084-.628.27-1.195.725-1.65.063-.063.128-.121.195-.174V6.455c0-.433 0-.83.043-1.152.048-.356.16-.731.47-1.04.309-.31.684-.422 1.04-.47.323-.043.72-.043 1.152-.043h.295V2A.75.75 0 0 1 7 1.25ZM4.75 7.324c.588-.074 1.322-.074 2.198-.074h.104c.876 0 1.61 0 2.198.074V6.5c0-.493-.002-.787-.03-.997a.706.706 0 0 0-.042-.177l-.001-.003-.003-.001a.706.706 0 0 0-.177-.042c-.21-.028-.504-.03-.997-.03H6c-.493 0-.787.002-.997.03a.706.706 0 0 0-.177.042l-.003.001-.001.003a.706.706 0 0 0-.042.177c-.028.21-.03.504-.03.997v.824Zm-1 13.926h2.5v-5.302c0-.899 0-1.648.08-2.242.084-.628.27-1.195.725-1.65.456-.456 1.023-.642 1.65-.726.434-.058.948-.074 1.543-.078-.004-.57-.018-1-.064-1.347-.063-.461-.17-.659-.3-.789-.13-.13-.328-.237-.79-.3C8.613 8.753 7.965 8.75 7 8.75s-1.612.002-2.095.067c-.461.062-.659.169-.789.3-.13.13-.237.327-.3.788-.064.483-.066 1.131-.066 2.095v9.25Zm4 0h8.5V16c0-.964-.002-1.612-.067-2.095-.062-.461-.169-.659-.3-.789-.13-.13-.327-.237-.788-.3-.483-.064-1.131-.066-2.095-.066h-2c-.964 0-1.612.002-2.095.066-.461.063-.659.17-.789.3-.13.13-.237.328-.3.79-.064.482-.066 1.13-.066 2.094v5.25Zm10 0h2.5V7.772c0-.687-.001-1.141-.04-1.49-.037-.33-.1-.49-.183-.608-.081-.118-.21-.235-.505-.385-.313-.158-.737-.319-1.38-.56-1.251-.469-2.11-.79-2.765-.93-.64-.138-.909-.065-1.089.06-.18.124-.343.351-.438.998-.098.662-.1 1.58-.1 2.915v3.48c.595.004 1.111.02 1.544.078.628.084 1.195.27 1.65.726.456.455.642 1.022.726 1.65.08.594.08 1.344.08 2.242v5.302ZM4.823 5.323ZM9.25 15a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Zm0 3a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgCity;