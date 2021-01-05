import React from 'react';
import PropTypes from 'prop-types';


import '../styles/Header.css';
import { Link } from 'react-router-dom';

export default class Header extends React.Component{
    static proptypes = {
        text: PropTypes.string.isRequired,
    };
    
    render () {
        return <header className={'header'}>
            <h1>{this.props.text}</h1>
            <Link to='/profile' className={'link'}>Профиль</Link>
        </header>
    }
}