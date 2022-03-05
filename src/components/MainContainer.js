import React from 'react';
import styled from 'styled-components';
import EmptyAvatar from '../content/images/empty.png'

const Inner = styled.div`
    background-color: #fff;
    border-radius: 12px;
    margin-top: 8%;
    min-height: 400px;
    border: 3px solid #ddd
`
const MainContainer = styled.div`
    margin: 0 auto;
    max-width: 860px;
    padding: 20px;
`

const Header = styled.div`
    padding: 20px;
    height: 60px;
    border-bottom: 3px solid #ddd
`
const Body = styled.div`
    margin-top: 15px;
    padding: 52px;
`


const Avatar = styled.img`
    width: 110px;
    position: relative;
    border: 3px solid #ddd;
    border-radius: 59px;
    margin-left: 3%;
    margin-top: 2%;
`

const TopBar = styled.div`
    position: relative;
    float: right;
`
const Loader = styled.div`
    color: #cdcbcb;
    /* margin-top: 10px; */
    padding-top: 43px;
    font-size: 14px;
`


const Container = ({children, walletInput, avatar, loading}) => 
{
    return <MainContainer >
        <Inner>
            <Header>
                <Avatar src={avatar ?? EmptyAvatar}/>
                <TopBar>
                    {walletInput}
                    {loading? <Loader>{loading}</Loader>:null}
                </TopBar>
            </Header>
            <Body>
                {children}
            </Body>
        </Inner>
    </MainContainer>
    
}

export default Container;