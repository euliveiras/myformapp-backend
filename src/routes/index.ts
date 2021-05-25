import {Router as router} from 'express';

const routes = router();

routes.use('/', (req, res) => {
  res.json({ok: true});
});

export default routes;
