var db = require("../../db");
var Customer = db.Mongoose.model("mensagens", db.CustomerSchema, "mensagens");

Customer.find({})
    .lean()
    .exec(function (err, docs) {});
