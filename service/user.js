import User from "../models/User.js";


export const getUser = async (username, nama_lengkap, no_hp, password) => {
  return await User.findAll({username, nama_lengkap, no_hp, password});
};

export const postUser = async (username, nama_lengkap, no_hp, password) => {
  return await User.create({username, nama_lengkap, no_hp, password});
};