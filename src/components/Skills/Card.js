import React from 'react';

export const Card = ({ src, title, description, width }) => {
    return (
        <div className="card__item">
            <div className="card__item-container" >
                <img src={src} className="card__item-img" style={{ width }} />
            </div>
            <div className="card__item-text">

                <p className="card__item-title">{title}</p>
                {/* <p className="card__item-description">{description}</p> */}
            </div>

        </div>
    )
}