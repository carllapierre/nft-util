import React from 'react';
import styled from 'styled-components';
import EmptyAvatar from '../content/images/empty.png'
import Twitter from '../content/svg/twitter.svg'
import Github from '../content/svg/github.svg'

const Inner = styled.div`
    background-color: #fff;
    border-radius: 12px;
    margin-top: 5%;
    box-shadow: 15px 11px 19px 8px #88888814;
`
const MainContainer = styled.div`
    margin: 0 auto;
    max-width: 860px;
    padding: 20px;
    margin-bottom: 300px;
`

const Header = styled.div`
    padding: 20px;
    height: 60px;
    border-bottom: 3px solid #ddd
`
const Body = styled.div`
    margin-top: 15px;
    padding: 52px;
    min-height: 200px;
`


const Avatar = styled.img`
    width: 110px;
    position: relative;
    border: 3px solid #ddd;
    border-radius: 59px;
    margin-left: 3%;
    margin-top: 2%;
`
const Loader = styled.div`
    color: #cdcbcb;
    /* margin-top: 10px; */
    padding-top: 43px;
    font-size: 14px;
`

const TopBar = styled.div`
    height: 34px;
//    border-bottom: 3px solid #ddd;
    background-image: linear-gradient(to right top, #9abef5, #90baf4, #85b6f3, #7ab2f1, #6daef0);
    padding: 10px;
    border-radius: 12px 12px 0px 0px;
`
const Title = styled.div`
    color: white;
    font-size: 28px;
    margin-left: 4px;
    float:left;
`

const Footer = styled.div`
    min-height: 40px;
    background-image: linear-gradient(to right top, #9abef5, #90baf4, #85b6f3, #7ab2f1, #6daef0);
    padding: 10px;
    border-radius: 0px 0px 12px 12px;
    display: flex;
    flex-wrap: nowrap;
    justify-content: flex-end;
    gap: 10px;
`

const Icon = styled.img`
    height: 37px;
    filter: invert(100%) sepia(93%) saturate(0%) hue-rotate(201deg) brightness(106%) contrast(106%);
    &:hover{
        cursor: pointer;
    }
`

const LoadingBarOutter = styled.div`
    width: 100%;
    height: 5px;
    background-color: #fff;
`

const LoadingBarInner = styled.div`
    height: 5px;
    background-color: #c8d1ff;
    transition: width 1s ease-in-out;
`

const Container = ({children, walletInput, avatar, loading}) => 
{
    return <MainContainer >
        <Inner>
            <TopBar>
                <Title>NFTUTIL</Title>
                {walletInput}
            </TopBar>
            <LoadingBarOutter>
                <LoadingBarInner style={{width: loading + '%'}}/>
            </LoadingBarOutter>
            <Header>
                 <Avatar src={avatar ?? EmptyAvatar}/>
                {/*<TopBar>
                    {walletInput}
                    {loading? <Loader>{loading}</Loader>:null}
                </TopBar> */}
            </Header>
            <Body>
                {children}
            </Body>
            <Footer>
                <Icon src={Twitter} alt='Twitter' onClick={()=> window.open('https://twitter.com/0xWhiskyy')}/>
                <Icon src={Github} alt='Github' onClick={()=> window.open('https://github.com/carllapierre')}/>                
            </Footer>
        </Inner>
    </MainContainer>
    
}

export default Container;