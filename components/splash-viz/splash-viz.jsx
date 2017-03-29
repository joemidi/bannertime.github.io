import React, { Component } from 'react';

import Flow from '../../assets/bannertime-flow.gif';

export default class SplashViz extends Component {
  render() {
    return (
      <section className="splash-viz">
        <div className="container splash-viz__flow">
          <img src={ Flow }/>
        </div>
      </section>
    );
  }
}
