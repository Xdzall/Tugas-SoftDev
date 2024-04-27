import db from '../../database/index.js';

export default async function getAllLessons(page: number = 1) {
  try {
    const lessonsCount = await db.mataKuliah.count();
    const totalPage = Math.ceil(lessonsCount / 10);
    const lessons = await db.mataKuliah.findMany({
      take: 10,
      skip: (page * 10) - 10,
      select: {
        id: true,
        judul: true,
        kdmk: true,
        sks: true,
      },
    });
    
    return {
      code: 200,
      payload: { lessons },
      totalPage,
      totalData: lessonsCount,
    };
  } catch (error) {
    console.log(error);
    return { error };
  }
}