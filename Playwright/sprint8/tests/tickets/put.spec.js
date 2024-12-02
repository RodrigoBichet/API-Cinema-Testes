const { test, expect } = require("@playwright/test");
import Movie from "../movies/Movie.js";
import Ticket from "./Ticket.js";

let id;
test.beforeAll(async ({ request }) => {
  let movie = await Movie.getMovieByTitle({ request }, "teste ticket");
  if (movie) {
    let movie = {
      title: "teste ticket",
      description: "teste",
      launchdate: "2024-11-26",
      showtimes: ["2024-11-26", "2024-11-27"],
    };
    const response = await Movie.postMovies({ request }, movie);
    expect(response.status()).toBe(201);
  }
  movie = await Movie.getMovieByTitle({ request }, "teste ticket");
  id = movie._id;
});

test("put ticket teste", async ({ request }) => {
  let ticket = {
    movieId: id,
    userId: "dwadaf3wf3",
    seatNumber: 1,
    price: 10,
    showtime: "2024-11-26",
  };

  const response = await Ticket.postTickets({ request }, ticket);
  expect(response.status()).toBe(201);
  const responseBody = await response.json();
  const idTicket = responseBody._id;
  ticket = {
    movieId: id,
    userId: "dwadaf3wf3",
    seatNumber: 5,
    price: 20,
    showtime: "2024-11-26",
  };
  const responsePut = await Ticket.putTickets({ request }, idTicket, ticket);
  expect(responsePut.status()).toBe(200);
  let responseBodyPut;
  try {
    responseBodyPut = await responsePut.json();
  } catch (e) {
    responseBodyPut = null;
  }
  expect(responseBodyPut).not.toBeNull();
  expect(Object.keys(responseBodyPut).length).toBeGreaterThan(0);
  expect(responseBodyPut.movieId).toBe(ticket.movieId);
  expect(responseBodyPut.userId).toBe(ticket.userId);
  expect(responseBodyPut.seatNumber).toBe(ticket.seatNumber);
  expect(responseBodyPut.price).toBe(ticket.price);
});

// test("put ticket teste id inexistente", async ({ request }) => {
//   let ticket = {
//     movieId: id,
//     userId: "dwadaf3wf3",
//     seatNumber: 1,
//     price: 10,
//     showtime: "2024-11-26",
//   };

//   const response = await Ticket.putTickets({ request }, "agdusguy67", ticket);
//   expect(response.status()).toBe(404);
// });
