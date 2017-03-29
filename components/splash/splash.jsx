import React from 'react';
import Interactive from 'antwar-interactive';
import Container from '../container/container';
import SplashViz from '../splash-viz/splash-viz';
import './splash-style';
import '../splash-viz/splash-viz-style';

export default props => {
  const { page } = props;

  return (
    <div className="splash">
      <Interactive
        id="components/splash-viz/splash-viz.jsx"
        component={ SplashViz } />

      <div className="splash__section splash__section--dark">
        <Container>
          <div dangerouslySetInnerHTML={{
            __html: page.content
          }} />
        </Container>
      </div>
    </div>
  );
};
