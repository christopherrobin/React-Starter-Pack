/**
P1
- Clicking Buy should create a new row for Bids (buys).
- Clicking Sell should create a new row for Asks (sells).
- For the size, generate a random number between 0 to 1.
- For Price, generate a random number around 37000.
- Example order generator object:
{
    id: Math.random(),
    size: Math.random(),
    price: 37000 + Math.random() * 2000
}

P2
- Green = rgb(45,175,52). Orange = rgb(250,103,45). You can use pure black and white for the other colors.
- UI should look close to the example. You will not need to use theme libraries like Material UI or Bootstrap.

P3
- When a new row is created, fade it in from an opacity of zero to a fully visible opacity of one. Over 1 second.
- Sort by Price.
**/

import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { round } from 'lodash';
import { Container, Row, Col } from 'reactstrap';
import Fade from '.././components/Fade';
import Header from '.././components/Header';
import './LandingPage.scss';

import { Button } from '@material-ui/core';

const LandingPage = () => {
	const [totalBuys, setTotalBuys] = useState([]);
	const [totalSells, setTotalSells] = useState([]);

	const createTransaction = isBuy => {
		const newTransaction = {
			id: Math.random(),
			size: round(Math.random(), 4),
			price: round(37000 + Math.random() * 2000, 2),
		};
		if (isBuy) {
			const newArray = [...totalBuys, newTransaction];
			setTotalBuys(newArray);
		} else {
			const newArray = [...totalSells, newTransaction];
			setTotalSells(newArray);
		}
	};

	return (
		<Container id="LandingPage--Container">
			<Helmet>
				<title>React-Starter-Pack - Coinbase example</title>
			</Helmet>
			<Row>
				<Col xs={12}>
					<h1>Coinbase transactions example</h1>

					<div id="buttons-container">
						<Row>
							<Col xs={6}>
								<Button
									id="buy-button"
									variant="outlined"
									color="primary"
									onClick={() => createTransaction(true)}
									fullWidth
								>
									Buy
								</Button>
							</Col>
							<Col xs={6}>
								<Button
									id="sell-button"
									variant="outlined"
									color="primary"
									onClick={() => createTransaction(false)}
									fullWidth
								>
									Sell
								</Button>
							</Col>
						</Row>
					</div>
					<div id="transactions-container">
						<div id="showSells">
							{totalSells.map((data) => (
								<div key={data.id}>
									<Fade
										childComponent={
											<div>
												<span className="size sells">{data.size}</span>
												<span className="price sells">{data.price}</span>
											</div>
										}
									/>
								</div>
							))}
						</div>
						<div id="showBuys">
							{totalBuys.map((data) => (
								<div key={data.id}>
									<Fade
										childComponent={
											<div>
												<span className="size buys">{data.size}</span>
												<span className="price buys">{data.price}</span>
											</div>
										}
									/>
								</div>
							))}
						</div>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default LandingPage;
