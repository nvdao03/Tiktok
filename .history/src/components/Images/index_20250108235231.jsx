import React from 'react';

function Images({ src, alt, ...passProps }) {
  return <img src={src} alt={alt} {...passProps} />;
}

export default Images;
