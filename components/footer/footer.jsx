import React from 'react';
import Link from '../link/link';
import Container from '../container/container';
import Icon from '../../assets/icon-square-small.svg';
import './footer-style';

export default (props) => {
  return (
    <footer className="footer">
      <Container className="footer__inner">
        <section className="footer__left">
          <Link className="footer__link" to="/guides/installation">Installation</Link>
          <Link className="footer__link" to="/guides/getting-started">Getting Started</Link>
          <Link className="footer__link" to="/documentation">Documentation</Link>
        </section>

        <section className="footer__middle">
          <Link to="/" className="footer__icon">
            <img src={ Icon } />
          </Link>
        </section>

        <section className="footer__right">
          <Link className="footer__link" to="/guides/contributing">Contributing</Link>
          <Link className="footer__link" to="//gitter.im/pyramidium/generator-bannertime">Gitter</Link>
          <Link className="footer__link" to="/license">License</Link>
        </section>
      </Container>
    </footer>
  );
};
