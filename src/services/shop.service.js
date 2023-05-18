import createApiClient from "./api.service";

class ShopService {
    constructor(baseUrl = "/api/shops") {
        this.api = createApiClient(baseUrl);
    }

    // PRODUCT

    async get(id) {// get product
        return (await this.api.get(`/${id}`)).data;
    }
    async update(id, data) {// update product
        return (await this.api.put(`/${id}`, data)).data;
    }
    async delete(id) { // delete product
        return (await this.api.delete(`/${id}`)).data;
    }
    async deleteAll() { // delete all products
        return (await this.api.delete("/")).data;
    }
    async getAll() { // get all products
        return (await this.api.get("/")).data;
    }
    async createProduct(data) { // create a product
        return (await this.api.post("/", data)).data;
    }


    // EMPLOYEE

    async getEmployee(id) {
        return (await this.api.get(`/employee/${id}`)).data;
    }
    async updateEmployee(id, data) {
        return (await this.api.put(`/employee/${id}`, data)).data;
    }
    async deleteEmployee(id) {
        return (await this.api.delete(`/employee/${id}`)).data;
    }
    async deleteAllEmployees() {
        return (await this.api.delete("/employee")).data;
    }
    async getAllEmployees() {
        return (await this.api.get("/employee")).data;
    }
    async createEmployee(data) {
        return (await this.api.post("/employee", data)).data;
    }


    // CUSTOMER

    async getCustomer(id) {
        return (await this.api.get(`/customer/${id}`)).data;
    }
    async updateCustomer(id, data) {
        return (await this.api.put(`/customer/${id}`, data)).data;
    }
    async deleteCustomer(id) {
        return (await this.api.delete(`/customer/${id}`)).data;
    }
    async deleteAllCustomers() {
        return (await this.api.delete("/customer")).data;
    }
    async getAllCustomers() {
        return (await this.api.get("/customer")).data;
    }
    async createCustomer(data) {
        return (await this.api.post("/customer", data)).data;
    }


    // ORDER
    async updateOrder(id, data) {
        return (await this.api.put(`/order/${id}`, data)).data;
    }
    async getAllOrders() {
        return (await this.api.get("/order")).data;
    }
    async createOrder(data) {
        return (await this.api.post("/order", data)).data;
    }




    // async createUser(data) {
    //     return (await this.api.post("/register", data)).data;
    // }
    // async getAllUser() {
    //     return (await this.api.get("/register")).data;
    // }

}

export default new ShopService();