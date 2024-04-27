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
import createNewClass from '../services/class/createNewClass.js';
import getAllClasses from '../services/class/getAllClasses.js';
import updateClass from '../services/class/updateCLass.js';
import getSpecificClass from '../services/class/getSpecificClass.js';
import deleteClass from '../services/class/deleteClass.js';
const classRoutes = Router();
classRoutes.post('/kelas', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield createNewClass(req.body);
        if (data.code)
            res.status(data.code).json(data);
        else
            res.status(404).send(data);
    }
    catch (error) {
        res.status(500).send(error);
    }
}));
classRoutes.get('/kelas', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const page = req.query.page ? parseInt(req.query.page) : 1;
        const data = yield getAllClasses(page);
        if (data.code)
            res.status(data.code).json(data);
        else
            res.status(404).send(data);
    }
    catch (error) {
        res.status(500).send(error);
    }
}));
classRoutes.patch('/kelas/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield updateClass(req.params.id, req.body);
        if (data.code)
            res.status(data.code).json(data);
        else
            res.status(404).send(data);
    }
    catch (error) {
        res.status(500).send(error);
    }
}));
classRoutes.get('/kelas/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield getSpecificClass(req.params.id);
        if (data.code)
            res.status(data.code).json(data);
        else
            res.status(404).send(data);
    }
    catch (error) {
        res.status(500).send(error);
    }
}));
classRoutes.delete('/kelas/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield deleteClass(req.params.id);
        if (data.code)
            res.status(data.code).json(data);
        else
            res.status(404).send(data);
    }
    catch (error) {
        res.status(500).send(error);
    }
}));
export default classRoutes;
