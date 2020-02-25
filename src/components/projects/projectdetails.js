import React from 'react';

const Projectdetails = (props) => {
    const id = props.match.params.id
    return (
        <div className="container section project-details">
        <div className="card z-depth-0">
        <div className="card-content">
        <span className="card-title">
        Project topic - {id}
        </span>
        <p>Reprehenderit veniam non nostrud exercitation tempor qui qui laborum dolore commodo. Eu in deserunt veniam pariatur veniam esse et. Est sit dolor sit occaecat id esse enim do consectetur occaecat. Enim commodo non duis in nostrud exercitation tempor duis ea aliqua exercitation in commodo.</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
        <div>Posted by Cee Jay</div>
        <div>31-11-2019</div>
        </div>
        </div>


        </div>
    )
}

export default Projectdetails;