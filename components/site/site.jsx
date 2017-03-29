import React from 'react';
import Interactive from 'antwar-interactive';
import Navigation from '../navigation/navigation';
import Footer from '../footer/footer';
import SidebarMobile from '../sidebar-mobile/sidebar-mobile';
import './site-style';

// Load base styling
import '../../styles';
import '../../styles/icon.font.js';
import '../container/container-style.scss';
import '../navigation/navigation-style';
import '../sidebar-mobile/sidebar-mobile-style';
import '../sidebar-item/sidebar-item-style';
import '../logo/logo-style';

export default props => {
  // Retrieve section data
  const sections = props.children.props.section.all()
    .map(({ title, url, pages }) => ({
      title,
      url,
      pages: pages.map(({ title, url }) => ({
        title: title || url,
        url
      }))
    }));

  const rootIndex = sections.findIndex(section => section.title === 'Bannertime');
  const rootSection = sections.splice(rootIndex, 1)[0];
  rootSection.title = 'Other';
  sections.push(rootSection);

  return (
    <div id="site" className="site">
      <Interactive
        id="components/navigation/navigation.jsx"
        component={ Navigation }
        sections={ sections }
        pageUrl={ props.children.props.page.url } />

      <Interactive
        id="components/sidebar-mobile/sidebar-mobile.jsx"
        component={ SidebarMobile }
        sections={ sections } />

      { props.children }
      <Footer />
    </div>
  );
};
