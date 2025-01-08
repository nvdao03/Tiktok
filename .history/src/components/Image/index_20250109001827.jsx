import React, { forwardRef } from 'react';

const Image = forwardRef(({ ...props }, ref) => {
  return <img ref={ref} {...props} />;
});

Image.displayName = 'Image';

export default Image;
