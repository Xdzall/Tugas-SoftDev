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
export default function getAllStudents(page = 1) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const studentsCount = yield db.mahasiswa.count();
            const totalPage = Math.ceil(studentsCount / 10);
            const students = yield db.mahasiswa.findMany({
                take: 10,
                skip: (page * 10) - 10,
                select: {
                    id: true,
                    alamat: true,
                    nama_lengkap: true,
                    nrp: true,
                    telepon: true,
                    id_kelas: true,
                    tanggal_lahir: true,
                },
            });
            return {
                code: 200,
                payload: { students },
                totalPage,
                totalData: studentsCount,
            };
        }
        catch (error) {
            console.log(error);
            return { error };
        }
    });
}
