import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
  vus: 100,
  duration: "5s",
  thresholds: {
    checks: ["rate==1"],
    http_req_duration: ["avg<200"],
  },
};

export default function () {
  let iterationNumber = __ITER;
  let vuNumber = __VU;
  let data = {
    title: `teste de carga K6 - VU ${vuNumber} - Iteração ${iterationNumber}`,
    description: "string",
    launchdate: "2024-11-27",
    showtimes: ["2024-11-27"],
  };

  let res = http.post("http://localhost:3000/movies", JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
  check(res, {
    "status é 201": (r) => r.status === 201, // Valida que o status da resposta é 200
  });
  sleep(1);
}
