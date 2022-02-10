import styled from "styled-components";

const Button = styled.button`
    cursor: pointer;
    border-radius: 20px;
    padding: 5px 10px 5px 10px;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    transition: all 1s ease;
    border: 2px double transparent;
    background-image: linear-gradient(${props => props.theme.palette.backgroundColorRGB}, ${props => props.theme.palette.backgroundColorRGB}), radial-gradient(circle at left top, rgb(218, 149, 1), rgb(217, 0, 192));
    background-origin: border-box;
    background-clip: padding-box, border-box;

    img{
        height: 20px;
        width: 20px;
        margin: 0px -2px -4px -2px;
        filter: invert(33%) sepia(6%) saturate(7385%) hue-rotate(318deg) brightness(96%)
      }
    span{
        margin-left: 5px;
        color: rgb(162 66 66);
      }

    &:hover {
        transition: all 0.5s ease;
        box-shadow: rgb(217, 0, 192) 0px 0px 30px -7px;
    }
      
`

export default ({children, icon, onClick}) => {
    return  <Button onClick={onClick}>
        {icon? <img alt='img' src={icon}/>: null}
        <span>{children}</span>
    </Button>
}