import http from "k6/http";
import { sleep, check } from "k6";

export const options = {
  thresholds: {
    //error rate
    http_req_failed: ['rate<=0.10'], //4xx 5xx

    //response time
    http_req_duration: ['p(80)<=10'], // for 80 percent of request we expect under 3000ms

    //checks
    checks: ['rate>=0.9'], //90 percent of the checks to pass
  },
};

export default function () {
  const request = http.get("https://test.k6.io");
  sleep(1);
  check(request, {
    "is this status 200": (r) => r.status === 200,
  });
}
