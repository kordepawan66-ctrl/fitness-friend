function getDietPlan() {
    let age = document.getElementById("age").value;
    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;
    let gender = document.getElementById("gender").value;
    let result = document.getElementById("result");

    if (!age || !height || !weight || !gender) {
        result.style.display = "block";
        result.innerHTML = "<b>Please enter all details.</b>";
        return;
    }

    // Calculate BMI: weight (kg) / [height (m)]^2
    let bmi = (weight / ((height / 100) * (height / 100))).toFixed(1);
    let suggestion = "";

    // 

    if (bmi < 18.5) {
        suggestion = `
            <b>Your BMI is ${bmi}. You are Underweight.</b><br>
            <h4>Weight Gain Tips:</h4>
            <ul>
                <li>Eat in a **calorie surplus** – consume more calories than you burn daily.</li>
                <li>Eat **frequently** – 4–6 meals/snacks a day with balanced nutrition.</li>
                <li>Focus on **protein** – eggs, milk, chicken, fish, lentils, paneer.</li>
                <li>Add healthy carbs – rice, oats, potatoes, roti, fruits.</li>
                <li>Include **healthy fats** – nuts, peanut butter, olive oil, ghee in moderation.</li>
                <li>**Strength training** – lifting weights helps build muscle.</li>
                <li>Don’t skip meals – consistency matters.</li>
                <li>Patience is key – weight gain should be gradual.</li>
            </ul>
        `;
    } 
    else if (bmi >= 18.5 && bmi <= 24.9) {
        suggestion = `
            <b>Your BMI is ${bmi}. You are in the Normal Range.</b><br>
            <p>Maintain a balanced diet with fruits, vegetables, proteins, whole grains, and regular exercise.</p>
        `;
    } 
    else {
        suggestion = `
            <b>Your BMI is ${bmi}. You are Overweight/Obese.</b><br>
            <h4>Fat Loss Tips:</h4>
            <ul>
                <li>Eat in a **calorie deficit** – consume fewer calories than you burn.</li>
                <li>**Control portion sizes** – use smaller plates, avoid overeating.</li>
                <li>Choose **whole foods** – fruits, vegetables, whole grains, lean protein.</li>
                <li>Cut down on **junk** – minimize sugary drinks, fried food, sweets.</li>
                <li>Stay **hydrated** – drink 2–3 liters of water daily.</li>
                <li>**Move more** – 30–45 mins of walking, gym, or exercise daily.</li>
                <li>**Sleep well** – 7–8 hours of sleep helps fat loss.</li>
                <li>Be consistent – results take weeks, not days.</li>
            </ul>
        `;
    }

    result.style.display = "block";
    result.innerHTML = suggestion;
}

function resetForm() {
    document.getElementById("age").value = "";
    document.getElementById("height").value = "";
    document.getElementById("weight").value = "";
    document.getElementById("gender").value = "";
    document.getElementById("result").style.display = "none";
}
