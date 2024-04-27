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
import createNewReport from '../services/report/createNewReport.js';
import getAllReports from '../services/report/getAllReports.js';
import updateReport from '../services/report/updateReport.js';
import getSpecificReport from '../services/report/getSpecificReport.js';
import deleteReport from '../services/report/deleteReport.js';
const reportRoutes = Router();
reportRoutes.post('/rapor', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield createNewReport(req.body);
        if (data.code)
            res.status(data.code).json(data);
        else
            res.status(404).send(data);
    }
    catch (error) {
        res.status(500).send(error);
    }
}));
reportRoutes.get('/rapor', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const page = req.query.page ? parseInt(req.query.page) : 1;
        const data = yield getAllReports(page);
        if (data.code)
            res.status(data.code).json(data);
        else
            res.status(404).send(data);
    }
    catch (error) {
        res.status(500).send(error);
    }
}));
reportRoutes.patch('/rapor/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield updateReport(req.params.id, req.body);
        if (data.code)
            res.status(data.code).json(data);
        else
            res.status(404).send(data);
    }
    catch (error) {
        res.status(500).send(error);
    }
}));
reportRoutes.get('/rapor/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield getSpecificReport(req.params.id);
        if (data.code)
            res.status(data.code).json(data);
        else
            res.status(404).send(data);
    }
    catch (error) {
        res.status(500).send(error);
    }
}));
reportRoutes.delete('/rapor/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield deleteReport(req.params.id);
        if (data.code)
            res.status(data.code).json(data);
        else
            res.status(404).send(data);
    }
    catch (error) {
        res.status(500).send(error);
    }
}));
export default reportRoutes;
