import React from 'react';
import css from './style.module.scss';

function BlueBaseButton({ text, isLoading, onClick, disabled }) {
  const content = (
    <div className={css.blue_box}>
      <button className={isLoading ? css.blue_box_button_loading : css.blue_box_button} onClick={onClick} disabled={disabled}>
        {isLoading ? 'Loading...' : text}
      </button>
    </div>
  );
  return content;
}

export default BlueBaseButton;
