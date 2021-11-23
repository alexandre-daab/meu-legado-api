let mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/meu-legado");

var customerSchema = new mongoose.Schema(
    {
        _id: String,
        data: String,
        email: String,
        mensagem: String,
    },
    { collection: "mensagens" }
);

module.exports = { Mongoose: mongoose, CustomerSchema: customerSchema };
