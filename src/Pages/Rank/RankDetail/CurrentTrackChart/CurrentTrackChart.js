import React, { Fragment, useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { trackLabel } from '../../../../config';

const CurrentTrackChart = ({ userCurrentRank }) => {
	const [ chartData, setChartData ] = useState({});
	const [ chartOption, setChartOption ] = useState({});

	useEffect(
		() => {
			const dataSetting = () => {
				setChartData({
					labels: trackLabel,
					datasets: [
						{
							data: [ 1, 2, 3, 2, 4, 1, 3, 2, 1, 2, 4, 5 ],
							borderColor: 'rgba(1, 119, 253, 1)',
							backgroundColor: 'rgba(1, 119, 253, 0.1)',
							borderWidth: 1,
							borderCapStyle: 'butt',
							pointBorderColor: 'rgba(1, 119, 253, 1)',
							pointBorderWidth: 1
						}
					]
				});
			};

			const optionSetting = () => {
				setChartOption({
					maintainAspectRatio: true,
					responsive: false,
					legend: {
						display: false
					},
					scales: {
						yAxes: [
							{
								ticks: {
									reverse: false,
									beginAtZero: false
								}
							}
						],
						xAxes: [
							{
								display: true,
								ticks: {
									reverse: false
								}
							}
						]
					},
					elements: {
						line: {
							tension: 0.3
						}
					}
				});
			};

			dataSetting();
			optionSetting();
		},
		[ userCurrentRank ]
	);

	return (
		<Fragment>
			<Line data={chartData} width={300} height={140} options={chartOption} />
		</Fragment>
	);
};

export default CurrentTrackChart;
