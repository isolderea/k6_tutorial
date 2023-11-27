import { sleep, check, group } from 'k6'
import http from 'k6/http'

export const options = {
  ext: {
    loadimpact: {
      distribution: { 'amazon:us:ashburn': { loadZone: 'amazon:us:ashburn', percent: 100 } },
      apm: [],
    },
  },
  thresholds: {},
  scenarios: {
    Scenario_1: {
      executor: 'ramping-vus',
      gracefulStop: '30s',
      stages: [
        { target: 20, duration: '1m' },
        { target: 20, duration: '3m30s' },
        { target: 0, duration: '1m' },
      ],
      gracefulRampDown: '30s',
      exec: 'scenario_1',
    },
  },
}

export function scenario_1() {
  let response

  group('page_2 - https://httpbin.test.k6.io/post', function () {
    response = http.post(
      'https://httpbin.test.k6.io/post',
      'custname=Rester+Test&custtel=12131313131313&custemail=test%40test.com&size=large&topping=bacon%2Ccheese%2Conion&delivery=11%3A00&comments=Like+and+Subscribe',
      {
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
          origin: 'https://httpbin.test.k6.io',
          'upgrade-insecure-requests': '1',
          'sec-ch-ua': '"Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    check(response, { 'status equals 200': response => response.status.toString() === '200' })
  })
  sleep(3)
}
