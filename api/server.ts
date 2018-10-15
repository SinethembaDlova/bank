import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as mongoose from 'mongoose';
import * as session from 'express-session';
import * as routes from './routes/routes'

export class Server {
  //Sever

    public app: express.Application;
    constructor() {

        this.app = express();
        this.config();
    }

    public config() {
        //setup mongoose
        const mongoURL = "mongodb://localhost/accounts";

        mongoose.connect(mongoURL);
        console.log("Successfully connected to database.")
        //config my dependencies

        this.app.use(express.static('public'));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({
            extended: true
        }));
        this.app.use(session({
            secret: 'keyboard cat',
            cookie: {
                maxAge: 6000 * 30
            }
        }));

        //run Server
        const port =  3000;
        this.app.listen(port, () => console.log("Server running on  https://localhost:" + port + '/'));

    }
}
