import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './ResultContainer.css'
    
function ResultContainers() {

    const bookArray = [
        {
            id: "lPV1CQAAQBAJ",
            title: 'The Test Book',
            author: "Mikael Krogerus" + ' and ' + "Roman Tschäppeler",            
            pic:"http://books.google.com/books/content?id=lPV1CQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
            desc: "An essential library of tests for self-knowledge and success, from the strategic thinking experts behind the international bestseller The Decision Book. Are you clever? Can you self-motivate? Are you creative? How do you handle money? Can you lead others well? With their trademark style and wit, best-selling authors Mikael Krogerus and Roman Tschäppeler present sixty-four tests spanning intelligence and personality type; creativity and leadership skills; fitness and lifestyle; and knowledge and belief. From what you see in a Rorschach test to comparing your workout against a Navy SEAL’s, from EQ to IQ and Myers-Briggs in between, The Test Book offers a panoply of ways to assess yourself and decide what you need to succeed. As Krogerus and Tschäppeler highlight, you can only know whether you have the right skills, the right job, or the right partner when you know where you stand right now. Small enough to fit in your pocket but packed with insight and good humor, The Test Book delivers a quick, fun way to evaluate your life and happiness.",
            link: "https://play.google.com/store/books/details?id=lPV1CQAAQBAJ&rdid=book-lPV1CQAAQBAJ&rdot=1&source=gbs_api"
        } , 
        {
            id: "SnLsDwAAQBAJ",
            title: "Test This Book!",
            author: "Louie Zong",
            pic: "http://books.google.com/books/content?id=SnLsDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
            desc: "A bear and a frog attempt to answer the age-old question \"How do books work?\" in this clever, interactive picture book from animator Louie Zong. Test This Book! features a bear scientist and a frog scientist testing how books work in a variety of exciting, dramatic experiments. What happens when readers sit on their books? Shake them? Whisper secrets to them? The results are funny, surprising, and very, very informative. This hilarious picture book is a great read-aloud experience, as readers are rewarded for physically interacting with the book. And they also learn a little about the scientific method—the basis of all STEM education. An Imprint Book",
            link: "https://play.google.com/store/books/details?id=SnLsDwAAQBAJ&rdid=book-SnLsDwAAQBAJ&rdot=1&source=gbs_api"
        }
    ]
    return (
        <>
        <div>
        {bookArray.map((book) => (
        <section className="container">
            <section className="row flex-row-reverse p-2">
                <section>
                    <input className="btn btn-primary" type="submit" value="Save Book"></input>
                    <a href={book.link} className="btn btn-primary view" role="button">View Book</a>
                </section>
            </section>

            <section className="row">
                <section className="col-sm">
                    <h1 className="font-weight-bold" key={'title' + book.id}>Title: {book.title}</h1>
                    <h2 key={'author' + book.id}>Author: {book.author}</h2>
                    <hr/>
                </section>
            </section>

            <section className="row no-gutters">
                <article className="col">
                    <img key={'pic' + book.id} src={book.pic} alt="The Entertainment List webpage" className="img-fluid"></img>
                </article>
            </section>

            <section className="row no-gutters">
                <article className="col-md">
                    <p key={'desc' + book.id}>{book.desc}</p>
                </article>
            </section>
        </section>
        ))}
        <br></br>
        </div>
        </>
    )
}

export default ResultContainers;