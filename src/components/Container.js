import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
`

const Container = ({children}) => 
{
    return <CardContainer >
        {children}
    </CardContainer>
    
}

export default Container;