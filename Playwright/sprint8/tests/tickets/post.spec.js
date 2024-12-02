const { test, expect } = require("@playwright/test");
import Movie from "../movies/Movie.js";
import Ticket from "./Ticket.js";

let id;
test.beforeAll(async ({ request }) => {
  let movie = await Movie.getMovieByTitle({ request }, "teste ticket");
  if (!movie) {
    movie = {
      title: "teste ticket",
      description: "teste",
      launchdate: "2024-11-26",
      showtimes: ["2024-11-26", "2024-11-27"],
    };
    const response = await Movie.postMovies({ request }, movie);
    expect(response.status()).toBe(201);
    movie = await Movie.getMovieByTitle({ request }, "teste ticket");
  }
  id = movie._id;
});

test("post ticket teste", async ({ request }) => {
  const ticket = {
    movieId: id,
    userId: "dwadaf3wf3",
    seatNumber: 1,
    price: 10,
    showtime: "2024-11-26",
  };
  const responseTic = await Ticket.postTickets({ request }, ticket);
  expect(responseTic.status()).toBe(201);
  const responseBodyTic = await responseTic.json();
  if (responseBodyTic) expect(responseBodyTic).toHaveProperty("_id");
});

test("post ticket teste Omissão de campos obrigatórios", async ({
  request,
}) => {
  const ticket = {
    movieId: id,
    userId: "dwadaf3wf3",
    showtime: "2024-11-26",
  };
  const responseTic = await Ticket.postTickets({ request }, ticket);
  expect(responseTic.status()).toBe(400);
  const responseBodyTic = await responseTic.json();
  if (responseBodyTic) expect(responseBodyTic).toHaveProperty("message");
});

test("post ticket teste Número de assento inválido maior que 99", async ({
  request,
}) => {
  const ticket = {
    movieId: id,
    userId: "dwadaf3wf3",
    seatNumber: 100,
    price: 10,
    showtime: "2024-11-26",
  };
  const responseTic = await Ticket.postTickets({ request }, ticket);
  expect(responseTic.status()).toBe(400);
  const responseBodyTic = await responseTic.json();
  if (responseBodyTic) expect(responseBodyTic).toHaveProperty("message");
});

test("post ticket teste Número de assento inválido menor que 0", async ({
  request,
}) => {
  const ticket = {
    movieId: id,
    userId: "dwadaf3wf3",
    seatNumber: -1,
    price: 10,
    showtime: "2024-11-26",
  };
  const responseTic = await Ticket.postTickets({ request }, ticket);
  expect(responseTic.status()).toBe(400);
  const responseBodyTic = await responseTic.json();
  if (responseBodyTic) expect(responseBodyTic).toHaveProperty("message");
});

test("post ticket teste Preço fora do intervalo permitido maior que 60", async ({
  request,
}) => {
  const ticket = {
    movieId: id,
    userId: "dwadaf3wf3",
    seatNumber: 50,
    price: 61,
    showtime: "2024-11-26",
  };
  const responseTic = await Ticket.postTickets({ request }, ticket);
  expect(responseTic.status()).toBe(400);
  const responseBodyTic = await responseTic.json();
  if (responseBodyTic) expect(responseBodyTic).toHaveProperty("message");
});

test("post ticket teste Preço fora do intervalo permitido menor que 0", async ({
  request,
}) => {
  const ticket = {
    movieId: id,
    userId: "dwadaf3wf3",
    seatNumber: 50,
    price: -1,
    showtime: "2024-11-26",
  };
  const responseTic = await Ticket.postTickets({ request }, ticket);
  expect(responseTic.status()).toBe(400);
  const responseBodyTic = await responseTic.json();
  if (responseBodyTic) expect(responseBodyTic).toHaveProperty("message");
});
