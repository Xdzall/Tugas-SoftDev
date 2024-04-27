import { Router } from 'express';
import createNewReport from '../services/report/createNewReport.js';
import getAllReports from '../services/report/getAllReports.js';
import updateReport from '../services/report/updateReport.js';
import getSpecificReport from '../services/report/getSpecificReport.js';
import deleteReport from '../services/report/deleteReport.js';

const reportRoutes = Router();

reportRoutes.post('/rapor', async (req, res) => {
  try {
    const data = await createNewReport(req.body);

    if (data.code)
      res.status(data.code).json(data);
    else
      res.status(404).send(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

reportRoutes.get('/rapor', async (req, res) => {
  try {
    const page = req.query.page ? parseInt(req.query.page as string) : 1;
    const data = await getAllReports(page);

    if (data.code)
      res.status(data.code).json(data);
    else
      res.status(404).send(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

reportRoutes.patch('/rapor/:id', async (req, res) => {  
  try {
    const data = await updateReport(req.params.id, req.body);

    if (data.code)
      res.status(data.code).json(data);
    else
      res.status(404).send(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

reportRoutes.get('/rapor/:id', async (req, res) => {  
  try {
    const data = await getSpecificReport(req.params.id);

    if (data.code)
      res.status(data.code).json(data);
    else
      res.status(404).send(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

reportRoutes.delete('/rapor/:id', async (req, res) => {  
  try {
    const data = await deleteReport(req.params.id);

    if (data.code)
      res.status(data.code).json(data);
    else
      res.status(404).send(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default reportRoutes;
