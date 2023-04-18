import React from 'react'
import { Link } from 'react-router-dom'

function BookDisplay(props) {
    const handleClick = (author) => {
        props.getAuthor(author)
    }
    const book = props.books.map((b) => {
        console.log()
        return (
            <div >
                <div className="book">

                    <h4>{b.name}</h4>
                    <button value='Philip Roth' onClick={() => handleClick(`${b.author.firstName} ${b.author.lastName}`)}>{b.author.firstName} {b.author.lastName}</button><br />
                    <br />
                    <img src={b.image} alt={b.name} className="image" />
                    <p>{b.desc}</p>
                    <h5>{b.price}</h5>
                    {b.copies > 0 ? <p>Available</p> : <p>Not Available</p>}
                    <button className="rent">Rent</button>
                    <button className="renew">Renew</button>


                </div>
            </div>
        )
    })
    return (
        <>
            <h4>Logged in as {props.user}</h4>
            <div className="booksList">
                {book}
            </div>
        </>

    )
}

export default BookDisplay