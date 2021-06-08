import React from 'react';
import {Helmet} from 'react-helmet';
import { Container, Row, Col } from 'reactstrap';
import Header from '.././components/Header';
import './LandingPage.scss';

const LandingPage = () => {
    return (
        <Container id="LandingPage--Container">
            <Helmet>
                <title>React-Starter-Pack - LandingPage</title>
            </Helmet>
            <Header />
            <Row>
                <Col xs={12}>
                    <h2>Hello!</h2>
                    <p>This is my custom React Starter Pack, a constantly evolving collection of my favorite tools ready to be used to jump-start a new project.</p>
                    <p>This project initializes with custom fetch and cookie management utility functions, ESLint Configuration, Babel configuration (without ejecting), Material-UI, SASS, Jest, and Lodash.</p>
                </Col>
            </Row>
        </Container>
    );
};

export default LandingPage;
