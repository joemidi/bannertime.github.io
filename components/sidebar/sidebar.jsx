import React, { Component } from 'react';
import SidebarItem from '../sidebar-item/sidebar-item';

export default class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fixed: false,
      availableHeight: null,
      maxWidth: null,
      adDistance: null
    };

    this._recalculate = this._recalculate.bind(this);
  }

  render() {
    const { sectionName, pages, currentPage } = this.props;
    const { fixed, availableHeight, maxWidth, adDistance } = this.state;
    const isGuides = sectionName === 'guides';

    return (
      <nav
        className="sidebar"
        ref={ ref => this._container = ref }
        style={{
          position: fixed ? 'fixed' : null,
          top: fixed ? 0 : null,
          width: fixed ? maxWidth : null,
          maxHeight: availableHeight
        }}>

        <div className="sidebar__inner">
          <SidebarItem
            url={ `/${sectionName}` }
            title="Introduction"
            currentPage= { currentPage }
          />

          {
            pages.map(({ url, title, anchors }, i) =>
              <SidebarItem
                key={ `sidebar-item-${i}` }
                index={i}
                url={ `/${url}` }
                title={ title }
                anchors={ anchors }
                currentPage= { currentPage }
                onToggle={ this._recalculate } />
            )
          }
        </div>

      </nav>
    );
  }

  componentDidMount() {
    setTimeout(
      this._recalculate,
      250
    );

    document.addEventListener(
      'scroll',
      this._recalculate
    );
  }

  componentWillUnmount() {
    document.removeEventListener(
      'scroll',
      this._recalculate
    );
  }

  /**
   * Re-calculate fixed state and position
   *
   */
  _recalculate() {
    const { scrollY, innerHeight } = window;
    const { scrollHeight } = document.body;
    const { offsetHeight: sidebarHeight } = this._container;
    const { offsetWidth: parentWidth, offsetHeight: parentHeight } = this._container.parentNode;
    const headerHeight = document.querySelector('header').offsetHeight;
    const footerHeight = document.querySelector('footer').offsetHeight;
    const distToBottom = scrollHeight - scrollY - innerHeight;

    // Calculate the space that the footer and header are actually occupying
    const headerSpace = scrollY > headerHeight ? 0 : headerHeight - scrollY;
    const footerSpace = distToBottom > footerHeight ? 0 : footerHeight - distToBottom;

    this.setState({
      fixed: scrollY >= headerHeight && sidebarHeight < parentHeight,
      availableHeight: innerHeight - headerSpace - footerSpace,
      maxWidth: parentWidth,
      adDistance: scrollY < headerHeight ? headerHeight - scrollY : 0
    });
  }
}
