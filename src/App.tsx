import React, { useMemo, useState } from 'react'

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
    feet: 0,
    inches: 0,
  });
  const [unit, setUnit] = useState<string>('kg');
  const [score, setScore] = useState<number>(0);

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
    if (unit === 'kg') {
      const number = Number((parameters.weight / (parameters.height ** 2)).toFixed(2));
      // const number = Number((parameters.weight / (parameters.height ** 2)).toFixed(2));
      setScore(number);
    } else {
      const number = Number(((parameters.weight * 703) / ((parameters.feet * 12) + parameters.inches) ** 2).toFixed(2));
      setScore(number);
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
    <div>
      <h1 style={{ textAlign: 'center' }}>BMI Calculator</h1>

      <div>
        <p>
          <input
            type="radio"
            name="feet"
            id="feet"
            value="kg"
            onChange={handleRadioButton}
            checked={unit === 'kg'}
          />
          <label htmlFor="feet">Metrics</label>
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

      <div>
        <div>
          <label htmlFor='weight'>Weight {unit === 'kg' ? '(in kg)' : '(in lbs)'}</label>
          <input type='text' name='weight' onChange={handleInput} />
        </div>

        {unit === 'kg' ? (
          <>
            <div>
              <label htmlFor='height'>Height (in m)</label>
              <input type='text' name='height' onChange={handleInput} />
            </div>
          </>
        ) : (
          <>
            <div>
              <label htmlFor='feet'>Height (in feet)</label>
              <select name='feet' onChange={handleSelect}>
                <option value='4'>4'</option>
                <option value='5'>5'</option>
                <option value='6'>6'</option>
                <option value='7'>7'</option>
              </select>

              <select name='inches' onChange={handleSelect}>
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
            </div>
          </>
        )}

        <button type='button' onClick={calculateBMI}>Calculate</button>
      </div>

      <div>
        <p>BMI = {score}</p>
        <p>You are in <strong>{scoreExplanation}</strong> range</p>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', textAlign: 'center'}}>
        <div>
          <div style={{ border: '1px solid gray', padding: '12px' }}>BMI</div>
          <div style={{ border: '1px solid gray', padding: '12px' }}>{'<'} 18.5</div>
          <div style={{ border: '1px solid gray', padding: '12px' }}>18.5 - 24.9</div>
          <div style={{ border: '1px solid gray', padding: '12px' }}>25 - 29.9</div>
          <div style={{ border: '1px solid gray', padding: '12px' }}>30 - 34.9</div>
          <div style={{ border: '1px solid gray', padding: '12px' }}>35 - 39.9</div>
          <div style={{ border: '1px solid gray', padding: '12px' }}>{'>'} 40</div>
        </div>

        <div>
          <div style={{ border: '1px solid gray', padding: '12px' }}>Classification</div>
          <div style={{ border: '1px solid gray', padding: '12px' }}>Underweight</div>
          <div style={{ border: '1px solid gray', padding: '12px' }}>Normal Weight</div>
          <div style={{ border: '1px solid gray', padding: '12px' }}>Overweight</div>
          <div style={{ border: '1px solid gray', padding: '12px' }}>Obese</div>
          <div style={{ border: '1px solid gray', padding: '12px' }}>Severely Obese</div>
          <div style={{ border: '1px solid gray', padding: '12px' }}>Morbidly Obese</div>
        </div>
      </div>
    </div>
  )
}

export default App
