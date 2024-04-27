import { Student } from './student.type.js';

import db from '../../database/index.js';
import generateId from '../../lib/nanoid.js';

export default async function createNewStudent(body: Student) {
  try {
    const now = new Date();
    const newStudent = await db.mahasiswa.create({
      data: {
        id: generateId(),
        ...body,
        tanggal_lahir: new Date(body.tanggal_lahir),
        tanggal_dibuat: now,
        tanggal_diubah: now,
      },
      select: { id: true },
    });

    return {
      code: 201,
      payload: { id: newStudent.id },
    };
  } catch (error) {
    console.log(error);
    return { error };
  }
}