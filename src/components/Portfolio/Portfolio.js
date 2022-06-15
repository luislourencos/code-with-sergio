import React from 'react';
import { useTranslation } from 'react-i18next';
import chat from '../../img/chat_logo.png';
import pasapalabra from '../../img/pasapalabra.jpg';
import conecta4 from '../../img/conecta4.png';
import calculator from '../../img/calculator.png';
import './styles.sass';
import { CardGame } from './CardGame'




export const Portfolio = ({ divRef }) => {
    const { t } = useTranslation()

    const works = [
        {
            src: chat,
            title: t('chat.title'),
            description: t('chat.description'),
            route: "https://chat-app-luislouro.herokuapp.com/"
        },
        {
            src: pasapalabra,
            title: t('pasapalabra.title'),
            description: t('pasapalabra.description'),
            route: "https://luislourencos.github.io/pasapalabra/"
        },
        {
            src: conecta4,
            title: t('conecta4.title'),
            description: t('conecta4.description'),
            route: "https://luislourencos.github.io/connecta4/"
        },
        {
            src: calculator,
            title: t('calculator.title'),
            description: t('calculator.description'),
            route: "https://luislourencos.github.io/calculator/"
        }
    ]
    return (
        <div divRef={divRef} style={{ width: '100%' }}>

            <div className="align-left">
                <div className="typewriter">
                    <h1 className="experience__title">{t('portofolio.title')}</h1>
                </div>
            </div>
            <div className="portfolio__container">
                {works.map((element, index) => {
                    return (
                        <CardGame
                            key={index}
                            src={element.src}
                            title={element.title}
                            description={element.description}
                            routeButton={element.route}
                        />
                    )
                })}


            </div>
        </div>
    );
};
