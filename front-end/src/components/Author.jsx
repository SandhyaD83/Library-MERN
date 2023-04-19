import React from 'react'

function Author(props) {

    const author = props.author.map((a) => {

        return (
            <div >


                <ul>
                    <li><h3>{a.volumeInfo.title}</h3></li>
                </ul>

            </div>
        )
    })
    return (

        <div className="author-container">

            <h2 className="author-header">List of other books by {props.author[0].volumeInfo.authors[0]} </h2>

            <div className="author-list">
                {author}
            </div>
        </div>
    )
}

export default Author