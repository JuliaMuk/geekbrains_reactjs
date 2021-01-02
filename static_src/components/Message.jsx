import React from 'react';

import PropTypes from 'prop-types';
import styles from '../styles/Message.js';

export default class Message extends React.Component{
    static proptypes = {
        message: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
    };
    

    render () {
        console.log(this.props.key)
        return <div style={{...styles.message, alignSelf: this.props.author==='robot' ? 'flex-end' :'flex-start'}}>
            <div> {this.props.message}</div>
            <div style={styles.author}>{this.props.author}</div>
        </div>;
    }
 };