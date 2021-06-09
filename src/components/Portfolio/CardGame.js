import React from 'react';
import { Button } from '../Button'

export const CardGame = ({ src, title = "title", description = "description", routeButton = "/" }) => {
    return (
        <div className="card__game">

            <div className="card__game-image" >
                <img src={src} className="card__game-image-item" />
            </div>
            <div className="card__game-text">
                <p className="card__game-title">{title}</p>
                <p className="card__game-description">{description}</p>

                <div style={{ minWidth: "150px" }}>
                    <Button href={routeButton} target='_blank' rel='noreferrer'>Play</Button>
                </div>

            </div>

        </div>
    )
}

{/* <a href='https://chat-app-luislouro.herokuapp.com/' target='_blank' rel='noreferrer' className='portfolio'>
<div className='portfolio__box'>
    <img src={chat} alt='_image' className='portfolio__image' style={{ width: '90px' }} />
    <p className='portfolio__description'>{t('portfolio.chat')}</p>
</div>
</a>
<a href='https://github.com/luislourencos/books/tree/master/books-docs' target='_blank' rel='noreferrer' className='portfolio'>
<div className='portfolio__box'>
    <img src={books} alt='_image' className='portfolio__image' />
    <p className='portfolio__description'>{t('portfolio.books')}</p>
</div>
</a>
<a href='https://luislourencos.github.io/pasapalabra/' target='_blank' rel='noreferrer' className='portfolio'>
<div className='portfolio__box'>
    <img src={pasapalabra} alt='_image' className='portfolio__image' />
    <p className='portfolio__description'>{t('portfolio.pasapalabra')}</p>
</div>
</a>
<a href='https://luislourencos.github.io/connecta4/' target='_blank' rel='noreferrer' className='portfolio'>
<div className='portfolio__box'>
    <img src={conecta4} alt='_image' className='portfolio__image' />
    <p className='portfolio__description'>{t('portfolio.conecta4')}</p>
</div>
</a>
<a href='https://luislourencos.github.io/calculator/' target='_blank' rel='noreferrer' className='portfolio'>
<div className='portfolio__box'>
    <img src={calculator} alt='_image' className='portfolio__image' />
    <p className='portfolio__description'>{t('portfolio.calculator')}</p>
</div>
</a> */}