import http from 'k6/http';
import { sleep } from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";


//add options
export const options = {
  stages: [
    { duration: '5s', target: 10 },
    { duration: '10s', target: 5 },
    { duration: '15s', target: 15 },
  ],
}

export default function () {
  http.get('https://test.k6.io');
  sleep(1);
}

export function handleSummary(data) {
  return {
    "summary.html": htmlReport(data),
  };
}

