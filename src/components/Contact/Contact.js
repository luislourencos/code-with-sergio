import React, { useState, useRef } from 'react';
import { Button } from '../Button'


import './styles.sass';
import { useTranslation } from 'react-i18next';

export const Contact = ({ divRef }) => {
    const { t } = useTranslation()
    const [show, setShow] = useState(false)
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const final = useRef(null)


    return (
        <footer ref={divRef} className='contact'>
            <div className={show ? "contact__form" : "contact__form-none"} >
                <div className="contact__input-box">
                    <label className="contact__label">{t('general.name')}</label>
                    <input className="contact__input" placeholder={t('general.placeholderName')} value={name} onChange={(event) => setName(event.target.value)} />
                </div>
                <div className="contact__input-box">
                    <label className="contact__label">{t('general.email')}</label>
                    <input className="contact__input" placeholder={t('general.placeholderEmail')} value={email} onChange={(event) => setEmail(event.target.value)} />
                </div>
                <div className="contact__input-box">
                    <label className="contact__label">{t('general.subject')}</label>
                    <input cols="30" rows="5" className="contact__input" placeholder={t('general.placeholderSubject')} value={subject} onChange={(event) => setSubject(event.target.value)} />
                </div>
                <div className="contact__input-box">
                    <label className="contact__label">{t('general.message')}</label>
                    <textarea cols="30" rows="5" className="contact__textarea" placeholder={t('general.placeholderMessage')} value={message} onChange={(event) => setMessage(event.target.value)} />
                </div>


                <Button href={`mailto:luis.lourencos@gmail.com?from:${email}&subject=${subject} from ${name}&body=${message}`} target="_blank" style={{ width: '95%', marginTop: '20px' }} onClick={() => {
                    setName('')
                    setEmail('')
                    setSubject('')
                    setMessage('')
                }}>{t('general.send')}</Button>

            </div>
            <div className="icons">
                <a href='https://github.com/luislourencos' target='_blank' rel='noreferrer' className='contact__icon'>
                    <i className="fab fa-github-square contact__git " ></i>
                </a>
                <a href='https://www.linkedin.com/in/sergio-luis-fullstack-dev/' target='_blank' rel='noreferrer' className='contact__icon'>
                    <i className="fab fa-linkedin contact__lin"></i>
                </a>
                <a href='https://api.whatsapp.com/send?phone=34666883702' target='_blank' rel='noreferrer' className='contact__icon'>
                    <i className="fab fa-whatsapp-square contact__whatsapp"></i>
                </a>
                <a onClick={() => {
                    setShow(!show)
                    if (!show) {
                        setTimeout(() => final.current && final.current.scrollIntoView({ behavior: 'smooth' }), 300)
                    }
                }} className='contact__icon'>
                    <i ref={final} className="fas fa-envelope-square contact__mail"></i>
                </a>
            </div>

            <div className="contact__info">
                <p >{`© code width sérgio ${new Date().getFullYear()}`}</p>
            </div>
            <div ref={final}></div>
        </footer>
    );
};
