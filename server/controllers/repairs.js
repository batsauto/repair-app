var mongoose = require('mongoose');
var Repair = mongoose.model('Repair');

mongoose.Promise = global.Promise;

module.exports = {
    index: function (req, res) {
        Repair.find({})
            .populate('_part')
            .exec(function (err, repairs) {
                if (err) {
                    console.log(err);
                    res.status(500);
                    res.json(err);
                } else {
                    console.log(repairs);
                    res.json(repairs);
                }
            });
    },
    create: function (req, res) {
        Repair.create(req.body)
            .then(function (repair) {
                res.json(repair);
            })
            .catch(function (err) {
                console.log(err);
                res.status(500);
                res.json(err);
            });
    },
    delete: function (req, res) {
        Repair.findByIdAndRemove(req.params.id)
            .then(function () {
                res.json(true);
            })
            .catch(function (err) {
                console.log(err);
                res.status(500);
                res.json(err);
            });
    },
    update: function (req, res) {
        Repair.findByIdAndUpdate({_id: req.params.id}, req.body)
            .then(function () {
                res.json(true);
            })
            .catch(function (err) {
                console.log(err);
                res.status(500);
                res.json(err);
            });
    },
    addPart: function (req, res) {
        Repair.findByIdAndUpdate({_id: req.params.id}, {partsPerRepair: req.body})
            .then(function () {
                res.json(true);
            })
            .catch(function (err) {
                console.log(err);
                res.status(500);
                res.json(err);
            });
    },
};