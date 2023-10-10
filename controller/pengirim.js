import { getPengirim } from "../service/pengirim.js"
import { postPengirim } from "../service/pengirim.js"

export const pengirim =  async (request, response) =>{
    const {id_pengirim, nama_pengirim, notelp_pengirim, email_pengirim, alamat_penjemputan} = request.body;
    const akun = await getPengirim  (id_pengirim, nama_pengirim, notelp_pengirim, email_pengirim, alamat_penjemputan);

    response.json({
        data: akun,
    });
}

export const Post =  async (request, response) =>{
    const {id_pengirim, nama_pengirim, notelp_pengirim, email_pengirim, alamat_penjemputan} = request.body;
    const akun = await postPengirim  (id_pengirim, nama_pengirim, notelp_pengirim, email_pengirim, alamat_penjemputan);

    response.json({
        data: akun,
    });

};