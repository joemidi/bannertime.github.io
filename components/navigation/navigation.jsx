import React, { Component } from 'react';
import Link from '../link/link';
import Container from '../container/container';
import Logo from '../logo/logo';

const Sections = [
  {
    title: 'Guides',
    url: 'guides',
  },
  {
    title: 'Documentation',
    url: 'documentation',
  },
];

export default class Navigation extends Component {
  render() {
    const { pageUrl = '' } = this.props;

    return (
      <header className="navigation">
        <Container className="navigation__inner">
          <div className="navigation__mobile" onClick={ this._toggleSidebar }>
            <i className="icon-menu" />
          </div>

          <Link className="navigation__logo" to="/">
            <Logo light={ true } />
          </Link>

          <nav className="navigation__links">
            {
              Sections.map(section => {
                const active = this._isActive(section);
                const activeMod = active ? 'navigation__link--active' : '';

                return (
                  <Link
                    key={ `navigation__link-${section.title}` }
                    className={ `navigation__link ${activeMod}` }
                    to={ `/${section.url}` }>
                    { section.title }
                  </Link>
                );
              })
            }
          </nav>

          <Link
            className="navigation__icon"
            title="GitHub Repository"
            to="//github.com/pyramidium/generator-bannertime">
            <i className="sidecar__icon icon-github" />
          </Link>
        </Container>

        {
          Sections.filter(section => this._isActive(section) && section.children).map(section => {
            return (
              <div className="navigation__bottom" key={ section.title }>
                <Container className="navigation__inner">
                  {
                    section.children.map(child => {
                      const activeMod = this._isActive(child) ? 'navigation__child--active' : '';

                      return (
                        <Link
                          key={ `navigation__child-${child.title}` }
                          className={ `navigation__child ${activeMod}` }
                          to={ `/${child.url}` }>
                          { child.title }
                        </Link>
                      );
                    })
                  }
                </Container>
              </div>
            );
          })
        }
      </header>
    );
  }

  /**
   * Check if section is active
   *
   * @param {object} section - An object describing the section
   * @return {bool} - Whether or not the given section is active
   */
  _isActive(section) {
    const { pageUrl = '' } = this.props;

    if (section.children) {
      return section.children.some(child => pageUrl.includes(`${child.url}/`));

    } else return pageUrl.includes(`${section.url}/`);
  }

  /**
   * Toggle the SidebarMobile component
   *
   * @param {object} e - Native click event
   */
  _toggleSidebar(e) {
    const sidebar = document.querySelector('.sidebar-mobile');
    const modifier = 'sidebar-mobile--visible';

    sidebar.classList.toggle(modifier);
  }
}
