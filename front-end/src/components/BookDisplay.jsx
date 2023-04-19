import React from 'react'


function BookDisplay(props) {
    const handleClick = (author) => {
        props.getAuthor(author)
    }
    const handleRent = (bookName) => {
        alert(`You have rented ${bookName}.`);
    };

    const handleRenew = (bookName) => {
        alert(`You have renewed ${bookName}.`);
    };
    const book = props.books.map((b) => {
        console.log()
        return (
            <div >
                <div className="book">

                    <h4>{b.name}</h4>

                    <button className="author-link" value='Philip Roth' onClick={() => handleClick(`${b.author.firstName} ${b.author.lastName}`)}>{b.author.firstName} {b.author.lastName}</button>
                    <br />
                    <br />
                    <img src={b.image} alt={b.name} className="image" />
                    <p>{b.desc}</p>
                    <h5>{b.price}</h5>
                    {b.copies > 0 ? <p>Available</p> : <p>Not Available</p>}
                    <button className="rent" onClick={() => handleRent(b.name)}>Rent</button>
                    <button className="renew" onClick={() => handleRenew(b.name)}>Renew</button>


                </div>
            </div>
        )
    })
    return (
        <>
            <h4 className="user-txt">Logged in as {props.user}</h4>
            <div className="booksList">
                {book}
            </div>
        </>

    )
}

export default BookDisplay