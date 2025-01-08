import React from 'react';
import Button from '../../Buttons';

function MenuItem({ data }) {
  return <Button>{data.title}</Button>;
}

export default MenuItem;
