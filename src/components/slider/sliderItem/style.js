import styled from "styled-components";
export const SliderItemWrapper = styled.div`    
    background-image: url(${props=> props.src});
    background-size: 450px;
    width: 350px;
    height: 300px;
    border: 4px solid gold;
    margin: 10px;
    border-radius: 22px;
    background-repeat: no-repeat;
`
export const H1 = styled.div`
   display: flex;
   justify-content: center;
   color: gold;
   align-items: center;
   font-size: 15px;
   text-shadow: 1px 1px 1px #000;

`