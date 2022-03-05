import styled from "styled-components";
import FooterSVG from '../content/svg/footer.svg'

const Footer = styled.div`
    width: 100%;
    position: fixed; 
    bottom: -20px; 
    left: 0px; 
    opacity: 0.2;
`

export default () => {
    return  <Footer>
        <img alt='img' src={FooterSVG} style={{width: '100%'}}/>
    </Footer>
}