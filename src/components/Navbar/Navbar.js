import React, { useState, useCallback, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import logo from '../../img/logo.png'
import './styles.sass';
import { useTranslation } from 'react-i18next';
import { changeLanguage } from '../../lang/i18next';

export const Navbar = ({ items = [
    { name: 'navbar.profile' },
    { name: 'navbar.skills' },
    { name: 'navbar.experience' },
    { name: 'navbar.portfolio' },
    { name: 'navbar.contact' },
], onClick = () => { } }) => {

    const { t } = useTranslation()
    const [dropDown, setDropDown] = useState(false)
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    const handleScroll = useCallback(() => {
        const currentScrollPos = window.pageYOffset;
        setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10);
        setPrevScrollPos(currentScrollPos);
    }, [prevScrollPos])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos, visible, handleScroll]);

    const handlerClick = (value) => {
        onClick(value)
        setDropDown(false)
    }


    return (
        <nav className='navbar' style={{ top: visible ? '0' : '-75px' }}>
            <img src={logo} className='navbar__logo' alt='logo' />
            <div className='navbar__nav'>
                <select className='navbar__select' defaultValue={localStorage.getItem('language')} onChange={(e) => {
                    changeLanguage(e.target.value)
                }}
                >
                    <option value='es'>🇪🇸</option>
                    <option value='en'>🇬🇧</option>
                </select>
                <div className='navbar__list'>
                    <ul className='navbar__list-ul'>
                        {items.map(({ name }, index) => (
                            <li key={index + ''} className='navbar__list-li' onClick={() => handlerClick(name)}>{t(name)}</li>
                        ))}
                    </ul>
                </div>
                <div className='navbar__dropdown'>
                    <i className={`fas  fa-bars ${dropDown ? 'navbar__burguer navbar__burguer--press' : 'navbar__burguer'}`} onClick={() => { setDropDown(!dropDown) }}></i>

                    {dropDown &&
                        <Fade right>
                            <div className='navbar__dropdown-ul'>
                                {items.map(({ name }, index) => (
                                    <div key={index + ''} className='navbar__dropdown-row' onClick={() => handlerClick(name)}>

                                        <div className='navbar__dropdown-li' >{t(name)}</div>
                                        <div className='navbar__dropdown-li'>+</div>

                                    </div>
                                ))}
                            </div>
                        </Fade>
                    }
                </div>
            </div>
        </nav >
    );
};
