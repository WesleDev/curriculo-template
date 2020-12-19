import React from 'react';

import { Container } from './styles';

const Interests: React.FC = () => {
  return (
    <Container>
      <section id="interests">
        <div>
          <h2>Interests</h2>
          <div>
            <p>
              In addition to being a web developer, I enjoy most of my time
              outdoors. Play football, cycling, hiking in the morning.
            </p>
            <p>
              When forced to stay indoors, I follow a series of sci-fi and
              fantasy films and television shows, part of my free time exploring
              the latest technological advances in the world of web front-end
              development.
            </p>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Interests;
