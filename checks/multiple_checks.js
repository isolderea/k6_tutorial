import http from 'k6/http';
import { sleep, check } from 'k6';

export default function () {
  const multiple = http.get('https://test.k6.io');
  sleep(1);
  check(multiple, {
    'is status 200': (r) => r.status === 200,
    'is status not 500': (r) => r.status != 500,
    'body is large': (r) => r.body.length > 10000,
  })
}