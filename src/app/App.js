import React, { useRef, useState } from 'react';
import { Navbar } from '../components/Navbar'
import { Contact } from '../components/Contact'
import { Profile } from '../components/Profile';
import background from '../img/background-image.png'
import './styles.sass';
import { Skills } from '../components/Skills/Skills';

export const App = () => {
  const [closeBurguer, setCloseBurguer] = useState(false)
  const top = useRef(null)
  const profile = useRef(null)
  const skills = useRef(null)
  const experience = useRef(null)
  const portofolio = useRef(null)
  const contact = useRef(null)


  const handlerNavbar = (value) => {
    switch (value) {
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
        <header className='app__header'>
          <h1 className='app__title'>Web Developer</h1>
          <img src={background} alt='background' className='app__background' />

        </header>
        <i className="fas fa-arrow-alt-circle-up " onClick={() => handlerNavbar('top')}></i>


        <Profile divRef={profile} />
        <Skills divRef={skills} />


      </div>
      <Contact divRef={contact} />
    </div>
  );
}


