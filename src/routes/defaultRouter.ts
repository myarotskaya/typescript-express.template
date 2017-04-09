import { Router, Request, Response, NextFunction } from 'express';

export class DefaultRouter {
    public router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    public init() {
        this.router.get('/', this.get);
    }

    public get(req: Request, res: Response, next: NextFunction) {
        res.json({
            status: 'OK'
        });
    }
}

export default new DefaultRouter().router;
