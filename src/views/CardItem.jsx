import React from 'react';

const CardItem = (item) => {
    const { id, title, overview, release_date, vote_average  } = item;

    return (
        <div key={id}>
            <p>{title}</p>
        </div>
    );
}

export default CardItem;
