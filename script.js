// --- DATA STRUCTURES ---

// Pre-designed step-by-step instructions for specific exercises.
const exerciseDetails = {
    "Jumping Jacks": {
        type: "Cardio",
        image: `<svg class="w-20 h-20 text-primary-blue mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>`,
        steps: [
            "Start standing with your feet together and hands at your sides.",
            "In one swift motion, jump your feet out to the sides while raising your arms overhead until they nearly touch.",
            "Immediately jump back to the starting position, bringing your feet together and arms back to your sides.",
            "Maintain a steady, quick pace for the duration of the set. Focus on soft landings."
        ]
    },
    "Bodyweight Squats": {
        type: "Strength / Lower Body",
        image: `<svg class="w-20 h-20 text-primary-blue mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 11c0 3.866-3.582 7-8 7S4 14.866 4 11V7h16v4c0 3.866-3.582 7-8 7S12 14.866 12 11zM12 4a3 3 0 100 6 3 3 0 000-6z"></path></svg>`,
        steps: [
            "Stand with your feet shoulder-width apart, chest up, and core tight.",
            "Lower your hips as if sitting back in a chair, keeping your back straight and knees tracking over your toes.",
            "Descend until your thighs are parallel to the floor (or as deep as comfortable). Keep your weight in your heels.",
            "Drive through your heels to return to the starting position, squeezing your glutes at the top."
        ]
    },
    "Plank": {
        type: "Core / Stabilizer",
        image: `<svg class="w-20 h-20 text-primary-blue mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l-2 2M15 19V6l2 2M12 4v16"></path></svg>`,
        steps: [
            "Start in a push-up position, then drop down onto your forearms, keeping elbows directly beneath shoulders.",
            "Maintain a straight line from your head to your heels; do not let your hips sag or rise too high.",
            "Engage your abdominal muscles and squeeze your glutes tightly.",
            "Hold this position for the specified duration, focusing on deep, steady breathing and avoiding any arch in the lower back."
        ]
    },
    "Spinal Twist (Supine)": {
        type: "Flexibility / Mobility",
        image: `<svg class="w-20 h-20 text-primary-blue mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>`,
        steps: [
            "Lie flat on your back and extend your arms out to the sides in a 'T' shape.",
            "Bend your knees and bring your legs up to a 90-degree angle (feet off the floor).",
            "Slowly lower your knees to one side, keeping your shoulders pressed flat to the floor.",
            "Turn your head to look in the opposite direction of your knees. Hold for 30 seconds, then repeat on the other side."
        ]
    }
    // Add more exercises here as needed
};

