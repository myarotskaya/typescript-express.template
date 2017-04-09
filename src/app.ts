import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';

import DefaultRouter from './routes/DefaultRouter';

class App {
    public express: express.Application;

    constructor() {
        this.express = express();
        this.useMiddleware();
    }

    private useMiddleware(): void {
        this.express.use(logger('dev'));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));

        this.useRouters();
    }

    private useRouters(): void {
        this.express.use('/', DefaultRouter);
    }
}

export default new App().express;
