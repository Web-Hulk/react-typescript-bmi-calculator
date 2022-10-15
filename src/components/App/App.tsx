import React, { useMemo, useState } from 'react';
import Content from '../Content/Content';
import Form from '../Form/Form';
import Header from '../Header/Header';
import RadioInputs from '../RadioInputs/RadioInputs';
import BmiClassification from '../Table/BmiClassification/BmiClassification';
import './App.scss';

type BMIParameters = {
  weight: number,
  height: number,
  feet: number,
  inches: number,
}

function App() {
  const [parameters, setParameters] = useState<BMIParameters>({
    weight: 0,
    height: 0,
    feet: 4,
    inches: 1,
  });
  const [unit, setUnit] = useState<string>('kg');
  const [score, setScore] = useState<number>(0);
  const [isScoreDisplayed, setIsScoreDisplayed] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setParameters({
      ...parameters,
      [name]: Number(value)
    })
  }

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setParameters({
      ...parameters,
      [name]: Number(value)
    })
  }

  const handleRadioButton = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUnit(event.target.value);
  };

  const calculateBMI = () => {
    setError('');
    setIsScoreDisplayed(true);

    if (unit === 'kg' && parameters.weight !== 0 && parameters.height !== 0) {
      const number = Number((parameters.weight / (parameters.height ** 2)).toFixed(2));
      setScore(number);
    } else if (unit === 'in') {
      const number = Number(((parameters.weight * 703) / ((parameters.feet * 12) + parameters.inches) ** 2).toFixed(2));
      setScore(number);
    } else {
      setIsScoreDisplayed(false);
      setError('Enter valid data');
    }
  }

  const scoreExplanation = useMemo(() => {
    if (score < 18.5) {
      return 'Underweight'
    } else if (score >= 18.5 && score <= 24.9 ) {
      return 'Normal Weight'
    } else if (score >= 25 && score <= 29.9 ) {
      return 'Overweight'
    } else if (score >= 30 && score <= 34.9 ) {
      return 'Obese'
    } else if (score >= 35 && score <= 39.9) {
      return 'Severely Obese'
    } else {
      return 'Morbidly Obese'
    }
  }, [score]);

  return (
    <>
      <Header />

      <div className='container'>
        <p>
          BMI (body mass index) is a measure of whether you're a healthy weight for your height. Use this BMI calculator to check the adults in your family.
        </p>

        <RadioInputs unit={unit} handleRadioButton={handleRadioButton} />

        <Form
          unit={unit}
          handleInput={handleInput}
          handleSelect={handleSelect}
          calculateBMI={calculateBMI}
        />

        {isScoreDisplayed && (
          <div className='score'>
            <p>
              <strong>BMI = {score}</strong>
            </p>
            <p>You are in <strong>{scoreExplanation}</strong> range</p>
          </div>
        )}
        
        {error && (
          <div className='error'>{error}</div>
        )}

        <BmiClassification />
        <Content />
      </div>
    </>
  )
}

export default App;
