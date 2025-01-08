import React from 'react';
import Button from '../../Buttons';

function MenuItem({ data }) {
  return (
    <Button className={cx('menu-item')} leftIcon={data.icon} to={data.to}>
      {data.title}
    </Button>
  );
}

export default MenuItem;
