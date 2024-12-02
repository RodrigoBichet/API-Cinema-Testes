const { test, expect } = require("@playwright/test");
import Movie from "./Movie.js";

test("get all teste", async ({ request }) => {
  const response = await Movie.getAllMovies({ request });
  const responseBody = await response.json();

  expect(response.status()).toBe(200);
  expect(Array.isArray(responseBody)).toBe(true);
});

test("get teste", async ({ request }) => {
  const id = "rYC0RAs9yIofwdgh";
  const response = await Movie.getMovies({ request }, id);
  const responseBody = await response.json();

  expect(response.status()).toBe(200);
  expect(responseBody.title).toBe("A banana 4");
});
