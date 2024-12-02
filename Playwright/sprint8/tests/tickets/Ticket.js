const { expect } = require("@playwright/test");

export default class Ticket {
  static async getAllTickets({ request }) {
    return await request.get("/tickets");
  }
  static async getTickets({ request }, id) {
    return await request.get("/tickets/" + id);
  }
  static async postTickets({ request }, ticket) {
    return await request.post("/tickets", {
      data: ticket,
    });
  }
  static async putTickets({ request }, id, ticket) {
    return await request.put("/tickets/" + id, {
      data: ticket,
    });
  }

  static async deleteTickets({ request }, id) {
    return await request.delete("/tickets/" + id);
  }
}
