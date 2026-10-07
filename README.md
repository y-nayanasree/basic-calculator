# BMI Calculator

A simple and responsive BMI Calculator built using HTML5, CSS3, and JavaScript.

## Features

- Accepts height in centimeters
- Accepts weight in kilograms
- Calculates Body Mass Index (BMI)
- Displays BMI rounded to two decimal places
- Shows BMI category
- Validates empty inputs
- Rejects zero and negative values
- Responsive design for mobile and desktop
- Modern and clean user interface

## Technologies Used

- HTML5
- CSS3
- JavaScript

## How It Works

The user enters their height and weight. JavaScript converts the height from centimeters to meters and calculates BMI using the standard formula.

### BMI Formula

`BMI = Weight (kg) / Height² (m)`

The calculated BMI is then classified into a category:

- Below 18.5 — Underweight
- 18.5 to 24.9 — Normal weight
- 25.0 to 29.9 — Overweight
- 30.0 and above — Obesity

## Validation

The application checks whether:

- Height and weight are entered
- Values are greater than zero
- Valid numerical values are provided

## Project Structure

```text
bmi-calculator/
├── index.html
├── style.css
├── script.js
└── README.md