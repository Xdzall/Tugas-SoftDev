import db from '../../database/index.js';

export default async function getSpecificLecture(id: string) {
  try {
    const lectures = await db.dosen.findFirst({
      where: { id },
      select: {
        id: true,
        alamat: true,
        kelas: true,
        mataKuliah: true,
        nama_lengkap: true,
        nid: true,
        tanggal_dibuat: true,
        tanggal_diubah: true,
        tanggal_lahir: true,
        telepon: true,
      },
    });

    return {
      code: 200,
      payload: { lectures },
    };
  } catch (error) {
    console.log(error);
    return { error };
  }
}