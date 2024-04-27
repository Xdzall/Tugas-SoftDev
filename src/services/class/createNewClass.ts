import { Class } from './class.type.js';

import db from '../../database/index.js';
import generateId from '../../lib/nanoid.js';

export default async function createNewClass(body: Class) {
  try {
    const now = new Date();
    const newClass = await db.kelas.create({
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
      payload: { id: newClass.id },
    };
  } catch (error) {
    console.log(error);
    return { error };
  }
}