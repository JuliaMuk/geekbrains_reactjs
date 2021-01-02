import React from 'react';
import PropTypes from 'prop-types';


import '../styles/Header.css';

export default class Header extends React.Component{
    static proptypes = {
        text: PropTypes.string.isRequired,
    };
    
    render () {
        return <header className={'header'}>
            <h1>{this.props.text}</h1>
        </header>
    }
}