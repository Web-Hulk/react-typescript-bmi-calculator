import React from 'react';
import './Form.scss';

type FormProps = {
  unit: string;
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSelect: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  calculateBMI: () => void;
}

const Form = ({ unit, handleInput, handleSelect, calculateBMI }: FormProps) => {
  return (
    <div className='form-container'>
      <div className='form-item'>
        <label htmlFor='weight' className='form-label'>Weight</label>
        <input type='text' name='weight' onChange={handleInput} className='input' />
        <label htmlFor='weight' className='form-label'>{unit === 'kg' ? '(in kg)' : '(in lbs)'}</label>
      </div>

      {unit === 'kg' ? (
        <>
          <div className='form-item'>
            <label htmlFor='height' className='form-label'>Height</label>
            <input type='text' name='height' onChange={handleInput} className='input' />
            <label htmlFor='weight' className='form-label'>(in m)</label>
          </div>
        </>
      ) : (
        <>
          <div className='form-item'>
            <label htmlFor='feet' className='form-label'>Height</label>
            <select name='feet' onChange={handleSelect} className='form-select'>
              <option value='4'>4'</option>
              <option value='5'>5'</option>
              <option value='6'>6'</option>
              <option value='7'>7'</option>
            </select>

            <select name='inches' onChange={handleSelect} className='form-select'>
              <option value='1'>1"</option>
              <option value='2'>2"</option>
              <option value='3'>3"</option>
              <option value='4'>4"</option>
              <option value='5'>5"</option>
              <option value='6'>6"</option>
              <option value='7'>7"</option>
              <option value='8'>8"</option>
              <option value='9'>9"</option>
              <option value='10'>10"</option>
              <option value='11'>11"</option>
              <option value='12'>12"</option>
            </select>

            <label htmlFor='weight' className='form-label'>(in in.)</label>
          </div>
        </>
      )}

      <button type='button' onClick={calculateBMI} className='submit-btn'>Calculate</button>
    </div>
  )
}

export default Form;