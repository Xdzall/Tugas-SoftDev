import db from '../../database/index.js';

export default async function getSpecificStudent(id: string) {
  try {
    const student = await db.mahasiswa.findFirst({
      where: { id },
      select: {
        id: true,
        tanggal_dibuat: true,
        tanggal_diubah: true,
        alamat: true,
        kelas: true,
        nama_lengkap: true,
        nrp: true,
        rapor: true,
        tanggal_lahir: true,
        telepon: true,
      },
    });

    return {
      code: 200,
      payload: { student },
    };
  } catch (error) {
    console.log(error);
    return { error };
  }
}