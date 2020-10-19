import express, { Router } from 'express';
import OrphanagesController from './controllers/OrphanagesController';

const router = Router();

router.post('/orphanages', OrphanagesController.create);
router.get('/orphanages', OrphanagesController.index);

export default router;