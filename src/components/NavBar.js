import React from 'react'
import Wallet from '../content/svg/wallet.svg'
import Settings from '../content/svg/settings.svg'
import Twitter from '../content/svg/twitter.svg'
import { truncate } from '../utils/stringHelper'
import { connectAccount, disconnectAccount } from '../utils/web3Helper'
import { useSelector } from 'react-redux'
import { setTheme } from '../utils/themeHelper'
import styled from 'styled-components'
import { Button } from './components'

const NavContainer = styled.div`
    width: 100%;
    position: fixed;
    top: 0px;
`
const Nav = styled.div`
    background-color: ${props => props.theme.palette.backgroundColor};
    padding: 15px 25px 15px 25px;
    display: flex;
    justify-content: space-between;
    box-shadow: ${props => props.theme.palette.boxShadow};

    .links {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        gap: 20px;
        transition: gap 0.3s;
      }

    .external-links{
        justify-content: flex-end;
    }

    .internal-links{
        padding-top: 7px;
        justify-content: flex-start;
    }

    a {
        text-decoration: none;
        color: rgb(160 160 160);
        max-height: 25px;
    }

    @media screen and (max-width: 700px) {
        .links{
          gap: 10px;
        }
        span{
          display: none;
        }
    }
`

const NavBar = () => 
{
    const account = useSelector((state) => state.web3.account)
    const theme = useSelector((state) => state.theme.value)

    const handleWalletConnect = () => {
        if (window.ethereum){
            connectAccount()
        }else
        {
            alert("Pleace install metamask")
        }
    }
    const handleWalletDisconnect = () => {
        disconnectAccount()
    }
    const toggleTheme = () => {
        setTheme(theme == 'default'? 'dark':'default')
    }

    return <NavContainer>
            <Nav>
                <div className='internal-links links'>
                    <a href='#'>
                        <span className='gradient-span' style={{fontWeight: '500'}}>DAPPER</span>
                    </a>
                    <a href='#'>About</a>
                    <a href='#' onClick={toggleTheme}>Toggle Theme</a>
                </div>
                <div className='external-links links'>
                    <Button onClick={() => alert('redirect')} icon={Twitter}>
                        Twitter
                    </Button>
                        {
                            account ? 
                            <Button onClick={handleWalletDisconnect} icon={Settings}>
                                {truncate(account.toString(), 5, 2, 5)}
                            </Button> :
                            <Button onClick={handleWalletConnect} icon={Wallet}>
                                Connect
                            </Button>
                        }
                </div>
            </Nav>
    </NavContainer>
    
}

export default NavBar;