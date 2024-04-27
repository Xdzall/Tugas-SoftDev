import { Router } from 'express';
import getAllLecture from '../services/lecture/getAllLecture.js';
import createNewLecture from '../services/lecture/createNewLecture.js';
import updateLecture from '../services/lecture/updateLecture.js';
import getSpecificLecture from '../services/lecture/getSpecificLectur.js';
import deleteLecture from '../services/lecture/deleteLecture.js';

const lectureRoutes = Router();

lectureRoutes.get('/dosen', async (req, res) => {
  try {
    const page = req.query.page ? parseInt(req.query.page as string) : 1;
    const data = await getAllLecture(page);

    if (data.code)
      res.status(data.code).json(data);
    else
      res.status(404).send(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

lectureRoutes.post('/dosen', async (req, res) => {
  try {
    const data = await createNewLecture(req.body);

    if (data.code)
      res.status(data.code).json(data);
    else
      res.status(404).send(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

lectureRoutes.get('/dosen/:id', async (req, res) => {  
  try {
    const data = await getSpecificLecture(req.params.id);

    if (data.code)
      res.status(data.code).json(data);
    else
      res.status(404).send(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

lectureRoutes.patch('/dosen/:id', async (req, res) => {  
  try {
    const data = await updateLecture(req.params.id, req.body);

    if (data.code)
      res.status(data.code).json(data);
    else
      res.status(404).send(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

lectureRoutes.delete('/dosen/:id', async (req, res) => {  
  try {
    const data = await deleteLecture(req.params.id);

    if (data.code)
      res.status(data.code).json(data);
    else
      res.status(404).send(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default lectureRoutes;
