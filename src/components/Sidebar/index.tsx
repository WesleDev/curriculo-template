import React from 'react';
import { Link } from 'react-scroll';

import luffy from '../../assets/avatar.png';

import { Container } from './styles';

const Sidebar: React.FC = () => {
  function handleSetActive(): void {
    console.log('teste');
  }
  return (
    <Container>
      <div>
        <img src={luffy} alt="avatar" />
        <ul>
          <li className="nav-item">
            <Link
              to="main"
              spy
              smooth
              offset={-78}
              duration={500}
              activeClass="active"
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="experience"
              spy
              smooth
              offset={-194}
              duration={500}
              activeClass="active"
            >
              Experience
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="education"
              spy
              smooth
              offset={-78}
              duration={500}
              activeClass="active"
            >
              Education
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="skills"
              spy
              smooth
              offset={-178}
              duration={500}
              activeClass="active"
            >
              Skills
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="interests"
              spy
              smooth
              offset={-170}
              duration={500}
              activeClass="active"
            >
              Interests
            </Link>
          </li>
        </ul>
      </div>
    </Container>
  );
};

export default Sidebar;
