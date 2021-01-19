import update from 'react-addons-update';
import { SEND_MESSAGE } from '../actions/messageActions';
import { ADD_CHAT } from "../actions/chatActions";

const initialStore = {
   user: {
           'name': 'Имя Фамилия1',
           'mail': 'mail@mail1.ru'
       },
};


export default function profileReducer(store = initialStore, action) {   
    return store;
   
}