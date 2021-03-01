import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box } from '../Box';
import portfolio from '../../img/portfolio.png'
import chat from '../../img/chat_logo.png';
import books from '../../img/books.png';
import pasapalabra from '../../img/pasapalabra.jpg';
import conecta4 from '../../img/conecta4.png';
import calculator from '../../img/calculator.png';
import './styles.sass';

export const Portfolio = ({ divRef }) => {
    const { t } = useTranslation()
    return (
        <Box divRef={divRef} image={portfolio} right={true} title={t('navbar.portfolio')}>

            <a href='https://chat-app-luislouro.herokuapp.com/' target='_blank' rel='noreferrer' className='portfolio'>
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
            </a>
        </Box>
    );
};
