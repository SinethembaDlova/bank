import {Schema, model, Document} from 'mongoose';

const accountSchema: Schema = new Schema ({
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
        default: 0
    }
});

accountSchema.index({
    accountNumber: 1
}, {
        unique: true
    });

export default model<Document>('account', accountSchema);
