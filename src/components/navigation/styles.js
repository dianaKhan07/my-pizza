import { Button } from "antd";
import styled from "styled-components";

export const NavigationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  padding-bottom: 1rem;

  position: sticky;
  width: 100%;
  top: 0px;
  z-index: 10;
  background-color: white;

  // &::before{
  //   content: "";
  //   position: absolute;
  //   left: 0px;
  //   top: 0px;
  //   width: 100%;
  //   height: 100%;
  //   box-shadow: rgba(6,5,50,0.1) 0px 0px 30px;
  // }
`
export const Logo = styled.div`
font-size: 20px;

`
export const ButtonCart = styled(Button)`
color: white;
background-color: gold;

&:hover{
    background-color: #DE138;
    border-color: #DE138!important;
}
&:hover span{
  color: white;
}
`
export const RighNavigation = styled.div`
display: flex;
gap: 10px;
align-items: center;

`