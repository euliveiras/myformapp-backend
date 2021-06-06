import {Router as router} from 'express';
//
import SignUpControler from "../controllers/SignUpController";

const route = router();

const signUpControler = new SignUpControler();

route.post('/', signUpControler.execute);

export default route;
