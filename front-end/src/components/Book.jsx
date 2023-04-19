import React from 'react'

function Book({ book }) {

    return (
        <div>
            <div className="book">


                {book.book.author.firstName} {book.book.author.lastName}

                <br />
                <br />
                <img src={book.book.image} alt="" className="image" />
                <p>{book.book.desc}</p>
                <h5>{book.book.price}</h5>
                {book.book.copies > 0 ? <p>Available</p> : <p>Not Available</p>}

            </div>

        </div>
    )
}

export default Book