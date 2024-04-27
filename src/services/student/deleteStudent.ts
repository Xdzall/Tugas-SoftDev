import db from '../../database/index.js';

export default async function deleteStudent(id: string) {
  try {
    await db.mahasiswa.delete({ where: { id } });
    return { code: 204 };
  } catch (error) {
    console.log(error);
    return { error };
  }
}