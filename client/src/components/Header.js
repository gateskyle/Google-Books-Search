import React from "react";
import { Container, Row, Col } from 'react-bootstrap';

function Header() {
    return(
        <>
            <br></br>
            <Container fluid>
                <Row className=" d-flex justify-content-center text-center p-3 mb-2 bg-dark text-light">
                    <Col>
                        <h4>To start, use the search bar below.</h4>
                        <br></br>
                        <h4>Or, click on "View Saved Books" to view already saved books</h4>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Header;