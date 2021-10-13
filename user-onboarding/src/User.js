import React from 'react';

export default function User({ details }) {
    if (!details) {
        return <h3>users loading</h3>
    }

    return (
            <p>{details.first_name} {details.last_name} - {details.email}</p>
    )
}