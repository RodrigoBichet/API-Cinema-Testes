const { expect } = require("@playwright/test");

export default class Movie {
  static async getAllMovies({ request }) {
    return await request.get("/movies");
  }
  static async getMovies({ request }, id) {
    return await request.get("/movies/" + id);
  }
  static async postMovies({ request }, movie) {
    return await request.post("/movies", {
      data: movie,
    });
  }
  static async putMovies({ request }, id, movie) {
    return await request.put("/movies/" + id, {
      data: movie,
    });
  }

  static async deleteMovies({ request }, id) {
    return await request.delete("/movies/" + id);
  }

  static async getMovieByTitle({ request }, title) {
    const response = await this.getAllMovies({ request });
    const responseBody = await response.json();

    expect(response.status()).toBe(200);
    expect(Array.isArray(responseBody)).toBe(true);

    const movie = responseBody.find((movie) => movie.title === title);
    return movie || null;
  }
}
