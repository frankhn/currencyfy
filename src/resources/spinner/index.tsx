import React from 'react';
import './Spinner.css';

export interface ISpinnerProps {}

const Spinner: React.FC<ISpinnerProps> = (props) => {
  return (
    <div className="lds-default">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
  );
};

export default Spinner;
