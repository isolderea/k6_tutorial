import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
  thresholds: {
    // don't use the same metric more than once here
    http_req_failed: ["count>100"],
    http_req_failed: ["rate<50","rate>=0"],
  },
};


export default function () {
  const multiple = http.get('https://test.k6.io');
  sleep(1);
  check(multiple, {
    'is status 200': (r) => r.status === 200,
    'is status not 500': (r) => r.status != 500,
    'body is large': (r) => r.body.length > 10000,
  })
}