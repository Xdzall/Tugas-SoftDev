import db from '../../database/index.js';

export default async function deleteLecture(id: string) {
  try {
    await db.dosen.delete({where: { id } });
    return { code: 204 };
  } catch (error) {
    console.log(error);
    return { error };
  }
}