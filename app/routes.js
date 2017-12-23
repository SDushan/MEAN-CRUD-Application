// app/routes.js
var db = require('./models/Product');

module.exports = function(app) {

    app.get("/api", function(req, res) {
        db.find(function(err, data) {
            if (err) res.send(err);
            res.json(data); // return all nerds in JSON format
        });
    });


    app.post('/api', function(req, res) {
        var obj = req.body;
        var model = new db(obj);
        model.save(function(err) {
            if (err) {
                res.send("error");
                return;
            }
            res.send("created");
        });
    });


    app.delete("/api:id", function(req, res) {
        var id = req.params.id;
        db.findByIdAndRemove(id, function(err) {
            if (err) {
                res.send("error");
                return;
            }
            res.send("deleted");
        });
    });


    // route to handle all angular requests
    app.get('*', function(req, res) {
        res.sendfile('./public/views/index.html');
    });
};