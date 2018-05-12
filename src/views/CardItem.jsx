import React from 'react';
import '../styles/CardItem.scss';

const baseUrl = "https://image.tmdb.org/t/p/w342";

const CardItem = (item) => {
    const { id, title, overview, release_date, vote_average, poster_path  } = item;

    return (
        <div key={id} className='card-box'>
            <div className='card-details'>
                <span>{title}</span>
                <span>Release Date: {release_date}</span>
                <span>Overview:</span>
                <span>Ratings: {vote_average}</span>
                <span>{overview}</span>
            </div>
            <div className='card-image'>
                <img src={baseUrl+poster_path} alt={title}/>
            </div>
        </div>
    );
}

export default CardItem;
