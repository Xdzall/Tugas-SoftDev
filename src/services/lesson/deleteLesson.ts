import db from '../../database/index.js';

export default async function deleteLesson(id: string) {
  try {
    await db.mataKuliah.delete({ where: { id } });
    return { code: 204 };
  } catch (error) {
    console.log(error);
    return { error };
  }
}