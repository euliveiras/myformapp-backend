import {Router as router} from 'express';
//
import signUpRouter from '../../users/infra/http/routes/signUp.route';

const routes = router();

routes.use('/signup', signUpRouter);
// routes.use('/signup', req => {
//     console.log(req.body)
// });

export default routes;
