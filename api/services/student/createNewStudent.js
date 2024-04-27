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
import generateId from '../../lib/nanoid.js';
export default function createNewStudent(body) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const now = new Date();
            const newStudent = yield db.mahasiswa.create({
                data: Object.assign(Object.assign({ id: generateId() }, body), { tanggal_lahir: new Date(body.tanggal_lahir), tanggal_dibuat: now, tanggal_diubah: now }),
                select: { id: true },
            });
            return {
                code: 201,
                payload: { id: newStudent.id },
            };
        }
        catch (error) {
            console.log(error);
            return { error };
        }
    });
}
