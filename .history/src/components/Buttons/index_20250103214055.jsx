import React from 'react';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({ to, href, onClick, children, primary }) {
  let Component = 'button';

  const props = {
    onClick,
  };

  if (to) {
  }

  const classes = cx('wrapper');

  return (
    <div>
      <Component className={classes} {...props}>
        <span>{children}</span>
      </Component>
    </div>
  );
}

export default Button;
