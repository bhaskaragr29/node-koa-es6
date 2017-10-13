
import Koa from 'Koa';

import cors from 'kcors';
import uploadRouter  from './uploadApi/routes';

const app = new Koa();

const uploadApiRoutes = uploadRouter();

app.use(uploadApiRoutes.routes());

app.use(cors());  

app.listen(2000);
