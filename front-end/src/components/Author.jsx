import React from 'react'

function Author(props) {
    const author = props.author.map((a) => {

        return (
            <div >
                <div >
                    <ul>
                        <li><h3>Title:{a.volumeInfo.title}</h3></li>
                        <li><h4>Desc:</h4>{a.volumeInfo.description}</li>
                    </ul>




                </div>
            </div>
        )
    })
    return (
        <div>{author}</div>
    )
}

export default Author