import React from 'react'
import Wallet from '../content/svg/wallet.svg'
import Settings from '../content/svg/settings.svg'
import Twitter from '../content/svg/twitter.svg'
import { truncate } from '../utils/stringHelper'
import { connectAccount, disconnectAccount } from '../utils/web3Helper'
import { useSelector } from 'react-redux'

const NavBar = () => 
{
    const account = useSelector((state) => state.web3.account)

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

    return <div className="nav-container">
        <div className='nav-wrap'>
            <div className="nav">
                <div className='internal-links links'>
                    <a href='#'>
                        <span className='gradient-span' style={{fontWeight: '500'}}>DAPPER</span>
                    </a>
                    <a href='#'>About</a>
                    <a href='#'>Contact</a>
                </div>
                <div className='external-links links'>
                    <a href='https://twitter.com/0xWhiskyy' target='_blank' className="external-link gw-button">
                        <img alt='twitter' src={Twitter}/>
                        <span>Twitter</span>
                    </a>
                        {
                            account ? 
                            <button className='external-link gw-button ' onClick={handleWalletDisconnect}>
                                <img alt='setting' src={Settings}/>
                                <span>{truncate(account.toString(), 5, 2, 5)}</span>
                            </button> :
                            <button className='external-link gw-button ' onClick={handleWalletConnect}>
                                <img alt='wallet' src={Wallet}/>
                                <span>Connect</span>
                            </button>
                        }
                </div>
            </div>
        </div>
    </div>
    
}

export default NavBar;