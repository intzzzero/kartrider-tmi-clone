import React, { Fragment, useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { currentGameLabel } from '../../../../config';

const CurrentGamesChart = ({ userCurrentRank }) => {
  const [chartData, setChartData] = useState({});
  const [chartOption, setChartOption] = useState({});

  useEffect(() => {
    const dataSetting = () => {
      setChartData({
        labels: currentGameLabel,
        datasets: [
          {
            data: userCurrentRank,
            borderColor: 'rgba(1, 119, 253, 1)',
            backgroundColor: 'rgba(0, 0, 0, 0)',
            borderWidth: 1,
            borderCapStyle: 'butt',
            pointBackgroundColor: 'rgba(1, 119, 253, 1)',
            pointBorderWidth: 0.1,
          },
        ],
      });
    };

    const optionSetting = () => {
      setChartOption({
        maintainAspectRatio: true,
        responsive: false,
        legend: {
          display: false,
        },
        scales: {
          yAxes: [
            {
              ticks: {
                reverse: true,
                beginAtZero: false,
              },
            },
          ],
          xAxes: [
            {
              display: false,
              ticks: {
                reverse: false,
              },
            },
          ],
        },
        elements: {
          line: {
            tension: 0.3,
          },
        },
      });
    };

    dataSetting();
    optionSetting();
  }, [userCurrentRank]);

  return (
    <Fragment>
      <Line data={chartData} width={300} height={190} options={chartOption} />
    </Fragment>
  );
};

export default CurrentGamesChart;
