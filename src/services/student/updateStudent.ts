import type { Student } from './student.type.js';

import db from '../../database/index.js';

export default async function updateStudent(id: string, body: Student) {
  try {
    const now = new Date();
    const existingStudent = await db.mahasiswa.update({
      where: { id },
      data: {
        ...body,
        tanggal_diubah: now,
      },
      select: { id: true },
    });

    return {
      code: 200,
      payload: { id: existingStudent.id },
    };
  } catch (error) {
    console.log(error);
    return { error };
  }
}