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
export default function updateLecture(id, body) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let tglLahir = {};
            if (body.tanggal_lahir) {
                tglLahir = {
                    tanggal_lahir: new Date(body.tanggal_lahir),
                };
            }
            const now = new Date();
            const newLecture = yield db.dosen.update({
                where: { id },
                data: Object.assign(Object.assign(Object.assign({}, body), tglLahir), { tanggal_diubah: now }),
                select: { id: true },
            });
            return {
                code: 200,
                payload: { id: newLecture.id },
            };
        }
        catch (error) {
            console.log(error);
            return { error };
        }
    });
}
