import React from 'react';
import PropTypes from 'prop-types';

import {TextField} from 'material-ui';
import Button from '@material-ui/core/Button';

export default class SendMessage extends React.Component{

    state = {
        message: ''
    };

    static propTypes ={
        send: PropTypes.func.isRequired,
        activeChat: PropTypes.number
    };

    send = () => {
        this.props.send({message: this.state.message, author: 'me', id: this.props.activeChat });
        this.setState({message:''});
    };

    handleChange = event => this.setState({message:event.target.value });
    

    render () {
        return <div>            
            <TextField value = {this.state.message} 
                        onChange = {this.handleChange} 
                        fullWidth = {true}
                        multiLine
                        id = {'send_mes'}/>
            <Button variant = "contained"  onClick = {this.send}>
                Отправить
            </Button>
        </div>
    }

}