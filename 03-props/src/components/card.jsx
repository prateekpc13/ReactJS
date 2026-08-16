import React from 'react'
const Card = (props) => {
    return (
        <>
            <div className="card-container">
                <div className='card'>
                    <img src={props.img} alt="photo" />
                    <h1>{props.movie}</h1>
                    <h4>{props.villain}</h4>
                    <p>"{props.dialogue}"</p>
                    <button>View Profile</button>
                </div>
            </div>
        </>
    )
}

export default Card