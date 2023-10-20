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


export default function () {
  http.get('https://test.k6.io');
  sleep(1);
}

export function handleSummary(data) {
  const med_latency = data.metrics.iteration_duration.values.med;
  const latency_message = `The median latency was ${med_latency}\n`;

  return {
    stdout: latency_message,
  };
}

