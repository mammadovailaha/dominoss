import React from 'react';
import { Field, ErrorMessage } from 'formik';

const baseClassName = "w-full  h-12 md:h-14 rounded-[3px] border border-[#ffff] outline-none";

const InputField = ({
  name,
  type,
  placeholder,
  options,
  inputClassName
}) => {
  return (
  <div>
      <div className="w-full flex flex-col justify-start items-center gap-0.5 border border-gray-300 rounded-[5px]">
      {type === "textarea" ? (
        <Field
          as="textarea"
          name={name}
          placeholder={placeholder}
          className={`${baseClassName} min-h-[150px] ${inputClassName} pl-4 pt-1`}
        />
      ) : type === "select" ? (
        <Field
          name={name}
          as="select"
          className={`${baseClassName} ${inputClassName} pl-4`}
        >
          <option value="" className="text-xs md:text-sm text-gray-500">
            {placeholder}
          </option>
          {options?.map((option) => (
            <option
              className="text-black text-xs md:text-sm"
              key={option.value}
              value={option.value}
            >
              {option.label}
            </option>
          ))}
        </Field>
      ) : (
        <Field
          type={type}
          name={name}
          placeholder={placeholder}
          className={`${baseClassName} ${inputClassName} pl-4`}
        />
      )}

      
    </div>
    <ErrorMessage
        name={name}
        component="span"
        className="text-[#E70303] text-xs mt-1"
      />
  </div>
  );
};

export default InputField;