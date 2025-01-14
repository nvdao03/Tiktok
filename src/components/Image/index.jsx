import React, { forwardRef, useState } from 'react';
import PropTypes from 'prop-types';
import images from '../../assets/images';
import classNames from 'classnames/bind';
import styles from './Image.module.scss';

const cx = classNames.bind(styles);

const Image = forwardRef(({ src, className, ...props }, ref) => {
  const [fallback, setFallback] = useState('');

  const handleError = () => {
    setFallback(images.noImage);
  };

  return (
    <img
      className={cx('wrapper', className)}
      ref={ref}
      src={src === '' ? fallback : src}
      {...props}
      onError={handleError}
    />
  );
});

Image.propTypes = {
  src: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Image.displayName = 'Image';

export default Image;
