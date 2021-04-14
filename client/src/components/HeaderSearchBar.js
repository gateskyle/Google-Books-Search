import React, { useState } from "react";
import { Container, Row, Col, Navbar, Form, FormControl, Button } from 'react-bootstrap';

function HeaderSearchBar() {

    const [searchState, setSearchState] = useState('')

    function click() {
        console.log(searchState)
    }

    return(
        <>
            <Container fluid>
                <Row className=" d-flex justify-content-center text-center p-3 mb-2 bg-dark text-light">
                    <Col>
                        <h4>To start, use the search bar below.</h4>
                        <br></br>
                        <h4>Or, click on "View Saved Books" to view already saved books</h4>
                        <br></br>
                        <Navbar bg="dark" variant="dark" className="justify-content-center">
                            <Form inline>
                                <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={(event) => setSearchState({ searchState: event.target.value})} />
                                <Button variant="outline-info" onClick={click()}>Search</Button>
                            </Form>
                        </Navbar>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default HeaderSearchBar;