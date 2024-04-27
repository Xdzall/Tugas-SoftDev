var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import db from '../../database/index.js';
export default function getSpecificLecture(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const lectures = yield db.dosen.findFirst({
                where: { id },
                select: {
                    id: true,
                    alamat: true,
                    kelas: true,
                    mataKuliah: true,
                    nama_lengkap: true,
                    nid: true,
                    tanggal_dibuat: true,
                    tanggal_diubah: true,
                    tanggal_lahir: true,
                    telepon: true,
                },
            });
            return {
                code: 200,
                payload: { lectures },
            };
        }
        catch (error) {
            console.log(error);
            return { error };
        }
    });
}
