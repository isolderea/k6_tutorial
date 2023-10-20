import http from 'k6/http';
import { sleep } from 'k6';

//add options
export const options = {
  stages: [
    { duration: '5s', target: 10 },
    { duration: '10s', target: 5 },
    { duration: '15s', target: 15 },
  ],
}

//10 users for 5 seconds
//5 users for 10 seconds
//15 users for 15 seconds

export default function () {
  http.get('https://test.k6.io');
  sleep(1);
}

