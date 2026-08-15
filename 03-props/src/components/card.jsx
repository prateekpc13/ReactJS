import React from 'react'
const Card = (props) => {
    return (
        <>
            <div className="card-container">
                <div className='card'>
                    <img src={props.img} alt="photo" />
                    <h1>{props.name}</h1>
                    <p>{props.caption}</p>
                    <button>View Profile</button>
                </div>
            </div>
        </>
    )
}

export default Card