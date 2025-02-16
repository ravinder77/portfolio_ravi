import React from 'react';

interface InputProps {
  type: string;
  name: string;
  value?: string;
  placeholder: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  type,
  name,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className='px-4 py-3 text-sm w-[280px] focus:outline-primaryYellow'
    />
  );
};

export default Input;
