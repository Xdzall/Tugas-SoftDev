import { Lesson } from './lesson.type.js';

import db from '../../database/index.js';
import generateId from '../../lib/nanoid.js';

export default async function createNewLesson(body: Lesson) {
  try {
    const now = new Date();
    const newLesson = await db.mataKuliah.create({
      data: {
        id: generateId(),
        ...body,
        tanggal_dibuat: now,
        tanggal_diubah: now,
      },
      select: { id: true },
    });

    return {
      code: 201,
      payload: { id: newLesson.id },
    };
  } catch (error) {
    console.log(error);
    return { error };
  }
}