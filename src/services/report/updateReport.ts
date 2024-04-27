import type { Report } from './report.type.js';

import db from '../../database/index.js';

export default async function updateReport(id: string, body: Report) {
  try {
    const now = new Date();
    const existingReport = await db.rapor.update({
      where: { id },
      data: {
        ...body,
        tanggal_diubah: now,
      },
      select: { id: true },
    });

    return {
      code: 200,
      payload: { id: existingReport.id },
    };
  } catch (error) {
    console.log(error);
    return { error };
  }
}