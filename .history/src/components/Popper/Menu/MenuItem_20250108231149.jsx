import React from 'react';
import Button from '../../Buttons';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
  const classes = cx('menu-item', {
    separate: data.separate,
  });

  const handleClick = () => {
    if (data.onclick) {
      data.onclick();
    }

    if (onClick) {
      onClick();
    }
  };

  return (
    <Button className={classes} leftIcon={data.icon} to={data.to} onClick={handleClick}>
      {data.title}
    </Button>
  );
}

export default MenuItem;
