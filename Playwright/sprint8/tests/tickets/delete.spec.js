const { test, expect } = require("@playwright/test");
import Ticket from "./Ticket.js";

const ticket = {
  movieId: "m4nC1vENI36l9H5U",
  userId: "dwadaf3wf3",
  seatNumber: 1,
  price: 10,
  showtime: "2024-11-26",
};

test("delete ticket teste", async ({ request }) => {
  const response = await Ticket.postTickets({ request }, ticket);
  expect(response.status()).toBe(201);
  const responseBody = await response.json();
  const id = responseBody._id;

  const responseDEL = await Ticket.deleteTickets({ request }, id);

  expect(responseDEL.status()).toBe(200);
});

// test("delete ticket teste id inexistente", async ({ request }) => {
//   const responseDEL = await Ticket.deleteTickets({ request }, "dd322d3242");

//   expect(responseDEL.status()).toBe(404);
// });
