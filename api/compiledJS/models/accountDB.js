"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var accountSchema = new mongoose_1.Schema({
    id: {
        type: String,
        unique: true,
        sparse: true
    },
    accountNumber: {
        type: Number,
        unique: true
    },
    createdDate: Date,
    balance: {
        type: Number,
        "default": 0
    }
});
accountSchema.index({
    accountNumber: 1
}, {
    unique: true
});
exports["default"] = mongoose_1.model('account', accountSchema);
//# sourceMappingURL=accountDB.js.map