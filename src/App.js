import './App.css';
import { NavBar , GlobalStyle} from './components/components'
import React from 'react';
import { connectAccount } from './utils/web3Helper'
import { Provider } from 'react-redux'
import store from './redux/store'
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import { getTheme } from './utils/themeHelper';

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

    const theme = getTheme( useSelector((state) => state.theme.value) )
    
    return <ThemeProvider theme={theme}>
                <GlobalStyle/>
                {children}
            </ThemeProvider>
      
    
}

export default App;
