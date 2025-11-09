// Get the first argument after the script name
const arg = process.argv[2];

// Convert it to an integer
const num = parseInt(arg, 10);

// Check if the conversion produced a valid number
if (!isNaN(num)) {
  console.log(`My number: ${num}`);
} else {
  console.log("Not a number");
}
