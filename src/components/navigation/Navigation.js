import { Anchor } from "antd"
import { NavItems } from "../../consts"
import { ButtonCart, NavigationWrapper,
RighNavigation,Logo } from "./styles"

const Navigation =()=> {
    return (
        <NavigationWrapper>
        <RighNavigation>
            <Logo>
                my pizza
            </Logo>
           <Anchor
           affix={false}
           direction="horizontal"
           items={NavItems}
           className="linkNavigation"/>     
        </RighNavigation>
        <ButtonCart>корзина</ButtonCart>
        </NavigationWrapper>
    )
}
export default Navigation