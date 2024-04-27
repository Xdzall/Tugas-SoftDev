import db from '../../database/index.js';

export default async function getAllStudents(page: number = 1) {
  try {
    const studentsCount = await db.mahasiswa.count();
    const totalPage = Math.ceil(studentsCount / 10);
    const students = await db.mahasiswa.findMany({
      take: 10,
      skip: (page * 10) - 10,
      select: {
        id: true,
        alamat: true,
        nama_lengkap: true,
        nrp: true,
        telepon: true,
        id_kelas: true,
        tanggal_lahir: true,
      },
    });
    
    return {
      code: 200,
      payload: { students },
      totalPage,
      totalData: studentsCount,
    };
  } catch (error) {
    console.log(error);
    return { error };
  }
}