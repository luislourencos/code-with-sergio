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
import { Card } from './Card'
import './styles.sass';
import './styles.css';
import { useTranslation } from 'react-i18next';
import Fade from 'react-reveal/Fade';

export const Skills = ({ divRef }) => {
    const { t } = useTranslation()

    const arrayCardBack = [
        {
            src: nodejs,
            title: "NodeJS",
            description: "desciption"
        },
        {
            src: mongodb,
            title: "MongoDB mongoose",
            description: "desciption"
        },
        {
            src: mysql,
            title: "mySQL",
            description: "desciption"
        },
        {
            src: expressjs,
            title: "ExpressJS",
            description: "desciption"
        },
        {
            src: swagger,
            title: "Swagger",
            description: "desciption"
        },
        {
            src: mochachai,
            title: "TDD testing",
            description: "desciption"
        },
        {
            src: graphql,
            title: "Graph QL",
            description: "desciption"
        },
        {
            src: apollo,
            title: "Apollo Server",
            description: "desciption"
        },
    ]
    const arrayCardFront = [
        {
            src: js,
            title: "JavaScript",
            description: "desciption"
        },
        {
            src: typescript,
            title: "TypeScript",
            description: "desciption"
        },
        {
            src: html,
            title: "HTML 5",
            description: "desciption"
        },
        {
            src: css,
            title: "CSS 3",
            description: "desciption",
            width: "70%"
        },
        {
            src: sass,
            title: "SASS",
            description: "desciption"
        },
        {
            src: react,
            title: "React JS",
            description: "desciption"
        },
        {
            src: reactnative,
            title: "React Native",
            description: "desciption"
        },
        {
            src: redux,
            title: "React Redux",
            description: "desciption"
        },
        {
            src: router,
            title: "React Router",
            description: "desciption"
        },
    ]

    return (
        <div>

            <div divRef={divRef} className="skills">

                <div className="skills__container">
                    <div className="align-left">

                        <div className="typewriter">
                            <h1 className="skills__title" >{t('skills.languageTitle')}</h1>
                        </div>
                    </div>
                    <div className="language__container"  >
                        <Fade left>
                            <div className="language__box">
                                <h3 className="language__name">{t('skills.languagePor')}</h3>
                                <div className="meter">
                                    <span style={{ width: "100%" }}><span className="progress"></span></span>
                                </div>
                            </div>
                        </Fade>
                        <Fade left>
                            <div className="language__box">
                                <h3 className="language__name">{t('skills.languageEs')}</h3>
                                <div className="meter">
                                    <span style={{ width: "90%" }}><span className="progress"></span></span>
                                </div>
                            </div>
                        </Fade>
                        <Fade left>

                            <div className="language__box">
                                <h3 className="language__name">{t('skills.languageIn')}</h3>
                                <div className="meter">
                                    <span style={{ width: "60%" }}><span className="progress"></span></span>
                                </div>
                            </div>
                        </Fade>
                        <Fade left>

                            <div className="language__box">
                                <h3 className="language__name">{t('skills.languageCat')}</h3>
                                <div className="meter">
                                    <span style={{ width: "60%" }}><span className="progress"></span></span>
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>

                <div className="skills__container">
                    <div className="align-right">

                        <div className="typewriter">
                            <h1 className="skills__title" >{t('skills.education')}</h1>
                        </div>
                    </div>

                    <div className="language__container"  >
                        <Fade right>

                            <div className="study__container">
                                <h3 className="study__name">{t('skills.study1')}</h3>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="study__container">
                                <h3 className="study__name">{t('skills.study2')}</h3>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="study__container">
                                <h3 className="study__name">{t('skills.study3')}</h3>
                            </div>
                        </Fade>

                        <Fade right>
                            <div className="study__container">
                                <h3 className="study__name">{t('skills.study4')}</h3>
                            </div>
                        </Fade>
                    </div>
                </div>


            </div>


            <div className="skills__title-container">

                <h1 className="skills__title-slider">{t('skills.backEnd')}</h1>
            </div>
            <div className="card__container">
                <div className="card">
                    {arrayCardBack.map((element, index) => {
                        return (


                            <Card key={index} src={element.src} title={element.title} description={element.description} />

                        )
                    })}
                </div>

            </div>
            <div className="skills__title-container">
                <h1 className="skills__title-slider">{t('skills.backFront')}</h1>
            </div>
            <div className="card__container">
                <div className="card">
                    {arrayCardFront.map((element, index) => {
                        return <Card key={index} src={element.src} title={element.title} description={element.description} width={element.width} />
                    })}
                </div>

            </div>
        </div>


    );
};
