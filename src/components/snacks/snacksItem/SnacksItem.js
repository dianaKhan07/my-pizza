import {
    SnacksWrapper,
    ImgBlock,
    NameBlock,
    DescBlock,
    FooterBlock,
    Price,
    CartButton,

} from './style'
const SnacksItem = ({snacks}) => {

    return (
        <div>
             <SnacksWrapper>
                <ImgBlock src={snacks.img}/>
                <NameBlock>
                    {snacks.name}
                </NameBlock>
                <DescBlock>
                    {snacks.desk}
                </DescBlock>
                <FooterBlock>
                    <Price>
                       от {snacks.price}  ₽
                    </Price>
                    <CartButton>
                        в корзину
                    </CartButton>
                </FooterBlock>
            </SnacksWrapper>
        </div>
    )
}
export default SnacksItem;