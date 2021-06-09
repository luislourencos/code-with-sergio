import React, { useRef, useState } from 'react';
import { Navbar } from '../components/Navbar'
import { Contact } from '../components/Contact'

import { Skills } from '../components/Skills';
import { Experience } from '../components/Experience';
import { Portfolio } from '../components/Portfolio';
import { Header } from '../components/Header/Header';

import './styles.css';
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
    <div ref={top}>
      <Navbar onClick={handlerNavbar} closeBurguer={closeBurguer} />
      <div className="body" ref={profile}>
        <Header />
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


