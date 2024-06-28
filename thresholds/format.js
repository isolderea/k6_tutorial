import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
  thresholds: {
    //short format
    METRIC_NAME1: ["THRESHOLD_EXPRESSION", `...`],
    //long format
    METRIC_NAME2: [
      {
        threshold: "THRESHOLD_EXPRESSION",
        abortOnFail: true, // boolean
        delayAbortEval: "10s", // string
      },
    ], // full format
  },
};


export default function () {
  const body = http.get('https://test.k6.io');
  sleep(1);
  check(body, {
    'checking body text': (r) =>
    r.body.includes('Rester test of simple web-pages suitable for load testing')
  })
}