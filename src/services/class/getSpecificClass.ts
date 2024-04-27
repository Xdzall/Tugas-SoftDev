import db from '../../database/index.js';

export default async function getSpecificClass(id: string) {
  try {
    const perclass = await db.kelas.findFirst({
      where: { id },
      select: {
        id: true,
        mataKuliah: true,
        tanggal_dibuat: true,
        tanggal_diubah: true,
        dosen: true,
        mahasiswa: true,
        tahun: true,
      },
    });

    return {
      code: 200,
      payload: { class: perclass },
    };
  } catch (error) {
    console.log(error);
    return { error };
  }
}