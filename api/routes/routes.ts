import {Request, Response} from 'express';
import db from '../models/accountDB';

export class Routes {

    constructor() { }

        //accounts get route.
        public getAccounts(_req: Request, res: Response): void {
            db.find({})
            .then((allAccounts) => {
              res.json({
                  status: res.statusCode,
                  response: 'All accounts of Bob.',
                  data: allAccounts
              })
            })
            .catch(error =>(console.log(error)));
        }
        
        // post for account route.
        public addAccount(req: Request, res: Response): void {
            
            console.log(req.body);
            const account = new db({
                id: req.body.id,
                createdDate: Date.now(),
                accountNumber: req.body.accountNumber,
                balance: req.body.balance,
            });
            console.log(account);
            account.save({})
            .then((account) => {
              res.json({
                  status: res.statusCode,
                  response: 'All accounts of Bob.',
                  data: account
              })
            })
            .catch(error =>(console.log(error)));
        }
}
