import React from 'react';

function Image({ src, alt, ...passProps }) {
  return <img src={src} alt={alt} {...passProps} />;
}

export default Image;
