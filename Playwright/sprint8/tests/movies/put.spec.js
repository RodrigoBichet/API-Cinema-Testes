const { test, expect } = require("@playwright/test");
import Movie from "./Movie.js";

test("put teste", async ({ request }) => {
  let movie = {
    title: "teste",
    description: "teste",
    launchdate: "2024-11-26",
    showtimes: ["2024-11-26", "2024-11-27"],
  };
  const response = await Movie.postMovies({ request }, movie);
  expect(response.status()).toBe(201);
  movie = await Movie.getMovieByTitle({ request }, movie.title);
  const id = movie._id;
  movie = {
    title: "teste put",
    description: "teste put",
    launchdate: "2024-11-26",
    showtimes: ["2024-11-26", "2024-11-27"],
  };
  const responsePut = await Movie.putMovies({ request }, id, movie);
  expect(responsePut.status()).toBe(200);
  let responseBodyPut;
  try {
    responseBodyPut = await responsePut.json();
  } catch (e) {
    responseBodyPut = null;
  }
  expect(responseBodyPut).not.toBeNull();
  expect(Object.keys(responseBodyPut).length).toBeGreaterThan(0);
  expect(responseBodyPut.title).toBe(movie.title);
  expect(responseBodyPut.description).toBe(movie.description);
  expect(responseBodyPut.launchdate).toBe(movie.launchdate);
  expect(responseBodyPut.showtimes).toStrictEqual(movie.showtimes);
});