const workoutPlans = {
    weightLoss: {
        title: "Weight Loss Circuit (High Intensity)",
        description: "Focus on full-body movements and high-intensity interval training (HIIT) to maximize calorie burn. Perform each circuit 3 times.",
        exercises: [
            { name: "Jumping Jacks", sets: "3", reps: "60 seconds" },
            { name: "Bodyweight Squats", sets: "3", reps: "15 reps" },
            { name: "Push-ups (or Knee Push-ups)", sets: "3", reps: "Max reps" },
            { name: "Mountain Climbers", sets: "3", reps: "45 seconds" },
            { name: "Plank", sets: "3", reps: "60 seconds hold" },
        ]
    },
    muscleBuilding: {
        title: "Muscle Hypertrophy (Strength Focus)",
        description: "Focus on compound lifts with progressive overload. Rest 60-90 seconds between sets. This is a Chest & Triceps day.",
        exercises: [
            { name: "Bench Press (or Dumbbell Press)", sets: "4", reps: "8-12 reps" },
            { name: "Incline Push-ups", sets: "3", reps: "12-15 reps" },
            { name: "Dumbbell Flys", sets: "3", reps: "15 reps" },
            { name: "Triceps Skullcrushers", sets: "3", reps: "10-12 reps" },
            { name: "Overhead Triceps Extension", sets: "3", reps: "12 reps" },
        ]
    },
    improvingFlexibility: {
        title: "Full-Body Mobility & Flexibility",
        description: "Focus on static and dynamic stretching. Hold each stretch for 30 seconds unless otherwise noted. Perform 2 rounds.",
        exercises: [
            { name: "Downward-Facing Dog", sets: "2", reps: "60 seconds hold" },
            { name: "Seated Forward Fold", sets: "2", reps: "45 seconds hold" },
            { name: "Spinal Twist (Supine)", sets: "2", reps: "30 seconds per side" },
            { name: "Hip Flexor Stretch (Lunge Position)", sets: "2", reps: "30 seconds per side" },
            { name: "Shoulder Cross-Body Stretch", sets: "2", reps: "30 seconds per arm" },
        ]
    },
    improvingStamina: {
        title: "Cardio Endurance & Stamina Boost",
        description: "High-intensity work followed by low-intensity rest (Tabata style). Complete 4 cycles of 8 rounds.",
        exercises: [
            { name: "High Knees", sets: "8 rounds", reps: "20s work / 10s rest" },
            { name: "Burpees", sets: "8 rounds", reps: "20s work / 10s rest" },
            { name: "Jump Squats", sets: "8 rounds", reps: "20s work / 10s rest" },
            { name: "Sprints (On the spot)", sets: "8 rounds", reps: "20s work / 10s rest" },
        ]
    },
    improvingPosture: {
        title: "Core and Back Strengthening",
        description: "Exercises designed to strengthen the core stabilizers and upper back muscles for better posture. Complete 3 sets of each.",
        exercises: [
            { name: "Plank", sets: "3", reps: "60-90 seconds hold" },
            { name: "Bird-Dog", sets: "3", reps: "10-12 reps per side" },
            { name: "Cobra Stretch (Back Extension)", sets: "3", reps: "15 reps" },
            { name: "Wall Angels", sets: "3", reps: "15 reps" },
            { name: "Glute Bridges", sets: "3", reps: "15 reps" },
        ]
    },
    improvingHeartHealth: {
        title: "Aerobic Fitness and Cardiovascular Health",
        description: "Sustained, low-to-moderate intensity aerobic activity to strengthen the cardiovascular system. Aim for 30 minutes minimum.",
        exercises: [
            { name: "Brisk Walk or Light Jog", sets: "1", reps: "30-45 minutes" },
            { name: "Cycling (Stationary or Outdoor)", sets: "1", reps: "30 minutes" },
            { name: "Elliptical or Stair Climber", sets: "1", reps: "20-30 minutes" },
            { name: "Cool-down and Stretching", sets: "1", reps: "5 minutes" },
        ]
    },
    weightGain: {
        title: "Mass and Strength Building (Caloric Surplus Focus)",
        description: "High volume, moderate intensity training focused on compound movements to promote mass gain. Rest 60 seconds between sets.",
        exercises: [
            { name: "Barbell Squats", sets: "4", reps: "6-10 reps" },
            { name: "Deadlifts (Light Weight Focus)", sets: "3", reps: "8 reps" },
            { name: "Overhead Press", sets: "3", reps: "10-12 reps" },
            { name: "Pull-ups (or Lat Pulldowns)", sets: "3", reps: "8-12 reps" },
            { name: "Bicep Curls", sets: "3", reps: "12 reps" },
        ]
    },
};

// --- DOM REFERENCES ---
const form = document.getElementById('fitnessForm');
const mainFormView = document.getElementById('mainFormView');
const detailsView = document.getElementById('detailsView');
const outputDiv = document.getElementById('workoutOutput');
const messageBox = document.getElementById('messageBox');

// --- VIEW SWITCHING FUNCTIONS ---

function showListView() {
    detailsView.classList.add('hidden');
    mainFormView.classList.remove('hidden');
}

function showDetailsView() {
    mainFormView.classList.add('hidden');
    detailsView.classList.remove('hidden');
}

// Making showExerciseDetails globally accessible for the onclick in the HTML output
window.showExerciseDetails = function(exerciseName) {
    const detailData = exerciseDetails[exerciseName];
    const detailTitle = document.getElementById('detailTitle');
    const detailImage = document.getElementById('detailImage');
    const detailSteps = document.getElementById('detailSteps');
    const detailType = document.getElementById('detailType');

    if (!detailData) {
        showMessage(`No step-by-step details available for "${exerciseName}".`, 'error');
        return;
    }

    // 1. Update Title and Type
    detailTitle.textContent = `Exercise: ${exerciseName}`;
    detailType.textContent = `Type: ${detailData.type}`;

    // 2. Update Image/Icon Placeholder
    detailImage.innerHTML = detailData.image;

    // 3. Update Steps
    let stepsHTML = '';
    detailData.steps.forEach(step => {
        stepsHTML += `<li class="pl-2">${step}</li>`;
    });
    detailSteps.innerHTML = stepsHTML;

    // 4. Switch View
    showDetailsView();
}


