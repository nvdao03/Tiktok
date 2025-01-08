import React, { forwardRef, useState } from 'react';
import images from '../../assets/images';
import classNames from 'classnames/bind';
import styles from './Image.module.scss';

const cx = classNames.bind(styles);

const Image = forwardRef(({ className, ...props }, ref) => {
  const [fallback, setFallback] = useState('');

  const handleError = () => {
    setFallback(images.noImage);
  };

  return (
    <img className={cx('wrapper', className)} ref={ref} src={fallback || props.src} {...props} onError={handleError} />
  );
});

Image.displayName = 'Image';

export default Image;
