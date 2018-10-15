import {Server} from './server';
import { Routes } from './routes/routes';
//instances of my routes
var server = new Server();
var routes = new Routes();

server.app.get('/accounts', routes.getAccounts);
server.app.post('/accounts', routes.addAccount);
