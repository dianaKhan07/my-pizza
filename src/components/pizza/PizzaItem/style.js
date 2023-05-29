import { Button } from "antd"
import styled from "styled-components"

export const PizzaWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    cursor: pointer;
`
export const ImgBlock = styled.img`
    width: 100%;
`
export const NameBlock = styled.div`
    font-size: 20px;
`
export const DescBlock = styled.div`
    padding-top: 1rem;
    padding-bottom: 1 rem;
    color: grey;
    padding-top: 20px;
`
export const FooterBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 20px;
`
export const Price = styled.div`
    font-weigh: bold;
`
export const CartButton = styled(Button)`
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
export const ModalWrapper = styled.div`
    display: flex;
    justify-content: space-between;

    & img {
        width: 50%;
    }
`