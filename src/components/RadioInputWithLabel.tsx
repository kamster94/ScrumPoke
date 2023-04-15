import React, { ReactNode } from 'react';

interface Props {
  checked: boolean
  children?: ReactNode;
  onChange: () => void;
  labelClassName?: string;
}

const RadioInputWithLabel = ({
  checked, children, labelClassName, ...props
}: Props) => {
  return (
    <div className="form-control">
      <label className="label cursor-pointer justify-start">
        <input type="radio" name="radio-10" className="radio radio-primary" checked={checked} onChange={props.onChange}/>
        <span className={`label-text pl-5 ${labelClassName}`}>{children}</span>
      </label>
    </div>
  );
};

export default RadioInputWithLabel;
