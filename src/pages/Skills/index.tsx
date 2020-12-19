import React from 'react';
import {
  FaHtml5,
  FaCss3,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaNpm,
} from 'react-icons/fa';

import { Container } from './styles';

const Skills: React.FC = () => {
  return (
    <Container>
      <section id="skills">
        <div>
          <h2>Skills</h2>
          <div>
            <h4>PROGRAMMING LANGUAGES & TOOLS</h4>
            <div>
              <ul>
                <li>
                  <FaHtml5 size={48} />
                </li>
                <li>
                  <FaCss3 size={48} />
                </li>
                <li>
                  <FaJsSquare size={48} />
                </li>
                <li>
                  <FaReact size={48} />
                </li>
                <li>
                  <FaNodeJs size={48} />
                </li>
                <li>
                  <FaNpm size={48} />
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr />
      </section>
    </Container>
  );
};

export default Skills;
