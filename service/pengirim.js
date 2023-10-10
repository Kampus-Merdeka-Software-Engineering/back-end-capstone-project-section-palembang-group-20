import pengirim from "../models/pengirim.js";


export const getPengirim = async (id_pengirim, nama_pengirim, notelp_pengirim, email_pengirim, alamat_penjemputan) => {
  return await pengirim.findAll({id_pengirim, nama_pengirim, notelp_pengirim, email_pengirim, alamat_penjemputan});
};

export const postPengirim = async (id_pengirim, nama_pengirim, notelp_pengirim, email_pengirim, alamat_penjemputan) => {
  return await pengirim.create({id_pengirim, nama_pengirim, notelp_pengirim, email_pengirim, alamat_penjemputan});
};