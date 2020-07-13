import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Line } from 'react-chartjs-2';

import { rankInfo } from '../../../../config.js';

const RankChart = () => {
	const [ chartData, setChartData ] = useState({});
	const chart = () => {
		setChartData({
			labels: [ 'mon', 'tue', 'wed', 'thu', 'fri' ],
			datasets: [
				{
					label: 'Test',
					data: [ 32, 25, 46, 14, 38 ],
					backgroundColor: [ 'rgb(1, 94, 204, 0.1)' ],
					borderColor: 'rgb(1, 94, 204)',
					borderWidth: 1
				},
				{
					label: 'Test2',
					data: [ 15, 19, 32, 41, 23 ],
					backgroundColor: [ 'rgb(255, 94, 204, 0.1)' ],
					borderColor: 'rgb(255, 94, 204)',
					borderWidth: 1
				}
			]
		});
	};

	useEffect(() => {
		chart();
	}, []);

	return (
		<div style={{ width: '270px', height: '130px' }}>
			<Line data={chartData} />
		</div>
	);
};

export default RankChart;
