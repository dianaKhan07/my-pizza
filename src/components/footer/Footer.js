import { Container, FooterBlockDodo, FooterProfit, FooterPart, FooterMini} from './style';

const Footer =()=> {

    return(
       <Container>
        <FooterBlockDodo>
          <div>
            <h4>Додо Пицца</h4>
            <p>о нас</p>
            <p>додо-книга</p>
            <p>блог «Сила ума»</p>
            <p>додо ИС</p>
         </div>
         <div>
            <h4>Работа</h4>
            <p>в пиццерии</p>
         </div>
         <div>
            <h4>Партнерам</h4>
            <p>франшиза</p>
            <p>инвестиции</p>
            <p>поставщикам</p>
            <p>предложить помещение</p>
         </div>
         <div>
            <h4>Это интересно</h4>
            <p>почему мы готовим без перчаток?</p>
            <p>экскурсии и мастер-классы</p>
            <p>корпоративные заказы</p>
         </div>
        </FooterBlockDodo>
        <FooterProfit>
            <div>
                <h1>5 573 114 911 ₽</h1>
                <p>Выручка российской сети в этом месяце.
                 <br/> В прошлом — 5 358 434 859 ₽</p>
            </div>
            <div>
                <h1>923 пиццерии</h1>
                <p>в 17 странах, от Великобритании 
                   <br/> до Нигерии</p>
            </div>
        </FooterProfit>
        <FooterPart>
            <h4>My pizza © 2023</h4>
            <h4>Правовая информация</h4>
            <h4>Калорийность и состав</h4>
            <h4>Помощь</h4>
        </FooterPart>
        <FooterMini>
            <p>
            © 2023 ООО “Додо Франчайзинг” <br/>
            ОГРН 1131101001844, ИНН 1101140415 <br/>
            167001, Республика Коми, г. Сыктывкар, Октябрьский проспект, д. 16 <br/>
            </p>
        </FooterMini>
       </Container>
    )
}
export default Footer;