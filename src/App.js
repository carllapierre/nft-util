import './App.css';
import { NavBar } from './components/components'
import React from 'react';
import { connectAccount } from './utils/web3Helper'
import { Provider } from 'react-redux'
import store from './redux/store'

function App() {
    return (
        <Provider store={store}>
            <Context>
                <NavBar/>
            </Context>
        </Provider>
    );
}

function Context({children}){

    React.useEffect(async () => {
        if (window.ethereum && localStorage.getItem("account"))
            connectAccount()
    }, []);

    return <>
        {children}
    </>
}

export default App;
