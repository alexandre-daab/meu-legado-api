module.exports = (app) => {
    //const customerWalletsDB = app.models.customerWalletDB;
    const controller = {};

    var db = require("../../db");
    var Customer = db.Mongoose.model("mensagens", db.CustomerSchema, "mensagens");

    controller.listCustomerWallets = (req, res) => {
        Customer.find({})
            .lean()
            .exec(function (err, docs) {
                res.status(200);
                res.json(docs);
                res.end();
            });
    };

    controller.listCustomer = (req, res) => {
        Customer.find({ _id: req.params.id })
            .lean()
            .exec(function (err, docs) {
                res.json(docs);
                res.end();
            });
    };

    controller.insertCustomer = (req, res) => {
        var newcustomer = new Customer({
            _id: req.body._id,
            data: req.body.name,
            email: req.body.email,
            mensagem: req.body.mensagem,
        });
        newcustomer.save(function (err) {
            if (err) {
                res.status(500).json({ error: err.message });
                res.end();
                return;
            }
            res.json(newcustomer);
            res.end();
        });
    };

    return controller;
};
