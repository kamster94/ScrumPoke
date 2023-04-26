import React from 'react';

type Size = 'xl' | 'lg' | 'md' | 'sm';

interface Props {
  size?: Size;
}

const Loader = ({ size }: Props) => {
  function getSize() {
    switch (size) {
      case 'xl':
        return 'h-20 w-20';
      case 'lg':
        return 'h-12 w-12';
      case 'sm':
        return 'h-4 w-4';
      case 'md':
      default:
        return 'h-8 w-8';
    }
  }
  return (
    <div
      className={`inline-block ${getSize()} animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]`}
      role="status">
      <span
        className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
      >Loading...</span
      >
    </div>
  );
};

export default Loader;
