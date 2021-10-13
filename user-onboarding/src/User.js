import React from 'react';

function User({ details }) {
    if (!details) {
        return <h3>users loading</h3>
    }

    return (
        <div className="user container">
            <p>{details.first_name} {details.last_name}</p>
            <p>{details.email}</p>
        </div>
    )
}