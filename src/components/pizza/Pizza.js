
import { PizzaData,
        DessertsData, 
        SnacksData } from '../../consts';
import PizzaItem from './PizzaItem/PizzaItem';
import {PizzaContainer, Title, Container} from './style';

const Product=({id,name})=> {

    return(
        <Container id={id}>
            <Title>
                {name}
            </Title>
            <PizzaContainer>
            {
                id === "pizzas" ?
                PizzaData.map((pizza, index)=>(
                    <PizzaItem key={index} data={pizza}/>
                )) :
                id === "desserts" ?
                DessertsData.map((desserts, index)=>(
                    <PizzaItem key={index} data={desserts}/>
                )) :
                id === "snacks" ?
                SnacksData.map((snacks, index)=>(
                    <PizzaItem key={index} data={snacks}/>
                )) : (
                    <div>
                    ничего не найдено
                    </div>
                )
            }
            </PizzaContainer>
        </Container>
    )
}
export default Product;