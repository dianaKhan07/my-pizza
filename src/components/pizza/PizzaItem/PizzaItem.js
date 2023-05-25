import {
    PizzaWrapper,
    ImgBlock,
    NameBlock,
    DescBlock,
    FooterBlock,
    Price,
    CartButton,

} from './style'
const PizzaItem = ({pizza}) => {

    return (
        <div>
             <PizzaWrapper>
                <ImgBlock src={pizza.img}/>
                <NameBlock>
                    {pizza.name}
                </NameBlock>
                <DescBlock>
                    {pizza.desk}
                </DescBlock>
                <FooterBlock>
                    <Price>
                       от {pizza.price}  ₽
                    </Price>
                    <CartButton>
                        в корзину
                    </CartButton>
                </FooterBlock>
            </PizzaWrapper>
        </div>
    )
}
export default PizzaItem;