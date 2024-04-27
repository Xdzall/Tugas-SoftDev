import db from '../../database/index.js';

export default async function getAllClasses(page: number = 1) {
  try {
    const classesCount = await db.kelas.count();
    const totalPage = Math.ceil(classesCount / 10);
    const classes = await db.kelas.findMany({
      take: 10,
      skip: (page * 10) - 10,
      select: {
        id: true,
        tahun: true,
        dosen: {
          select: {
            id: true,
            nama_lengkap: true,
          }
        }
      }
    });
    
    return {
      code: 200,
      payload: { classes },
      totalPage,
      totalData: classesCount,
    };
  } catch (error) {
    console.log(error);
    return { error };
  }
}