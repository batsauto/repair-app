var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PartSchema = new Schema({
    name: {type: String, required: true, minlength: 2},
    //_repairs: [{type: Schema.Types.ObjectId, ref: 'Repair'}]
}, {timestamps: true});

mongoose.model('Part', PartSchema);