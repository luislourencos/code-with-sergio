import React from 'react';
import profileImage from '../../img/profile.jpeg'
import './styles.sass';
import Fade from 'react-reveal/Fade'
import { useTranslation } from 'react-i18next';

export const Profile = ({ divRef }) => {
    const { t } = useTranslation()
    return (

        <Fade left>
            <div ref={divRef} className='profile'>
                <img src={profileImage} alt='profile' className='profile__image' />
                <h2 className='profile__title'>{t('navbar.profile')}</h2>
                <div className='profile__description'>{t('profile.description')}</div>
            </div>
        </Fade>
    );
};
