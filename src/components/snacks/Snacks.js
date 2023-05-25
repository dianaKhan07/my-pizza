
import { SnacksData } from '../../consts';
import SnacksItem from './snacksItem/SnacksItem'
import {SnacksContainer, Title, Container} from './style';
const Snacks=()=> {
    return(
        <Container id="snacks">
            <Title>
                Закуски
            </Title>
            <SnacksContainer>
            {
               SnacksData.map((snacks, index)=>(
                    <SnacksItem key={index} snacks={snacks}/>
                ))
            }
            </SnacksContainer>
        </Container>
    )
}
export default Snacks;