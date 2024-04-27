import db from '../../database/index.js';

export default async function getSpecificLesson(id: string) {
  try {
    const lesson = await db.mataKuliah.findFirst({
      where: { id },
      select: {
        id: true,
        tanggal_dibuat: true,
        tanggal_diubah: true,
        dosen: true,
        judul: true,
        kdmk: true,
        kelas: true,
        rapor: true,
        sks: true,
      },
    });

    return {
      code: 200,
      payload: { lesson },
    };
  } catch (error) {
    console.log(error);
    return { error };
  }
}