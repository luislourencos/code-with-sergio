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
import './styles.css';
import { useTranslation } from 'react-i18next';
import { CardExperience } from './CardExperience';

export const Experience = ({ divRef }) => {
    const { t } = useTranslation()
    return (
        <div divRef={divRef} className="experience">
            <div className='align-left'>
                <div className="typewriter">
                    <h1 className="experience__title">{t('experience.title')}</h1>
                </div>
            </div>
            <div className="experience__main">
                <div className="container">
                    <div className="exp1">
                        <CardExperience
                            title={t('experience.title1')}
                            post={t('experience.post1')}
                            duration={t('experience.duration1')}
                            description={t('experience.description1')}
                            fade="left"
                        />
                    </div>
                    <div className="exp2">
                        <CardExperience
                            title={t('experience.title2')}
                            post={t('experience.post2')}
                            duration={t('experience.duration2')}
                            description={t('experience.description2')}
                            fade="right"
                        />
                    </div>
                    <div className="exp3">
                        <CardExperience
                            title={t('experience.title3')}
                            post={t('experience.post3')}
                            duration={t('experience.duration3')}
                            description={t('experience.description3')}
                            fade="left"
                        />
                    </div>
                    <div className="line">
                        <div className="dot-line"></div>
                    </div>
                </div>
            </div>




        </div>
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