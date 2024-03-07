import { createUser } from "../Models/userModels.js";

const createNewUser = async (req, res) => {
  try {
    const { user } = req.body;
    const newUser = await createUser(user);
    res.status(201).json({ user: newUser });
  } catch (error) {
    res.status(400).json(error.message);
  }
};

export { createNewUser };
