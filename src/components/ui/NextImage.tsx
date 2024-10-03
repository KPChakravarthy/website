import Image from "next/image";
import React from "react";

interface Props {
	src: string;
	alt: string;
	className: string;
	width?: number;
	height?: number;
}

const NextImage = ({ src, alt, className, width = 0, height = 0 }: Props) => (
	<Image
		src={src}
		alt={alt}
		className={className}
		width={width}
		height={height}
		sizes="100vw"
    {...!width && !height && {style: { 'width': "100%", 'height': "auto" }}}
	/>
);

export default NextImage;
