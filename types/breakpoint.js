import http from 'k6/http';
import { sleep } from 'k6';

//add options
export const options = {
  // Key configurations for breakpoint in this section
  executor: 'ramping-arrival-rate', //Assure load increase if the system slows
  stages: [
    { duration: '2h', target: 20000 }, // just slowly ramp-up to a HUGE load
  ],
};

export default function () {
  http.get('https://test.k6.io');
  sleep(1);
}