import React from 'react';
import { Fade, Flip } from 'react-reveal'

import './styles.sass';

export const Header = ({ title, description = 'description', backgroundImage }) => {
    return (

        <header className='header'>
            <Fade right>
                <div className='header__background'>
                    <img src={backgroundImage} alt='background' className='header__image' />
                </div>
            </Fade>

            <div className='header__box'>
                <Flip left cascade>
                    <h1 className='header__title'>{title}</h1>
                </Flip>
                <Flip left cascade>
                    <p className='header__description'>{description}</p>
                </Flip>
            </div>


        </header>
    );
};
