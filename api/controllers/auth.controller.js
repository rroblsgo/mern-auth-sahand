import bcryptjs from 'bcryptjs';
import User from '../models/user.model.js';

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const salt = bcryptjs.genSaltSync(10);
  const hashedPassword = bcryptjs.hashSync(password, salt);
  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });
  try {
    await newUser.save();
    res.status(201).json({
      message: 'User created successfully',
    });
  } catch (error) {
    // res.status(500).json({ message: error.message });
    // next(errorHandler(500, 'something went wrong'));
    next(error);
  }
};
