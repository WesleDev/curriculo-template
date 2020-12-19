import React from 'react';
import { FaGithubSquare, FaLinkedin, FaFacebookSquare } from 'react-icons/fa';
import Sidebar from '../../components/Sidebar';
import Experience from '../Experience/index';
import Education from '../Education/index';
import Skills from '../Skills/index';
import Interests from '../Interests/index';

import { Landing, Right } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <Landing>
        <Sidebar />
        <Right>
          <section id="main">
            <h1>
              Wesle <span>Leal</span>
            </h1>
            <h3>
              Rua Projetada A, 191, Jiquiriçá, BA - (75) 9 88722791 -
              <a href="mailto:teste"> Wesle.profissional@gmail.com</a>
            </h3>
            <p>
              I am experienced in leveraging agile frameworks to provide a
              robust synopsis for high level overviews. Iterative approaches to
              corporate strategy foster collaborative thinking to further the
              overall value proposition.
            </p>
            <div>
              <div>
                <a href="https://github.com/WesleDev" target="_blank">
                  <FaGithubSquare size={80} />
                </a>
              </div>
              <div>
                <a
                  href="https://www.linkedin.com/in/wesleleal/"
                  target="_blank"
                >
                  <FaLinkedin size={80} />
                </a>
              </div>
              <div>
                <a href="https://www.facebook.com/wesle.leal/" target="_blank">
                  <FaFacebookSquare size={80} />
                </a>
              </div>
            </div>
          </section>
          <hr />
          <Experience />
          <Education />
          <Skills />
          <Interests />
        </Right>
      </Landing>
    </>
  );
};

export default Dashboard;
