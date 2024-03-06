import React, { useEffect, useRef } from 'react';
import { Chart, ArcElement, PieController} from 'chart.js';

Chart.register(
    ArcElement,
    PieController
)

const PieCharts = () => {
  useEffect(() => {
    const ctx = document.getElementById('pieChart');

    const pieData = {
      // labels: ['Red', 'Blue', 'Yellow', 'Green'],
      datasets: [
        {
          data: [19, 12, 3, 5],
          backgroundColor: ['red', 'blue', 'yellow', 'green'],
        },
      ],
    };
    new Chart(ctx, {
      type: 'pie',
      data: pieData,
    });
  },[]);

  return <canvas id="pieChart" width="400" height="400" />;
};

export default PieCharts;