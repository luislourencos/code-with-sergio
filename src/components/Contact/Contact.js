import React from 'react';


import './styles.sass';

export const Contact = ({ divRef }) => {
    return (
        <footer ref={divRef} className='contact'>
            <a href='https://github.com/luislourencos' target='_blank' rel='noreferrer' className='contact__icon'>
                <i className="fab fa-github-square contact__git " ></i>
            </a>
            <a href='https://www.linkedin.com/in/s%C3%A9rgio-luis-6676a929/' target='_blank' rel='noreferrer' className='contact__icon'>
                <i className="fab fa-linkedin contact__lin"></i>
            </a>
            <a href='https://api.whatsapp.com/send?phone=34666883702' target='_blank' rel='noreferrer' className='contact__icon'>
                <i className="fab fa-whatsapp-square contact__whatsapp"></i>
            </a>
            <a href='mailto:luis.lourencos@gmail.com' target='_blank' rel='noreferrer' className='contact__icon'>
                <i className="fas fa-envelope-square contact__mail"></i>
            </a>
        </footer>
    );
};
