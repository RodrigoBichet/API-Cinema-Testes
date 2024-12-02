const { test, expect } = require("@playwright/test");
import Movie from "./Movie.js";

const movie = {
  title: "delete teste",
  description: "delete teste ",
  launchdate: "2024-11-29",
  showtimes: ["2024-11-29", "2024-11-30"],
};

test("delete teste", async ({ request }) => {
  const response = await Movie.postMovies({ request }, movie);
  expect(response.status()).toBe(201);

  const movie1 = await Movie.getMovieByTitle({ request }, movie.title);

  const responseDEL = await Movie.deleteMovies({ request }, movie1._id);

  expect(responseDEL.status()).toBe(204);
});

test("delete teste inexistente", async ({ request }) => {
  const responseDEL = await Movie.deleteMovies({ request }, "dd322d3242");

  expect(responseDEL.status()).toBe(404);
});
