import { Report } from './report.type.js';

import db from '../../database/index.js';
import generateId from '../../lib/nanoid.js';

export default async function createNewReport(body: Report) {
  try {
    const now = new Date();
    const newReport = await db.rapor.create({
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
      payload: { id: newReport.id },
    };
  } catch (error) {
    console.log(error);
    return { error };
  }
}