import Image from "next/image";
import React, { CSSProperties } from "react";

interface Props {
	src: string;
	alt: string;
	className: string;
	width?: number;
	height?: number;
  style?: CSSProperties
}

const NextImage = ({ src, alt, className, width = 0, height = 0, style }: Props) => (
	<Image
		src={src}
		alt={alt}
		className={className}
		width={width}
		height={height}
		sizes="100vw"
    style={style}
    {...!width && !height && {style: { 'width': "100%", 'height': "auto" }}}
	/>
);

export default NextImage;
