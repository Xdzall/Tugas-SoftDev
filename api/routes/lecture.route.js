var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Router } from 'express';
import getAllLecture from '../services/lecture/getAllLecture.js';
import createNewLecture from '../services/lecture/createNewLecture.js';
import updateLecture from '../services/lecture/updateLecture.js';
import getSpecificLecture from '../services/lecture/getSpecificLectur.js';
import deleteLecture from '../services/lecture/deleteLecture.js';
const lectureRoutes = Router();
lectureRoutes.get('/dosen', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const page = req.query.page ? parseInt(req.query.page) : 1;
        const data = yield getAllLecture(page);
        if (data.code)
            res.status(data.code).json(data);
        else
            res.status(404).send(data);
    }
    catch (error) {
        res.status(500).send(error);
    }
}));
lectureRoutes.post('/dosen', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield createNewLecture(req.body);
        if (data.code)
            res.status(data.code).json(data);
        else
            res.status(404).send(data);
    }
    catch (error) {
        res.status(500).send(error);
    }
}));
lectureRoutes.get('/dosen/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield getSpecificLecture(req.params.id);
        if (data.code)
            res.status(data.code).json(data);
        else
            res.status(404).send(data);
    }
    catch (error) {
        res.status(500).send(error);
    }
}));
lectureRoutes.patch('/dosen/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield updateLecture(req.params.id, req.body);
        if (data.code)
            res.status(data.code).json(data);
        else
            res.status(404).send(data);
    }
    catch (error) {
        res.status(500).send(error);
    }
}));
lectureRoutes.delete('/dosen/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield deleteLecture(req.params.id);
        if (data.code)
            res.status(data.code).json(data);
        else
            res.status(404).send(data);
    }
    catch (error) {
        res.status(500).send(error);
    }
}));
export default lectureRoutes;
