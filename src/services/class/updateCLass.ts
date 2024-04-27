import type { Class } from './class.type.js';

import db from '../../database/index.js';

export default async function updateClass(id: string, body: Class) {
  try {
    const now = new Date();
    const existingClass = await db.kelas.update({
      where: { id },
      data: {
        ...body,
        tanggal_diubah: now,
      },
      select: { id: true },
    });

    return {
      code: 200,
      payload: { id: existingClass.id },
    };
  } catch (error) {
    console.log(error);
    return { error };
  }
}