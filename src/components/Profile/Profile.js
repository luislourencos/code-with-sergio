import React from 'react';
import profileImage from '../../img/profile.jpeg'
import './styles.sass';
import Fade from 'react-reveal/Fade'
import pdf_es from '../../img/curriculum_sergio_luis_es.pdf'
import pdf_en from '../../img/curriculum_sergio_luis_en.pdf'
import { Button } from '../../components/Button'
import { useTranslation } from 'react-i18next';

export const Profile = ({ divRef }) => {
    const { t } = useTranslation()
    return (

        <Fade left>
            <section ref={divRef} className='profile'>
                <img src={profileImage} alt='profile' className='profile__image' />
                <h2 className='profile__title'>{t('navbar.profile')}</h2>
                <div className='profile__description'>
                    <p className='profile__text'>{t('profile.description1')}</p>
                    <p className='profile__text'>{t('profile.description2')}</p>
                </div>

                <Button href={localStorage.getItem('language') === 'es' ? pdf_es : pdf_en} download='curriculum_sergio_luis.pdf' className='profile__curriculum'>{t('download.curriculum')}</Button>

            </section>
        </Fade>
    );
};
