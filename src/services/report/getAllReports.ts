import db from '../../database/index.js';

export default async function getAllReports(page: number = 1) {
  try {
    const reportsCount = await db.mataKuliah.count();
    const totalPage = Math.ceil(reportsCount / 10);
    const reports = await db.rapor.findMany({
      take: 10,
      skip: (page * 10) - 10,
      select: {
        id: true,
        nilai: true,
        tanggal_diubah: true,
      },
    });
    
    return {
      code: 200,
      payload: { reports },
      totalPage,
      totalData: reportsCount,
    };
  } catch (error) {
    console.log(error);
    return { error };
  }
}