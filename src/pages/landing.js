import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUsers } from 'react-icons/fa';

const Landing = () => {
    return (
        <Container>
            <Row className='d-flex justify-content-around align-items-center' style={{ height: '90vh' }}>
                <Col id='char-col' xs={8} md={4} >
                    <Link className='icon-col' to='/team'>
                        <div className='landing-icon'>
                            <FaUsers />
                        </div>
                        <div>
                            Team Test.
                        </div>
                    </Link>
                </Col>
                <Col xs={0} md={1}>
                </Col>
                <Col xs={8} md={4}>
                    <Link className='icon-col p-4' to='/about'>
                        <div>
                            About the Game.
                        </div>
                    </Link>
                </Col>
            </Row>
        </Container >
    )
}

export default Landing;