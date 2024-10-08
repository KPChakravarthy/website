import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  images: string[];
}

const AutoSlider = (props: Props) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % props.images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="relative flex items-center justify-center h-screen bg-gray-200 overflow-hidden">
      <AnimatePresence>
        {props.images.map((src, index) => (
          index === currentImage && (
            <motion.img
              key={index}
              src={src}
              alt={`Image ${index + 1}`}
              className="absolute w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            />
          )
        ))}
      </AnimatePresence>
    </div>
  );
}

export default AutoSlider;
