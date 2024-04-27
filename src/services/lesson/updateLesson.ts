import type { Lesson } from './lesson.type.js';

import db from '../../database/index.js';

export default async function updateLesson(id: string, body: Lesson) {
  try {
    const now = new Date();
    const existingLesson = await db.mataKuliah.update({
      where: { id },
      data: {
        ...body,
        tanggal_diubah: now,
      },
      select: { id: true },
    });

    return {
      code: 200,
      payload: { id: existingLesson.id },
    };
  } catch (error) {
    console.log(error);
    return { error };
  }
}