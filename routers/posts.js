import express from 'express';

import { index, show, create, destroy } from '../controllers/postsControl.js';

const router = express.Router();

// INDEX localhost:3000/pizzas/
router.get('/', index);

// SHOW localhost:3000/pizzas/:id
router.get('/:id', show);

// CREATE localhost:3000/pizzas
router.post('/', create)

// DELETE
router.delete('/:id', destroy)

export default router;