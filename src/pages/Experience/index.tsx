import React from 'react';

import { Container } from './styles';

const Experience: React.FC = () => {
  return (
    <Container>
      <section id="experience">
        <div>
          <h2>Experience</h2>
          <div>
            <h3>IT Assistant</h3>
            <h4>Utildrogas - Distribuidora de Medicamentos</h4>
            <p>
              Support the user in the solution of incidents and problems,
              formatting notebooks and computers, installing printers, programs,
              purchasing parts Support to company users and branches through
              remote access. <br />
            </p>
          </div>
          <div>
            <span>December 2017 - January 2018</span>
          </div>

          <div>
            <h3>Junior Web Developer</h3>
            <h4>Quadros.io</h4>
            <p>
              Develop Software solutions with the best web technologies, we
              develop on responsive websites with surprising designs, which
              build your companys visual identity with modernity and fluidity.
              <br />
              <br />
            </p>
          </div>
          <div>
            <span>February 2019 - June 2020</span>
          </div>
        </div>
        <hr />
      </section>
    </Container>
  );
};

export default Experience;
