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
import createNewLesson from '../services/lesson/createNewLesson.js';
import getAllLessons from '../services/lesson/getAllLessons.js';
import updateLesson from '../services/lesson/updateLesson.js';
import getSpecificLesson from '../services/lesson/getSpecificLesson.js';
import deleteLesson from '../services/lesson/deleteLesson.js';
const lessonRoutes = Router();
lessonRoutes.post('/mata-kuliah', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield createNewLesson(req.body);
        if (data.code)
            res.status(data.code).json(data);
        else
            res.status(404).send(data);
    }
    catch (error) {
        res.status(500).send(error);
    }
}));
lessonRoutes.get('/mata-kuliah', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const page = req.query.page ? parseInt(req.query.page) : 1;
        const data = yield getAllLessons(page);
        if (data.code)
            res.status(data.code).json(data);
        else
            res.status(404).send(data);
    }
    catch (error) {
        res.status(500).send(error);
    }
}));
lessonRoutes.patch('/mata-kuliah/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield updateLesson(req.params.id, req.body);
        if (data.code)
            res.status(data.code).json(data);
        else
            res.status(404).send(data);
    }
    catch (error) {
        res.status(500).send(error);
    }
}));
lessonRoutes.get('/mata-kuliah/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield getSpecificLesson(req.params.id);
        if (data.code)
            res.status(data.code).json(data);
        else
            res.status(404).send(data);
    }
    catch (error) {
        res.status(500).send(error);
    }
}));
lessonRoutes.delete('/mata-kuliah/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield deleteLesson(req.params.id);
        if (data.code)
            res.status(data.code).json(data);
        else
            res.status(404).send(data);
    }
    catch (error) {
        res.status(500).send(error);
    }
}));
export default lessonRoutes;
