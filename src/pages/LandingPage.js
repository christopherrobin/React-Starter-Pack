import React, { useEffect } from 'react';
import {Helmet} from 'react-helmet';
import { Container, Row, Col } from 'reactstrap';
import Header from '.././components/Header';
import './LandingPage.scss';

const Dashboard = () => {

    useEffect(() => {
        console.log('useEffect');
    }, []);

    return (
        <Container id="LandingPage--Container">
            <Helmet>
                <title>React-Starter-Pack - LandingPage</title>
            </Helmet>
            <Header />
            <Row>
                <Col xs={12}>
                    <h1>Hello!</h1>
                    <p>This is the landing page for React-Starter-Pack</p>
                </Col>
            </Row>
        </Container>
    );
};

export default Dashboard;
