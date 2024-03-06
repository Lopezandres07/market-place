import express from "express";
import { createNewUser } from "../../src/API/V1/Controllers/userControllers.js";

const router = express.Router();

router.post("/users", createNewUser);

export default router;
