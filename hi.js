function calculateBMI() {
    // Get height and weight from user input
    var height = parseFloat(document.getElementById('height').value);
    var weight = parseInt(document.getElementById('weight').value);

    // Calculate BMI
    var bmi = weight / (height * height);

    // Determine BMI category
    var category = '';
    if (bmi < 18.5) {
        category = 'underweight';
    } else if (bmi < 25) {
        category = 'normal weight';
    } else if (bmi < 30) {
        category = 'slightly overweight';
    } else if (bmi < 35) {
        category = 'obesity';
    } else {
        category = 'clinical obesity';
    }

    // Display the result on the web page
    document.getElementById('result').innerHTML = `Your BMI is ${bmi.toFixed(2)}, you are having ${category}.`;
}