import db from '../../database/index.js';

export default async function getAllLecture(page: number = 1) {
  try {
    const lecturesCount = await db.dosen.count();
    const totalPage = Math.ceil(lecturesCount / 10);
    const lectures = await db.dosen.findMany({
      take: 10,
      skip: (page * 10) - 10,
      select: {
        id: true,
        alamat: true,
        nama_lengkap: true,
        nid: true,
        tanggal_lahir: true,
        telepon: true,
      }
    });
    
    return {
      code: 200,
      payload: { lectures },
      totalPage,
      totalData: lecturesCount,
    };
  } catch (error) {
    console.log(error);
    return { error };
  }
}