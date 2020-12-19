import React from 'react';

import { Container } from './styles';

const Education: React.FC = () => {
  return (
    <Container>
      <section id="education">
        <div>
          <h2>Education</h2>
          <div>
            <h3>Faculdade Nossa Senhora Aparecida</h3>
            <h4>technologist graduation</h4>
            <p>Analysis and systems development</p>
          </div>
          <div>
            <span>February 2016 - August 2018</span>
          </div>
        </div>

        <div>
          <h3>Rocketseat</h3>
          <h4>Developer Web Course LaunchBase</h4>
          <p>
            Successfully completed the LaunchBase class 3 bootcamp journey in
            the ecosystem of HTML, CSS and JavaScript technologies, with a
            estimated hourly of 50h obtaining utilization 9.0.
          </p>
        </div>
        <div>
          <span>February 2020 - August 2020</span>
        </div>
        <hr />
      </section>
    </Container>
  );
};

export default Education;
