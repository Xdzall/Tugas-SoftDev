import db from '../../database/index.js';

export default async function deleteClass(id: string) {
  try {
    await db.kelas.delete({ where: { id } });
    return { code: 204 };
  } catch (error) {
    console.log(error);
    return { error };
  }
}