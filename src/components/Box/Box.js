import React from 'react';
import Fade from 'react-reveal/Fade'
import './styles.sass';

export const Box = ({ divRef, children, image, left = false, right = false, title = '' }) => {
    return (
        <section ref={divRef} className='container'>
            <Fade left={left} right={right} >
                <div className='box'>
                    <div className='box__skill'>
                        <img className='box__image-skill' src={image} alt='_image' />
                    </div>
                    <p className='box__title'>{title}</p>
                    {children}
                </div>
            </Fade>

        </section>
    )
};
