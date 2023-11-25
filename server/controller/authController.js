import UserObj from '../models/userModel.js';
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';
export const signup = async (req, res, next) => {
    const { username, email, password } = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10)
    const newUser = new UserObj({ username, email, password: hashedPassword });
    try {
     await newUser.save();
       res.status(201).json('User Created Successfuly')
    } catch (error) {
        next(error)
    }
}