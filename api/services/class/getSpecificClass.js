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
export default function getSpecificClass(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const perclass = yield db.kelas.findFirst({
                where: { id },
                select: {
                    id: true,
                    mataKuliah: true,
                    tanggal_dibuat: true,
                    tanggal_diubah: true,
                    dosen: true,
                    mahasiswa: true,
                    tahun: true,
                },
            });
            return {
                code: 200,
                payload: { class: perclass },
            };
        }
        catch (error) {
            console.log(error);
            return { error };
        }
    });
}
