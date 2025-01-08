import React, { forwardRef, useState } from 'react';
import images from '../../assets/images';

const Image = forwardRef(({ ...props }, ref) => {
  const [fallback, setFallback] = useState('');

  const handleError = () => {
    setFallback(images.noImage);
  };

  return <img ref={ref} src={fallback || props.src} {...props} onError={handleError} />;
});

Image.displayName = 'Image';

export default Image;
