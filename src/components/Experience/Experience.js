import React from 'react';
import { Box } from '../Box';
import experience from '../../img/experience.png'
import logo from '../../img/logo.png'
import chat from '../../img/chat_logo.png'
import skylab from '../../img/skylab.png'
import books from '../../img/books.png'
import optimalway from '../../img/optimalway.png'
import afority from '../../img/afority.png'

import './styles.sass';
import { useTranslation } from 'react-i18next';

export const Experience = ({ divRef }) => {
    const { t } = useTranslation()
    return (
        <Box divRef={divRef} image={experience} left={true} title={t('navbar.experience')}>
            <div className='experience'>
                <a className='experience__header' target='_blank' href={'https://luislourencos.github.io/code-with-sergio'} rel="noreferrer">
                    <img src={logo} alt='_image' className='experience__image' style={{ width: '80px' }} />
                    <p className='experience__title'>{t('experience.title1')}</p>
                </a>
                <a target='_blank' href={'https://chat-app-luislouro.herokuapp.com/'} className='experience__body' rel="noreferrer">
                    <img src={chat} alt='_image' className='experience__image' />
                    <p className='experience__description'>{t('experience.description1')}</p>
                </a>
            </div>
            <div className='experience'>
                <a className='experience__header' target='_blank' href={'https://www.optimalwayconsulting.com/'} rel="noreferrer">
                    <img src={optimalway} alt='_image' className='experience__image' />
                    <p className='experience__title'>{t('experience.title2')}</p>
                </a>
                <a target='_blank' href={'https://afority.com/index.html'} className='experience__body' rel="noreferrer">
                    <img src={afority} alt='_image' className='experience__image' />
                    <p className='experience__description'>{t('experience.description2')}</p>
                </a>
            </div>
            <div className='experience'>
                <a target='_blank' href={'https://www.skylabcoders.com/es'} className='experience__header' rel="noreferrer">
                    <img src={skylab} alt='_image' className='experience__image' style={{ width: '100px' }} />
                    <p className='experience__title'>{t('experience.title3')}</p>
                </a>
                <a target='_blank' href={'https://github.com/luislourencos/books'} className='experience__body' rel="noreferrer">
                    <img src={books} alt='_image' className='experience__image' style={{ width: '40px' }} />
                    <p className='experience__description'>{t('experience.description3')}</p>
                </a>
            </div>

        </Box>
    );
};

// Full-Stack developer - Freelancer,Barcelona — 2021
// Chat - Proyecto Full-stack - Web app creado con webSocket. Implementado con NodeJS, express, mongoose, TDD, ReactJS, sass, i18next, redux, react-router-dom. 
// Link - https://chat-app-luislouro.herokuapp.com/
// WEB/MOBILE developer, OptimalWay Consulting, Barcelona - 06/2020-01/2020
// Afority -  Web y App para el control de aforos de instalaciones. Implementado con Agile, React-Native-web y React-Native, typescript, i18next, redux, react-navigation. 
// Link- https://afority.com/ 
// Web developer, SkylabCoders, Barcelona — 2020
// Books - Proyecto Full-stack - App mobil para compartir libros. Implementado con NodeJS, express, mongoose, TDD y React-native. 
// Link- https://github.com/luislourencos/books