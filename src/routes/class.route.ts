import { Router } from 'express';

import createNewClass from '../services/class/createNewClass.js';
import getAllClasses from '../services/class/getAllClasses.js';
import updateClass from '../services/class/updateCLass.js';
import getSpecificClass from '../services/class/getSpecificClass.js';
import deleteClass from '../services/class/deleteClass.js';

const classRoutes = Router();

classRoutes.post('/kelas', async (req, res) => {
  try {
    const data = await createNewClass(req.body);

    if (data.code)
      res.status(data.code).json(data);
    else
      res.status(404).send(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

classRoutes.get('/kelas', async (req, res) => {
  try {
    const page = req.query.page ? parseInt(req.query.page as string) : 1;
    const data = await getAllClasses(page);

    if (data.code)
      res.status(data.code).json(data);
    else
      res.status(404).send(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

classRoutes.patch('/kelas/:id', async (req, res) => {
  try {
    const data = await updateClass(req.params.id, req.body);

    if (data.code)
      res.status(data.code).json(data);
    else
      res.status(404).send(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

classRoutes.get('/kelas/:id', async (req, res) => {  
  try {
    const data = await getSpecificClass(req.params.id);

    if (data.code)
      res.status(data.code).json(data);
    else
      res.status(404).send(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

classRoutes.delete('/kelas/:id', async (req, res) => {  
  try {
    const data = await deleteClass(req.params.id);

    if (data.code)
      res.status(data.code).json(data);
    else
      res.status(404).send(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default classRoutes;