// --- UTILITY FUNCTIONS ---

function showMessage(message, type = 'error') {
    messageBox.textContent = message;
    messageBox.classList.remove('hidden', 'bg-red-100', 'text-red-700', 'bg-green-100', 'text-green-700');
    
    if (type === 'error') {
        messageBox.classList.add('bg-red-100', 'text-red-700');
    } else {
        messageBox.classList.add('bg-green-100', 'text-green-700');
    }

    // Hide the message after 5 seconds
    setTimeout(() => {
        messageBox.classList.add('hidden');
    }, 5000);
}

function calculateBMI(weightKg, heightCm) {
    const heightM = heightCm / 100;
    return weightKg / (heightM * heightM);
}

// --- MAIN WORKOUT GENERATION ---

function generateWorkout(event) {
    event.preventDefault(); // Stop the form from submitting normally

    // 1. Get user input values
    const age = document.getElementById('age').value;
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    const gender = document.getElementById('gender').value;
    const goal = document.getElementById('goal').value;

    // Simple validation
    if (!age || !weight || !height || !gender || !goal) {
        showMessage("Please fill in all required fields to generate your workout.", 'error');
        return;
    }
    
    // 2. Select the corresponding workout plan
    const plan = workoutPlans[goal];

    if (!plan) {
        showMessage("Sorry, the selected goal is not currently supported.", 'error');
        return;
    }

    // 3. Render the workout plan to the output section
    let workoutHTML = `
        <div class="bg-white p-4 rounded-lg shadow-inner border border-primary-blue/30">
            <p class="text-xs font-bold text-primary-blue uppercase">GOAL: ${plan.title.split('(')[0].trim()}</p>
            <h3 class="text-xl font-bold mt-1 text-gray-900">${plan.title}</h3>
            <p class="text-sm text-gray-600 italic mt-1">${plan.description}</p>
        </div>
        <ul class="space-y-3">
    `;

    plan.exercises.forEach((exercise, index) => {
        const hasDetails = exerciseDetails[exercise.name];
        
        // Note: The onclick event is now globally available via the window.showExerciseDetails function
        workoutHTML += `
            <li class="p-3 bg-white rounded-lg border-l-4 border-primary-blue flex flex-col sm:flex-row justify-between items-start sm:items-center transition hover:shadow-md">
                <div class="flex-1 mb-2 sm:mb-0">
                    <span class="text-sm font-semibold text-gray-800">${index + 1}. ${exercise.name}</span>
                    <p class="text-xs text-gray-500">${exercise.sets} / ${exercise.reps}</p>
                </div>
                <div class="flex items-center space-x-2">
                    <p class="text-xs font-bold text-primary-blue mr-3 hidden sm:block">Sets: ${exercise.sets}, Reps: ${exercise.reps}</p>
                    ${hasDetails ? 
                        `<button onclick="showExerciseDetails('${exercise.name}')" 
                                 class="text-xs font-medium text-white bg-primary-blue hover:bg-emerald-600 px-3 py-1 rounded-full transition duration-150 ease-in-out">
                            Show Steps
                        </button>` 
                        : 
                        `<span class="text-xs text-gray-400 italic">No details</span>`
                    }
                </div>
            </li>
        `;
    });

    workoutHTML += `</ul>`;
    
    // Add a summary of personal details for context
    const bmi = calculateBMI(parseFloat(weight), parseFloat(height));
    workoutHTML += `
        <div class="mt-6 pt-4 border-t border-gray-300">
            <h4 class="text-base font-semibold text-gray-800 mb-2">Your Profile Summary:</h4>
            <ul class="text-sm text-gray-600 space-y-1">
                <li><strong>Age:</strong> ${age} years</li>
                <li><strong>Gender:</strong> ${gender}</li>
                <li><strong>Weight:</strong> ${weight} kg</li>
                <li><strong>Height:</strong> ${height} cm</li>
                <li><strong>Estimated BMI:</strong> ${bmi.toFixed(1)}</li>
            </ul>
        </div>
    `;


    outputDiv.innerHTML = workoutHTML;
    showMessage("Workout plan generated successfully!", 'success');
}

// Attach event listener to the form when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    form.addEventListener('submit', generateWorkout);
});
