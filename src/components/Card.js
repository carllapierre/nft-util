import { getWeb3 } from "../utils/web3Helper";
import tastyBonesABI from "../abis/tastyBonesABI.json"
import React from "react";
import styled from "styled-components";
import Food from '../content/svg/food.svg'

const TBoneCard = styled.div`
    max-width: 300px;
    padding: 25px;
    border-radius: 15px;
    text-align: center;
    font-family: 'gotham';

    transition: margin-top 0.2s;
    transition: width 0.2s;

    span {
        font-size: 1.3rem;
    }

    &:hover {
        cursor: pointer;
    }
`

const Avatar = styled.img`
    width: 100%;
    border-radius: 15px;
`

const BottomContainer = styled.div`
    display: flex; 
    flex-wrap: nowrap;
    justify-content: space-between;
    margin-top: 15px;
`


const colors = [
    ["#8AE0FB","#5A7BE2"],
    ["#B2FDC7","#58BA80"],
    ["#FBE780","#EF8E4D"],
    ["#F2A3D3","#ED5D8A"],
    ["#C5C5FB","#7E5AE0"]
]

const Card = ({web3, nftId, handleClick, loser}) => 
{
    const nftContract = new web3.eth.Contract(tastyBonesABI, '0x1b79c7832ed9358E024F9e46E9c8b6f56633691B')
    var [tBone, setTBone] = React.useState();
    var [hovering, setHovering] = React.useState();
    var [color, setColor] = React.useState(colors[Math.floor(Math.random()*colors.length)]);

    const onClick = (id) => {

        handleClick(id)
    }

    React.useEffect(() => {
        nftContract.methods.tokenURI(nftId).call(function (err, res) {
            if (err) {
              console.log("An error occured", err)
              return
            }

            fetch(res)
            .then(response => response.json())
            .then(
              (result) => {
                  console.log(result)
                  setTBone(result)
              },
              (error) => {
                console.log("An error occured", error)
              }
            )
          })
    }, []);

    return tBone ? 
        <TBoneCard onMouseEnter={()=> setHovering(true)} onMouseLeave={()=> setHovering(false)} onClick={()=>onClick(nftId)}  style={{
                backgroundColor: color[0],
                color: color[1],
                marginTop: hovering? '-5px': '0px',
                display: loser? 'none': null
            }}>
            <Avatar alt="bone" src={tBone.image}
                style={{
                    border: '3px solid ' + color[1],
                }}
            />
            <BottomContainer >
                <span>{tBone.name}</span>
            </BottomContainer>

        </TBoneCard > : null
    
}

export default Card;