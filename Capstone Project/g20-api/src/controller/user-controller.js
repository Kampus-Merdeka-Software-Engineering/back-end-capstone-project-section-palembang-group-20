import userServices from "../service/user-service.js";

const register = async (req, res, next) => {
  try {
    const result = await userServices.register(req.body);
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const result = await userServices.login(req.body);
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export default {
  register,
  login
};
