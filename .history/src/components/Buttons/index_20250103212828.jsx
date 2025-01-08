import React from 'react';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({ to, href, onClick, children }) {
  let Component = 'button';

  const classes = cx('wrapper');

  return (
    <div>
      <Component>
        <span>{children}</span>
      </Component>
    </div>
  );
}

export default Button;
