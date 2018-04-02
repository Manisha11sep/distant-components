import { createStore } from 'redux'

const reducer = storeState => storeState;


const initalState ={
    loginName: '',
    isCreditCardHolder :'true'
}

const store = createStore(reducer, initalState);

export store;