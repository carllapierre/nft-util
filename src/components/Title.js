import styled from "styled-components";

const TitleCard = styled.div`
    font-size: 1.7rem;
    text-align: center;
    margin: 20px;
`

const Title = ({children}) => 
{
    return <TitleCard>
        {children}
    </TitleCard>
    
}

export default Title;