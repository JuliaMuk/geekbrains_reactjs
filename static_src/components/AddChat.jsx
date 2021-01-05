import React from 'react';
import PropTypes from 'prop-types';

import {TextField} from 'material-ui';
import Button from '@material-ui/core/Button';

export default class AddChat extends React.Component{
    state = {
        nameChat: ''
    };

    static propTypes ={
        add: PropTypes.func.isRequired,
        activeChat: PropTypes.number
    };

    add = () => {
        this.props.add(this.state.nameChat);
        this.setState({nameChat:''});
    };

    handleChange = event => this.setState({nameChat:event.target.value });
    

    render () {
        return <div>            
            <TextField value = {this.state.nameChat} 
                        onChange = {this.handleChange} 
                        fullWidth = {true}
                        id = {'add_chat'}/>
            <Button variant = "contained"  onClick = {this.add}>
                Создать чат
            </Button>
        </div>
    }

}