import { Router } from 'express';
import { logger } from './config';

const started = new Date()

export class AppRoutes {


  static get routes(): Router {

    const router = Router();

    router.get('/health', (req, res) => {
      logger.info('Server online')
      return res.status(200).json({
        success: true,
        message: 'Server online',
        started,
        uptime: (Date.now() - Number(started)) / 1000
      })
    })

    return router;
  }


}