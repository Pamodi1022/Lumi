const bcrypt = require('bcryptjs');
const db = require('../config/firebaseConfig');
const admin = require('firebase-admin');
const generateToken = require('../config/jwtConfig');

const registerUser = async (req, res) => {
    const { fullName, email, mobileNo, password } = req.body;
  
    if (!fullName || !email || !mobileNo || !password) {
      return res.status(400).json({ error: 'All fields are required.' });
    }
  
    try {
      // Check for existing user by email
      const emailQuery = await db.collection('users').where('email', '==', email).get();
      // Check for existing user by mobile number
      const phoneQuery = await db.collection('users').where('mobileNo', '==', mobileNo).get();
  
      if (!emailQuery.empty) {
        return res.status(400).json({ error: 'Email is already registered.' });
      }
  
      if (!phoneQuery.empty) {
        return res.status(400).json({ error: 'Mobile number is already registered.' });
      }
  
      // Hash password and create new user
      const hashedPassword = await bcrypt.hash(password, 10);
      const userRef = db.collection('users').doc(email);
      await userRef.set({
        fullName,
        email,
        mobileNo,
        password: hashedPassword,
        createdAt: new Date(),
      });
  
      res.status(200).json({ message: 'User registered successfully!' });
    } catch (error) {
      res.status(500).json({ error: 'Error registering user: ' + error.message });
    }
  };
  
  module.exports = {
    registerUser
  };