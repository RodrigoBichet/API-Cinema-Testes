const { test, expect } = require("@playwright/test");
import Movie from "./Movie.js";

test("post teste", async ({ request }) => {
  const movie = {
    title: "string",
    description: "string",
    launchdate: "2024-11-29",
    showtimes: ["2024-11-29", "2024-11-30"],
  };
  const response = await Movie.postMovies({ request }, movie);
  let responseBody;
  try {
    responseBody = await response.json();
  } catch (e) {
    responseBody = null;
  }
  expect(response.status()).toBe(201);
  expect(responseBody).not.toBeNull();
  expect(Object.keys(responseBody).length).toBeGreaterThan(0);
  if (responseBody) expect(responseBody).toHaveProperty("_id");
});

test("post teste título duplicado", async ({ request }) => {
  const movie = {
    title: "título duplicado",
    description: "título duplicado",
    launchdate: "2024-11-29",
    showtimes: ["2024-11-29", "2024-11-30"],
  };
  const response = await Movie.postMovies({ request }, movie);
  let responseBody;
  try {
    responseBody = await response.json();
  } catch (e) {
    responseBody = null;
  }
  expect(response.status()).toBe(201);

  const responsePost = await Movie.postMovies({ request }, movie);
  let responseBodyPost;
  try {
    responseBodyPost = await responsePost.json();
  } catch (e) {
    responseBodyPost = null;
  }
  expect(responsePost.status()).toBe(400);
  expect(responseBody).not.toBeNull();
});
