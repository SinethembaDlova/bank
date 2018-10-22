import {Request, Response} from 'express';
import db from '../models/accountDB';

export class Routes {

    constructor() { }

        //accounts get route.
        public getAccounts(_req: Request, res: Response): void {
            db.find({})
            .then((allAccounts) => {
              res.json({
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
                  data: account
              })
            })
            .catch(error =>(console.log(error)));
        }

        // update balance
        public updateBalance(req: Request, res: Response): void {
            
            const accountID = req.params.id;
            const ammount = req.body.ammount;

            db.findOne({
                _id: accountID
            }, function(account, error) {
                if(error){
                    console.log(error);
                }
                else{
                    account.balance = account.balance + ammount;
                    account.save({})
                    .then(() => {
                        res.json({
                            data: account
                        })
                    })
                    .catch(() =>(console.log(error)));

                }
            })       
        }
}
