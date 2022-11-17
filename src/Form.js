import React from 'react';
import Button from './Button';

const Form = ({ tab, setTab }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="tab">
      <Button className="tabs" buttonText="Users" tab={tab} setTab={setTab} />
      <Button buttonText="Posts" tab={tab} setTab={setTab} />
      <Button buttonText="Comments" tab={tab} setTab={setTab} />
    </form>
  );
};

export default Form;
