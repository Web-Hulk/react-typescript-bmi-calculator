import React from 'react';

const Content = () => {
  return (
    <>
      <p>
        This calculator should only be used by adults (pregnant or lactating women should not rely on these BMI readings), and no action should be taken based on its values other than to consult a suitably qualified person such as a doctor.
      </p>

      <p>
        The calculator will give you an idea of how your weight compares to common values. Body Mass Index (or BMI) is calculated as your weight (in kilograms) divided by the square of your height (in metres) or BMI = Kg/M2.
      </p>

      <h2>Is Body Mass Index reliable?</h2>

      <p>Your BMI, or Body Mass Index, is a measure of your weight compared to your height. Accurate assessments of obesity are important, as being overweight or obese significantly increases your risk of a variety of medical conditions including type 2 diabetes, heart disease and cancer. As levels of overweight or obesity increase, the spotlight has fallen on BMI and its shortcomings as a measure of ideal weight for individuals, rather than whole populations of people where 'averages' apply.</p>
    
      <p>For most adults, BMI gives a good estimate of your weight-related health risks. If your BMI is over 35, your weight is definitely putting your health at risk, regardless of the factors below. However, there are some situations where BMI may underestimate or overestimate these risks in the 25-35 BMI range. The main ones are:</p>
    
      <h2>Children</h2>

      <p>Your GP or health visitor can advise on where your child sits on the ‘centile charts’ used to estimate healthy weights for children.</p>

      <h2>Pregnant women</h2>

      <p>Usual BMI estimates do not apply if you’re pregnant.</p>

      <h2>If you are very muscular</h2>

      <p>BMI assumes you have an average amount of body fat, including ‘intra-abdominal fat’ – fat deep inside your stomach cavity rather than under your skin. Intra-abdominal fat is much more closely linked to risks of type 2 diabetes and heart disease than fat under the skin</p>
      <p>If you are very muscular, your level of body fat may be lower than predicted by your BMI. However, this only applies to people who do high levels of exercise – much more than average.</p>

      <h2>If you are of Asian origin</h2>

      <p>People of Asian origin are prone to accumulating intra-abdominal fat (fat deep inside your stomach cavity rather than under your skin) at a lower BMI than people of Caucasian origin. People with this pattern of weight gain are described as ‘apples’ rather than ‘pears’ from their body outline. This means their health risks start to rise at a lower BMI, because intra-abdominal fat is directly linked to development of heart disease and type 2 diabetes.</p>
      <p>The World Health Organisation has looked at the evidence and because of the variability between different Asian populations, it hasn't officially changed the cut-off points. However, it does recommend that for public health purposes, some Asian groups should be considered overweight if their BMI is 22-25, and obese with a BMI of 26-31.</p>

      <h2>Older people (over 65, possibly over 60)</h2>

      <p>Because muscle mass tends to drop and body fat tends to rise in older people, BMI may not be an accurate reflector of body fat if you're over 60.</p>

      <h2>Alternative estimates of weight-related health risks</h2>

      <p>If you feel BMI may not accurately reflect whether you are overweight or obese, measuring your abdominal circumference, waist-hip or waist-height ratio may give you a more realistic estimate.</p>

      <h2>Waist circumference</h2>

      <p>You measure your waist circumference half way between the bottom of your ribcage and the top of your hip bones, with the tape measure parallel to the floor. You must be breathing out when you measure.</p>
      
      <strong>Male</strong>
      <ul>
        <li>Increased health risk - 94cm</li>
        <li>High health risk - 102cm</li>
      </ul>

      <strong>Female</strong>
      <ul>
        <li>Increased health risk - 80cm</li>
        <li>High health risk - 88cm</li>
      </ul>

      <h2>Waist to hip ratio</h2>

      <p>To check your waist to hip ratio, measure your waist circumference (as above), and your hip size at the widest part of your hips. Divide your abdominal circumference by your hip measurement to give a ratio.</p>

      <ul>
        <li>In women, a waist to hip ratio greater than 0.85 is associated with greater than average risk.</li>
        <li>In men, a waist to hip ratio greater than 1.00 is associated with greater than average risk.</li>
      </ul>

      <h2>Waist to height ratio</h2>

      <p>A recent study comparing BMI, waist circumference, waist to hip ratio and waist to height ratio found that the most accurate way of predicting your whole-body fat level was waist-height ratio.</p>
      <p>Measure your waist circumference as above and simply divide it by your height – fairly obviously both measurements should either be in imperial (inches) or metric (cm).</p>
    
      <p>Whole body obesity is defined by a waist-height ratio of:</p>

      <ul>
        <li>0.53 or more for men</li>
        <li>0.54 or more for women</li>
      </ul>

      <p>Abdominal obesity was defined by a waist-height ratio of 0.59 or more.</p>
    </>
  )
}

export default Content;