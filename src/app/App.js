import React, { useRef, useState } from 'react';
import { Navbar } from '../components/Navbar'
import { Contact } from '../components/Contact'
import { Profile } from '../components/Profile';

import { Skills } from '../components/Skills';
import { Experience } from '../components/Experience';
import { Portfolio } from '../components/Portfolio';
import { Header } from '../components/Header/Header';
import background from '../img/background-image.png'
import './styles.sass';
import { useTranslation } from 'react-i18next';

export const App = () => {
  const { t } = useTranslation()
  const [closeBurguer, setCloseBurguer] = useState(false)
  const top = useRef(null)
  const profile = useRef(null)
  const skills = useRef(null)
  const experience = useRef(null)
  const portofolio = useRef(null)
  const contact = useRef(null)


  const handlerNavbar = (value) => {
    switch (value) {
      case 'top':
        top.current && top.current.scrollIntoView({ behavior: 'smooth' })
        break;
      case 'navbar.profile':
        profile.current && profile.current.scrollIntoView({ behavior: 'smooth' })
        break;
      case 'navbar.skills':
        skills.current && skills.current.scrollIntoView({ behavior: 'smooth' })
        break;
      case 'navbar.experience':
        experience.current && experience.current.scrollIntoView({ behavior: 'smooth' })
        break;
      case 'navbar.portfolio':
        portofolio.current && portofolio.current.scrollIntoView({ behavior: 'smooth' })
        break;
      case 'navbar.contact':
        contact.current && contact.current.scrollIntoView({ behavior: 'smooth' })
        break;
      default:
        break;
    }
  }

  return (
    <div className="app" ref={top}>
      <Navbar onClick={handlerNavbar} closeBurguer={closeBurguer} />
      <div className='app__body' onClick={() => setCloseBurguer(true)}>
        <Header title={t('header.title')} description={t('header.description')} backgroundImage={background} />
        <div ref={profile}></div>
        <Profile />
        <div ref={skills}></div>
        <Skills />
        <div ref={experience}></div>
        <Experience />
        <div ref={portofolio}></div>
        <Portfolio />
        <i className="fas fa-arrow-alt-circle-up " onClick={() => handlerNavbar('top')}></i>
      </div>
      <Contact divRef={contact} />
    </div>
  );
}


