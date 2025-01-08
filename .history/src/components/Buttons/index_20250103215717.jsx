import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({ to, href, onClick, children, primary = false, outline = false, ...passProps }) {
  let Component = 'button';

  const props = {
    onClick,
    ...passProps,
  };

  if (to) {
    props.to = to;
    Component = Link;
  } else if (href) {
    props.href = href;
    Component = 'a';
  }

  const classes = cx('wrapper', {
    primary,
    outline,
  });

  return (
    <div>
      <Component className={classes} {...props}>
        <span>{children}</span>
      </Component>
    </div>
  );
}

export default Button;
