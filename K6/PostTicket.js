import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
  vus: 50,
  duration: "5s",
  thresholds: {
    checks: ["rate==1"],
    http_req_duration: ["avg<300"],
  },
};

export default function () {
  let data = {
    movieId: "m4nC1vENI36l9H5U",
    userId: "dwadaf3wf3",
    seatNumber: 2,
    price: 20,
    showtime: "2024-11-26",
  };

  let res = http.post("http://localhost:3000/tickets", JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
  check(res, {
    "status é 201": (r) => r.status === 201, // Valida que o status da resposta é 200
    "resposta contém id": (r) => r.json("_id") !== undefined, // Valida que a resposta contém um campo token
  });
  sleep(1);
}
