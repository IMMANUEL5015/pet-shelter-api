import express from 'express';
import type { Router } from 'express';
import { getPets, getPetByID } from '../controllers/pets.controllers';
import { validateNumericId, pleaseAuth } from '../middleware/pets.middleware';

const petRouter: Router = express.Router();

petRouter.get('/', getPets);

petRouter.get('/:id', validateNumericId, pleaseAuth, getPetByID);

export default petRouter;