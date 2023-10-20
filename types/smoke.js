import http from 'k6/http';
import { sleep } from 'k6';

//add options
export const options = {
  vus:3,
  duration: '1m',
}


export default function () {
  http.get('https://test.k6.io');
  sleep(1);
}