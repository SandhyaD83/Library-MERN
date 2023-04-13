import React from 'react'

function BookDisplay(props) {

    const book = props.books.map((b) => {
        console.log()
        return (
            <div className="item" >
                <div >
                    <h1>{b.name}</h1>
                    <h2>{b.author.firstName} {b.author.lastName}</h2>
                    <img src={b.image} alt={b.name} />
                    <p>{b.desc}</p>
                    <h2>{b.price}</h2>
                    <h3>{b.available}</h3>
                </div>
            </div>
        )
    })
    return (
        <div>
            {book}
        </div>
    )
}

export default BookDisplay