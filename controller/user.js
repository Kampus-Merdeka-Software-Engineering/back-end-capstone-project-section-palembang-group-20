import { getUser } from "../service/user.js"
import { postUser } from "../service/user.js"

export const User =  async (request, response) =>{
    const {username, nama_lengkap, no_hp, password} = request.body;
    const akun = await getUser  (username, nama_lengkap, no_hp, password);

    response.json({
        data: akun,
    });
}

export const Post =  async (request, response) =>{
    const {username, nama_lengkap, no_hp, password} = request.body;
    const akun = await postUser  (username, nama_lengkap, no_hp, password);

    response.json({
        data: akun,
    });

};