module.exports = (app) => {
    const customerWalletsDB = app.models.customerWalletsDB;
    const nodemailer = require("nodemailer");
    const { v4: uuidv4 } = require("uuid");
    const controller = {};

    var db = require("../../db");
    var Customer = db.Mongoose.model("mensagens", db.CustomerSchema, "mensagens");

    controller.listarClientes = async (req, res) => {
        res.status(200);
        res.json(await customerWalletsDB.listar());
        res.end();
    };

    controller.listarClientePorID = async (req, res) => {
        res.status(200);
        res.json(await customerWalletsDB.listarClientePorID(req.params.id));
        res.end();
    };

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
        const idNovo = uuidv4();
        var newcustomer = new Customer({
            _id: idNovo,
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

    controller.enviaEmails = async (req, res) => {
        console.log("ALEXA");
        let transporter = nodemailer.createTransport({
            host: "smtp.kinghost.net",
            port: 465,
            secure: true,
            auth: {
                user: "XXX@XXXX.com.br",
                pass: "XXX",
            },
        });
        console.log("BORGES");

        let info = await transporter.sendMail({
            from: '"Meu Legado" <XXX@XXX.com.br>',
            to: "XXX@gmail.com",
            subject: "EMAIL TESTE DE DEV MEU LEGADO",
            text: "TESTE -- O arquivo nao foi dispEste é um emaild e teste do projeto meu legado",
            html: "<b><i>TESTE -- O arquivo nao foi dispEste é um emaild e teste do projeto meu legado</i></b>",
        });
        console.log("Message sent: %s", info.messageId);
        res.status(200);
        res.json({ MenssagemEnviada: info.messageId });
    };

    return controller;
};
