import React from "react";

import { useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Horror from "./CategoriaFilm/horror.json";
import SingleBook from './SingleBook';


function LatestRelease() {
    const [searchText, setSearchText] = useState("")
        return(
            <Container fluid className='mt-5 pt-5'>
                <Row className="d-flex justify-content-center gap-1 mb-5">
                <label className="w-50 d-flex "> <b>Cerca dei libri:</b></label>
                <input  type="text" className="text-center w-50 p-2" placeholder="Cerca i libri"  onChange={event   =>  setSearchText  (  event.target.value  )} />
                </Row>
                <Row className="d-flex justify-content-center gap-2">
                {
                Horror.filter(book => {
                    if (searchText === '') {
                    return book;
                    } else if ( book.title.toLowerCase().includes(searchText.toLowerCase()))    {
                    return book
                    } 
                }).map((book, i) => (
                    <SingleBook book={book} key={i}/>
                ))
                }
            </Row>
            </Container>
        )
        
    }


export default LatestRelease