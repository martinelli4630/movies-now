import React from 'react';
import { FontIcon } from 'material-ui';
import { yellow600 } from 'material-ui/styles/colors';
import '../styles/CardItem.scss';

const baseUrl = "https://image.tmdb.org/t/p/w342";

const CardItem = (obj) => {
    const { id, title, overview, release_date, vote_average, poster_path } = obj.item;

    return (
        <div key={id} className='card-box'>
            <div className='card-details'>
                <p className='title'>{title}</p>
                <span><strong>Release Date:</strong> {release_date}</span>
                <span className='rate'><strong>Ratings:</strong>
                    {vote_average} 
                    <FontIcon className="material-icons" color={yellow600}>star_rate</FontIcon>
                </span>
                <span><strong>Overview:</strong></span>
                <span>{overview}</span>
            </div>
            <div className='card-image'>
                <img src={baseUrl + poster_path} alt={title} />
            </div>
        </div>
    );
}

export default CardItem;
