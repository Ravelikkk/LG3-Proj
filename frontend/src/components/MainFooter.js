import React from 'react';

import { AiFillGithub } from 'react-icons/ai';
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { IoLogoWhatsapp } from 'react-icons/io';
import { MdAlternateEmail } from 'react-icons/md';

import './MainFooter.css';

export default function MainFooter() {

    return (
        <div>
        <div className='footer-description'>
          <p>Código open source completo no github! ;D</p>
          <p>Redes sociais abaixo, apenas clique no Icon <span>✓</span></p>
        </div>
        <div className='footer-icons'>
          <div className='footer-icons--click'>
            <a href="https://www.github.com/WelBert-dev" target="_blank"><AiFillGithub /></a>
            <a href="https://web.facebook.com/wellison.bertelli.7" target="_blank"><AiFillFacebook /></a>
            <a href="https://www.linkedin.com/in/wellison-bertelli-2191ba204" target="_blank"><AiFillLinkedin /></a>
            <a href="https://www.instagram.com/lunatic_bertelli/" target="_blank"><AiFillInstagram /></a>
          </div>
          <div className='footer-icons--noClick'>
            <div>
              <IoLogoWhatsapp />
              <p>(11) 9 4298-9935</p>
            </div>
            <div>
              <MdAlternateEmail />
              <p>raverterelli@hotmail.com</p>
            </div>
          </div>
        </div>
        <div className='footer-copyright'>
            <h3>Copyright ©2022</h3>
            <h3>Licença: GPL v3.0</h3>
        </div>
      </div>
    )
};