'use client';

import React, { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
  placeholder?: string;
  value: string;
  setValue: (value: string) => void;
}

const TextInputWithLabel = ({
  children, placeholder, value, ...props
}: Props) => {
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
        placeholder={placeholder}
        value={value}
        onChange={(event) => props.setValue(event.target.value)}
      />
    </div>
  );
};

export default TextInputWithLabel;
