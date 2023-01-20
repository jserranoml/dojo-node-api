import { Router } from 'express';

import getController from '~/controllers/personas/get.controller';
import postController from '~/controllers/personas/post.controller';
import putController from '~/controllers/personas/put.controller';
import deleteController from '~/controllers/personas/delete.controller';
import bodyValidator from '~/middlewares/bodyValidator/bodyValidator';

import postSchema from '~/middlewares/bodyValidator/schemas/post.person';

const router = Router();

router.get('/:id', getController);
router.post("/", bodyValidator(postSchema), postController);
router.put("/:id", putController);
router.delete("/:id", deleteController);

export default router;