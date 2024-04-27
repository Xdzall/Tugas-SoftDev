import { Router } from 'express';
import createNewLesson from '../services/lesson/createNewLesson.js';
import getAllLessons from '../services/lesson/getAllLessons.js';
import updateLesson from '../services/lesson/updateLesson.js';
import getSpecificLesson from '../services/lesson/getSpecificLesson.js';
import deleteLesson from '../services/lesson/deleteLesson.js';

const lessonRoutes = Router();

lessonRoutes.post('/mata-kuliah', async (req, res) => {
  try {
    const data = await createNewLesson(req.body);

    if (data.code)
      res.status(data.code).json(data);
    else
      res.status(404).send(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

lessonRoutes.get('/mata-kuliah', async (req, res) => {
  try {
    const page = req.query.page ? parseInt(req.query.page as string) : 1;
    const data = await getAllLessons(page);

    if (data.code)
      res.status(data.code).json(data);
    else
      res.status(404).send(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

lessonRoutes.patch('/mata-kuliah/:id', async (req, res) => {  
  try {
    const data = await updateLesson(req.params.id, req.body);

    if (data.code)
      res.status(data.code).json(data);
    else
      res.status(404).send(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

lessonRoutes.get('/mata-kuliah/:id', async (req, res) => {  
  try {
    const data = await getSpecificLesson(req.params.id);

    if (data.code)
      res.status(data.code).json(data);
    else
      res.status(404).send(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

lessonRoutes.delete('/mata-kuliah/:id', async (req, res) => {  
  try {
    const data = await deleteLesson(req.params.id);

    if (data.code)
      res.status(data.code).json(data);
    else
      res.status(404).send(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default lessonRoutes;
