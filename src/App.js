import './App.css';
import styled from 'styled-components';
import { GlobalStyle, Input, Container, Title, MainContainer, Fireworks} from './components/components'
import React from 'react';
import { Provider } from 'react-redux'
import store from './redux/store'
import Footer from './components/Footer';
import { getWeb3 } from './utils/web3Helper';
import { MoralisProvider, useNFTBalances, useEnsName as getENSAddress } from "react-moralis";
import { getDistinctCollections, getAllNFTS } from './utils/moralisHelper';
import { getSlug, getStats, getProfile } from './utils/openseaHelper';
import AnimatedNumber from "animated-number-react";
import configs from './configs/vars';

const TOKEN_SIZE = '15px'

function App() {

    return (
        <MoralisProvider appId={configs.moralis.appId} serverUrl={configs.moralis.server}>
            <Provider store={store}>
                <Context/>
            </Provider>
        </MoralisProvider>

    );
}

function Context(){

    const duration = 300;
    const [web3, setWeb3] = React.useState()
    const [input, setInput] = React.useState("")
    const [wallet, _setWallet] = React.useState("")
    const [display, setDisplay] = React.useState("")
    const [avatar, setAvatar] = React.useState()
    const [stats, setStats] = React.useState()
    const [loading, setLoading] = React.useState(0)
    const [isFireworking, setFireworking] = React.useState(false)
    const { getNFTBalances } = useNFTBalances();

    React.useEffect(() => {
        setWeb3(getWeb3())
    }, []);

    const onInputChange = async (e) => {
        setInput(e);
        if(web3?.utils.isAddress(e)){
            setWallet(e);
            //has ENS?
            setDisplay(e)
        }
        let ensCheck = e.split('.');
        if(ensCheck.length > 1){
            if(ensCheck[ensCheck.length-1].toLowerCase() === 'eth'){
                let address = await web3.eth.ens.getAddress(e)
                if(address) {
                    setWallet(address);
                    setDisplay(e)
                }
            }
        }

    }

    const setWallet = async (e) => {
        //get stuff from openSea
        _setWallet(e);

        let newStats = {
            tokens:[],
            totalCounted:0,
            totalNfts:0,
            totalUsd:0
        }
        setLoading(0)
        setStats({...stats, ...newStats});
        let profile = await getProfile(e);
        let nfts = await getAllNFTS(getNFTBalances, e);
        setAvatar(profile?.account?.profile_img_url)

        if(nfts){
            var disctinctCollections = getDistinctCollections(nfts)
            newStats.totalNfts = disctinctCollections.total;
            for(let collection of disctinctCollections.distinct){
                var slug = await getSlug(collection.token);
                if(slug)
                {
                    let results = await getStats(slug)
                    if(results?.symbol && results?.usd > 0 && results?.floorPrice > 0)
                    {
                        let totalFloorPrice = results.floorPrice * collection.total;
                        let tokenIndex = newStats.tokens.findIndex(x=>x.symbol == results.symbol)
                        if(tokenIndex == -1)
                        { //add
                            newStats.tokens.push({
                                symbol: results.symbol,
                                total: totalFloorPrice,
                                img: results.img
                            })
                        }else
                        { //update
                            newStats.tokens[tokenIndex].total = newStats.tokens[tokenIndex].total + totalFloorPrice
                        }
                        newStats.totalUsd = newStats.totalUsd + (totalFloorPrice*results.usd)
                    }
                }
                newStats.totalCounted = newStats.totalCounted+collection.total;
                setStats({...stats, ...newStats});
                setLoading((newStats?.totalCounted ?? 0)/(newStats?.totalNfts ?? 0)*100)
            }
        }else
            alert('An unknown error occured. ngmi.')
  
        setFireworking(true)
        setFireworking(false)  
    }

    let formatValue = (value) => value.toFixed(2);
    return <>
                <GlobalStyle/>
                <MainContainer loading={loading} avatar={avatar} walletInput={<Input
                                placeholder='Wallet address or ENS...'
                                type="text" 
                                onChange={(e)=> onInputChange(e.target.value)}
                                value={input}
                            />}>
                        <div>
                            Wallet: {display}
                        </div>
                        {
                            stats?.tokens.map(token => {
                                return <div key={token.symbol}>
                                    Total NFTs in {token.symbol}: <AnimatedNumber duration={duration} value={token.total} formatValue={formatValue}/>
                                    <span><img style={{width: TOKEN_SIZE, height: TOKEN_SIZE, marginBottom: '-2px', marginLeft: '3px'}} src={token.img} alt={token.symbol}/></span>
                                </div>
                            })
                        }
                        <div>
                            Total in USD: $<AnimatedNumber duration={duration} value={stats?.totalUsd ?? 0} formatValue={formatValue}/>
                        </div>
                        {/* <div>
                            {`${stats?.totalCounted ?? 0}/${stats?.totalNfts ?? 0}`}
                        </div>                         */}
                </MainContainer>
                <Fireworks isFireworking={isFireworking}/>
            </>

}

export default App;
