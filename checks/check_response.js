import http from 'k6/http';
import { sleep, check } from 'k6';



export default function () {
  const request = http.get('https://test.k6.io');
  sleep(1);
  check(request, {
    'is this status 200':(r) => r.status === 200,
  })
}