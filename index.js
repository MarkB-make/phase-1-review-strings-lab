// Write your code in this file!

// 1. Define currentUser variable
const currentUser = 'Grace Hopper';

// 2. Define welcomeMessage using template literal
const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;

// 3. Define excitedWelcomeMessage using toUpperCase() method
const excitedWelcomeMessage = welcomeMessage.toUpperCase();

// 4. Define shortGreeting using slice() to get first initial
const shortGreeting = `Welcome, ${currentUser.slice(0, 1)}!`;
