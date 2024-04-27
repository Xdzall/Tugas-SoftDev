import { Router } from 'express';
import getAllStudents from '../services/student/getAllStudents.js';
import createNewStudent from '../services/student/createNewStudent.js';
import updateStudent from '../services/student/updateStudent.js';
import getSpecificStudent from '../services/student/getSpecificStudent.js';
import deleteStudent from '../services/student/deleteStudent.js';

const studentRoutes = Router();

studentRoutes.get('/mahasiswa', async (req, res) => {
  try {
    const page = req.query.page ? parseInt(req.query.page as string) : 1;
    const data = await getAllStudents(page);

    if (data.code)
      res.status(data.code).json(data);
    else
      res.status(404).send(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

studentRoutes.post('/mahasiswa', async (req, res) => {
  try {
    const data = await createNewStudent(req.body);

    if (data.code)
      res.status(data.code).json(data);
    else
      res.status(404).send(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

studentRoutes.get('/mahasiswa/:id', async (req, res) => {  
  try {
    const data = await getSpecificStudent(req.params.id);

    if (data.code)
      res.status(data.code).json(data);
    else
      res.status(404).send(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

studentRoutes.patch('/mahasiswa/:id', async (req, res) => {  
  try {
    const data = await updateStudent(req.params.id, req.body);

    if (data.code)
      res.status(data.code).json(data);
    else
      res.status(404).send(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

studentRoutes.delete('/mahasiswa/:id', async (req, res) => {  
  try {
    const data = await deleteStudent(req.params.id);

    if (data.code)
      res.status(data.code).json(data);
    else
      res.status(404).send(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default studentRoutes;
