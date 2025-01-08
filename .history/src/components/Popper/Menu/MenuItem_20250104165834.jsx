import React from 'react';
import Button from '../../Buttons';

function MenuItem({ data }) {
  return (
    <Button leftIcon={data.icon} to={data.to}>
      {data.title}
    </Button>
  );
}

export default MenuItem;
