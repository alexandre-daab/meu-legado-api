module.exports = (app) => {
    const controller = app.controllers.customerWallets;

    app.route("/api/v1/listarClientes").get(controller.listarClientes);
    app.route("/api/v1/listarClientePorID/:id").get(controller.listarClientePorID);
    app.route("/api/v1/customerWallets").get(controller.listCustomerWallets);
    app.route("/api/v1/customerWallets/:id").get(controller.listCustomer);
    app.route("/api/v1/enviarEmails").get(controller.enviaEmails);
    app.route("/api/v1/customerWallets").post(controller.insertCustomer);
};
