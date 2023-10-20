import http from 'k6/http';
import { sleep } from 'k6';

//add options
export const options = {
  stages: [
    { duration: '5m', target: 100 },
    { duration: '10m', target: 50 },
    { duration: '15m', target: 15 },
  ],
}



export default function () {
  http.get('https://test.k6.io');
  sleep(1);
}