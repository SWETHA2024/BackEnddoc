const express = require("express");
const collection = require("./models/userSchema");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Login route
app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await collection.findOne({ email, password });

        if (user) {
            res.json("exist");
        } else {
            res.json("notexist");
        }
    } catch (e) {
        console.error(e); // Log the error for debugging
        res.status(500).json("fail");
    }
});

// Signup route
app.post("/signup", async (req, res) => {
    const { email, password } = req.body;

    try {
        const existingUser = await collection.findOne({ email });

        if (existingUser) {
            res.json("exist");
        } else {
            // Create new user
            const newUser = await collection.create({ email, password });
            res.json("userCreated");
        }
    } catch (e) {
        console.error(e); // Log the error for debugging
        res.status(500).json("fail");
    }
});

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});
