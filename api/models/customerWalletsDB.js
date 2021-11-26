module.exports = function (app) {
    const db = require("../../db");
    const nodemailer = require("nodemailer");
    const Customer = db.Mongoose.model("mensagens", db.CustomerSchema, "mensagens");

    this.listar = async function () {
        let teste = await Customer.find({}).lean();
        return teste;
    };

    this.listarClientePorID = async function (id) {
        let teste = await Customer.find({ _id: id });
        return teste;
    };

    this.filtrarPorData = async function (dataLimite) {};

    return this;
};
