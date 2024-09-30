const express = require('express');
const app = express();
const port = 5000;

app.use(express.json()); // Middleware to parse JSON request body

// Simulate in-memory storage of users and fitness goals
let users = [];
let fitnessGoals = {};

// Route to handle user signup (just store the user in memory for now)
app.post('/api/signup', (req, res) => {
    const { email, password } = req.body;
    users.push({ email, password });
    res.send({ message: 'User signed up successfully!' });
});

// Route to handle setting fitness goals
app.post('/api/goals', (req, res) => {
    const { email, goal } = req.body;
    fitnessGoals[email] = goal;
    res.send({ message: 'Goal saved successfully!' });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
