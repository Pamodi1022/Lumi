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

  const loginUser = async (req, res) => {
    try {
      const { email, password } = req.body;
      console.log("Received login request for:", email);
      
      try {
        // Check if user exists
        const userSnapshot = await db.collection('users').where('email', '==', email).get();
        console.log("User query complete");
        
        if (userSnapshot.empty) {
          return res.status(400).json({ message: 'Invalid credentials' });
        }
        
        const userDoc = userSnapshot.docs[0];
        const user = userDoc.data();
        console.log("User found, checking password");
        
        try {
          // Verify password
          const isValidPassword = await bcrypt.compare(password, user.password);
          console.log("Password verification result:", isValidPassword);
          
          if (!isValidPassword) {
            return res.status(400).json({ message: 'Invalid credentials' });
          }
          
          try {
            // Generate JWT token
            console.log("Generating token");
            const token = generateToken(email);
            console.log("Token generated");
            
            try {
              // Add user to the "login" collection
              console.log("Adding to login collection");
              await db.collection('login').doc(email).set({
                email,
                loginTime: admin.firestore.FieldValue.serverTimestamp(),
              });
              console.log("Login record created");
              
              res.json({ token });
            } catch (loginError) {
              console.error('Error adding login record:', loginError);
              res.status(500).json({ message: 'Error updating login records' });
            }
          } catch (tokenError) {
            console.error('Token generation error:', tokenError);
            res.status(500).json({ message: 'Error generating authentication token' });
          }
        } catch (passwordError) {
          console.error('Password comparison error:', passwordError);
          res.status(500).json({ message: 'Error verifying credentials' });
        }
      } catch (userQueryError) {
        console.error('User query error:', userQueryError);
        res.status(500).json({ message: 'Error retrieving user data' });
      }
    } catch (error) {
      console.error('Login error:', error);
      res.status(500).json({ message: 'Error logging in' });
    }
  };
  
  
  module.exports = {
    registerUser,
    loginUser
  };

  