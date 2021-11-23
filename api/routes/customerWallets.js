module.exports = (app) => {
    const controller = app.controllers.customerWallets;

    app.route("/api/v1/customerWallets").get(controller.listCustomerWallets);
    app.route("/api/v1/customerWallets/:id").get(controller.listCustomer);
    app.route("/api/v1/customerWallets").post(controller.insertCustomer);
};
