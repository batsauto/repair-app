var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RepairSchema = new Schema({
    firstName: {type: String, minlength: 2},
    lastName: {type: String, minlength: 2},
    fullName: {type: String, minlength: 2},
    date: {type: Date },
    company: {type: String, minlength: 2},
    address: {type: String, minlength: 2},
    phoneCell: {type: String, minlength: 10},
    email: {type: String, minlength: 2},
    description: {type: String, minlength: 2},
    comments: {type: String, minlength: 2},
    avatarInitial: {type: String },
    numWorkers: {type: Number },
    numHours: {type: Number },
    partsPerRepair: {type: Array}
}, {timestamps: true});

mongoose.model('Repair', RepairSchema);
