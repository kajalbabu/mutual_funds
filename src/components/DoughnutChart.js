import React, { useEffect, useRef } from 'react';
import { Chart, DoughnutController, ArcElement, Legend} from 'chart.js';
import { OverviewData } from './data/OverviewData';
import "./DoughnutChart.css";

Chart.register(
    ArcElement,
    DoughnutController,
    Legend
)

const DoughnutChart = (props) => {
  

  useEffect(() => {
    const ctx = document.getElementById('doughnutChart');

    const doughnutData = (OverviewData[props.fundKey]).data;

    new Chart(ctx, {
      type: 'doughnut',
      data: doughnutData
    });
  }, []);

  return <canvas id='doughnutChart' />;
};

export default DoughnutChart;
