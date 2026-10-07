
// Calculates BMI
function calculateBMI() {

    // Get height and weight values
    const heightInput = document.getElementById("height").value;
    const weightInput = document.getElementById("weight").value;

    const result = document.getElementById("result");

    // Check for empty values
    if (heightInput === "" || weightInput === "") {

        result.textContent =
            "Please enter both height and weight.";

        return;
    }

    // Convert input values to numbers
    const height = Number(heightInput);
    const weight = Number(weightInput);

    // Reject zero and negative values
    if (height <= 0 || weight <= 0) {

        result.textContent =
            "Please enter valid positive values.";

        return;
    }

    // Convert height from centimeters to meters
    const heightInMeters = height / 100;

    // BMI formula
    const bmi = weight / (heightInMeters * heightInMeters);

    // Round BMI to two decimal places
    const roundedBMI = bmi.toFixed(2);

    // Determine BMI category
    let category;

    if (bmi < 18.5) {

        category = "Underweight";

    } else if (bmi < 25) {

        category = "Normal weight";

    } else if (bmi < 30) {

        category = "Overweight";

    } else {

        category = "Obesity";
    }

    // Display result
    result.innerHTML =
        `Your BMI: ${roundedBMI}<br>Category: ${category}`;
}