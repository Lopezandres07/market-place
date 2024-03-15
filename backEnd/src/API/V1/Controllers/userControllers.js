import {
  byEmail,
  createGoogleUser,
  createUser,
  getUserById,
  updateUser,
} from "../Models/userModels.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const createNewUser = async (req, res) => {
  const { data } = req.body;

  try {
    const newUser = await createUser(data);

    res.status(201).json({ success: true, newUser });
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const loginUser = async (req, res) => {
  const { data } = req.body;

  try {
    const findUser = await byEmail(data);

    if (!findUser) {
      res.status(500).json({ error: "User not found" });
    } else {
      const validPassword = bcrypt.compareSync(
        data.password,
        findUser.password
      );

      if (!validPassword) {
        res.status(500).json({ error: "Invalid password" });
      } else {
        const { id, email, firstname, lastname, role_id } = findUser;
        console.log(findUser);

        const token = jwt.sign({ email }, process.env.JWT_SECRET, {
          expiresIn: "1h",
        });

        res.status(200).json({
          message: `Welcome ${firstname} ${lastname}, you have logged in`,
          code: 200,
          token,
          userData: { id, email, firstname, lastname, role_id },
        });
      }
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const handleNewUser = async (res, newUser) => {
  const { email, firstname, lastname, role_id } = newUser;

  const token = jwt.sign({ email }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  res.status(200).json({
    message: `Bienvenido ${firstname} ${lastname}, has iniciado sesion`,
    code: 200,
    token,
    userData: { email, firstname, lastname, role_id },
  });
};

const googleLogin = async (req, res) => {
  const { data } = req.body;

  try {
    const findUser = await byEmail(data);

    if (!findUser) {
      try {
        const newUser = await createGoogleUser(data);
        await handleNewUser(res, newUser);
      } catch (error) {
        res.status(400).json(error.message);
      }
    } else {
      const validPassword = bcrypt.compareSync(data.sub, findUser.password);

      if (!validPassword) {
        res.status(500).json({ error: error.message });
      } else {
        const { id, email, firstname, lastname, role_id } = findUser;
        const token = jwt.sign({ email }, process.env.JWT_SECRET, {
          expiresIn: "1h",
        });
        res.status(200).json({
          message: `Bienvenido ${firstname} ${lastname}, has iniciado sesion`,
          code: 200,
          token,
          userData: { id, email, firstname, lastname, role_id },
        });
      }
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getUserData = async (req, res) => {
  const { id } = req.params;

  try {
    const userData = await getUserById(id);

    if (userData) {
      res.status(200).json({ success: true, userData });
    } else {
      res.status(404).json({ success: false, message: "User not found" });
    }
  } catch (error) {
    console.error("Error en getUserData:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const updateUserProfile = async (req, res) => {
  const userId = req.user.id; // Suponiendo que obtienes el ID del usuario del token de autenticación
  const { firstName, lastName, email, password } = req.body; // Obtén los datos del cuerpo de la solicitud

  try {
    // Actualizar el perfil del usuario en la base de datos
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      {
        firstName,
        lastName,
        email,
        password,
      },
      { new: true }
    );

    // Envía una respuesta con el usuario actualizado
    res.json({ success: true, user: updatedUser });
  } catch (error) {
    console.error("Error al actualizar el perfil:", error);
    res
      .status(500)
      .json({ success: false, message: "Error al actualizar el perfil" });
  }
};

export {
  createNewUser,
  loginUser,
  googleLogin,
  getUserData,
  updateUserProfile,
};
