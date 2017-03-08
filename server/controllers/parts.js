var mongoose = require('mongoose');
var Part = mongoose.model('Part');
var Repair = mongoose.model('Repair');

mongoose.Promise = global.Promise;

module.exports = {
    index: function (req, res) {
        Part.find({}).populate('_Repairs').exec(function (err, parts) {
            if (err) {
                console.log(err);
                res.status(500);
                res.json(err);
            } else {
                res.json(parts);
            }
        });
    },
    create: function (req, res) {
        Part.create(req.body, function (err) {
            if (err) {
                console.log(err);
                res.status(500);
                res.json(err);
            } else {
                res.json(true);
            }
        });
    },
    delete: function (req, res) {
        Part.findByIdAndRemove(req.params.id)
            .then(function () {
                res.json(true);
            })
            .catch(function (err) {
                console.log(err);
                res.status(500);
                res.json(err);
            });
    },
    assoc: function (req, res) {
        Part.findOne({
            _id: req.body.part
        }, function (err, part) {
            Repair.findOne({
                _id: req.body.repair
            }, function (err, repair) {
                part._repair.push(repair);
                repair._part = part._id;
                part.save(function (err) {
                    if (err) {
                        console.log(err);
                    }
                });
                repair.save(function (err) {
                    if (err) {
                        console.log(err);
                    }
                });

            })
        })
    }
};