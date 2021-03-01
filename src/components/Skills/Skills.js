import React from 'react';
import { Box } from '../Box'
import front from '../../img/front.png'
import back from '../../img/back.png'
import skills from '../../img/skills.png'
import nodejs from '../../img/nodejs.png'
import expressjs from '../../img/expressjs.png'
import swagger from '../../img/swagger.png'
import mongodb from '../../img/mongodb.png'
import mochachai from '../../img/mocha_chai.png'
import graphql from '../../img/graphql.png'
import apollo from '../../img/apollo.png'
import html from '../../img/html-5.png'
import js from '../../img/js.png'
import css from '../../img/css.png'
import sass from '../../img/sass.png'
import storybook from '../../img/storybook.png'
import jest from '../../img/jest.png'
import react from '../../img/react.png'
import reactnative from '../../img/react-native.png'
import typescript from '../../img/typescript.png'
import redux from '../../img/redux.png'
import router from '../../img/react-router.png'
import mysql from '../../img/mysql.png'

import './styles.sass';
import { useTranslation } from 'react-i18next';


export const Skills = ({ divRef }) => {
    const { t } = useTranslation()
    return (
        <Box divRef={divRef} image={skills} right={true} title={t('navbar.skills')}>

            <div className='skills__back'>
                <div className='skills__back-header'>
                    <h3>Back-end</h3>
                    <img className='skills__image-back' src={back} alt='back' />
                </div>
                <div className='skills__back-body'>
                    <img className='skills__image-logo' src={nodejs} alt='nodejs' />
                    <img className='skills__image-logo' src={expressjs} style={{ width: '80px' }} alt='expressjs' />
                    <img className='skills__image-logo' src={swagger} alt='swagger' />
                    <img className='skills__image-logo' src={mongodb} alt='skill' />
                    <img className='skills__image-logo' src={mysql} alt='skill' />
                    <img className='skills__image-logo' src={mochachai} style={{ width: '120px' }} alt='skill' />
                    <img className='skills__image-logo' src={graphql} alt='skill' />
                    <img className='skills__image-logo' src={apollo} alt='skill' />
                </div>
            </div>
            <div className='skills__back'>
                <div className='skills__back-header'>
                    <h3>Front-end</h3>
                    <img className='skills__image-front' src={front} alt='back' />
                </div>
            </div>
            <div className='skills__back-body'>
                <div className='skills__back-body'>
                    <img className='skills__image-logo' src={html} alt='html' />
                    <img className='skills__image-logo' src={css} alt='css' />
                    <img className='skills__image-logo' src={sass} alt='sass' />
                    <img className='skills__image-logo' src={js} alt='js' />
                    <img className='skills__image-logo' src={typescript} alt='ts' />
                    <img className='skills__image-logo' src={react} alt='react' style={{ width: '120px' }} />
                    <img className='skills__image-logo' src={reactnative} alt='skill' style={{ width: '85px', border: '1px solid #61DAFB' }} />
                    <img className='skills__image-logo' src={redux} alt='skill' />
                    <img className='skills__image-logo' src={router} alt='skill' style={{ width: '100px' }} />
                    <img className='skills__image-logo' src={storybook} style={{ width: '130px' }} alt='storybook' />
                    <img className='skills__image-logo' src={jest} style={{ width: '80px' }} alt='jest' />
                </div>
            </div>
        </Box>


    );
};
