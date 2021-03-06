import React from 'react';
import styled from 'styled-components';
import EmptyAvatar from '../content/images/empty.png'
import Twitter from '../content/svg/twitter.svg'
import Github from '../content/svg/github.svg'
import Heart from '../content/svg/heart.svg'

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
    padding: 20px 20px 5px 20px;
    height: 80px;
    border-bottom: 3px solid #ddd
`
const Body = styled.div`
    margin-top: 15px;
    padding: 52px;
    min-height: 200px;
`


const Avatar = styled.img`

    background-color: #fff;
    width: 110px;
    height: 110px;
    position: relative;
    border: 3px solid #ddd;
    border-radius: 59px;
    margin-right: 7px;
    margin-left: 12%;
    margin-top: 4%;
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

const DonateInput = styled.input`
    border-radius: 0px 7px 7px 0px;
    border-right: 1px;
    border-top: 1px;
    border-left: 0px;
    border-bottom: 1px;
    border-style: solid;
    border-color: #ddd;

    padding: 10px;
    font-size: 14px;
    color: #fff;
    text-overflow: ellipsis;
    width: 100%;


    &:hover{
        cursor: pointer;
    }
`
const DonateIcon= styled.div`

    border-radius: 7px 0px 0px 7px;
    border: 1px solid #ddd;
    padding: 8px 9px 5px 9px;
    width: 20px;

    img{
        height: 20px;
        filter: invert(100%) sepia(93%) saturate(0%) hue-rotate(201deg) brightness(106%) contrast(106%);
    }

    &:hover{
        cursor: pointer;
    }
`

const HeaderContent = styled.div`
    display: flex;
    gap: 20px;
    height: 100%;
`

const SocialContainer = styled.div`
    overflow: hidden;
    display: flex;
    height: 100%;
    width: 100%;
    align-items: flex-end;
    gap: 10px;
`

const SocialItem = styled.div`

`

const DonateContainer = styled.div`
    display: flex;
    margin-right: 10px;
`

const Container = ({children, walletInput, loading, profile}) => 
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
                 <HeaderContent>
                    <div>
                        <Avatar src={profile?.avatar ?? EmptyAvatar}/>
                    </div>
                    <SocialContainer>
                        <SocialItem>
                            <div style={{fontSize: '21px',color: 'rgb(139 184 243)', fontFamily: '\'Space Mono\', monospace'}}>{profile?.nametag}</div>
                            <div style={{fontSize: '21px',color: 'rgb(143 143 143)'}}>{profile?.username}</div>
                        </SocialItem>
                    </SocialContainer>
                 </HeaderContent>
            </Header>
            <Body>
                {children}
            </Body>
            <Footer>
                <DonateContainer onClick={() => {
                        navigator.clipboard.writeText('0x079CbeAd4cfb77251261d853A3880859E79f1D14')
                    }}>
                    <DonateIcon>
                        <img src={Heart} alt='copy'/>
                    </DonateIcon>
                    <DonateInput disabled value={'0x079CbeAd4cfb77251261d853A3880859E79f1D14'}/>
                </DonateContainer>
                <Icon src={Twitter} alt='Twitter' onClick={()=> window.open('https://twitter.com/0xWhiskyy')}/>
                <Icon src={Github} alt='Github' onClick={()=> window.open('https://github.com/0xCarll/nft-util')}/>                
            </Footer>
        </Inner>
    </MainContainer>
    
}

export default Container;