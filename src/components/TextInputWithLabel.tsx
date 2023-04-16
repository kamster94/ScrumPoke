'use client';

import React, { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
  value: string;
  setValue: (value: string) => void;
}

const TextInputWithLabel = ({ children, value, ...props }: Props) => {
  return (
    <div>
      <div className='mb-2 block'>
        <label className='label'>
          <span className='label-text'>{children}</span>
        </label>
      </div>
      <input
        type='text'
        className='input input-bordered w-full'
        value={value}
        onChange={(event) => props.setValue(event.target.value)}
      />
    </div>
  );
};

export default TextInputWithLabel;
