import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { prismaClient } from "../app/database.js";
import { ResponseError } from "../error/response-error.js";
import { validate } from "../validation/validation.js";
import { loginValidation, registerValidation } from "../validation/user-validation.js";

const register = async (request) => {
  try {
    const user = validate(registerValidation, request);

    const isUsernameTaken = await prismaClient.user.findFirst({
      where: {
        username: user.username,
      },
    });

    if (isUsernameTaken) {
      throw new ResponseError(400, "Username already taken");
    }

    const isPhoneNumberTaken = await prismaClient.user.findFirst({
      where: {
        no_hp: user.no_hp,
      },
    });

    if (isPhoneNumberTaken) {
      throw new ResponseError(400, "Phone number already used");
    }

    user.password = await bcrypt.hash(user.password, 10);

    await prismaClient.user.create({
      data: user,
    });

    return {
      success: true,
      message: "User created successfully",
    };
  } catch (error) {
    return {
      success: false,
      error: {
        status: error.statusCode || 500,
        message: error.message || "Internal Server Error",
      },
    };
  }
};

const login = async (request) => {
  try {
    const { username, password } = validate(loginValidation, request);

    const user = await prismaClient.user.findFirst({
      where: {
        username: username,
      },
    });

    if (!user) {
      throw new ResponseError(400, "Username incorrect!");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new ResponseError(401, "Invalid password");
    }

    const tokenPayload = {
      username: user.username,
      nama_lengkap: user.nama_lengkap,
      no_hp: user.no_hp,
    };

    const token = jwt.sign(tokenPayload, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    return {
      success: true,
      data: {
        token: token,
        user: user,
      },
    };
  } catch (error) {
    return {
      success: false,
      error: {
        status: error.statusCode || 500,
        message: error.message || "Internal Server Error",
      },
    };
  }
};

export default {
  register,
  login,
};
