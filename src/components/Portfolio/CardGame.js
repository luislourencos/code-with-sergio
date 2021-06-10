import React from 'react';
import { Button } from '../Button'
import { useTranslation } from 'react-i18next';

export const CardGame = ({ src, title = "title", description = "description", routeButton = "/" }) => {
    const { t } = useTranslation()
    return (
        <div className="card__game">

            <div className="card__game-image" >
                <img src={src} className="card__game-image-item" />
            </div>
            <div className="card__game-text">
                <p className="card__game-title">{title}</p>
                {/* <p className="card__game-description">{description}</p> */}

                <div style={{ minWidth: "150px" }}>
                    <Button href={routeButton} target='_blank' rel='noreferrer'>{t("card.play")}</Button>
                </div>

            </div>

        </div>
    )
}
