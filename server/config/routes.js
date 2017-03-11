var Repair = require('../controllers/repairs.js');
var Part = require('../controllers/parts.js');

// ROUTING
module.exports = function (app) {
    app.get('/', function (req, res) {
        res.sendFile(__dirname + '../../client/index.html')
    });
    // Repairs
    app.get('/repairs', Repair.index);
    app.post('/repairs', Repair.create);
    app.delete('/repairs/:id', Repair.delete);
    app.put('/repairs/:id', Repair.update);
    app.put('/repairs/partsPerRepair/:id', Repair.addPart);
    app.put('/repairs/removePartsPerRepair/:id', Repair.deletePart);
    // Parts
    app.get('/parts', Part.index);
    app.post('/parts', Part.create);
    app.delete('/parts/:id', Part.delete);
    app.post('/parts/assoc', Part.assoc);
};
