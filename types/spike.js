import http from 'k6/http';
import { sleep } from 'k6';

//add options
export const options = {
  stages: [
    { duration: '2m', target: 5000 },
    { duration: '1m', target: 0 },
  ],
}



export default function () {
  http.get('https://test.k6.io');
  sleep(1);
}