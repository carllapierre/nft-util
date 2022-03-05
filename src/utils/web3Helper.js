import { setAccount } from '../redux/reducers/web3Reducer'
import store from '../redux/store';
import configs from '../configs/vars';
import Web3 from 'web3';

export const connectAccount= () => {
    window.ethereum.request({method: 'eth_requestAccounts'}).then((result)=> {
        store.dispatch(setAccount(result))
        localStorage.setItem("account", result);
    })
}

export const disconnectAccount= () => {
    store.dispatch(setAccount(null))
    localStorage.removeItem("account")
}

export const getWeb3= () => {
    return new Web3(configs.web3.uri)
}