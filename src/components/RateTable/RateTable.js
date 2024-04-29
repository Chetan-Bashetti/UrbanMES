import React from 'react';
import './RateTable.css';

const RateTable = ({ data }) => {
	return (
		<table>
			<thead>
				<tr>
					<th className='left-text'>Description</th>
					<th className='center-text'>Service Charge</th>
				</tr>
			</thead>
			<tbody>
				{data?.map((eachRate) => (
					<tr key={eachRate.desc}>
						<td>{eachRate.desc}</td>
						<td className='center-text'>
							<div>
								<div>{eachRate.charges}</div>
								{eachRate.subCharges && <div>{eachRate.subCharges}</div>}
							</div>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default RateTable;
