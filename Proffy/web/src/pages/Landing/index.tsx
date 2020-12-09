import React,{ useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';
import studyImg from '../../assets/images/icons/study.svg';
import giveClassIcons from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import './styles.css';
import api from '../../services/api';

export default function Landing() {
  const [connections, setConnections] = useState('');

  useEffect(() => {
      async function handleConnections() {
        const response = await api.get('/connections');

        const { total } = response.data;

        setConnections(total);
      }

      handleConnections();
  },[]);

  return(
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logoImg} alt="Proffy" />
          <h2> Sua plataforma de estudos online.</h2>
        </div>

        <img 
          src={landingImg} 
          alt="Plataforma de estudos" 
          className="hero-image"
        />

        <div className="buttons-container">
          <Link to="/study" className="study">
          <img src={studyImg} alt="Estudar" />
           Estudar
          </Link>

          <Link to="/give-classes" className="give-classes">
          <img src={giveClassIcons} alt="Dar aulas" />
            Dar aulas
          </Link>
        </div>

        <span className="total-connections">
          Total de {connections} conexões já realizadas 
          <img src={purpleHeartIcon} alt="Coração roxo" />
        </span>
      </div>
    </div>
  );
}