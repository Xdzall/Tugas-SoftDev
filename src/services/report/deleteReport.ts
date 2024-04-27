import db from '../../database/index.js';

export default async function deleteReport(id: string) {
  try {
    await db.rapor.delete({ where: { id } });
    return { code: 204 };
  } catch (error) {
    console.log(error);
    return { error };
  }
}