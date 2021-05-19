import React from 'react';

const Error = ({ error }) => {
  if (!error) return null;
  return <p style={{ color: 'tomato', margin: '1rem 0' }}>{error}</p>;
};

export default Error;
