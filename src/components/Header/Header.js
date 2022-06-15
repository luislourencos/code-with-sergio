import React from 'react';
import sergio from '../../img/profile.png';
import { Button } from '../Button'
import './styles.css';
import { useTranslation } from 'react-i18next';
import pdf_es from '../../img/sergio_luis_curriculum_es.pdf'
import pdf_en from '../../img/sergio_luis_curriculum_en.pdf'
import Lottie from 'react-lottie';

import loader from '../../lotties/hello.json';
export const Header = () => {
    const { t } = useTranslation()
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: loader,

    }
    return (
        <header className='header'>
            <div className='header__header'>
                <div className="header__presentation">
                    <div style={{
                        position: 'relative',
                        height: 80
                    }}>

                        <Lottie
                            style={{ position: 'absolute' }}
                            options={defaultOptions}
                            height={80}
                            width={80}
                        />
                    </div>

                    <div className="typewriter">
                        <h1 className="header__title">{t('header.title')}</h1>
                    </div>


                    <div className="typewriter">
                        <p className="header__description">{t('header.description')}</p>
                    </div>

                    {/* <div className="typewriter">
                    <h1>The cat and the hat.</h1>
                </div> */}


                </div>


                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img src={sergio} alt="Avatar" className="flip-card-image" />
                        </div>
                        <div className="flip-card-back">
                            <div className="header__profile">
                                <h2 className="header__profile-title">{t('navbar.profile')}</h2>
                                <ul>
                                    <li className="header__profile-li" >{t('profile.description1')}</li>
                                    <li className="header__profile-li">{t('profile.description2')}</li>
                                    <li className="header__profile-li">{t('profile.description3')}</li>
                                    <li className="header__profile-li">{t('profile.description4')}</li>
                                    <li className="header__profile-li">{t('profile.description5')}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="header__bottom">
                <Button href={localStorage.getItem('language') === 'es' ? pdf_es : pdf_en} download={`sergio_luis_curriculum_${localStorage.getItem('language') || 'en'}.pdf`}>{t('download.curriculum')}</Button>
            </div>



        </header>
    );
};
