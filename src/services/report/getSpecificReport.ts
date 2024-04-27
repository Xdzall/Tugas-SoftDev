import db from '../../database/index.js';

export default async function getSpecificReport(id: string) {
  try {
    const report = await db.rapor.findFirst({
      where: { id },
      select: {
        id: true,
        tanggal_dibuat: true,
        tanggal_diubah: true,
        nilai: true,
        mahasiswa: true,
        matakuliah: true,
      },
    });

    return {
      code: 200,
      payload: { report },
    };
  } catch (error) {
    console.log(error);
    return { error };
  }
}