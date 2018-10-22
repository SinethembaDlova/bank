"use strict";
exports.__esModule = true;
var accountDB_1 = require("../models/accountDB");
var Routes = (function () {
    function Routes() {
    }
    Routes.prototype.getAccounts = function (_req, res) {
        accountDB_1["default"].find({})
            .then(function (allAccounts) {
            res.json({
                data: allAccounts
            });
        })["catch"](function (error) { return (console.log(error)); });
    };
    Routes.prototype.addAccount = function (req, res) {
        console.log(req.body);
        var account = new accountDB_1["default"]({
            id: req.body.id,
            createdDate: Date.now(),
            accountNumber: req.body.accountNumber,
            balance: req.body.balance
        });
        console.log(account);
        account.save({})
            .then(function (account) {
            res.json({
                data: account
            });
        })["catch"](function (error) { return (console.log(error)); });
    };
    Routes.prototype.updateBalance = function (req, res) {
        var accountID = req.params.id;
        var ammount = req.body.ammount;
        accountDB_1["default"].findOne({
            _id: accountID
        }, function (account, error) {
            if (error) {
                console.log(error);
            }
            else {
                account.balance = account.balance + ammount;
                account.save({})
                    .then(function () {
                    res.json({
                        data: account
                    });
                })["catch"](function () { return (console.log(error)); });
            }
        });
    };
    return Routes;
}());
exports.Routes = Routes;
//# sourceMappingURL=routes.js.map