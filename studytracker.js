// StudyTrackr - Example Code Demonstrating JavaScript Skills from Unit 0

// 1. Values, Data Types, and Operations
// Storing a study task with different data types
let taskName = "Science Homework"; // String
let dueDate = "2025-03-29"; // String (formatted date)
let isCompleted = false; // Boolean
let daysLeft = 5 - 2; // Number (Operation)
console.log(`Task: ${taskName}, Due: ${dueDate}, Completed: ${isCompleted}, Days Left: ${daysLeft}`);


// 2. Stringing Characters Together
// Creating a notification message using string concatenation
let reminderMessage = `Reminder: Complete "${taskName}" by ${dueDate}!`;
console.log(reminderMessage);

// 3. Control Structures and Logic
// Checking if a task is due soon and alerting the user
if (daysLeft <= 2) {
    console.log("Urgent! This task is due soon. Prioritize it!");
} else {
    console.log("You still have time, but don't put it off!");
}

// 4. Working with Loops
// Displaying a list of study tasks using a loop
let studyTasks = [
    { name: "Science Homework", due: "2025-03-29" },
    { name: "Math Quiz", due: "2025-03-30" },
    { name: "Essay Draft", due: "2025-03-31" }
];

for (let i = 0; i < studyTasks.length; i++) {
    console.log(`Task: ${studyTasks[i].name} - Due: ${studyTasks[i].due}`);
}

// 5. Building Arrays
// Creating an array to store study tasks
let tasks = ["Science Homework", "Math Quiz", "Essay Draft"];
console.log("Initial tasks:", tasks);


// 6. Using Arrays
// Adding a new task and removing a completed task
tasks.push("History Reading"); // Adding
tasks.splice(1, 1); // Removing second task
console.log("Updated tasks:", tasks);