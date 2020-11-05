import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { NavLink } from 'react-router-dom'
import { connect} from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase'


function Navbar(props) {
  const [sidebar, setSidebar] = useState(false);
  const { auth, profile } = props;
  const links = auth.uid ? <SignedInLinks profile={profile}/> : <SignedOutLinks />;
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div class='navbar'>
          <span class='SideMenu'>
            <Link to='#' className='menu-bars'>
              <FaIcons.FaBars onClick={showSidebar} />
            </Link>
            </span>
            <span class='UserNav'> { links } </span>
        </div>

        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
      auth: state.firebase.auth,
      profile: state.firebase.profile
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
      {collection: 'users'}
  ])
  )(Navbar)