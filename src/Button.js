import React from 'react';

const Button = ({ tab, setTab, buttonText }) => {
  return (
    <button
      id="tabs"
      type="button"
      className={buttonText === tab ? 'selected' : null}
      onClick={() => setTab(buttonText)}
    >
      {buttonText}
    </button>
  );
};

export default Button;
