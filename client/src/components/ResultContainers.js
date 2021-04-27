import React from "react";
import API from '../utils/API'
import 'bootstrap/dist/css/bootstrap.min.css';
import './ResultContainer.css'
    
function ResultContainers(props) {  

    //Function to save a book
    function clickID() {
        const newBook = {
            id: props.id,
            title: props.title, 
            authors: props.authors, 
            desc: props.desc,
            pic: props.pic, 
            link: props.link
        }
        console.log(newBook);
        API.save(newBook);
    }


    return (
        <>
        <div>
        <section className="container">
            <section className="row flex-row-reverse p-2">
                <section>
                    <input className="btn btn-primary" type="submit" value="Save Book" id={props.id} onClick={clickID}></input>
                    <a href={props.link} className="btn btn-primary view" role="button">View Book</a>
                </section>
            </section>

            <section className="row">
                <section className="col-sm">
                    <h1 className="font-weight-bold">Title: {props.title}</h1>
                    <h2>Author(s): {props.authors}</h2>
                    <hr/>
                </section>
            </section>

            <section className="row no-gutters">
                <article className="col">
                    <img src={props.pic} alt="Book" className="img-fluid"></img>
                </article>
            </section>

            <section className="row no-gutters">
                <article className="col-md">
                    <p >{props.desc}</p>
                </article>
            </section>
        </section>
        <br></br>
        </div>
        </>
    )
}

export default ResultContainers;