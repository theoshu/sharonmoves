import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import github from '../img/github-icon.svg';
import logo from '../img/logo.svg';
import './all.sass';

const Navbar = () => (
  <nav className='navbar is-transparent'>
    <div className='container'>
      <div className='navbar-brand'>
        <Link className='navbar-item' to='/'>
          <figure className='image'>
            <img alt='Kaldi' src={logo} style={{ width: '256px' }} />
          </figure>
        </Link>
      </div>
      <div className='navbar-start'>
        <Link className='navbar-item' to='/about'>
          About
        </Link>
        <Link className='navbar-item' to='/why-pilates'>
          Why Pilates
        </Link>
        <Link className='navbar-item' to='/products'>
          Products
        </Link>
      </div>
      <div className='navbar-end'>
        <Link className='navbar-item' to='/contact'>
          Contact
        </Link>
      </div>
    </div>
  </nav>
);

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title='Home | Sharon Moves, Personal Trainer | Houston, Texas' />
    <link href='https://fonts.googleapis.com/css?family=Barlow+Condensed:500|Barlow:500,700' rel='stylesheet'/>
    <Navbar />
    <div>{children()}</div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
