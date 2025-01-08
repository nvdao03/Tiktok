import React from 'react';

export default function MenuItem({ data }) {
  return <button>{JSON.stringify(data)}</button>;
}
