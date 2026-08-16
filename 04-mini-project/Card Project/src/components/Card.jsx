import React from 'react'
import {Bookmark} from 'lucide-react'
const Card = (props) => {
    return (
        <>
            
                <div className="card">
                    <div className="top">
                        <img src={props.logo} alt="logo" />
                        <button>Save<Bookmark size={15}/></button>
                    </div>
                    <div className="center">
                        <h2>{props.company} <span>{props.datePosted}</span></h2>
                        <h1>{props.job}</h1>
                        <div className="tag">
                            <p>{props.tag1}</p>
                            <p>{props.tag2}</p>
                        </div>
                    </div>    
                    <hr />
                    <div className="bottom">
                            <div className="left">
                                <h2>{props.pay}</h2>
                                <p>{props.location}</p>
                            </div>
                            <button>Apply Now</button>
                    </div>
                </div>
            
        </>
    )
}

export default Card