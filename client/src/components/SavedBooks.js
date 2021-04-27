import React, { useState, useEffect } from "react";
import API from '../utils/API'
import 'bootstrap/dist/css/bootstrap.min.css';
import './ResultContainer.css'
    
function SavedBooks() {  

    const [booksSaved, setBooksSaved] = useState([]);

    //Stores saved books to const above
    useEffect(() => {
        API.getAllBooks()
        .then((response) => {
        let bookList = []    
        response.data.map(item => {
            list.push({
                title: item.title,
                authors: item.authors,
                desc: item.desc,
                pic: item.pic,
                link: item.link,
                id: item.id
            })
            })
        setBooksSaved(bookList);    
        })
    }, [])

    // Use to find book's id and delete it
    const deleteClick = (e) => {
        e.preventDefault();
        alert('Book deleted')
        API.deleteBook(e.target.id)
        setSavedBooks(booksSaved.filter((book) => {
            return book.id !== e.target.id; 
        }))
    }

    // Renders all saved books
    const RenderSavedBooks = booksSaved.map((data) => (
        <div>
        <section className="container">
            <section className="row flex-row-reverse p-2">
                <section>
                    <input className="btn btn-primary" type="submit" value="Delete Book" id={data.id} onClick={deleteClick}></input>
                    <a href={data.link} className="btn btn-primary view" role="button">View Book</a>
                </section>
            </section>

            <section className="row">
                <section className="col-sm">
                    <h1 className="font-weight-bold">Title: {data.title}</h1>
                    <h2>Author(s): {data.authors}</h2>
                    <hr/>
                </section>
            </section>

            <section className="row no-gutters">
                <article className="col">
                    <img src={data.pic} alt="Book" className="img-fluid"></img>
                </article>
            </section>

            <section className="row no-gutters">
                <article className="col-md">
                    <p >{data.desc}</p>
                </article>
            </section>
        </section>
        <br></br>
        </div>
    ))

    // Renders const with all saved books
    return (
        <>
        <div>
        {RenderSavedBooks}
        <br></br>
        </div>
        </>
    )
}

export default SavedBooks;