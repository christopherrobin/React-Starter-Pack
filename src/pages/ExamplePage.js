import React from 'react';
import {Helmet} from 'react-helmet';
import { Container, Row, Col } from 'reactstrap';
import Header from '.././components/Header';
import { Card, CardContent } from '@material-ui/core';
import './ExamplePage.scss';

const getEx =
`get(url)
    .then((result) => {
        console.log(result)
    });
`;

const ExamplePage = () => {
    return (
        <Container id="ExamplePage--Container">
            <Helmet>
                <title>React-Starter-Pack - ExamplePage</title>
            </Helmet>
            <Header/>
            <Row>
                <Col xs={12}>
                    <h1>Examples</h1>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={6}>
                    <Card variant='outlined' className='Card'>
                        <CardContent>
                            <h3>Set Cookie</h3>
                            <div>CookieUtils.setCookie()</div>
                            <div>Args: <code>name</code>, <code>value</code></div>
                            <div><pre><code>setCookie('cookie-name', 'cookie-value');</code></pre></div>
                        </CardContent>
                    </Card>
                </Col>
                <Col xs={12} md={6}>
                    <Card variant='outlined' className='Card'>
                        <CardContent>
                            <h3>Get Cookie</h3>
                            <div>CookieUtils.getCookie()</div>
                            <div>Args: <code>name</code></div>
                            <div><pre><code>getCookie('cookie-name');</code></pre></div>
                        </CardContent>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={6}>
                    <Card variant='outlined' className='Card'>
                        <CardContent>
                            <h3>Delete Cookie</h3>
                            <div>CookieUtils.setCookie()</div>
                            <div>Args: <code>name</code>, <code>path</code></div>
                            <div><pre><code>deleteCookie('cookie-name', '/');</code></pre></div>
                        </CardContent>
                    </Card>
                </Col>
                <Col xs={12} md={6}>
                    <Card variant='outlined' className='Card'>
                        <CardContent>
                            <h3>GET (Fetch)</h3>
                            <div>FetchUtils.get()</div>
                            <div>Args: <code>url</code></div>
                            <div><pre><code>
                            {getEx}
                            </code></pre></div>
                        </CardContent>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default ExamplePage;
