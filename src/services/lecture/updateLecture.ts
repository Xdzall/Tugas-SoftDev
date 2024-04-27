import type { Lecture } from './lecture.type.js';

import db from '../../database/index.js';

export default async function updateLecture(id: string, body: Lecture) {
  try {
    let tglLahir = {};
    
    if (body.tanggal_lahir) {
      tglLahir = {
        tanggal_lahir: new Date(body.tanggal_lahir),
      }
    }
    
    const now = new Date();
    const newLecture = await db.dosen.update({
      where: { id },
      data: {
        ...body,
        ...tglLahir,
        tanggal_diubah: now,
      },
      select: { id: true },
    });

    return {
      code: 200,
      payload: { id: newLecture.id },
    };
  } catch (error) {
    console.log(error);
    return { error };
  }
}