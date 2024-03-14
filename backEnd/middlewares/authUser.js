import jwt from "jsonwebtoken";
import { byEmail } from "../../backEnd/src/API/V1/Models/userModels.js";
import dotenv from "dotenv";
dotenv.config();

const authUser = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await byEmail({ email: decoded.email });

    if (!user) {
      throw new Error();
    }

    req.token = token;
    req.user = user;
    next();
  } catch (error) {
    res.status(401).send({ error: "Por favor, autentícate." });
  }
};
export { authUser };
