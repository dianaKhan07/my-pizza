import { HeaderWrapper,
        HeaderRighBlock,
        Logo,
        Destination,
        Call,
        HeaderLeftBlock,
        Coins,
        SignIn } from "./style"
import {StarFilled, DollarOutlined} from "@ant-design/icons"
const Header =()=> {
    return (
        <HeaderWrapper>
            <HeaderRighBlock>
                <Logo>my pizza</Logo>
                <Destination>
                    <div>доставка пиццы Александров</div>
                    <span><div>30 мин, 4.91</div>
                    <StarFilled style={{color:'gold'}}/>
                    </span>
                </Destination>
            <Call>
                <div>8 800 302-00-60</div>
                <div>звонок бесплатный</div>
            </Call>
            </HeaderRighBlock>
            <HeaderLeftBlock>
                <Coins>
                <DollarOutlined 
                style={{fontSize: '25px'}}/>
                 <span>  коины </span> 
                </Coins>
                <SignIn>
                    войти
                </SignIn>
            </HeaderLeftBlock>
        </HeaderWrapper>

    )
}
export default Header