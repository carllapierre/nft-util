import React from 'react';
import styled from 'styled-components';

const CardStyled = styled.div`
    min-height: 100px;
    border: 1px solid #ddd;
    padding: 20px;
    border-radius: 13px;
    color: #8f9195;
    max-width: 180px;
    text-align: center;
`

const Card = ({children}) => 
{
    return <CardStyled >
        {children}
    </CardStyled>
    
}

export default Card;