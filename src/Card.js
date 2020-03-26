import React from 'react';

const Card = ({ data }) => {
    return (
        <div className="column">
            <div className="card">
                <img src={data.picture.thumbnail} alt="Avatar" style={{ width: '100%' }} />
                <div className="container">
                    <h4><b>{`${data.name.first} ${data.name.last}`}</b></h4>
                    <p>{`${data.email}`}</p>
                </div>
            </div></div>)
};

export default Card;