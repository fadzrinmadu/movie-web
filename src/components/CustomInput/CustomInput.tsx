import React from "react";
import "./style.scss";

type CustomInputProps = {
  type: "text" | "password";
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  required?: boolean;
  placeholder?: string;
};

const CustomInput = (props: CustomInputProps) => {
  const { type, name, value, onChange, label, required, placeholder } = props;

  return (
    <div>
      {label && <label htmlFor={name}>{label}:</label>}
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
      />
    </div>
  );
};

export default CustomInput;
