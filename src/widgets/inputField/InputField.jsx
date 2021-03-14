import React from 'react';
import css from './style.module.scss';

function InputField({id, label, type, placeholder, required, value, onChange, name, error, errorMessage }) {
  const content = (
    <div className={css.input_field}>
      <label htmlFor={id} className={css.input_field_label}>
        {label}
      </label>
      <input
        className={css.input_field_value}
        id={id}
        type={type}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        name={name}
      />
      {error && <p className={css.input_field_helper_text}>{errorMessage}</p>}
    </div>
  );
  return content;
}

export default InputField;
