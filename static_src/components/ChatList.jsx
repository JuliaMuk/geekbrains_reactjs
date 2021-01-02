import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem, { ListItemProps } from '@material-ui/core/ListItem';

import ListItemText from '@material-ui/core/ListItemText';

import PropTypes from 'prop-types';

import '../styles/ChatList.css';

export default class Header extends React.Component{
    static proptypes = {
        chats: PropTypes.array
    };

    render () {
        return <div className={'chat_list'}>
            <List component="nav" aria-label="main mailbox folders">   
                {this.props.chats.map((number,id) =>
                      <ListItem button>
                      <ListItemText primary={number} />
                  </ListItem>
                )} 
            </List>
        </div>;
    }
}