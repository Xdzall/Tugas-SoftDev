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
import getAllStudents from '../services/student/getAllStudents.js';
import createNewStudent from '../services/student/createNewStudent.js';
import updateStudent from '../services/student/updateStudent.js';
import getSpecificStudent from '../services/student/getSpecificStudent.js';
import deleteStudent from '../services/student/deleteStudent.js';
const studentRoutes = Router();
studentRoutes.get('/mahasiswa', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const page = req.query.page ? parseInt(req.query.page) : 1;
        const data = yield getAllStudents(page);
        if (data.code)
            res.status(data.code).json(data);
        else
            res.status(404).send(data);
    }
    catch (error) {
        res.status(500).send(error);
    }
}));
studentRoutes.post('/mahasiswa', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield createNewStudent(req.body);
        if (data.code)
            res.status(data.code).json(data);
        else
            res.status(404).send(data);
    }
    catch (error) {
        res.status(500).send(error);
    }
}));
studentRoutes.get('/mahasiswa/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield getSpecificStudent(req.params.id);
        if (data.code)
            res.status(data.code).json(data);
        else
            res.status(404).send(data);
    }
    catch (error) {
        res.status(500).send(error);
    }
}));
studentRoutes.patch('/mahasiswa/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield updateStudent(req.params.id, req.body);
        if (data.code)
            res.status(data.code).json(data);
        else
            res.status(404).send(data);
    }
    catch (error) {
        res.status(500).send(error);
    }
}));
studentRoutes.delete('/mahasiswa/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield deleteStudent(req.params.id);
        if (data.code)
            res.status(data.code).json(data);
        else
            res.status(404).send(data);
    }
    catch (error) {
        res.status(500).send(error);
    }
}));
export default studentRoutes;
