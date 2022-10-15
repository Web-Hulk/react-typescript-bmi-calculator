import React from 'react';
import './BmiClassification.scss';

const BMI_VALUES = [
  {
    value: 'BMI'
  },
  {
    value: '< 18.5'
  },
  {
    value: '18.5 - 24.9'
  },
  {
    value: '25 - 29.9'
  },
  {
    value: '30 - 34.9'
  },
  {
    value: '35 - 39.9'
  },
  {
    value: '> 40'
  },
]

const CLASSIFICATION_VALUES = [
  {
    value: 'Classification'
  },
  {
    value: 'Underweight'
  },
  {
    value: 'Normal Weight'
  },
  {
    value: 'Overweight'
  },
  {
    value: 'Obese'
  },
  {
    value: 'Severely Obese'
  },
  {
    value: 'Morbidly Obese'
  },
]

const BmiClassification = () => {
  return (
    <div className='table-container'>
      <div className='table-column'>
        {BMI_VALUES.map(({ value }) => (
          <div className='table-item'>{value}</div>
        ))}
      </div>

      <div className='table-column'>
        {CLASSIFICATION_VALUES.map(({ value }) => (
          <div className='table-item'>{value}</div>
        ))}
      </div>
    </div>
  )
}

export default BmiClassification;