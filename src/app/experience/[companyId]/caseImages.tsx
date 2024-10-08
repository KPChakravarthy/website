import NextImage from "@/components/ui/NextImage";
import React from "react";

interface Props {
  images: string[];
  color: string;
};

const ImageList = ({ images, color }: Props) => {
  return (
    <div className="flex justify-center gap-6">
      {
        images.map((image, index) => (
          <div className="rounded-lg bg-card border border-gray-600" key={image + index}>
            <NextImage src={image} alt={image.split("/")[2]} width={400} className="w-300 transition-transform transform hover:translate-x-2 hover:-translate-y-2 rounded-lg hover:shadow-card-show object-cover" style={{
              '--experienceColor': color,
            }} />
          </div>
        ))
      }
    </div>
  )
};

export default ImageList;
