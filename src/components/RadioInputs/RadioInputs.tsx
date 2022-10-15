import React from 'react';
import './RadioInputs.scss';

type RadioInputsProps = {
  unit: string;
  handleRadioButton: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioInputs = ({ unit, handleRadioButton }: RadioInputsProps) => {
  return (
    <div className='radio-btn-container'>
      <p>
        <input
          type="radio"
          name="feet"
          id="feet"
          value="kg"
          onChange={handleRadioButton}
          checked={unit === 'kg'}
        />
        <label htmlFor="feet">Metric</label>
      </p>

      <p>
        <input
          type="radio"
          name="inches"
          id="inches"
          value="in"
          onChange={handleRadioButton}
          checked={unit === 'in'}
        />
        <label htmlFor="inches">Imperial</label>
      </p>
    </div>
  )
}

export default RadioInputs;