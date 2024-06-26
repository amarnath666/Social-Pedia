import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

/*REGISTER USER */
export const register = async (req, res) => {
    try{
    // Destructure relevant data from the request body
        const {
            firstName, 
            lastName,
            email, 
            password,
            picturePath,
            friends,
            location,
            occupation
        } = req.body;
    
    // Generate a salt and hash the password using bcrypt
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);

    // Check if the user with the given email already exists
    let user = await User.findOne({ email: req.body.email });

    if (user) {
        return res.status(500).send("User with given email already exists!");
      }
    
    // Create a new User instance with hashed password and other details
        const newUser = new User({
            firstName, 
            lastName,
            email, 
            password: passwordHash,
            picturePath,
            friends,
            location,
            occupation,
            viewedProfile: Math.floor(Math.random() * 10000),
            impressions: Math.floor(Math.random() * 10000)
        });
    // Save the new user to the database
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (err) {
    // Handle any errors that may occur during the registration process
        res.status(500).json({ error: err.message });
    }
}

/* LOGGING IN */
export const login = async (req, res) => {
    try {
        const { email, password} = req.body;

        // Find a user with the provided email in the database
        const user = await User.findOne({ email: email})
        if(!user) return res.status(401).json({msg: 'Invalid email or password'});

         // Compare the provided password with the hashed password stored in the database
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch)  return res.status(401).json({ error: 'Invalid email or password' });

        // If the email and password are valid, generate a JSON Web Token (JWT)
        const token = jwt.sign({ id: user._id}, process.env.JWT_SECRET);

        // Remove the password from the user object before sending it in the response
        delete user.password;
        res.status(200).json({ token, user});
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}