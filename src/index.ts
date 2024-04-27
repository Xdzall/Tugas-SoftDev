import express from 'express';
import bp from 'body-parser';

import routes from './routes/index.js';

const app = express();
const port = 3000;

app.use(bp.urlencoded({ extended: false }));
app.use(bp.json());

app.use(routes);

app.listen(port, () => {
  console.log(`server running at port: ${port}`);
});
