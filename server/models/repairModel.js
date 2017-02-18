var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RepairSchema = new Schema({
    firstName: {type: String, required: true, minlength: 2},
    lastName: {type: String, required: true, minlength: 2},
    fullName: {type: String, minlength: 2},
    date: {type: Number, required: true, default: Date.now },
    company: {type: String, minlength: 2},
    address: {type: String, required: true, minlength: 2},
    phoneCell: {type: String, required: true, minlength: 10},
    email: {type: String, minlength: 2},
    description: {type: String, minlength: 2},
    comments: {type: String, minlength: 2},
    avatarInitial: {type: String},
    numWorkers: {type: Number},
    numHours: {type: Number},
    partsPerRepair: [{ quantity: Number, part: String }],
    //_part: { type: Schema.Types.ObjectId, ref:'Part' }
}, {timestamps: true});

mongoose.model('Repair', RepairSchema);
