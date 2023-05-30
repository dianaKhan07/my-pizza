import {
    PizzaWrapper,
    ImgBlock,
    NameBlock,
    DescBlock,
    FooterBlock,
    Price,
    CartButton,
    ModalWrapper

} from './style'
import { useState } from 'react';
import { Button, Modal } from 'antd';
const PizzaItem = ({data}) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
      setIsModalOpen(true);
    };
    const handleOk = () => {
      setIsModalOpen(false);
    };
    const handleCancel = () => {
      setIsModalOpen(false);
    };
    return (
            <>
             <PizzaWrapper onClick={showModal}>
                <ImgBlock src={data.img}/>
                <NameBlock>
                    {data.name}
                </NameBlock>
                <DescBlock>
                    {data.desk}
                </DescBlock>
                <FooterBlock>
                    <Price>
                        {data.price}  ₽
                    </Price>
                    <CartButton>
                        в корзину
                    </CartButton>
                </FooterBlock>
            </PizzaWrapper>
        <Modal open={isModalOpen} onOk={handleOk}
           onCancel={handleCancel} width="50%"
           cancelButtonProps={{
            style: {
                display: "none"
            },
          }}
          okButtonProps={{
            style: {
                backgroundColor: "gold"
            }
          }}>
            <ModalWrapper>
                <ImgBlock src={data.img}/>
                <div>
                    <NameBlock>
                        {data.name}
                    </NameBlock>
                    <DescBlock>
                        {data.desk}
                    </DescBlock>
                </div>
            </ModalWrapper>
      </Modal>
        </>
    )
}
export default PizzaItem;