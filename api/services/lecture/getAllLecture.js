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
export default function getAllLecture(page = 1) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const lecturesCount = yield db.dosen.count();
            const totalPage = Math.ceil(lecturesCount / 10);
            const lectures = yield db.dosen.findMany({
                take: 10,
                skip: (page * 10) - 10,
                select: {
                    id: true,
                    alamat: true,
                    nama_lengkap: true,
                    nid: true,
                    tanggal_lahir: true,
                    telepon: true,
                }
            });
            return {
                code: 200,
                payload: { lectures },
                totalPage,
                totalData: lecturesCount,
            };
        }
        catch (error) {
            console.log(error);
            return { error };
        }
    });
}
