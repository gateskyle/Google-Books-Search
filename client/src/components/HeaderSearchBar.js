import React, { useState } from "react";
import { Container, Row, Col, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import API from '../utils/API'
import ResultContainers from './ResultContainers'

function HeaderSearchBar() {

    const [searchState, setSearchState] = useState("")
    const [searchResults, setSearchResults] = useState([])

    function click() {
        API.search(searchState)
            .then((response) => {
                setSearchResults(response.data.items);
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    return(
        <>
        <Container fluid>
            <Row className=" d-flex justify-content-center text-center p-3 mb-2 bg-dark text-light">
                <Col>
                    <h4>To start, use the search bar below.</h4>
                    <br></br>
                    <h4>Or click on "View Saved Books" to view books you have saved</h4>
                    <br></br>
                    <Navbar bg="dark" variant="dark" className="justify-content-center">
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={(event) => setSearchState(event.target.value)} />
                            <Button variant="outline-info" onClick={click}>Search</Button>
                        </Form>
                    </Navbar>
                </Col>
            </Row>
        </Container>
        {searchResults.map((data) => {
            return(                
            <ResultContainers
                title={data.volumeInfo.title}
                author={data.volumeInfo.authors}
                pic={data.volumeInfo.imageLinks ? data.volumeInfo.imageLinks.thumbnail : console.log('no image')} 
                desc={data.volumeInfo.description}
                link={data.volumeInfo.infoLink}
            />
            )
        })}
        </>
    )
}

export default HeaderSearchBar;